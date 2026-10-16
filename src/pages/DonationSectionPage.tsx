import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import DonationSection from "@/components/DonationSection";
import granuloLogo from "@/assets/granulo-logo.jpg";
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
                                src={granuloLogo}
                                alt="Logo Granulo"
                                className="w-10 h-10 object-cover rounded-full"
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

                <Footer />
            </div>
        </>
    );
};

export default DonationSectionPage;
