import { Button } from "@/components/ui/button";
import granuloLogo from "@/assets/granulo-logo.png";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img 
            src={granuloLogo} 
            alt="Granulo" 
            className="mb-8 h-24 w-24 rounded-full animate-float drop-shadow-2xl"
          />
          
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Prêt à optimiser votre<br />consommation de granulés ?
          </h2>
          
          <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Téléchargez l'application gratuitement et commencez à suivre<br />
            votre consommation dès aujourd'hui.
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-medium transition-transform hover:scale-105 rounded-2xl"
            asChild
          >
            <a 
              href="https://play.google.com/store/apps/details?id=com.kaubry.granulo.granulo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Télécharger sur le Play Store
            </a>
          </Button>
          
          <div className="mt-12 flex flex-col items-center gap-4 text-sm text-muted-foreground">
            <p>Disponible sur Android</p>
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Synchronisation cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
