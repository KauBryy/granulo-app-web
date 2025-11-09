import { useEffect, useState } from "react";
import dashboardImg from "@/assets/dashboard-screenshot.jpg";
import historiqueImg from "@/assets/historique-screenshot.jpg";
import statistiquesImg from "@/assets/statistiques-screenshot.jpg";
import { ShoppingCart, Flame, Calendar, BarChart3, Clock, Euro } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const screenshots = [
  {
    image: dashboardImg,
    title: "Suivi des achats",
    description: "Enregistrez tous vos achats de granulés avec le prix, la quantité et les notes.",
    icon: ShoppingCart,
    color: "blue",
  },
  {
    image: historiqueImg,
    title: "Gestion des brûlages",
    description: "Notez chaque sac brûlé et suivez votre consommation quotidienne facilement.",
    icon: Flame,
    color: "orange",
  },
  {
    image: dashboardImg,
    title: "Période de chauffe personnalisable",
    description: "Définissez votre propre période de chauffage pour des statistiques adaptées.",
    icon: Calendar,
    color: "blue",
  },
  {
    image: dashboardImg,
    title: "Estimation du stock",
    description: "Prévoyez quand vous allez manquer de granulés grâce à l'estimation automatique.",
    icon: Clock,
    color: "orange",
  },
  {
    image: statistiquesImg,
    title: "Statistiques détaillées",
    description: "Analysez vos habitudes de consommation et comparez d'une année à l'autre.",
    icon: BarChart3,
    color: "blue",
  },
  {
    image: dashboardImg,
    title: "Suivi des dépenses",
    description: "Gardez un œil sur vos dépenses totales et le coût moyen de vos granulés.",
    icon: Euro,
    color: "orange",
  },
];

const Screenshots = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl text-foreground">
            Toutes les fonctionnalités<br />pour gérer vos granulés
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Découvrez l'application en images
          </p>
        </div>
        
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {screenshots.map((screenshot, index) => {
              const Icon = screenshot.icon;
              const bgColor = screenshot.color === "blue" ? "bg-blue-light" : "bg-orange-light";
              const iconColor = screenshot.color === "blue" ? "text-blue-purchase" : "text-orange-burn";
              
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="group flex flex-col items-center">
                      <div className="mb-6 overflow-hidden rounded-3xl shadow-medium transition-all duration-500 hover:shadow-xl hover:scale-105">
                        <img 
                          src={screenshot.image} 
                          alt={screenshot.title}
                          className="h-auto w-full max-w-xs object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className={`mb-4 inline-flex rounded-2xl ${bgColor} p-4 transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className={`h-7 w-7 ${iconColor}`} />
                      </div>
                      <h3 className="mb-2 text-2xl font-semibold text-foreground text-center">
                        {screenshot.title}
                      </h3>
                      <p className="max-w-sm text-center text-muted-foreground">
                        {screenshot.description}
                      </p>
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
    </section>
  );
};

export default Screenshots;
