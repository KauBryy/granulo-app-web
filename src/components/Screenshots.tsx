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
    title: `Slide ${selectedIndex + 1}`,
    caption: "",
    details: "",
  };

  return (
    <section id="screenshots" className="py-20 md:py-28 bg-background relative overflow-hidden outline-none scroll-mt-20"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={t.screenshots.title}
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-600 dark:text-orange-400 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t.screenshots.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            {t.screenshots.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t.screenshots.subtitle}
          </p>
        </div>

        {/* 6 Parts Pill Selector */}
        <div className="max-w-3xl mx-auto mb-8">
          <div
            ref={tabsContainerRef}
            className="flex items-center gap-2 overflow-x-auto py-1.5 px-1 scroll-smooth justify-start sm:justify-center [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {currentSlides.map((_, index) => {
              const TabIcon = slideIcons[index] || Sparkles;
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={`tab-${index}`}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 shrink-0 border ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                      : "bg-card/80 hover:bg-muted text-muted-foreground hover:text-foreground border-border/80"
                  }`}
                  aria-selected={isSelected}
                  role="tab"
                >
                  <TabIcon className="h-4 w-4 shrink-0" />
                  <span>{currentTabs[index]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Carousel Stage */}
        <div className="relative max-w-5xl mx-auto">
          {/* Prev Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => emblaApi?.scrollPrev()}
            className="hidden sm:flex absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-background/90 hover:bg-background border-border shadow-lg backdrop-blur-md hover:scale-105 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Next Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => emblaApi?.scrollNext()}
            className="hidden sm:flex absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-background/90 hover:bg-background border-border shadow-lg backdrop-blur-md hover:scale-105 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Embla Viewport */}
          <div ref={emblaRef} className="overflow-hidden py-4">
            <div className="flex -ml-4 md:-ml-6 items-center">
              {currentSlides.map((imgSrc, index) => {
                const isSelected = selectedIndex === index;
                const slideInfo = t.screenshots.slides[index] || {
                  title: `Slide ${index + 1}`,
                  caption: "",
                  details: "",
                };

                return (
                  <div
                    key={`carousel-slide-${index}`}
                    className="min-w-0 shrink-0 grow-0 basis-[76%] sm:basis-[50%] md:basis-[40%] lg:basis-[34%] pl-4 md:pl-6"
                  >
                    <div
                      onClick={() => {
                        if (isSelected) {
                          setActiveSlideIndex(index);
                        } else {
                          emblaApi?.scrollTo(index);
                        }
                      }}
                      className={`group relative rounded-[28px] overflow-hidden bg-neutral-950 transition-all duration-500 cursor-pointer select-none aspect-[9/19.5] ${
                        isSelected
                          ? "scale-100 opacity-100 ring-2 ring-primary/60 shadow-2xl shadow-black/30 z-10"
                          : "scale-[0.90] opacity-45 hover:opacity-75"
                      }`}
                    >
                      <img
                        src={imgSrc}
                        alt={slideInfo.title}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        loading={index <= 2 ? "eager" : "lazy"}
                        draggable={false}
                      />

                      {/* Subtle hover zoom button on active slide */}
                      {isSelected && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                          <span className="inline-flex items-center gap-2 rounded-full bg-white/95 text-neutral-950 font-bold px-4 py-2 text-xs shadow-lg backdrop-blur-md">
                            <Maximize2 className="h-3.5 w-3.5" />
                            <span>{t.screenshots.zoomHint}</span>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Clean Single Caption & Dots Below */}
        <div className="max-w-xl mx-auto mt-4 text-center px-4">
          <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
            {activeSlideInfo.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mt-1.5 min-h-[2.5rem]">
            {activeSlideInfo.details}
          </p>

          {/* Minimalist Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {currentSlides.map((_, index) => {
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={`dot-${index}`}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    isSelected
                      ? "w-7 bg-primary"
                      : "w-2 bg-muted-foreground/25 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              );
            })}
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
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePrevModal}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background/80 backdrop-blur-md shadow-md hover:bg-background"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>

                  <img
                    src={currentSlides[activeSlideIndex]}
                    alt={t.screenshots.slides[activeSlideIndex]?.title}
                    className="max-h-[68vh] w-auto rounded-2xl object-contain shadow-2xl select-none"
                  />

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
