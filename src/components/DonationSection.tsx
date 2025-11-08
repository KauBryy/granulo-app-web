import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const donationOptions = [
  { amount: 1, description: "Aide à couvrir deux mois de boîte mail pro" },
  { amount: 5, description: "C'est un sac de granulés pour le chauffage" },
  { amount: 10, description: "Aide à payer le site web et le nom de domaine" },
];

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const { toast } = useToast();

  const handleDonation = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (amount && amount > 0) {
      toast({
        title: "Merci beaucoup pour votre soutien !",
        description: "Chaque geste compte et aide Granulo à s'améliorer.",
      });
      // Ici, vous pourrez intégrer un système de paiement comme Stripe ou PayPal
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-card to-accent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Soutenez Granulo
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Le projet évolue petit à petit grâce à vos retours et idées. Chaque amélioration a un coût (Firebase, hébergement, nom de domaine, etc.). Votre soutien nous aide à continuer !
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-8">
          {donationOptions.map((option) => (
            <button
              key={option.amount}
              onClick={() => {
                setSelectedAmount(option.amount);
                setCustomAmount("");
              }}
              className={`rounded-2xl border-2 p-6 text-left transition-all hover:scale-105 ${
                selectedAmount === option.amount
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <div className="text-3xl font-bold text-primary mb-2">{option.amount} €</div>
              <p className="text-sm text-muted-foreground">{option.description}</p>
            </button>
          ))}
        </div>

        <div className="rounded-2xl border-2 border-border bg-card p-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Input
                type="number"
                min="1"
                step="0.01"
                placeholder="Autre montant"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="flex-1"
              />
              <span className="text-lg font-semibold text-foreground">€</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Merci à vous, chaque geste compte et aide Granulo à s'améliorer
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={handleDonation}
            disabled={!selectedAmount && !customAmount}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-6"
          >
            <Heart className="mr-2 h-5 w-5" />
            Faire un don
          </Button>
          
          <p className="mt-6 text-sm text-muted-foreground italic">
            Merci beaucoup pour votre soutien, qui fait avancer Granulo !
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
