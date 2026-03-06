import kaubryLogo from "@/assets/kaubry-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-white dark:bg-[#1A1A1A] py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-4 hover:opacity-80 transition-opacity mb-6"
          >
            <img src="/logo-granulo.png" alt="Granulo" className="h-16 w-16 rounded-2xl shadow-sm" />
            <span className="text-3xl font-extrabold tracking-tight uppercase text-foreground">Granulo</span>
          </Link>

          <p className="text-lg text-muted-foreground max-w-lg mb-12 font-medium">
            Créée par un petit développeur, à l'écoute de vos retours pour faire évoluer l'appli
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-24 mb-12">
            <div className="space-y-4">
              <h4 className="font-bold text-foreground text-lg">Application Mobile</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://auth.granulo.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand transition-colors text-base"
                >
                  Documents légaux
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-foreground text-lg">Site Web</h4>
              <div className="flex flex-col gap-3">
                <Link
                  to="/privacy-website"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-brand transition-colors text-base"
                >
                  Politique de confidentialité
                </Link>
                <Link
                  to="/legal-notice"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-brand transition-colors text-base"
                >
                  Mentions légales
                </Link>
                <a
                  href="mailto:contact@granulo.app"
                  className="text-muted-foreground hover:text-brand transition-colors text-base"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-foreground text-lg">Communauté</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.facebook.com/groups/2980169345517291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand transition-colors flex items-center gap-2 justify-center sm:justify-start text-base"
                >
                  <i className="fab fa-facebook"></i>
                  <span>Groupe Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full pt-8 border-t border-border/50 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Granulo. Tous droits réservés.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground/80">Propulsé par</span>
              <a href="https://kaubry.fr" target="_blank" rel="noopener noreferrer" className="bg-muted dark:bg-white/5 hover:bg-muted/80 dark:hover:bg-white/10 p-1.5 rounded-lg transition-all duration-300 group flex items-center gap-2 border border-border/50 hover:border-brand/20">
                <img src={kaubryLogo} alt="KauBry App's" className="h-6 w-auto object-contain" />
                <span className="font-bold text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">KauBry App's</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};


export default Footer;
