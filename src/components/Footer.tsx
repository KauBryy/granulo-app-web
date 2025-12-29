import granuloLogo from "@/assets/granulo-logo.png";
import kaubryLogo from "@/assets/kaubry-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={granuloLogo} alt="Granulo" className="h-16 w-16 rounded-full" />
            <span className="text-2xl font-bold text-foreground">Granulo</span>
          </Link>

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

            <div className="space-y-2">
              <p className="font-semibold text-foreground">Communauté</p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.facebook.com/groups/2980169345517291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 justify-center sm:justify-start"
                >
                  <i className="fab fa-facebook"></i>
                  <span>Groupe Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Granulo. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-muted-foreground/80">Propulsé par</span>
            <a href="https://kaubry.fr" target="_blank" rel="noopener noreferrer" className="bg-muted hover:bg-muted/80 p-1.5 rounded-lg transition-all duration-300 group flex items-center gap-2 border border-border/50 hover:border-primary/20">
              <img src={kaubryLogo} alt="KauBry App's" className="h-6 w-auto object-contain" />
              <span className="font-bold text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">KauBry App's</span>
            </a>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
