import { Button } from "@/components/ui/button";
import { Apple, Info } from "lucide-react";

const iOSInfoSection = () => {
  return (
    <section className="py-16 bg-muted/50 relative">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-green-light/20 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="rounded-3xl bg-card/50 backdrop-blur-sm p-8 md:p-12 border border-border text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
            <Apple className="h-8 w-8 text-muted-foreground" />
          </div>
          
          <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Bientôt sur iOS
          </h3>
          
          <Button
            size="lg"
            disabled
            className="mb-6 bg-muted text-muted-foreground cursor-not-allowed hover:bg-muted text-sm sm:text-base"
          >
            <Apple className="mr-2 h-5 w-5 flex-shrink-0" />
            <span className="whitespace-normal">Disponible bientôt sur l'App Store</span>
          </Button>
          
          <div className="flex items-start gap-3 text-left bg-accent/50 rounded-xl p-4">
            <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Le développement iOS implique des coûts supplémentaires (licence Apple à 100 € par an). 
              En fonction du succès de la version Android, je pourrai prendre en charge ces frais. 
              J'ai choisi Flutter pour faciliter ce futur lancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default iOSInfoSection;
