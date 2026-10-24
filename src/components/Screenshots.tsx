import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useLanguage, Language } from "@/context/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  LayoutDashboard,
  MapPin,
  CalendarDays,
  BarChart3,
  Wrench,
  Play,
  Pause,
} from "lucide-react";

// Import all 24 localized presentation slides
import fr1 from "@/assets/presentation/fr/slide-1.jpg";
import fr2 from "@/assets/presentation/fr/slide-2.jpg";
import fr3 from "@/assets/presentation/fr/slide-3.jpg";
import fr4 from "@/assets/presentation/fr/slide-4.jpg";
import fr5 from "@/assets/presentation/fr/slide-5.jpg";
import fr6 from "@/assets/presentation/fr/slide-6.jpg";

import en1 from "@/assets/presentation/en/slide-1.jpg";
import en2 from "@/assets/presentation/en/slide-2.jpg";
import en3 from "@/assets/presentation/en/slide-3.jpg";
import en4 from "@/assets/presentation/en/slide-4.jpg";
import en5 from "@/assets/presentation/en/slide-5.jpg";
import en6 from "@/assets/presentation/en/slide-6.jpg";

import it1 from "@/assets/presentation/it/slide-1.jpg";
import it2 from "@/assets/presentation/it/slide-2.jpg";
import it3 from "@/assets/presentation/it/slide-3.jpg";
import it4 from "@/assets/presentation/it/slide-4.jpg";
import it5 from "@/assets/presentation/it/slide-5.jpg";
import it6 from "@/assets/presentation/it/slide-6.jpg";

import de1 from "@/assets/presentation/de/slide-1.jpg";
import de2 from "@/assets/presentation/de/slide-2.jpg";
import de3 from "@/assets/presentation/de/slide-3.jpg";
import de4 from "@/assets/presentation/de/slide-4.jpg";
import de5 from "@/assets/presentation/de/slide-5.jpg";
import de6 from "@/assets/presentation/de/slide-6.jpg";

const slidesByLang: Record<Language, string[]> = {
  fr: [fr1, fr2, fr3, fr4, fr5, fr6],
  en: [en1, en2, en3, en4, en5, en6],
  it: [it1, it2, it3, it4, it5, it6],
  de: [de1, de2, de3, de4, de5, de6],
};

const tabLabels: Record<Language, string[]> = {
  fr: ["Dashboard", "Carte", "Journal", "Statistiques", "Entretiens", "Coach IA"],
  en: ["Dashboard", "Map", "Journal", "Statistics", "Maintenance", "AI Coach"],
  it: ["Dashboard", "Mappa", "Diario", "Statistiche", "Manutenzione", "Coach IA"],
  de: ["Dashboard", "Karte", "Tagebuch", "Statistiken", "Wartung", "KI-Coach"],
};

const slideIcons = [
  LayoutDashboard,
  MapPin,
  CalendarDays,
  BarChart3,
  Wrench,
  Sparkles,
];

