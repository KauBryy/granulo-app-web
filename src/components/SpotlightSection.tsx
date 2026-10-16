import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Bot, MapPin, CheckCircle2, Sparkles, Navigation } from "lucide-react";
import toastyThinking from "@/assets/toasty-thinking.png";

export const SpotlightSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="spotlight" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Spotlight 1: Granulo IA */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-20 md:mb-28">
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-xs font-bold text-purple-600 dark:text-purple-400 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-purple-500" />
              <span>{t.spotlight.badgeAi}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
              {t.spotlight.titleAi}
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              {t.spotlight.descAi}
            </p>

            <div className="flex flex-col gap-3.5 w-full">
              {[t.spotlight.bulletAi1, t.spotlight.bulletAi2, t.spotlight.bulletAi3].map(
                (bullet, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl bg-card p-4 border border-border shadow-soft"
                  >
                    <CheckCircle2 className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-foreground">
                      {bullet}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative rounded-[36px] bg-gradient-to-br from-purple-500/15 via-card to-background p-8 border border-purple-500/20 shadow-strong max-w-lg w-full text-center">
              <div className="absolute -top-12 -right-4 sm:-right-8 animate-gentle-float group cursor-pointer z-10">
                <img
                  src={toastyThinking}
                  alt="Toasty IA Coach"
                  className="h-28 w-28 sm:h-32 sm:w-32 drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-500 mb-6">
                <Bot className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-black text-foreground mb-3">
                « Comment bien stocker mes sacs cet été ? »
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed italic bg-muted/60 p-5 rounded-2xl border border-border text-left">
                « Un emplacement sec et ventilé est primordial. Éloignez vos sacs des sols froids en utilisant des palettes, et vérifiez qu'aucun sac n'est perforé pour éviter la condensation. »
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                <span>Coach Granulo IA en ligne</span>
              </div>
            </div>
          </div>
        </div>

        {/* Spotlight 2: Pellet Map */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="relative rounded-[36px] bg-gradient-to-br from-blue-500/15 via-card to-background p-8 border border-blue-500/20 shadow-strong max-w-lg w-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-500">
                    <Navigation className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-foreground">Carte Pellet</h4>
                    <p className="text-xs text-muted-foreground">Rayon de recherche direct</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
                  Prix vérifiés
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-muted/60 border border-border">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-xs font-bold text-foreground">Brico Dépôt Lexy</p>
                      <p className="text-[11px] text-muted-foreground">À 4.2 km • En stock</p>
                    </div>
                  </div>
                  <span className="font-black text-sm text-primary">4,99 € / sac</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-muted/60 border border-border">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-xs font-bold text-foreground">Bricomarché Longuyon</p>
                      <p className="text-[11px] text-muted-foreground">À 1.8 km • Distributeur 24/7</p>
                    </div>
                  </div>
                  <span className="font-black text-sm text-primary">5,49 € / sac</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-bold text-blue-600 dark:text-blue-400 mb-4">
              <MapPin className="h-3.5 w-3.5 text-blue-500" />
              <span>{t.spotlight.badgeMap}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
              {t.spotlight.titleMap}
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              {t.spotlight.descMap}
            </p>

            <div className="flex flex-col gap-3.5 w-full">
              {[t.spotlight.bulletMap1, t.spotlight.bulletMap2, t.spotlight.bulletMap3].map(
                (bullet, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl bg-card p-4 border border-border shadow-soft"
                  >
                    <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-foreground">
                      {bullet}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpotlightSection;
