import { useRef } from "react";
import { Heart } from "lucide-react";

interface DonationSectionProps {
  showImmediately?: boolean;
  className?: string;
}

const DonationSection = ({ showImmediately = false, className = "py-24" }: DonationSectionProps) => {
  return (
    <>
      <div id="donation-section" className="scroll-mt-24" />
      <section id="donate" className={`${className} scroll-mt-24 transition-colors duration-300 relative`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#121212] dark:bg-black rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative shadow-2xl border border-white/10">
            <div className={`md:w-3/5 z-10 ${showImmediately ? '' : 'reveal'}`}>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Soutenez le développement de Granulo.</h2>
              <p className="text-gray-400 text-lg mb-8">
                Granulo est un projet indépendant développé avec passion. Vos dons m'aident à couvrir les frais de serveur et à consacrer du temps pour ajouter de nouvelles fonctionnalités.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const width = 500;
                    const height = 650;
                    const left = window.screen.width / 2 - width / 2;
                    const top = window.screen.height / 2 - height / 2;
                    window.open(
                      "https://buymeacoffee.com/kaubry",
                      "Buy Me A Coffee",
                      `width = ${width}, height = ${height}, top = ${top}, left = ${left}, scrollbars = yes, resizable = yes`
                    );
                  }}
                  className="bg-white text-[#121212] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all shadow-xl flex items-center space-x-2 hover:scale-[1.02]"
                >
                  <i className="fas fa-coffee"></i>
                  <span>Offrez-moi un café</span>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const width = 500;
                    const height = 650;
                    const left = window.screen.width / 2 - width / 2;
                    const top = window.screen.height / 2 - height / 2;
                    window.open(
                      "https://www.paypal.com/donate/?hosted_button_id=32YRTVCLJPNVJ",
                      "PayPal Donate",
                      `width = ${width}, height = ${height}, top = ${top}, left = ${left}, scrollbars = yes, resizable = yes`
                    );
                  }}
                  className="bg-brand text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl flex items-center space-x-2 hover:scale-[1.02]"
                >
                  <i className="fab fa-paypal"></i>
                  <span>Faire un don via PayPal</span>
                </button>
              </div>
            </div>
            <div className={`md:w-2/5 relative ${showImmediately ? '' : 'reveal'}`}>
              <div className="relative bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand">
                    <i className="fas fa-heart text-2xl"></i>
                  </div>
                  <div>
                    <p className="font-bold text-xl leading-none">Merci !</p>
                    <p className="text-sm text-gray-400 mt-1">Chaque geste compte.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-full bg-white/10 rounded-full">
                    <div className="h-full w-2/3 bg-brand rounded-full shadow-[0_0_15px_rgba(11,95,255,0.5)]"></div>
                  </div>
                  <p className="text-xs text-center text-gray-500 uppercase font-bold tracking-widest">Objectif Serveurs 2026</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand/10 rounded-full blur-[120px]"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonationSection;
