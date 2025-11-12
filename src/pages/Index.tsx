import Hero from "@/components/Hero";
import Screenshots from "@/components/Screenshots";
import CTASection from "@/components/CTASection";
import DonationSection from "@/components/DonationSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Granulo - Suivez votre consommation de granulés pour poêle à bois</title>
        <meta 
          name="description" 
          content="Application mobile pour suivre votre stock de granulés, vos achats, brûlages et analyser vos habitudes de consommation. Simple, évolutive et pensée pour vous." 
        />
        <meta name="keywords" content="granulés, poêle à bois, chauffage, suivi consommation, stock granulés, application mobile" />
        
        <meta property="og:title" content="Granulo - Suivez votre consommation de granulés" />
        <meta property="og:description" content="Une application pensée pour vous, évolutive et simple à vivre ! Gérez votre stock et analysez vos habitudes de chauffage." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Granulo - Suivez votre consommation de granulés" />
        <meta name="twitter:description" content="Application mobile pour suivre votre stock de granulés et optimiser votre chauffage." />
        
        <link rel="canonical" href="https://granulo.app" />
      </Helmet>
      
      <main className="min-h-screen">
        <Hero />
        <Screenshots />
        <CTASection />
        <DonationSection />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
};

export default Index;
