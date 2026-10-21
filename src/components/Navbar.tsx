import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import granuloLogo from "@/assets/granulo-logo.jpg";
import LanguageSelector from "@/components/LanguageSelector";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#screenshots", label: t.nav.screenshots },
    { href: "#spotlight", label: t.nav.aiAndMap },
    { href: "#donation-section", label: t.nav.support },
    { href: "#contact", label: t.nav.contact },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft py-3"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 sm:gap-3 shrink-0 group"
        >
          <div className="relative shrink-0">
            <img
              src={granuloLogo}
              alt="Granulo"
              className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 rounded-full drop-shadow-md transition-transform duration-300 group-hover:scale-105 object-cover"
            />
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 sm:h-3.5 sm:w-3.5 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-background">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            </span>
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xl md:text-2xl font-black tracking-tight text-foreground whitespace-nowrap">
                Granulo
              </span>
              <span className="hidden sm:inline-block text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-secondary/15 text-secondary border border-secondary/20">
                2026
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-card/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/60 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-semibold px-3.5 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: Language Switcher & Download CTA */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <LanguageSelector variant="header" />

          {/* Mobile Download Button (redirects via /download -> OneLink -> App Store/Google Play) */}
          <Button
            size="sm"
            className="inline-flex sm:hidden rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-3 py-1.5 text-xs shadow-soft transition-all hover:scale-105 shrink-0"
            asChild
          >
            <a
              href="/download"
              className="flex items-center gap-1"
            >
              <span>{t.nav.download}</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </Button>

          {/* Desktop Download Button: smooth scrolls down to #download section with both stores */}
          <Button
            size="sm"
            className="hidden sm:inline-flex rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-4 text-xs shadow-soft transition-all hover:scale-105 shrink-0"
            asChild
          >
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-1.5"
            >
              <span>{t.nav.download}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-xl text-foreground hover:bg-muted transition-colors shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-background/95 backdrop-blur-2xl border-b border-border shadow-strong p-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-semibold px-4 py-3 rounded-2xl hover:bg-muted text-foreground transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-muted-foreground">→</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
