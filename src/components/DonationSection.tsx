import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, Coffee } from "lucide-react";
import toastyScarf from "@/assets/toasty-scarf.png";

declare global {
  interface Window {
    PayPal?: {
      Donation: {
        Button: (config: any) => {
          render: (selector: string) => void;
        };
      };
    };
  }
}

interface DonationSectionProps {
  showImmediately?: boolean;
  className?: string;
}

export const DonationSection: React.FC<DonationSectionProps> = ({
  className = "py-20 md:py-28",
}) => {
  const { language, t } = useLanguage();
  const paypalContainerRef = useRef<HTMLDivElement>(null);

  const donationOptions = [
    { amount: 1, description: t.donation.tier1 },
    { amount: 5, description: t.donation.tier2 },
    { amount: 10, description: t.donation.tier3 },
  ];

  useEffect(() => {
    const paypalImages: Record<string, string> = {
      fr: "https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donate_LG.gif",
      en: "https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif",
      it: "https://www.paypalobjects.com/it_IT/i/btn/btn_donate_LG.gif",
      de: "https://www.paypalobjects.com/de_DE/i/btn/btn_donate_LG.gif",
    };

    const renderButton = () => {
      if (window.PayPal?.Donation && paypalContainerRef.current) {
        paypalContainerRef.current.innerHTML = "";
        window.PayPal.Donation.Button({
          env: "production",
          hosted_button_id: "32YRTVCLJPNVJ",
          image: {
            src: paypalImages[language] || paypalImages.en,
            alt: "PayPal Donate",
            title: "PayPal - The safer, easier way to pay online!",
          },
        }).render("#paypal-donate-button");
        return true;
      }
      return false;
    };

    const ensureRender = () => {
      let attempts = 0;
      const maxAttempts = 20;
      const interval = setInterval(() => {
        if (renderButton() || attempts >= maxAttempts) {
          clearInterval(interval);
        }
        attempts++;
      }, 200);
    };

    if (document.getElementById("paypal-donate-sdk")) {
      if (!renderButton()) ensureRender();
    } else {
      const script = document.createElement("script");
      script.id = "paypal-donate-sdk";
      script.src = "https://www.paypalobjects.com/donate/sdk/donate-sdk.js";
      script.charset = "UTF-8";
      script.async = true;
      script.onload = () => {
        renderButton() || ensureRender();
      };
      document.body.appendChild(script);
    }
  }, [language]);

  return (
    <>
      <div id="donation-section" className="scroll-mt-24" />
      <section id="donate" className={`${className} bg-muted/60 relative scroll-mt-24`}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-4 group cursor-pointer animate-gentle-float">
              <img
                src={toastyScarf}
                alt="Toasty au chaud"
                className="h-24 w-24 sm:h-28 sm:w-28 drop-shadow-xl transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-background text-white text-xs">
                💚
              </span>
            </div>

            <h2 className="mb-4 text-3xl sm:text-4xl font-black text-foreground tracking-tight">
              {t.donation.title}
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.donation.description}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 mb-8">
            {donationOptions.map((option) => (
              <div
                key={option.amount}
                className="rounded-3xl border border-emerald-500/30 bg-card p-6 text-left hover:border-emerald-500/60 transition-all hover:shadow-soft"
              >
                <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mb-2">
                  {option.amount} €
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quick buttons: Buy me a coffee + Direct PayPal */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="https://buymeacoffee.com/kaubry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 text-neutral-950 font-bold px-6 py-3.5 shadow-md hover:bg-amber-400 hover:scale-105 transition-all text-sm"
            >
              <Coffee className="h-5 w-5" />
              <span>Buy Me A Coffee</span>
            </a>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=32YRTVCLJPNVJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 text-white font-bold px-6 py-3.5 shadow-md hover:bg-blue-500 hover:scale-105 transition-all text-sm"
            >
              <span>{t.donation.paypalBtn}</span>
            </a>
          </div>

          <div className="rounded-3xl border border-border bg-card/60 backdrop-blur-sm p-6 mb-8 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t.donation.gratitude}
            </p>
          </div>

          <div className="text-center">
            <div
              ref={paypalContainerRef}
              id="paypal-donate-button"
              className="flex justify-center"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DonationSection;
