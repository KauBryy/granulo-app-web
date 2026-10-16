import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Bot, CheckCircle2, Sparkles } from "lucide-react";
import toastyThinking from "@/assets/toasty-thinking.png";

export const SpotlightSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="spotlight" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Spotlight: Granulo IA */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
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
                {t.spotlight.aiQuestion}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed italic bg-muted/60 p-5 rounded-2xl border border-border text-left">
                {t.spotlight.aiAnswer}
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                <span>{t.spotlight.aiOnline}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpotlightSection;