export const Screenshots: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const currentSlides = slidesByLang[language] || slidesByLang.fr;
  const currentTabs = tabLabels[language] || tabLabels.fr;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay with pause on hover
  useEffect(() => {
    if (!emblaApi || !isPlaying || isHovered) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [emblaApi, isPlaying, isHovered]);

  // Center active tab pill in mobile horizontal scroll
  useEffect(() => {
    if (!tabsContainerRef.current) return;
    const activeTab = tabsContainerRef.current.children[selectedIndex] as HTMLElement;
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedIndex]);

  // Keyboard navigation when focusing the carousel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      emblaApi?.scrollPrev();
    } else if (e.key === "ArrowRight") {
      emblaApi?.scrollNext();
    }
  };

  const handleNextModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeSlideIndex !== null) {
      setActiveSlideIndex((activeSlideIndex + 1) % currentSlides.length);
    }
  };

  const handlePrevModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeSlideIndex !== null) {
      setActiveSlideIndex(
        (activeSlideIndex - 1 + currentSlides.length) % currentSlides.length
      );
    }
  };

  const activeSlideInfo = t.screenshots.slides[selectedIndex] || {
    title: `Partie ${selectedIndex + 1}`,
    caption: "",
    details: "",
  };

  const ActiveIcon = slideIcons[selectedIndex] || Sparkles;

  return (
    <section
      id="screenshots"
      className="py-20 md:py-32 bg-background relative overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={t.screenshots.title}
    >
      {/* Subtle atmospheric glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-600 dark:text-orange-400 mb-4 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t.screenshots.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            {t.screenshots.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t.screenshots.subtitle}
          </p>
        </div>

        {/* 6 Parts Tab / Pill Selector */}
        <div className="max-w-4xl mx-auto mb-10">
          <div
            ref={tabsContainerRef}
            className="flex items-center gap-2 overflow-x-auto pb-2 px-1 scroll-smooth justify-start md:justify-center [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {currentSlides.map((_, index) => {
              const TabIcon = slideIcons[index] || Sparkles;
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={`tab-${index}`}
                  type="button"
                  onClick={() => {
                    emblaApi?.scrollTo(index);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 shrink-0 border ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-[1.03]"
                      : "bg-card/70 hover:bg-muted text-muted-foreground hover:text-foreground border-border/80 backdrop-blur-sm"
                  }`}
                  aria-selected={isSelected}
                  role="tab"
                >
                  <TabIcon className={`h-4 w-4 ${isSelected ? "text-primary-foreground" : "text-primary"}`} />
                  <span className="opacity-75 font-mono text-[11px]">0{index + 1}</span>
                  <span>{currentTabs[index]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Embla Carousel Stage */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation arrow Left */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => emblaApi?.scrollPrev()}
            className="hidden md:flex absolute -left-5 lg:-left-7 top-[42%] -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/85 hover:bg-background border-border/80 backdrop-blur-xl shadow-xl hover:scale-105 active:scale-95 transition-all text-foreground"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Navigation arrow Right */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => emblaApi?.scrollNext()}
            className="hidden md:flex absolute -right-5 lg:-right-7 top-[42%] -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/85 hover:bg-background border-border/80 backdrop-blur-xl shadow-xl hover:scale-105 active:scale-95 transition-all text-foreground"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Carousel Viewport */}
          <div ref={emblaRef} className="overflow-hidden py-4 px-2">
            <div className="flex -ml-4 md:-ml-6 items-center">
              {currentSlides.map((imgSrc, index) => {
                const isSelected = selectedIndex === index;
                const slideInfo = t.screenshots.slides[index] || {
                  title: `Slide ${index + 1}`,
                  caption: "",
                  details: "",
                };
                const IconComponent = slideIcons[index] || Sparkles;

                return (
                  <div
                    key={`carousel-slide-${index}`}
                    className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[62%] md:basis-[48%] lg:basis-[36%] xl:basis-[33%] pl-4 md:pl-6"
                  >
                    <div
                      onClick={() => {
                        if (isSelected) {
                          setActiveSlideIndex(index);
                        } else {
                          emblaApi?.scrollTo(index);
                        }
                      }}
                      className={`group relative flex flex-col rounded-[32px] overflow-hidden bg-card transition-all duration-500 cursor-pointer select-none ${
                        isSelected
                          ? "scale-100 opacity-100 border-2 border-primary/60 shadow-2xl shadow-primary/15 ring-4 ring-primary/10 z-10"
                          : "scale-[0.92] opacity-55 hover:opacity-85 border border-border/70 hover:scale-[0.95]"
                      }`}
                    >
                      {/* Top Poster Image Container */}
                      <div className="relative aspect-[9/19.5] w-full overflow-hidden bg-neutral-950">
                        <img
                          src={imgSrc}
                          alt={slideInfo.title}
                          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                          loading={index <= 2 ? "eager" : "lazy"}
                          draggable={false}
                        />

                        {/* Top floating pill badge */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 text-white backdrop-blur-md px-3 py-1 text-xs font-bold border border-white/10 shadow-md">
                            <IconComponent className="h-3.5 w-3.5 text-primary" />
                            <span>0{index + 1} / 06</span>
                          </span>

                          {isSelected && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-primary/90 text-primary-foreground backdrop-blur-md px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide shadow-md animate-pulse">
                              Actif
                            </span>
                          )}
                        </div>

                        {/* Gradient bottom overlay on poster */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                          <span className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-950 font-bold px-4 py-2 text-xs shadow-xl backdrop-blur-md hover:scale-105 transition-transform">
                            <Maximize2 className="h-3.5 w-3.5" />
                            <span>{t.screenshots.zoomHint}</span>
                          </span>
                        </div>
                      </div>

                      {/* Card Caption Info */}
                      <div className="p-5 sm:p-6 flex flex-col gap-2 bg-card/95 border-t border-border/60">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-black text-base sm:text-lg text-foreground tracking-tight truncate group-hover:text-primary transition-colors">
                            {slideInfo.title}
                          </h3>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveSlideIndex(index);
                            }}
                            className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors shrink-0"
                            title={t.screenshots.zoomHint}
                            aria-label={t.screenshots.zoomHint}
                          >
                            <Maximize2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-xs font-semibold text-primary truncate">
                          {slideInfo.caption}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                          {slideInfo.details}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Footer Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto px-4">
            {/* Active Part indicator counter */}
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary font-mono font-bold text-xs">
                {selectedIndex + 1}
              </span>
              <span>sur 06</span>
              <span className="text-muted-foreground/40">•</span>
              <span className="text-foreground font-bold truncate max-w-[200px] sm:max-w-none">
                {activeSlideInfo.title}
              </span>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {currentSlides.map((_, index) => {
                const isSelected = selectedIndex === index;
                return (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`h-2.5 transition-all duration-300 rounded-full ${
                      isSelected
                        ? "w-8 bg-primary shadow-md shadow-primary/30"
                        : "w-2.5 bg-muted-foreground/25 hover:bg-muted-foreground/60"
                    }`}
                    aria-label={`Aller à la partie ${index + 1}`}
                  />
                );
              })}
            </div>

            {/* Autoplay & Arrow Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="h-8 px-2.5 rounded-full text-xs text-muted-foreground hover:text-foreground flex items-center gap-1.5"
                title={isPlaying ? "Mettre en pause le défilement automatique" : "Reprendre le défilement automatique"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-3.5 w-3.5 text-primary" />
                    <span className="text-[11px] font-medium hidden sm:inline">Auto</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5" />
                    <span className="text-[11px] font-medium hidden sm:inline">Pause</span>
                  </>
                )}
              </Button>

              <div className="flex items-center gap-1 md:hidden">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => emblaApi?.scrollPrev()}
                  className="h-8 w-8 rounded-full"
                  aria-label="Précédent"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => emblaApi?.scrollNext()}
                  className="h-8 w-8 rounded-full"
                  aria-label="Suivant"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Active Highlight Summary Card */}
          <div className="mt-8 max-w-3xl mx-auto bg-card/60 backdrop-blur-xl border border-border/80 rounded-3xl p-6 sm:p-8 shadow-soft">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <ActiveIcon className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                      0{selectedIndex + 1}
                    </span>
                    <h4 className="text-lg sm:text-xl font-black text-foreground tracking-tight">
                      {activeSlideInfo.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-primary mt-0.5">
                    {activeSlideInfo.caption}
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveSlideIndex(selectedIndex)}
                className="rounded-full text-xs font-bold gap-2 hover:bg-primary hover:text-primary-foreground transition-all shrink-0"
              >
                <Maximize2 className="h-3.5 w-3.5" />
                <span>{t.screenshots.zoomHint}</span>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed pt-4">
              {activeSlideInfo.details}
            </p>
          </div>
        </div>

        {/* Lightbox / Modal for full-resolution view */}
        <Dialog
          open={activeSlideIndex !== null}
          onOpenChange={(open) => !open && setActiveSlideIndex(null)}
        >
          <DialogContent className="max-w-4xl max-h-[92vh] p-4 sm:p-6 rounded-[36px] bg-background/95 backdrop-blur-2xl border-border flex flex-col items-center">
            {activeSlideIndex !== null && (
              <>
                <DialogHeader className="w-full text-center pb-2">
                  <DialogTitle className="text-lg sm:text-xl font-black text-foreground">
                    {t.screenshots.slides[activeSlideIndex]?.title}
                  </DialogTitle>
                  <p className="text-xs sm:text-sm text-primary font-semibold">
                    {t.screenshots.slides[activeSlideIndex]?.caption}
                  </p>
                </DialogHeader>

                <div className="relative flex items-center justify-center w-full my-auto overflow-hidden rounded-2xl">
                  {/* Prev button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePrevModal}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background/80 backdrop-blur-md shadow-md hover:bg-background"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>

                  {/* Image */}
                  <img
                    src={currentSlides[activeSlideIndex]}
                    alt={t.screenshots.slides[activeSlideIndex]?.title}
                    className="max-h-[68vh] w-auto rounded-2xl object-contain shadow-2xl select-none"
                  />

                  {/* Next button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNextModal}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background/80 backdrop-blur-md shadow-md hover:bg-background"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>

                <div className="w-full text-center pt-3 text-xs text-muted-foreground">
                  <p>{t.screenshots.slides[activeSlideIndex]?.details}</p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Screenshots;
