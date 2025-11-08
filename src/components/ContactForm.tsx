import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom ne doit pas dépasser 100 caractères"),
  email: z.string().trim().email("Veuillez entrer une adresse e-mail valide").max(255, "L'email ne doit pas dépasser 255 caractères"),
  message: z.string().trim().min(1, "Le message est requis").max(1000, "Le message ne doit pas dépasser 1000 caractères"),
});

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const validation = contactSchema.safeParse(formData);
    
    if (!validation.success) {
      const fieldErrors: { name?: string; email?: string; message?: string } = {};
      validation.error.errors.forEach((error) => {
        const field = error.path[0] as keyof typeof fieldErrors;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    const mailtoLink = `mailto:contact@granulo.app?subject=${encodeURIComponent(`Contact de ${formData.name}`)}&body=${encodeURIComponent(`De: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Merci pour votre message !",
      description: "Votre client mail va s'ouvrir pour envoyer votre message.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="rounded-3xl bg-card p-8 md:p-12 shadow-medium border border-border">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-center">
            Contactez-nous
          </h2>
          
          <p className="mb-8 text-center text-muted-foreground">
            Vous souhaitez nous contacter pour signaler un bug, une suggestion, nous remercier ou pour toute autre raison ?
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Nom
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Votre nom"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Adresse e-mail <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="votre@email.com"
                required
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Veuillez utiliser votre propre adresse e-mail pour nous permettre de vous répondre correctement. Toute utilisation frauduleuse n'entraînera aucune prise en compte.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Message <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Votre message..."
                rows={6}
                required
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message}</p>
              )}
            </div>

            <p className="text-xs text-muted-foreground">
              Nous respectons votre vie privée, vos données ne seront jamais transmises à un tiers.
            </p>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer mon message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
