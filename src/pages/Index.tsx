import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import kaubryLogo from "@/assets/kaubry-logo.png";
import DonationSection from "@/components/DonationSection";

const Index = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 80;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", reveal);
    // Initial check
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <Helmet>
        <title>Granulo | Suivez votre consommation de granulés</title>
      </Helmet>

      <div className="antialiased font-sans bg-white dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-gray-100 overflow-x-hidden transition-colors duration-300">
        {/* Navigation */}
        <nav className="fixed w-full z-50 glass-nav transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://storage.googleapis.com/gpt-engineer-file-uploads/IXPC0sNyeKdOu4cvzCJBGoAmVJr2/uploads/1762786411988-sourire2-flamme.png"
                alt="Logo Granulo"
                className="w-12 h-12 object-contain rounded-2xl"
              />
              <span className="text-lg sm:text-2xl font-extrabold tracking-tight uppercase">Granulo</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 font-medium text-sm text-gray-600 dark:text-gray-300">
              <a href="#features" className="hover:text-brand dark:hover:text-brand transition-colors">Fonctionnalités</a>
              <a href="#demo" className="hover:text-brand dark:hover:text-brand transition-colors">Démonstration</a>
              <a href="#donate" className="hover:text-brand dark:hover:text-brand transition-colors">Soutenir</a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <a href="#features" className="hidden md:inline-flex bg-dark dark:bg-white dark:text-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand dark:hover:bg-gray-200 transition-all shadow-md">
                Installer l'app
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="hero-reveal">
              <div className="inline-flex items-center space-x-2 bg-brand/10 text-brand px-4 py-2 rounded-full text-xs font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </span>
                <span>APPLICATION GRATUITE</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] mb-6">
                Maîtrisez votre{" "}
                <span className="flame-container relative z-10">
                  <div className="flame-effect"></div>
                  <span className="text-gradient-flame">chaleur.</span>
                </span>
              </h1>
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
                L'application intelligente pour suivre votre consommation de granulés, gérer votre stock et anticiper vos dépenses de chauffage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.kaubry.granulo.granulo" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 bg-dark dark:bg-white dark:text-dark text-white px-8 py-4 rounded-2xl hover:bg-brand dark:hover:bg-gray-200 transition-all shadow-xl hover:scale-[1.02]">
                  <i className="fab fa-google-play text-2xl"></i>
                  <div className="text-left">
                    <p className="text-[10px] uppercase opacity-60">Disponible sur</p>
                    <p className="text-lg font-bold leading-none">Google Play</p>
                  </div>
                </a>
                <a href="https://apps.apple.com/app/id6758664406" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 bg-dark dark:bg-white dark:text-dark text-white px-8 py-4 rounded-2xl hover:bg-brand dark:hover:bg-gray-200 transition-all shadow-xl hover:scale-[1.02]">
                  <i className="fab fa-apple text-2xl"></i>
                  <div className="text-left">
                    <p className="text-[10px] uppercase opacity-60">Disponible sur</p>
                    <p className="text-lg font-bold leading-none">App Store</p>
                  </div>
                </a>
              </div>

              <div className="mt-8">
                <a href="https://www.facebook.com/groups/2980169345517291/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                  <span className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className="fab fa-facebook text-blue-600 dark:text-blue-400 text-xl"></i>
                  </span>
                  <span className="font-semibold border-b border-transparent group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-all">Rejoindre la communauté Facebook</span>
                </a>
              </div>
            </div>

            <div className="relative hero-reveal-delayed">
              <div className="animate-float">
                <div className="phone-mockup w-[300px] h-[610px] mx-auto relative border-dark dark:border-gray-800">
                  <div className="phone-punchhole bg-dark dark:bg-gray-800"></div>
                  <img
                    src="/app-mockup.jpg"
                    onError={(e) => e.currentTarget.src = 'https://via.placeholder.com/300x610?text=App+Preview'}
                    alt="Application Granulo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gray-50 dark:bg-black/20 scroll-mt-24 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20 reveal">
              <h2 className="text-4xl font-extrabold mb-4">Pensée pour votre confort.</h2>
              <p className="text-gray-500 dark:text-gray-400">Toutes les fonctionnalités nécessaires pour une gestion simplifiée de votre poêle à granulés.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="feature-card group relative bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] border border-transparent hover:border-brand/20 transition-all duration-500 hover:shadow-2xl hover:shadow-brand/5 reveal overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/20 rounded-bl-full -mr-8 -mt-8 transition-all duration-500 group-hover:scale-150"></div>

                <div className="relative w-16 h-16 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/30 dark:to-gray-800 border border-blue-100 dark:border-blue-900/50 text-brand rounded-2xl flex items-center justify-center mb-8 text-2xl shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  <i className="fas fa-boxes-stacked"></i>
                </div>
                <h3 className="relative text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-brand transition-colors duration-300">Gestion de Stock</h3>
                <p className="relative text-gray-500 dark:text-gray-400 leading-relaxed group-hover:text-gray-600 dark:group-hover:text-gray-300">
                  Saisissez vos achats et vos sacs brûlés. L'app calcule automatiquement votre <span className="font-semibold text-brand/80">autonomie restante</span>.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="feature-card group relative bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] border border-transparent hover:border-purple-200 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/5 reveal delay-200 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50/50 to-transparent dark:from-purple-900/20 rounded-bl-full -mr-8 -mt-8 transition-all duration-500 group-hover:scale-150"></div>

                <div className="relative w-16 h-16 bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/30 dark:to-gray-800 border border-purple-100 dark:border-purple-900/50 text-purple-600 rounded-2xl flex items-center justify-center mb-8 text-2xl shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="relative text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors duration-300">Statistiques Avancées</h3>
                <p className="relative text-gray-500 dark:text-gray-400 leading-relaxed group-hover:text-gray-600 dark:group-hover:text-gray-300">
                  Comparez vos saisons, analysez l'évolution des prix et <span className="font-semibold text-purple-600/80">optimisez votre budget</span> de chauffage.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="feature-card group relative bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] border border-transparent hover:border-orange-200 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/5 reveal delay-400 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-50/50 to-transparent dark:from-orange-900/20 rounded-bl-full -mr-8 -mt-8 transition-all duration-500 group-hover:scale-150"></div>

                <div className="relative w-16 h-16 bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/30 dark:to-gray-800 border border-orange-100 dark:border-orange-900/50 text-orange-500 rounded-2xl flex items-center justify-center mb-8 text-2xl shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  <i className="fas fa-tools"></i>
                </div>
                <h3 className="relative text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors duration-300">Rappels d'Entretien</h3>
                <p className="relative text-gray-500 dark:text-gray-400 leading-relaxed group-hover:text-gray-600 dark:group-hover:text-gray-300">
                  Ne loupez plus un ramonage ou un nettoyage de vitre grâce aux <span className="font-semibold text-orange-500/80">notifications intelligentes</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section id="demo" className="py-24 overflow-hidden scroll-mt-24 transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="reveal mb-12">
              <h2 className="text-4xl font-extrabold mb-4">Découvrez Granulo en action.</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Une démonstration rapide pour comprendre comment l'application révolutionne votre gestion quotidienne de chauffage.
              </p>
            </div>

            <div className="reveal relative group">
              <div className="aspect-video bg-dark dark:bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand/10 border-8 border-dark dark:border-gray-800">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/zHUee01phNM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen>
                </iframe>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand/10 rounded-full blur-2xl z-[-1]"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand/5 rounded-full blur-2xl z-[-1]"></div>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <DonationSection />

        {/* Footer */}
        <footer className="bg-white dark:bg-[#1A1A1A] py-16 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center space-x-2">
                <img
                  src="https://storage.googleapis.com/gpt-engineer-file-uploads/IXPC0sNyeKdOu4cvzCJBGoAmVJr2/uploads/1762786411988-sourire2-flamme.png"
                  alt="Logo Granulo"
                  className="w-8 h-8 object-contain rounded-xl"
                />
                <span className="text-xl font-bold uppercase tracking-tighter">Granulo</span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-sm text-gray-400 font-medium">
                <Link to="/terms-app" className="hover:text-dark dark:hover:text-white transition-colors">Conditions</Link>
                <Link to="/privacy-website" className="hover:text-dark dark:hover:text-white transition-colors">Confidentialité</Link>
                <Link to="/legal-notice" className="hover:text-dark dark:hover:text-white transition-colors">Mentions Légales</Link>
                <a href="https://www.facebook.com/groups/2980169345517291/" target="_blank" rel="noopener noreferrer" className="hover:text-dark dark:hover:text-white transition-colors flex items-center gap-2">
                  <i className="fab fa-facebook"></i>
                  <span>Communauté</span>
                </a>
                <a href="mailto:contact@granulo.app" className="hover:text-dark dark:hover:text-white transition-colors">Contact</a>
              </div>
              <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
                <p className="text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} Granulo. Développé en France.
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-gray-500">Propulsé par</span>
                  <a href="https://kaubry.fr" target="_blank" rel="noopener noreferrer" className="bg-white/50 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 p-1.5 rounded-lg transition-all duration-300 group flex items-center gap-2 border border-transparent hover:border-brand/20">
                    <img src={kaubryLogo} alt="KauBry App's" className="h-6 w-auto object-contain" />
                    <span className="font-bold text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">KauBry App's</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
