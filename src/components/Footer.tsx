import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import granuloLogo from "@/assets/granulo-logo.jpg";
import kaubryLogo from "@/assets/kaubry-logo.png";
import LanguageSelector from "@/components/LanguageSelector";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-8 text-center max-w-4xl mx-auto">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 hover:opacity-85 transition-opacity group"
          >
            <img
              src={granuloLogo}
              alt="Granulo"
              className="h-14 w-14 rounded-full drop-shadow-md transition-transform group-hover:scale-105"
            />
            <span className="text-2xl font-black tracking-tight text-foreground">
              Granulo
            </span>
          </Link>

          {/* Description */}
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            {t.footer.creator}
          </p>

          {/* Language selector in footer */}
          <div className="flex items-center gap-2">
            <LanguageSelector variant="pill" />
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-sm pt-6 border-t border-border/60 w-full text-center sm:text-left">
            <div className="space-y-2.5">
              <p className="font-bold text-foreground uppercase tracking-wider text-xs">
                {t.footer.mobileApp}
              </p>
              <div className="flex flex-col gap-1.5">
                <Link
                  to="/privacy-app"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.privacyApp}
                </Link>
                <Link
                  to="/terms-app"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.termsApp}
                </Link>
                <a
                  href="https://auth.granulo.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  Portail utilisateur & Légal
                </a>
              </div>
            </div>

            <div className="space-y-2.5">
              <p className="font-bold text-foreground uppercase tracking-wider text-xs">
                {t.footer.website}
              </p>
              <div className="flex flex-col gap-1.5">
                <Link
                  to="/privacy-website"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.privacyWebsite}
                </Link>
                <Link
                  to="/legal-notice"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.legalNotice}
                </Link>
                <Link
                  to="/home-assistant"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  Guide Home Assistant
                </Link>
              </div>
            </div>

            <div className="space-y-2.5">
              <p className="font-bold text-foreground uppercase tracking-wider text-xs">
                Communauté
              </p>
              <div className="flex flex-col gap-1.5">
                <a
                  href="https://www.facebook.com/groups/2980169345517291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-blue-500 transition-colors inline-flex items-center gap-1.5 justify-center sm:justify-start"
                >
                  <span>Groupe Facebook</span>
                </a>
                <a
                  href="mailto:contact@granulo.app"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@granulo.app
                </a>
              </div>
            </div>
          </div>

          {/* Powered by KauBry App's */}
          <div className="w-full pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Granulo. {t.footer.rightsReserved}
            </p>
            <div className="flex items-center gap-2">
              <span>Propulsé par</span>
              <a
                href="https://kaubry.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted hover:bg-muted/80 px-2.5 py-1 rounded-xl transition-all flex items-center gap-2 border border-border"
              >
                <img src={kaubryLogo} alt="KauBry App's" className="h-4 w-auto object-contain" />
                <span className="font-bold text-foreground">KauBry App's</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
