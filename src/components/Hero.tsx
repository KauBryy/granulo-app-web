import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Flame, TrendingUp, BarChart3 } from "lucide-react";
import granuloLogo from "@/assets/granulo-logo.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const features = [
  {
    icon: ShoppingCart,
    title: "Suivi des achats",
    description: "Enregistrez tous vos achats de granulés avec le prix, la quantité et les notes.",
    gradient: "from-blue-light to-blue-purchase/20",
    iconBg: "bg-blue-purchase/20",
    iconColor: "text-blue-purchase",
  },
  {
    icon: Flame,
    title: "Gestion des brûlages",
    description: "Notez chaque sac brûlé et suivez votre consommation quotidienne facilement.",
    gradient: "from-orange-light to-orange-burn/20",
    iconBg: "bg-orange-burn/20",
    iconColor: "text-orange-burn",
  },
  {
    icon: TrendingUp,
    title: "Période de chauffe personnalisable",
    description: "Définissez votre propre période de chauffage pour des statistiques adaptées.",
    gradient: "from-card to-card",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Estimation du stock",
    description: "Prévoyez quand vous allez manquer de granulés grâce à l'estimation automatique.",
    gradient: "from-card to-card",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: BarChart3,
    title: "Statistiques détaillées",
    description: "Analysez vos habitudes de consommation et comparez d'une année à l'autre.",
    gradient: "from-card to-card",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: ShoppingCart,
    title: "Suivi des dépenses",
    description: "Gardez un œil sur vos dépenses totales et le coût moyen de vos granulés.",
    gradient: "from-blue-light to-blue-purchase/20",
    iconBg: "bg-blue-purchase/20",
    iconColor: "text-blue-purchase",
  },
];

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 animate-float">
            <img 
              src={granuloLogo} 
              alt="Granulo Logo" 
              className="h-32 w-32 rounded-full drop-shadow-2xl md:h-40 md:w-40"
            />
          </div>
          
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl lg:text-7xl animate-fade-in">
            Suivez votre consommation<br />de granulés
          </h1>
          
          <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Une application pensée pour vous, évolutive et simple à vivre !<br />
            Gérez votre stock, vos achats et analysez vos habitudes de chauffage.
          </p>
          
          <div className="mb-12 flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
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
          </div>
        
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          >
            <CarouselContent>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <div className={`flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br ${feature.gradient} border border-border shadow-soft h-full`}>
                        <div className={`rounded-2xl ${feature.iconBg} p-4`}>
                          <Icon className={`h-8 w-8 ${feature.iconColor}`} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground text-center">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground text-center">{feature.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;
