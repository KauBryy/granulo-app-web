import granuloLogo from "@/assets/granulo-logo.png";
import { Link } from "react-router-dom";

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
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Application Mobile</p>
              <div className="flex flex-col gap-2">
                <Link 
                  to="/privacy-app" 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Politique de confidentialité
                </Link>
                <Link 
                  to="/terms-app" 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Conditions d'utilisation
                </Link>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Site Web</p>
              <div className="flex flex-col gap-2">
                <Link 
                  to="/privacy-website" 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Politique de confidentialité
                </Link>
                <Link 
                  to="/legal-notice" 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mentions légales
                </Link>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Granulo. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
