import granuloLogo from "@/assets/granulo-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <img src={granuloLogo} alt="Granulo" className="h-16 w-16 rounded-full" />
            <span className="text-2xl font-bold text-foreground">Granulo</span>
          </div>
          
          <p className="text-sm text-muted-foreground max-w-md">
            Créée par un petit développeur, à l'écoute de vos retours pour faire évoluer l'appli
          </p>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Granulo. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
