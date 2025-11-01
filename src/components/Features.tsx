import { Card } from "@/components/ui/card";
import { ShoppingCart, Flame, Calendar, BarChart3, Clock, Euro } from "lucide-react";
import heroPresentation from "@/assets/hero-presentation.jpg";

const features = [
  {
    icon: ShoppingCart,
    title: "Suivi des achats",
    description: "Enregistrez tous vos achats de granulés avec le prix, la quantité et les notes.",
    color: "blue",
  },
  {
    icon: Flame,
    title: "Gestion des brûlages",
    description: "Notez chaque sac brûlé et suivez votre consommation quotidienne facilement.",
    color: "orange",
  },
  {
    icon: Calendar,
    title: "Période de chauffe personnalisable",
    description: "Définissez votre propre période de chauffage pour des statistiques adaptées.",
    color: "blue",
  },
  {
    icon: Clock,
    title: "Estimation du stock",
    description: "Prévoyez quand vous allez manquer de granulés grâce à l'estimation automatique.",
    color: "orange",
  },
  {
    icon: BarChart3,
    title: "Statistiques détaillées",
    description: "Analysez vos habitudes de consommation et comparez d'une année à l'autre.",
    color: "blue",
  },
  {
    icon: Euro,
    title: "Suivi des dépenses",
    description: "Gardez un œil sur vos dépenses totales et le coût moyen de vos granulés.",
    color: "orange",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl text-foreground">
            Toutes les fonctionnalités<br />pour gérer vos granulés
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Granulo vous accompagne au quotidien pour optimiser votre chauffage<br />
            et maîtriser votre budget.
          </p>
          
          <div className="mt-12 flex justify-center">
            <img 
              src={heroPresentation} 
              alt="Application Granulo en contexte avec un poêle à granulés" 
              className="rounded-3xl shadow-2xl max-w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const bgColor = feature.color === "blue" ? "bg-blue-light" : "bg-orange-light";
            const iconColor = feature.color === "blue" ? "text-primary" : "text-secondary";
            
            return (
              <Card 
                key={index}
                className="group p-6 transition-all duration-300 hover:shadow-medium hover:-translate-y-1 border-border/50 bg-card"
              >
                <div className={`mb-4 inline-flex rounded-2xl ${bgColor} p-3 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`h-6 w-6 ${iconColor}`} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
