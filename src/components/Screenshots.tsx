import dashboardImg from "@/assets/dashboard-screenshot.jpg";
import historiqueImg from "@/assets/historique-screenshot.jpg";
import statistiquesImg from "@/assets/statistiques-screenshot.jpg";

const screenshots = [
  {
    image: dashboardImg,
    title: "Dashboard",
    description: "Visualisez votre stock actuel, vos achats, brûlages et l'estimation de fin de stock en un coup d'œil.",
  },
  {
    image: historiqueImg,
    title: "Historique",
    description: "Gardez une trace claire de tous vos achats et brûlages avec des filtres intuitifs.",
  },
  {
    image: statistiquesImg,
    title: "Statistiques",
    description: "Analysez et comparez vos habitudes de consommation d'une année à l'autre.",
  },
];

const Screenshots = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl text-foreground">
            Une interface claire<br />et intuitive
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Découvrez l'application en images
          </p>
        </div>
        
        <div className="grid gap-8 md:gap-12 lg:grid-cols-3">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center"
            >
              <div className="mb-6 overflow-hidden rounded-3xl shadow-medium transition-all duration-500 hover:shadow-xl hover:scale-105">
                <img 
                  src={screenshot.image} 
                  alt={screenshot.title}
                  className="h-auto w-full max-w-xs object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-foreground">
                {screenshot.title}
              </h3>
              <p className="max-w-sm text-center text-muted-foreground">
                {screenshot.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
