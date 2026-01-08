import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import DonationSection from "@/components/DonationSection";
import kaubryLogo from "@/assets/kaubry-logo.png";
import { useState } from "react";

const DonationSectionPage = () => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Soutenir Granulo | Faire un don</title>
                <meta name="description" content="Soutenez le développement de Granulo, l'application pour suivre votre consommation de granulés." />
            </Helmet>

            <div className="min-h-screen bg-white dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-gray-100 transition-colors duration-300">
                <nav className="fixed w-full z-50 glass-nav transition-colors duration-300">
                    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                        <Link to="/" className="flex items-center space-x-3">
                            <img
                                src="https://storage.googleapis.com/gpt-engineer-file-uploads/IXPC0sNyeKdOu4cvzCJBGoAmVJr2/uploads/1762786411988-sourire2-flamme.png"
                                alt="Logo Granulo"
                                className="w-10 h-10 object-contain rounded-xl"
                            />
                            <span className="text-xl font-extrabold tracking-tight uppercase">Granulo</span>
                        </Link>

                        <div className="flex items-center space-x-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                                aria-label="Toggle dark mode"
                            >
                                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-brand transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                                Retour au site
                            </Link>
                        </div>
                    </div>
                </nav>

                <main className="pt-20 pb-10">
                    <DonationSection showImmediately={true} className="py-12" />
                </main>

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

export default DonationSectionPage;
