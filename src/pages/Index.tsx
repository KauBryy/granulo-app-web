
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Index = () => {
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

  return (
    <>
      <Helmet>
        <title>Granulo | Suivez votre consommation de granulés</title>
      </Helmet>

      <div className="antialiased font-sans bg-white text-[#1A1A1A] overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed w-full z-50 glass-nav">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://storage.googleapis.com/gpt-engineer-file-uploads/IXPC0sNyeKdOu4cvzCJBGoAmVJr2/uploads/1762786411988-sourire2-flamme.png"
                alt="Logo Granulo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-extrabold tracking-tight uppercase hidden sm:block">Granulo</span>
            </div>
            <div className="hidden md:flex space-x-12 font-medium text-sm text-gray-600">
              <a href="#features" className="hover:text-brand transition-colors">Fonctionnalités</a>
              <a href="#demo" className="hover:text-brand transition-colors">Démonstration</a>
              <a href="#donate" className="hover:text-brand transition-colors">Soutenir</a>
            </div>
            <a href="#" className="bg-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand transition-all shadow-md">
              Installer sur Android
            </a>
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
              <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed">
                L'application intelligente pour suivre votre consommation de granulés, gérer votre stock et anticiper vos dépenses de chauffage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-3 bg-dark text-white px-8 py-4 rounded-2xl hover:bg-brand transition-all shadow-xl hover:scale-[1.02]">
                  <i className="fab fa-google-play text-2xl"></i>
                  <div className="text-left">
                    <p className="text-[10px] uppercase opacity-60">Disponible sur</p>
                    <p className="text-lg font-bold leading-none">Google Play</p>
                  </div>
                </button>
                <div className="flex items-center justify-center space-x-3 border-2 border-dashed border-gray-200 px-8 py-4 rounded-2xl opacity-60">
                  <i className="fab fa-apple text-2xl text-gray-400"></i>
                  <div className="text-left">
                    <p className="text-[10px] uppercase text-gray-400 font-bold">Bientôt sur</p>
                    <p className="text-lg font-bold leading-none text-gray-400">App Store</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hero-reveal-delayed">
              <div className="animate-float">
                <div className="phone-mockup w-[300px] h-[610px] mx-auto relative">
                  <div className="phone-punchhole"></div>
                  <img
                    src="/app-mockup.jpg"
                    onError={(e) => e.currentTarget.src = 'https://via.placeholder.com/300x610?text=App+Preview'}
                    alt="Application Granulo Android"
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
        <section id="features" className="py-24 bg-gray-50 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20 reveal">
              <h2 className="text-4xl font-extrabold mb-4">Pensée pour votre confort.</h2>
              <p className="text-gray-500">Toutes les fonctionnalités nécessaires pour une gestion simplifiée de votre poêle à granulés.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="feature-card bg-white p-10 rounded-[2.5rem] reveal">
                <div className="w-14 h-14 bg-blue-50 text-brand rounded-2xl flex items-center justify-center mb-8 text-2xl shadow-sm">
                  <i className="fas fa-boxes-stacked"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Gestion de Stock</h3>
                <p className="text-gray-500 leading-relaxed">Saisissez vos achats et vos sacs brûlés. L'app calcule automatiquement votre autonomie restante.</p>
              </div>

              <div className="feature-card bg-white p-10 rounded-[2.5rem] reveal delay-200">
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-8 text-2xl shadow-sm">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Statistiques Avancées</h3>
                <p className="text-gray-500 leading-relaxed">Comparez vos saisons, analysez l'évolution des prix et optimisez votre budget de chauffage.</p>
              </div>

              <div className="feature-card bg-white p-10 rounded-[2.5rem] reveal delay-400">
                <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-8 text-2xl shadow-sm">
                  <i className="fas fa-tools"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Rappels d'Entretien</h3>
                <p className="text-gray-500 leading-relaxed">Ne loupez plus un ramonage ou un nettoyage de vitre grâce aux notifications intelligentes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section id="demo" className="py-24 overflow-hidden scroll-mt-24">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="reveal mb-12">
              <h2 className="text-4xl font-extrabold mb-4">Découvrez Granulo en action.</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Une démonstration rapide pour comprendre comment l'application révolutionne votre gestion quotidienne de chauffage.
              </p>
            </div>

            <div className="reveal relative group">
              <div className="aspect-video bg-dark rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand/10 border-8 border-dark">
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
        <section id="donate" className="py-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-brand rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative shadow-2xl">
              <div className="md:w-3/5 z-10 reveal">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Soutenez le développement de Granulo.</h2>
                <p className="text-white/80 text-lg mb-8">
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
                        `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes`
                      );
                    }}
                    className="bg-white text-brand px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all shadow-xl flex items-center space-x-2 hover:scale-[1.02]"
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
                        `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes`
                      );
                    }}
                    className="bg-dark text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition-all shadow-xl flex items-center space-x-2 hover:scale-[1.02]"
                  >
                    <i className="fab fa-paypal"></i>
                    <span>Faire un don via PayPal</span>
                  </button>
                </div>
              </div>
              <div className="md:w-2/5 relative reveal">
                <div className="relative bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand">
                      <i className="fas fa-heart text-2xl"></i>
                    </div>
                    <div>
                      <p className="font-bold text-xl leading-none">Merci !</p>
                      <p className="text-sm text-white/60 mt-1">Chaque geste compte.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 w-full bg-white/20 rounded-full">
                      <div className="h-full w-2/3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                    </div>
                    <p className="text-xs text-center text-white/60 uppercase font-bold tracking-widest">Objectif Serveurs 2026</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-dark/20 rounded-full blur-[120px]"></div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center space-x-2">
                <img
                  src="https://storage.googleapis.com/gpt-engineer-file-uploads/IXPC0sNyeKdOu4cvzCJBGoAmVJr2/uploads/1762786411988-sourire2-flamme.png"
                  alt="Logo Granulo"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-bold uppercase tracking-tighter">Granulo</span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-sm text-gray-400 font-medium">
                <Link to="/terms-app" className="hover:text-dark transition-colors">Conditions</Link>
                <Link to="/privacy-website" className="hover:text-dark transition-colors">Confidentialité</Link>
                <Link to="/legal-notice" className="hover:text-dark transition-colors">Mentions Légales</Link>
                <a href="mailto:contact@granulo.app" className="hover:text-dark transition-colors">Contact</a>
              </div>
              <p className="text-gray-400 text-sm">
                &copy; 2025 Granulo. Développé en France.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
