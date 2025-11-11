import { useEffect, useRef } from "react";
import { Heart } from "lucide-react";

const donationOptions = [
  { amount: 1, description: "Aide à couvrir deux mois de boîte mail pro" },
  { amount: 5, description: "C'est un sac de granulés pour le chauffage" },
  { amount: 10, description: "Aide à payer le site web et le nom de domaine" },
];

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

const DonationSection = () => {
  const paypalContainerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const styleAnchor = () => {
      const link = paypalContainerRef.current?.querySelector('a') as HTMLAnchorElement | null;
      if (link) {
        link.classList.add('paypal-btn');
        if (!link.textContent || link.textContent.trim() === '') {
          link.textContent = 'Faire un don';
        }
        return true;
      }
      return false;
    };

    const renderButton = () => {
      if (window.PayPal?.Donation && paypalContainerRef.current) {
        paypalContainerRef.current.innerHTML = '';
        window.PayPal.Donation.Button({
          env: 'production',
          hosted_button_id: '32YRTVCLJPNVJ',
          image: {
            src: 'https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donate_LG.gif',
            alt: 'Bouton Faites un don avec PayPal',
            title: 'PayPal - The safer, easier way to pay online!',
          }
        }).render('#paypal-donate-button');
        // Style right after render
        setTimeout(styleAnchor, 0);
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

    // Observe DOM changes to re-style if PayPal re-renders internally
    const observer = new MutationObserver(() => {
      styleAnchor();
    });
    if (paypalContainerRef.current) {
      observer.observe(paypalContainerRef.current, { childList: true, subtree: true });
    }

    if (document.getElementById('paypal-donate-sdk')) {
      if (!renderButton()) ensureRender();
    } else {
      const script = document.createElement('script');
      script.id = 'paypal-donate-sdk';
      script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';
      script.charset = 'UTF-8';
      script.async = true;
      script.onload = () => {
        renderButton() || ensureRender();
      };
      document.body.appendChild(script);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <section id="donation-section" className="py-16 md:py-24 bg-muted relative animate-fade-in">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/50 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-support/20 mb-6">
            <Heart className="h-8 w-8 text-green-support" />
          </div>
          
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Soutenez Granulo 💚
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Le projet évolue petit à petit grâce à vos retours et idées. Chaque amélioration a un coût (Firebase, hébergement, nom de domaine, etc.). Votre soutien nous aide à continuer !
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-8">
          {donationOptions.map((option) => (
            <div
              key={option.amount}
              className="rounded-2xl border-2 border-green-support/30 bg-card/80 backdrop-blur-sm p-6 text-left hover:border-green-support/50 transition-all"
            >
              <div className="text-3xl font-bold text-green-support mb-2">{option.amount} €</div>
              <p className="text-sm text-muted-foreground">{option.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border-2 border-green-support/30 bg-card/80 backdrop-blur-sm p-6 mb-8">
          <p className="text-sm text-muted-foreground mb-4 text-center">
            Merci à vous, chaque geste compte et aide Granulo à s'améliorer
          </p>
        </div>

        <div className="text-center">
          <div 
            ref={paypalContainerRef}
            id="paypal-donate-button" 
            className="flex justify-center mb-6"
          />
          
          <p className="mt-6 text-sm text-muted-foreground italic">
            Merci beaucoup pour votre soutien, qui fait avancer Granulo ! 🙏
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
