import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import toastyStrong from "@/assets/toasty-strong.png";
import { Crown, Sparkles, Layers, History, Cloud, Check } from "lucide-react";

export const GranuloPlusSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Layers,
      title: t.granuloPlus.feature1Title,
      desc: t.granuloPlus.feature1Desc,
      gradient: "from-orange-500/20 to-amber-500/10",
      iconColor: "text-orange-500",
    },
    {
      icon: History,
      title: t.granuloPlus.feature2Title,
      desc: t.granuloPlus.feature2Desc,
      gradient: "from-amber-500/20 to-yellow-500/10",
      iconColor: "text-amber-500",
    },
    {
      icon: Cloud,
      title: t.granuloPlus.feature3Title,
      desc: t.granuloPlus.feature3Desc,
      gradient: "from-blue-500/20 to-cyan-500/10",
      iconColor: "text-blue-500",
    },
  ];

  return (
    <section id="granulo-plus" className="py-20 md:py-28 bg-gradient-to-b from-background via-orange-500/[0.03] to-muted/40 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-[36px] bg-gradient-to-br from-card via-card/90 to-background border-2 border-orange-500/20 p-8 sm:p-12 md:p-16 shadow-2xl relative">
          
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold text-orange-600 dark:text-orange-400 mb-6 shadow-sm">
                <Crown className="h-4 w-4 text-orange-500" />
                <span>{t.granuloPlus.badge}</span>
                <span className="text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full font-black">
                  OPTION
                </span>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight mb-4">
                {t.granuloPlus.title.replace("Granulo+", "")}
                <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 bg-clip-text text-transparent">
                  Granulo+
                </span>
              </h2>

              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                {t.granuloPlus.subtitle}
              </p>

              {/* 3 Premium Features */}
              <div className="flex flex-col gap-4 w-full mb-8">
                {features.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-4 rounded-2xl bg-muted/50 border border-border/80 transition-all duration-300 hover:bg-muted hover:border-orange-500/30 group"
                    >
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feat.gradient} ${feat.iconColor} shadow-inner transition-transform group-hover:scale-110`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-sm font-bold text-foreground mb-1 group-hover:text-orange-500 transition-colors">
                          {feat.title}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* In-app availability note */}
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-orange-500" />
                <span>{t.granuloPlus.ctaNote}</span>
              </div>
            </div>

            {/* Right Mascot: Muscular Toasty with Pellet stack */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              {/* Toasty speech bubble */}
              <div className="mb-4 rounded-2xl bg-card/95 backdrop-blur-md border border-orange-500/30 px-4 py-2.5 text-xs font-bold text-foreground shadow-strong max-w-[260px] text-center animate-bounce duration-1000">
                <span>💪 {t.granuloPlus.bubble}</span>
              </div>

              {/* Character image with interactive hover */}
              <div className="relative group cursor-pointer animate-gentle-float">
                <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/30 to-amber-500/20 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
                <img
                  src={toastyStrong}
                  alt="Toasty Granulo+ Musclé"
                  className="relative h-64 sm:h-72 md:h-80 w-auto object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-[11px] font-semibold text-muted-foreground shadow-sm">
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span>Pour les gros consommateurs & multi-poêles</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GranuloPlusSection;
