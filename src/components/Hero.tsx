import { Button } from "@/components/ui/button";
import { ShoppingCart, Flame, TrendingUp, BarChart3 } from "lucide-react";
import granuloLogo from "@/assets/granulo-logo.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-purple-500 to-secondary py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 animate-float">
            <img 
              src={granuloLogo} 
              alt="Granulo Logo" 
              className="h-32 w-32 rounded-full drop-shadow-2xl md:h-40 md:w-40"
            />
          </div>
          
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl animate-fade-in">
            Suivez votre consommation<br />de granulés
          </h1>
          
          <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Une application pensée pour vous, évolutive et simple à vivre !<br />
            Gérez votre stock, vos achats et analysez vos habitudes de chauffage.
          </p>
          
          <div className="mb-12 flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-medium transition-transform hover:scale-105"
              asChild
            >
              <a 
                href="https://play.google.com/store" 
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
          </div>
        
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <ShoppingCart className="h-8 w-8" />
              </div>
              <span className="text-sm font-medium">Suivi des achats</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <Flame className="h-8 w-8" />
              </div>
              <span className="text-sm font-medium">Historique des brûlages</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <TrendingUp className="h-8 w-8" />
              </div>
              <span className="text-sm font-medium">Estimation du stock</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <BarChart3 className="h-8 w-8" />
              </div>
              <span className="text-sm font-medium">Statistiques détaillées</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
