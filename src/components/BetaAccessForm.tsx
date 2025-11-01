import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.object({
  name: z.string().trim().min(1, { message: "Le nom est requis" }).max(100, { message: "Le nom doit faire moins de 100 caractères" }),
  email: z.string().trim().email({ message: "Email invalide" }).max(255, { message: "L'email doit faire moins de 255 caractères" }),
});

const BetaAccessForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = emailSchema.parse({ name, email });
      setIsSubmitting(true);

      // Envoyer la demande par email (WhatsApp ou autre système)
      const message = `Nouvelle demande d'accès beta:\n\nNom: ${validatedData.name}\nEmail: ${validatedData.email}`;
      const whatsappUrl = `https://wa.me/33YOUR_NUMBER?text=${encodeURIComponent(message)}`;
      
      // Pour l'instant, on affiche juste un toast de succès
      toast({
        title: "Demande envoyée !",
        description: "Vous recevrez bientôt un email d'invitation au test.",
      });

      setName("");
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erreur de validation",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue. Veuillez réessayer.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mb-8 w-full max-w-md">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-white mb-4">
          Demander l'accès au test
        </h3>
        <p className="text-white/80 text-sm mb-4">
          L'application est en test fermé. Laissez-nous votre email pour recevoir une invitation.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="beta-name" className="text-white text-sm">
              Nom
            </Label>
            <Input
              id="beta-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              required
              maxLength={100}
            />
          </div>
          <div>
            <Label htmlFor="beta-email" className="text-white text-sm">
              Email (compte Play Store)
            </Label>
            <Input
              id="beta-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              required
              maxLength={255}
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-primary hover:bg-white/90"
          >
            {isSubmitting ? "Envoi en cours..." : "Demander l'accès"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BetaAccessForm;
