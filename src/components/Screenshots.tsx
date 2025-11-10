import dashboardImg from "@/assets/dashboard-screenshot.jpg";
import historiqueImg from "@/assets/historique-screenshot.jpg";
import statistiquesImg from "@/assets/statistiques-screenshot.jpg";

const screenshots = [
  {
    image: dashboardImg,
    title: "Dashboard",
  },
  {
    image: historiqueImg,
    title: "Historique",
  },
  {
    image: statistiquesImg,
    title: "Statistiques",
  },
];

const Screenshots = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30 relative">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-card to-transparent pointer-events-none" />
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
              <div className="overflow-hidden rounded-3xl shadow-medium transition-all duration-500 hover:shadow-xl hover:scale-105">
                <img 
                  src={screenshot.image} 
                  alt={screenshot.title}
                  className="h-auto w-full max-w-xs object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
