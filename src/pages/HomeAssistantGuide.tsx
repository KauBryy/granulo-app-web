import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, RefreshCw, Smartphone, LayoutDashboard, CheckCircle2, AlertTriangle, PlusCircle, Fingerprint, ShieldCheck } from "lucide-react";

const HomeAssistantGuide = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
                <title>Guide Home Assistant (Mode Autonome) - Granulo</title>
                <meta
                    name="description"
                    content="Guide d'installation de l'intégration Home Assistant 100% autonome pour Granulo."
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

                    <h1 className="text-4xl font-bold text-foreground mb-4 text-pretty">
                        Mode Expert : Intégration 100% Autonome
                    </h1>
                    <p className="text-xl text-muted-foreground mb-12">
                        Utilisez Granulo sur Home Assistant <strong>sans dépendre de votre téléphone</strong>. Synchro 24h/24 directe avec Firebase.
                    </p>

                    <div className="prose prose-invert max-w-none space-y-12">
                        {/* Alerte Mode Autonome */}
                        <section className="bg-blue-500/10 p-6 rounded-xl border border-blue-500/20">
                            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                                <ShieldCheck className="h-6 w-6 text-blue-400" />
                                Pourquoi ce mode ?
                            </h2>
                            <p className="text-muted-foreground text-sm">
                                Dans ce mode, Home Assistant communique directement avec la base de données. 
                                <strong> Plus besoin que l'app soit ouverte</strong>, plus besoin de configurer d'adresse IP ou de jetons dans votre téléphone.
                            </p>
                        </section>

                        {/* Étape 1 : Installation */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                                Installation des fichiers
                            </h2>
                            <div className="bg-card p-6 rounded-lg border border-border mb-4">
                                <a href="/granulo-ha-integration.zip" download className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                                    <Download className="h-5 w-5" /> Télécharger l'intégration v2.0 (Autonome)
                                </a>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                Copiez le dossier <code>custom_components/granulo</code> dans votre dossier <code>/config</code> HA, puis <strong>redémarrez Home Assistant</strong>.
                            </p>
                        </section>

                        {/* Étape 2 : Sécurité */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                                Configuration Firebase (Crucial)
                            </h2>
                            <div className="bg-orange-500/10 p-6 rounded-xl border border-orange-500/20">
                                <p className="text-sm text-orange-400 mb-4">
                                    Pour que HA puisse écrire vos brûlages, vous devez autoriser l'accès dans votre console Firebase (Firestore Rules) :
                                </p>
                                <div className="bg-black/40 p-4 rounded font-mono text-[10px] text-gray-300 overflow-x-auto">
                                    <pre>{`match /bags/{id} { allow create: if request.resource.data.uid != null; }
match /burns/{id} { allow create: if request.resource.data.uid != null; }`}</pre>
                                </div>
                            </div>
                        </section>

                        {/* Étape 3 : UID */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                                ID Utilisateur (UID)
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                Ajoutez l'intégration dans <strong>Paramètres &gt; Appareils et services</strong> et entrez votre UID (disponible dans les réglages HA de l'app mobile).
                            </p>
                        </section>

                        {/* Étape 4 : Dashboard PRO */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3 text-pretty">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">4</span>
                                Interface avec curseurs (YAML)
                            </h2>
                            <p className="text-muted-foreground text-sm mb-6">
                                Pour avoir des curseurs de sélection, créez d'abord 3 <strong>Entrées</strong> (Helpers) dans HA : <code>input_number.granulo_amount</code>, <code>input_text.granulo_note</code>, et <code>input_number.granulo_price</code>.
                            </p>
                            
                            <div className="bg-card rounded-xl border border-border overflow-hidden">
                                <div className="bg-muted px-4 py-2 text-xs font-bold border-b border-border">CODE YAML À COLLER DANS VOTRE DASHBOARD</div>
                                <div className="p-4 font-mono text-[10px] text-gray-400 overflow-x-auto bg-black/20">
                                    <pre>{`type: vertical-stack
cards:
  - type: entities
    title: ✍️ Saisie Rapide
    entities:
      - entity: input_number.granulo_amount
        name: Quantité (sacs)
      - entity: input_text.granulo_note
        name: Note
      - entity: input_number.granulo_price
        name: Prix (achat)
  - type: horizontal-stack
    cards:
      - type: button
        name: 🔥 Brûler
        tap_action:
          action: call-service
          service: granulo.add_burn
          data:
            amount: "{{ states('input_number.granulo_amount') | float }}"
            note: "{{ states('input_text.granulo_note') }}"
      - type: button
        name: 🛒 Acheter
        tap_action:
          action: call-service
          service: granulo.add_purchase
          data:
            amount: "{{ states('input_number.granulo_amount') | float }}"
            note: "{{ states('input_text.granulo_note') }}"
            price: "{{ states('input_number.granulo_price') | float }}"`}</pre>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default HomeAssistantGuide;
