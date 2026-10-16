import React, { useState } from "react";
import { useLanguage, Language } from "@/context/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Maximize2, ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";

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

export const Screenshots: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null);

  const currentSlides = slidesByLang[language] || slidesByLang.fr;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeSlideIndex !== null) {
      setActiveSlideIndex((activeSlideIndex + 1) % currentSlides.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeSlideIndex !== null) {
      setActiveSlideIndex(
        (activeSlideIndex - 1 + currentSlides.length) % currentSlides.length
      );
    }
  };

  return (
    <section id="screenshots" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-xs font-semibold text-orange-600 dark:text-orange-400 mb-4">
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

        {/* 6 Grid of Presentation Posters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {currentSlides.map((imgSrc, index) => {
            const slideInfo = t.screenshots.slides[index] || {
              title: `Slide ${index + 1}`,
              caption: "",
              details: "",
            };

            return (
              <div
                key={`${language}-${index}`}
                onClick={() => setActiveSlideIndex(index)}
                className="group relative flex flex-col rounded-[32px] overflow-hidden bg-card border border-border shadow-soft transition-all duration-300 hover:shadow-strong hover:-translate-y-2 cursor-pointer"
              >
                {/* Poster container */}
                <div className="relative aspect-[9/19.5] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={imgSrc}
                    alt={slideInfo.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Gradient bottom overlay on poster */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 text-neutral-950 font-bold px-4 py-2 text-xs shadow-lg backdrop-blur-md">
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>{t.screenshots.zoomHint}</span>
                    </span>
                  </div>
                </div>

                {/* Card caption info */}
                <div className="p-6 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {slideInfo.title}
                    </h3>
                    <span className="text-xs font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-primary">
                    {slideInfo.caption}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    {slideInfo.details}
                  </p>
                </div>
              </div>
            );
          })}
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
                    onClick={handlePrev}
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
                    onClick={handleNext}
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
