import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, RefreshCw, Smartphone, LayoutDashboard, CheckCircle2, AlertTriangle } from "lucide-react";

const HomeAssistantGuide = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
                <title>Guide Home Assistant (Mode Expert) - Granulo</title>
                <meta
                    name="description"
                    content="Guide d'installation de l'intégration Home Assistant Avancée (Boutons d'action) pour l'application Granulo."
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
                        Mode Expert : Granulo & Home Assistant
                    </h1>
                    <p className="text-xl text-muted-foreground mb-12">
                        Suivez ce guide pour activer les <strong>boutons d'action</strong> (Ajout de sacs/brûlages) directement depuis votre tableau de bord Home Assistant.
                    </p>

                    <div className="prose prose-invert max-w-none space-y-12">
                        {/* Introduction / Prérequis */}
                        <section className="bg-orange-500/10 p-6 rounded-xl border border-orange-500/20">
                            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                                <AlertTriangle className="h-6 w-6 text-orange-500" />
                                À lire avant de commencer
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                L'affichage simple de vos données Granulo sur Home Assistant (Mode Standard) <strong>ne nécessite aucune installation de fichier</strong>.
                                <br />
                                Ce guide <strong>Expert</strong> est uniquement destiné à ceux qui souhaitent utiliser les boutons d'action interactifs depuis leur domotique.
                            </p>
                        </section>

                        {/* Étape 1 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                                Téléchargement & Installation
                            </h2>
                            <div className="space-y-4">
                                <p className="text-muted-foreground">
                                    L'intégration Granulo est une "Custom Component" pour Home Assistant.
                                </p>
                                <div className="bg-card p-6 rounded-lg border border-border">
                                    <p className="font-medium mb-4">Téléchargez les fichiers requis :</p>
                                    <a
                                        href="/granulo-ha-integration.zip"
                                        download
                                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                                    >
                                        <Download className="h-5 w-5" />
                                        Télécharger le fichier .ZIP
                                    </a>
                                </div>
                                <div className="space-y-2 text-muted-foreground">
                                    <p>1. <strong>Extrayez</strong> le contenu du fichier ZIP téléchargé.</p>
                                    <p>
                                        2. Accédez au dossier <strong>/config</strong> de votre serveur Home Assistant. 
                                        <br />
                                        <span className="text-xs text-muted-foreground block mb-1">
                                            (Selon votre installation, utilisez Samba, SSH, ou l'explorateur de fichiers de votre machine)
                                        </span>
                                        <a 
                                            href="https://www.home-assistant.io/common-tasks/os/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline text-sm inline-flex items-center gap-1"
                                        >
                                            Aide sur l'accès aux fichiers →
                                        </a>
                                    </p>
                                    <p>3. <strong>Copiez le dossier</strong> <code className="bg-muted px-1.5 py-0.5 rounded text-primary">custom_components</code> (qui contient "granulo") à la racine de la configuration de votre Home Assistant (dans le même dossier que votre fichier `configuration.yaml`).</p>
                                </div>
                            </div>
                        </section>

                        {/* Étape 2 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                                Redémarrage de Home Assistant
                            </h2>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex-1 space-y-4">
                                    <p className="text-muted-foreground">
                                        Une fois les fichiers copiés, vous devez redémarrer Home Assistant pour qu'il puisse charger l'intégration.
                                    </p>
                                    <ol className="list-decimal pl-6 text-muted-foreground space-y-2 font-medium">
                                        <li>Allez dans <strong>Outils de développement</strong>.</li>
                                        <li>Cliquez sur le bouton <strong>Vérifier la configuration</strong>.</li>
                                        <li>Si tout est vert, cliquez sur <strong>Redémarrer</strong>.</li>
                                    </ol>
                                </div>
                                <div className="bg-muted/20 p-4 rounded-lg border border-border flex flex-col items-center gap-3 min-w-[200px]">
                                    <RefreshCw className="h-12 w-12 text-primary animate-spin-slow" />
                                    <span className="text-sm font-medium">Redémarrage requis</span>
                                </div>
                            </div>
                        </section>

                        {/* Étape 3 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                                Création du Dashboard (Via l'App)
                            </h2>
                            <div className="space-y-6">
                                <p className="text-muted-foreground">
                                    L'intégration est installée ! Il ne vous reste plus qu'à récupérer votre code de tableau de bord prêt à l'emploi.
                                </p>
                                <div className="bg-card p-6 rounded-xl border border-border space-y-6">
                                    <div className="flex gap-4">
                                        <div className="h-10 w-10 rounded bg-muted flex items-center justify-center shrink-0">
                                            <Smartphone className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Ouvrez l'application Granulo</p>
                                            <p className="text-sm text-muted-foreground">
                                                Allez dans <strong>Réglages &gt; Home Assistant</strong>, et choisissez <strong>Mode Expert (Avancé)</strong>.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="h-10 w-10 rounded bg-muted flex items-center justify-center shrink-0">
                                            <LayoutDashboard className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Copiez votre code YAML</p>
                                            <p className="text-sm text-muted-foreground">
                                                Cliquez sur le bouton pour copier votre Dashboard généré sur mesure, puis collez-le dans un Dashboard vide (via l'éditeur de configuration brut) sur votre Home Assistant.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="h-10 w-10 rounded bg-muted flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="h-6 w-6 text-green-500" />
                                        </div>
                                        <div>
                                            <p className="font-bold">C'est terminé !</p>
                                            <p className="text-sm text-muted-foreground">
                                                Vos boutons "Ajouter Achat" et "Ajouter Brûlage" sont maintenant fonctionnels.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Aide supplémentaire */}
                        <section className="pt-12 border-t border-border">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Besoin d'aide ?</h2>
                            <p className="text-muted-foreground">
                                Si vous rencontrez des difficultés, n'hésitez pas à nous contacter à <strong className="text-foreground">contact@granulo.app</strong>.
                            </p>
                        </section>
                    </div>
                </div>
                <main />
                <Footer />
            </main>
        </>
    );
};

export default HomeAssistantGuide;
