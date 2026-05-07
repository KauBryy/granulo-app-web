import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, RefreshCw, Smartphone, LayoutDashboard, CheckCircle2, AlertTriangle, PlusCircle, Fingerprint, Sliders } from "lucide-react";

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
                    content="Guide d'installation de l'intégration Home Assistant Avancée pour l'application Granulo."
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
                        Devenez 100% autonome : contrôlez votre stock 24h/24 sans ouvrir l'application.
                    </p>

                    <div className="prose prose-invert max-w-none space-y-12">
                        {/* Status Card */}
                        <section className="bg-green-500/10 p-6 rounded-xl border border-green-500/20">
                            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                                <CheckCircle2 className="h-6 w-6 text-green-500" />
                                Nouveauté : Mode Autonome
                            </h2>
                            <p className="text-muted-foreground mb-0">
                                L'intégration écrit désormais directement dans votre base de données. Plus besoin que votre téléphone soit allumé ou que l'application Granulo soit ouverte pour enregistrer vos sacs.
                            </p>
                        </section>

                        {/* Étape 1 & 2 (Résumé) */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                                Installation des fichiers
                            </h2>
                            <div className="bg-card p-6 rounded-lg border border-border">
                                <p className="mb-4">1. Téléchargez et décompressez le ZIP dans votre dossier <code className="bg-muted px-1.5 py-0.5 rounded">custom_components</code>.</p>
                                <a
                                    href="/granulo-ha-integration.zip"
                                    download
                                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mb-4"
                                >
                                    <Download className="h-5 w-5" />
                                    Télécharger le ZIP
                                </a>
                                <p className="text-sm text-muted-foreground italic">2. Redémarrez Home Assistant pour valider l'installation.</p>
                            </div>
                        </section>

                        {/* Étape 3 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                                Configuration du Mode Expert
                            </h2>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-muted p-2 rounded-lg mt-1"><Fingerprint className="h-5 w-5 text-primary" /></div>
                                    <div>
                                        <p className="font-bold">Collez votre UID</p>
                                        <p className="text-sm text-muted-foreground">Dans HA, ajoutez l'intégration "Granulo" et collez l'UID trouvé dans les réglages de votre application.</p>
                                    </div>
                                </div>
                                <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/20 text-sm">
                                    <strong>Important :</strong> Vous n'avez plus besoin de configurer l'adresse IP de HA dans l'application mobile en Mode Expert. Tout passe par Firebase.
                                </div>
                            </div>
                        </section>

                        {/* Étape 4 - LA NOUVELLE ÉTAPE UI */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                                Créer les outils de saisie (Helpers)
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Pour pouvoir choisir la quantité et mettre une note avant de valider, vous devez créer 3 "Entrées" dans Home Assistant :
                            </p>
                            <div className="space-y-3 bg-muted/30 p-6 rounded-xl border border-border">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <code className="text-sm">input_number.granulo_amount</code>
                                    <span className="text-xs text-muted-foreground">(Nombre, min: 0, max: 100, step: 1)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <code className="text-sm">input_text.granulo_note</code>
                                    <span className="text-xs text-muted-foreground">(Texte libre)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <code className="text-sm">input_number.granulo_price</code>
                                    <span className="text-xs text-muted-foreground">(Nombre, pour les achats uniquement)</span>
                                </div>
                                <p className="text-xs text-muted-foreground mt-4 italic">Allez dans Paramètres &gt; Appareils et services &gt; Entrées pour les créer en 2 clics.</p>
                            </div>
                        </section>

                        {/* Étape 5 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">4</span>
                                Code du Dashboard (YAML)
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                Voici le code complet à coller dans votre tableau de bord (via l'éditeur de configuration brut) pour obtenir une console de saisie pro :
                            </p>
                            <div className="bg-black p-6 rounded-xl border border-border font-mono text-xs overflow-x-auto text-gray-300">
                                <pre>{`type: entities
title: ✍️ Saisie Granulo
entities:
  - entity: input_number.granulo_amount
    name: Quantité (sacs)
  - entity: input_text.granulo_note
    name: Note / Commentaire
  - entity: input_number.granulo_price
    name: Prix Unitaire (Achat)
  - type: button
    name: 🔥 Ajouter un Brûlage
    action_name: Valider
    tap_action:
      action: call-service
      service: granulo.add_burn
      data:
        amount: "{{ states('input_number.granulo_amount') | float }}"
        note: "{{ states('input_text.granulo_note') }}"
  - type: button
    name: 🛒 Ajouter un Achat
    action_name: Valider
    tap_action:
      action: call-service
      service: granulo.add_purchase
      data:
        amount: "{{ states('input_number.granulo_amount') | float }}"
        note: "{{ states('input_text.granulo_note') }}"
        price: "{{ states('input_number.granulo_price') | float }}"`}</pre>
                            </div>
                        </section>

                        {/* Footer Help */}
                        <section className="pt-12 border-t border-border">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Une question ?</h2>
                            <p className="text-muted-foreground">
                                L'équipe Granulo est là pour vous aider sur <strong className="text-foreground">contact@granulo.app</strong>.
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
