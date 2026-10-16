import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, MailCheck } from "lucide-react";

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim() || formData.name.length > 100) {
      errs.name = t.contact.errName;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = t.contact.errEmail;
    }
    if (!formData.message.trim() || formData.message.length > 1000) {
      errs.message = t.contact.errMessage;
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      return;
    }

    setIsSubmitting(true);

    const mailtoLink = `mailto:contact@granulo.app?subject=${encodeURIComponent(
      `Contact de ${formData.name}`
    )}&body=${encodeURIComponent(
      `De: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;

    toast({
      title: t.contact.successTitle,
      description: t.contact.successDesc,
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="rounded-[36px] bg-card p-8 md:p-12 shadow-medium border border-border">
          <div className="text-center mb-10">
            <h2 className="mb-3 text-3xl font-black text-foreground md:text-4xl tracking-tight">
              {t.contact.title}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-semibold text-xs uppercase tracking-wider">
                {t.contact.nameLabel}
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.contact.namePlaceholder}
                className={`rounded-xl py-5 ${errors.name ? "border-destructive ring-1 ring-destructive" : ""}`}
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold text-xs uppercase tracking-wider">
                {t.contact.emailLabel} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t.contact.emailPlaceholder}
                required
                className={`rounded-xl py-5 ${errors.email ? "border-destructive ring-1 ring-destructive" : ""}`}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              <p className="text-[11px] text-muted-foreground">{t.contact.emailHelp}</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-semibold text-xs uppercase tracking-wider">
                {t.contact.messageLabel} <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t.contact.messagePlaceholder}
                rows={5}
                required
                className={`rounded-2xl ${errors.message ? "border-destructive ring-1 ring-destructive" : ""}`}
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
            </div>

            <p className="text-xs text-muted-foreground">{t.contact.privacyText}</p>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base py-6 rounded-2xl shadow-soft hover:shadow-medium transition-all"
            >
              <Send className="h-4 w-4 mr-2" />
              <span>{isSubmitting ? t.contact.submittingBtn : t.contact.submitBtn}</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
