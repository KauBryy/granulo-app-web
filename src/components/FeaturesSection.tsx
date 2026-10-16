import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  LayoutDashboard,
  MapPin,
  History,
  BarChart3,
  Wrench,
  Sparkles,
} from "lucide-react";

const featureIcons = [
  { icon: LayoutDashboard, gradient: "from-orange-500/15 to-amber-500/10", iconColor: "text-orange-500", borderHover: "hover:border-orange-500/40" },
  { icon: MapPin, gradient: "from-blue-500/15 to-indigo-500/10", iconColor: "text-blue-500", borderHover: "hover:border-blue-500/40" },
  { icon: History, gradient: "from-amber-500/15 to-yellow-500/10", iconColor: "text-amber-500", borderHover: "hover:border-amber-500/40" },
  { icon: BarChart3, gradient: "from-cyan-500/15 to-blue-500/10", iconColor: "text-cyan-500", borderHover: "hover:border-cyan-500/40" },
  { icon: Wrench, gradient: "from-emerald-500/15 to-teal-500/10", iconColor: "text-emerald-500", borderHover: "hover:border-emerald-500/40" },
  { icon: Sparkles, gradient: "from-violet-500/15 to-purple-500/10", iconColor: "text-violet-500", borderHover: "hover:border-violet-500/40" },
];

export const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-14 md:py-20 bg-muted/40 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary mb-3">
            {t.features.sectionBadge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight mb-3">
            {t.features.title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        {/* 6 Grid Cards - Compact & Snappy */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {t.features.items.map((item, idx) => {
            const style = featureIcons[idx] || featureIcons[0];
            const Icon = style.icon;

            return (
              <div
                key={idx}
                className={`group relative rounded-2xl p-5 sm:p-6 bg-card/85 backdrop-blur-sm border border-border/80 transition-all duration-300 hover:shadow-medium hover:-translate-y-1 ${style.borderHover}`}
              >
                {/* Header of card: Icon + Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${style.gradient} ${style.iconColor} shadow-inner transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  {item.tag && (
                    <span className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 tracking-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
