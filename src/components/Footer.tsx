import granuloLogo from "@/assets/granulo-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={granuloLogo} alt="Granulo" className="h-10 w-10" />
            <span className="text-xl font-semibold text-foreground">Granulo</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
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
