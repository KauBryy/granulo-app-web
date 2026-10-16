import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import SpotlightSection from "@/components/SpotlightSection";
import Screenshots from "@/components/Screenshots";
import GranuloPlusSection from "@/components/GranuloPlusSection";
import DonationSection from "@/components/DonationSection";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import toastyScarf from "@/assets/toasty-scarf.png";

const Index: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />

        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://granulo.app" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.meta.title} />
        <meta name="twitter:description" content={t.meta.description} />

        <link rel="canonical" href="https://granulo.app" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-orange-500 selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <FeaturesSection />
          <SpotlightSection />
          <Screenshots />
          <GranuloPlusSection />

          {/* Video Demo Section */}
          <section id="demo" className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-5xl text-center">
              <div className="mb-12 relative flex flex-col items-center">
                {/* Toasty with scarf above video */}
                <div className="mb-4 group cursor-pointer animate-gentle-float">
                  <img
                    src={toastyScarf}
                    alt="Toasty en hiver"
                    className="h-20 w-20 sm:h-24 sm:w-24 drop-shadow-xl transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full mb-3 border border-primary/20">
                    Démonstration
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
                    Découvrez Granulo en action
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Une démonstration vidéo rapide pour comprendre comment l'application révolutionne votre gestion quotidienne de chauffage.
                  </p>
                </div>
              </div>

              <div className="relative group max-w-4xl mx-auto">
                <div className="aspect-video bg-neutral-950 rounded-[32px] overflow-hidden shadow-2xl border-4 border-border/80">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/zHUee01phNM"
                    title="Démonstration vidéo Granulo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          <DonationSection />
          <CTASection />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
