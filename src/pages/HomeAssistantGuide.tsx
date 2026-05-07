import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, RefreshCw, Smartphone, LayoutDashboard, CheckCircle2, PlusCircle, Fingerprint, Zap } from "lucide-react";

const HomeAssistantGuide = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
                <title>Guide Home Assistant - Granulo</title>
                <meta
                    name="description"
                    content="Guide d'installation de l'intégration Home Assistant pour l'application Granulo."
                />
            </Helmet>

            <main className="min-h-screen bg-background">
                <div className="container mx-auto px-4 py-16 max-w-4xl">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 font-medium"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Retour au site
                    </Link>

                    <h1 className="text-4xl font-bold text-foreground mb-4">
                        Granulo + Home Assistant
                    </h1>
                    <p className="text-xl text-muted-foreground mb-12">
                        Suivez ce guide pour piloter votre stock de granulés directement depuis votre domotique.
                    </p>

                    <div className="prose prose-invert max-w-none space-y-12">
                        {/* Étape 1 : Téléchargement */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                                Installation des fichiers
                            </h2>
                            <div className="bg-card p-6 rounded-lg border border-border mb-4">
                                <p className="mb-4 text-sm text-muted-foreground">Téléchargez l'intégration officielle Granulo pour Home Assistant :</p>
                                <a href="/granulo-ha-integration.zip" download className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                                    <Download className="h-5 w-5" /> Télécharger l'intégration (.zip)
                                </a>
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>• Extrayez le dossier <code>custom_components/granulo</code>.</p>
                                <p>• Copiez-le dans le dossier <code>/config</code> de votre Home Assistant.</p>
                                <p>• <strong>Redémarrez Home Assistant</strong> pour activer l'intégration.</p>
                            </div>
                        </section>

                        {/* Étape 2 : Activation */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                                Connexion à votre compte
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-card p-5 rounded-xl border border-border space-y-4">
                                    <div className="flex items-center gap-3 text-orange-500">
                                        <Fingerprint className="h-5 w-5" />
                                        <span className="font-bold">Côté App mobile</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Allez dans <strong>Réglages &gt; Home Assistant</strong> et copiez votre <strong>ID Utilisateur (UID)</strong>.
                                    </p>
                                </div>
                                <div className="bg-card p-5 rounded-xl border border-border space-y-4">
                                    <div className="flex items-center gap-3 text-blue-500">
                                        <PlusCircle className="h-5 w-5" />
                                        <span className="font-bold">Côté Home Assistant</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Allez dans <strong>Paramètres &gt; Appareils et services &gt; Ajouter</strong>, cherchez "Granulo" et collez votre <strong>UID</strong>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Étape 3 : Dashboard */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                                Votre Tableau de Bord
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Pour un affichage optimal, créez un nouveau tableau de bord et utilisez l'éditeur de configuration pour coller le code YAML que vous trouverez dans l'application mobile.
                            </p>
                            <div className="bg-blue-500/10 p-6 rounded-xl border border-blue-500/20 flex gap-4 items-start">
                                <Zap className="h-6 w-6 text-blue-400 shrink-0" />
                                <div>
                                    <p className="font-bold text-sm text-blue-400">Synchronisation 24h/24</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Grâce à votre UID, Home Assistant reste synchronisé avec vos données même si l'application est fermée ou votre téléphone éteint.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Aide supplémentaire */}
                        <section className="pt-12 border-t border-border">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Besoin d'aide ?</h2>
                            <p className="text-muted-foreground">
                                Contactez-nous à <strong className="text-foreground">contact@granulo.app</strong> pour toute question technique.
                            </p>
                        </section>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default HomeAssistantGuide;
