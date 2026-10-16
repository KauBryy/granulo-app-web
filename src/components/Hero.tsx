import React from "react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Flame,
  Heart,
  Sparkles,
  Layers,
  ChevronRight,
  ShieldCheck,
  Star,
} from "lucide-react";

// Hero dashboard screenshots per language
import dashboardFr from "@/assets/hero/dashboard-fr.jpg";
import dashboardEn from "@/assets/hero/dashboard-en.jpg";
import dashboardIt from "@/assets/hero/dashboard-it.jpg";
import dashboardDe from "@/assets/hero/dashboard-de.jpg";
import toastyMascot from "@/assets/toasty.png";

const heroScreenshots: Record<Language, string> = {
  fr: dashboardFr,
  en: dashboardEn,
  it: dashboardIt,
  de: dashboardDe,
};

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  const currentScreenshot = heroScreenshots[language] || dashboardFr;

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-bl from-blue-500/15 via-indigo-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-gradient-to-t from-orange-500/15 to-transparent blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Version 2026 Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-orange-600 dark:text-orange-400 backdrop-blur-md mb-6 shadow-sm animate-fade-in">
              <Sparkles className="h-4 w-4 animate-pulse text-orange-500" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-black tracking-tight text-foreground leading-[1.08] mb-6 animate-fade-in">
              {t.hero.titleLine1}{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>{" "}
              {t.hero.titleLine2}
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {t.hero.description}
            </p>

            {/* Action Buttons: Google Play, App Store, Support */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {/* Google Play */}
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-bold px-6 py-6 rounded-2xl shadow-medium transition-all duration-300 hover:scale-105 group"
                asChild
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.kaubry.granulo.granulo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span>Google Play</span>
                </a>
              </Button>

              {/* Apple App Store */}
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-sm font-bold px-6 py-6 rounded-2xl border-2 hover:bg-muted/60 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href="https://apps.apple.com/app/id6758664406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5"
                >
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>App Store</span>
                </a>
              </Button>

              {/* Support — improved gradient button */}
              <a
                href="#donation-section"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors duration-200"
              >
                <Heart className="h-4 w-4 text-emerald-500 fill-emerald-500/40" />
                <span>{t.hero.supportGranulo}</span>
                <ChevronRight className="h-3.5 w-3.5 opacity-60" />
              </a>
            </div>

            {/* Micro Trust Points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-muted-foreground animate-fade-in" style={{ animationDelay: "0.25s" }}>
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-500" />
                  ))}
                </div>
                <span className="font-semibold text-foreground">4.8/5</span>
                <span>sur les stores</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>100% Données sécurisées</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Flame className="h-4 w-4 text-orange-500" />
                <span>Mis à jour pour 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Smartphone Mockup with 3D perspective */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
            
            {/* Ambient phone backglow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/30 via-primary/25 to-indigo-500/30 rounded-[56px] blur-2xl -z-10 opacity-70 animate-pulse duration-1000" />

            {/* Floating Top Chip: Autonomy */}
            <div className="hidden sm:flex absolute -left-10 top-12 z-20 items-center gap-3 rounded-2xl bg-card/90 backdrop-blur-xl border border-white/20 dark:border-white/10 p-3.5 shadow-strong animate-float">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 text-orange-500">
                <Flame className="h-5 w-5 fill-orange-500/20" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  {t.hero.chipAutonomy.split(":")[0]}
                </div>
                <div className="text-sm font-bold text-foreground">
                  {t.hero.chipAutonomy.split(":")[1] || "40 jours restants"}
                </div>
              </div>
            </div>

            {/* Floating Bottom Chip: Stock */}
            <div className="hidden sm:flex absolute -right-6 bottom-16 z-20 items-center gap-3 rounded-2xl bg-card/90 backdrop-blur-xl border border-white/20 dark:border-white/10 p-3.5 shadow-strong animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-500">
                <Layers className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  {t.hero.chipStock.split(":")[0]}
                </div>
                <div className="text-sm font-bold text-foreground">
                  {t.hero.chipStock.split(":")[1] || "8 sacs (53%)"}
                </div>
              </div>
            </div>

            {/* Toasty Mascot — centered above mockup with gentle float */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 animate-gentle-float">
              <div className="flex items-center gap-2">
                <img
                  src={toastyMascot}
                  alt="Toasty Granulo Mascot"
                  className="h-14 w-14 sm:h-16 sm:w-16 drop-shadow-xl"
                />
                <div className="hidden md:block rounded-2xl bg-card/95 backdrop-blur-md border border-orange-500/30 px-3 py-2 text-[11px] font-bold text-foreground shadow-medium max-w-[170px] text-left">
                  {t.hero.toastyBubble}
                </div>
              </div>
            </div>

            {/* The Stylized Phone Mockup — 3D perspective tilt */}
            <div
              className="relative w-[260px] sm:w-[300px] md:w-[340px] aspect-[9/19.5] rounded-[48px] p-3 bg-gradient-to-b from-neutral-800 via-neutral-900 to-black shadow-[0_35px_80px_-15px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.15)] ring-1 ring-white/10"
              style={{
                transform: "perspective(1200px) rotateY(-8deg) rotateX(3deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Outer bezel highlights */}
              <div className="absolute inset-0 rounded-[48px] pointer-events-none border border-white/20" />
              
              {/* Phone screen container */}
              <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-neutral-950 flex flex-col">
                
                {/* Dynamic Island / Top Camera notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-24 h-5 rounded-full bg-black flex items-center justify-end pr-2.5 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 ring-1 ring-white/5 inline-block" />
                </div>

                {/* Glass screen reflection overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent opacity-80" />

                {/* Screenshot image */}
                <img
                  key={language}
                  src={currentScreenshot}
                  alt={`Dashboard Granulo (${language.toUpperCase()})`}
                  className="w-full h-full object-cover object-top select-none transition-opacity duration-300 animate-in fade-in-50"
                  loading="eager"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
