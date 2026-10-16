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
    <section id="features" className="py-20 md:py-28 bg-muted/40 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary mb-4">
            {t.features.sectionBadge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            {t.features.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t.features.subtitle}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((item, idx) => {
            const style = featureIcons[idx] || featureIcons[0];
            const Icon = style.icon;

            return (
              <div
                key={idx}
                className={`group relative rounded-3xl p-8 bg-card/80 backdrop-blur-sm border border-border transition-all duration-300 hover:shadow-medium hover:-translate-y-1.5 ${style.borderHover}`}
              >
                {/* Header of card: Icon + Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${style.gradient} ${style.iconColor} shadow-inner transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  {item.tag && (
                    <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
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
