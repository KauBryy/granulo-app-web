import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, RefreshCw, Smartphone, LayoutDashboard, CheckCircle2, PlusCircle, Fingerprint, Zap, Copy, Check } from "lucide-react";

const HomeAssistantGuide = () => {
    const [copied, setCopied] = useState(false);
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleCopy = () => {
        const yaml = `views:
  - title: Mon Poêle
    icon: mdi:fire
    cards:
      - type: grid
        columns: 2
        square: false
        cards:
          - type: gauge
            entity: sensor.granulo_poele_stock_actuel
            name: Stock
            min: 0
            max: 100
            severity:
              green: 20
              yellow: 10
              red: 0
          - type: entity
            entity: sensor.granulo_poele_jours_restants
            name: Autonomie

      - type: grid
        title: "Cette Saison"
        columns: 3
        cards:
          - type: entity
            entity: sensor.granulo_poele_achats_saison
            name: Achetés
          - type: entity
            entity: sensor.granulo_poele_brulages_saison
            name: Brûlés
          - type: entity
            entity: sensor.granulo_poele_depenses_saison
            name: Dépenses

      - type: grid
        title: "Depuis toujours (Global)"
        columns: 3
        cards:
          - type: entity
            entity: sensor.granulo_poele_achats_total
            name: Achetés
          - type: entity
            entity: sensor.granulo_poele_brulages_total
            name: Brûlés
          - type: entity
            entity: sensor.granulo_poele_depenses_total
            name: Dépenses

      - type: grid
        title: "Moyennes de consommation"
        columns: 3
        cards:
          - type: entity
            entity: sensor.granulo_poele_moyenne_7j
            name: 7 Jours
          - type: entity
            entity: sensor.granulo_poele_moyenne_mois
            name: Ce Mois
          - type: entity
            entity: sensor.granulo_poele_moyenne_saison
            name: Saison

      - type: grid
        title: "Entretien (Sacs consommés)"
        columns: 2
        cards:
          - type: entity
            entity: sensor.granulo_poele_vitre
            name: Vitre
          - type: entity
            entity: sensor.granulo_poele_entretien
            name: Entretien Annuel

      - type: entities
        title: "✍️ Saisie Rapide"
        entities:
          - entity: number.granulo_poele_quantite
            name: Nombre de sacs
          - entity: number.granulo_poele_prix
            name: Prix total (achat)
          - entity: text.granulo_poele_note
            name: Note / Commentaire
          - entity: button.granulo_poele_actualiser_donnees
            name: 🔄 Actualiser données
          - type: button
            name: 🔥 Enregistrer un Brûlage
            icon: mdi:fire
            action_name: Enregistrer
            tap_action:
              action: call-service
              service: button.press
              target:
                entity_id: button.granulo_poele_enregistrer_un_brulage
          - type: button
            name: 🛒 Enregistrer un Achat
            icon: mdi:cart
            action_name: Enregistrer
            tap_action:
              action: call-service
              service: button.press
              target:
                entity_id: button.granulo_poele_enregistrer_un_achat`;
        
        navigator.clipboard.writeText(yaml);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const [installMethod, setInstallMethod] = useState<"hacs" | "manual">("hacs");
    const [urlCopied, setUrlCopied] = useState(false);

    const handleCopyUrl = () => {
        navigator.clipboard.writeText("https://github.com/KauBryy/granulo-home-assistant");
        setUrlCopied(true);
        setTimeout(() => setUrlCopied(false), 2000);
    };

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
                    <p className="text-xl text-muted-foreground mb-8">
                        Suivez ce guide pour piloter votre stock de granulés directement depuis votre domotique.
                    </p>

                    <div className="bg-blue-500/10 p-6 rounded-xl border border-blue-500/20 flex gap-4 items-start mb-12">
                        <Zap className="h-6 w-6 text-blue-400 shrink-0" />
                        <div>
                            <p className="font-bold text-sm text-blue-400">Synchronisation 24h/24</p>
                            <p className="text-xs text-muted-foreground mt-1">
                                Grâce à votre UID, l'intégration communique directement avec nos serveurs. Vos données restent synchronisées même si l'application est fermée. L'actualisation automatique se fait toutes les 6 heures ou manuellement via le bouton dédié.
                            </p>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-12">
                        {/* Étape 1 : Installation */}
                        <section>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                                    Installation de l'intégration
                                </h2>
                                
                                {/* Sélecteur de méthode (Tabs) */}
                                <div className="flex bg-muted p-1 rounded-lg border border-border">
                                    <button 
                                        onClick={() => setInstallMethod("hacs")}
                                        className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${installMethod === "hacs" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                                    >
                                        HACS (Recommandé)
                                    </button>
                                    <button 
                                        onClick={() => setInstallMethod("manual")}
                                        className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${installMethod === "manual" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                                    >
                                        MANUELLE (Zip)
                                    </button>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                {installMethod === "hacs" ? (
                                    <div className="bg-card p-6 rounded-xl border border-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                            <p className="text-sm font-bold text-green-500">Mises à jour automatiques via GitHub</p>
                                        </div>
                                        <div className="space-y-4 text-sm text-muted-foreground">
                                            <div className="flex gap-4">
                                                <span className="font-mono text-primary font-bold">01.</span>
                                                <p>Dans Home Assistant, allez dans <strong>HACS &gt; Intégrations</strong>.</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="font-mono text-primary font-bold">02.</span>
                                                <p>Cliquez sur les <strong>3 points</strong> (en haut à droite) &gt; <strong>Dépôts personnalisés</strong>.</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="font-mono text-primary font-bold">03.</span>
                                                <div className="flex-1">
                                                    <p className="mb-2">Ajoutez l'URL du dépôt :</p>
                                                    <div className="flex items-center gap-2 bg-black/40 p-2 rounded border border-border group">
                                                        <code className="text-xs break-all text-primary flex-1">https://github.com/KauBryy/granulo-home-assistant</code>
                                                        <button 
                                                            onClick={handleCopyUrl}
                                                            className="p-1.5 hover:bg-white/10 rounded transition-colors text-muted-foreground hover:text-primary"
                                                            title="Copier l'URL"
                                                        >
                                                            {urlCopied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-4 pt-2">
                                                <span className="font-mono text-primary font-bold">04.</span>
                                                <p>Sélectionnez <strong>Intégration</strong> et cliquez sur <strong>Ajouter</strong>.</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="font-mono text-primary font-bold">05.</span>
                                                <p>Recherchez "<strong>Granulo</strong>" dans la barre de recherche et cliquez sur <strong>Télécharger</strong>.</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-card p-6 rounded-xl border border-border animate-in fade-in slide-in-from-bottom-2 duration-300">
                                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8 border-b border-border pb-6">
                                            <div>
                                                <p className="font-bold text-foreground">Archive ZIP Officielle</p>
                                                <p className="text-xs text-muted-foreground mt-1 text-red-400">⚠️ Attention : les mises à jour seront manuelles.</p>
                                            </div>
                                            <a href="/granulo-ha-integration.zip" download className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                                                <Download className="h-5 w-5" /> Télécharger .zip
                                            </a>
                                        </div>
                                        <div className="space-y-4 text-sm text-muted-foreground">
                                            <div className="flex gap-4">
                                                <span className="font-mono text-foreground font-bold">01.</span>
                                                <p>Extrayez l'archive pour obtenir un dossier nommé <code>granulo</code>.</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="font-mono text-foreground font-bold">02.</span>
                                                <p>Copiez ce dossier dans <code>/config/custom_components/</code> de votre Home Assistant.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            <div className="mt-8 bg-muted/50 p-4 rounded-lg flex items-center gap-3">
                                <RefreshCw className="h-4 w-4 text-primary animate-spin-slow" />
                                <p className="text-xs text-muted-foreground italic">
                                    Une fois les fichiers installés, n'oubliez pas de <strong>redémarrer Home Assistant</strong>.
                                </p>
                            </div>
                        </section>

                        {/* Étape 2 : Activation */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                                Connexion à votre compte
                            </h2>
                            <div className="flex flex-col gap-4">
                                <div className="bg-card p-5 rounded-xl border border-border space-y-4">
                                    <div className="flex items-center gap-3">
                                        <img src="/logo-granulo.jpg" alt="Granulo" className="h-6 w-6 rounded-md object-cover" />
                                        <span className="font-bold text-orange-500">1. Côté App mobile</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Allez dans <strong>Réglages &gt; Assistant Domotique</strong> (ou Home Assistant) et copiez votre <strong>ID Utilisateur (UID)</strong>.
                                    </p>
                                </div>
                                <div className="bg-card p-5 rounded-xl border border-border space-y-4">
                                    <div className="flex items-center gap-3">
                                        <img src="https://brands.home-assistant.io/_/homeassistant/icon.png" alt="Home Assistant" className="h-6 w-6" />
                                        <span className="font-bold text-blue-500">2. Côté Home Assistant</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Allez dans <strong>Paramètres &gt; Appareils et services &gt; Ajouter</strong>, cherchez "Granulo" et collez votre <strong>UID</strong>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Étape 3 : Code YAML */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                                Code du Dashboard (Pro)
                            </h2>
                            <div className="bg-card p-6 rounded-xl border border-border mb-6 space-y-4">
                                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Procédure :</p>
                                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                                    <li>Allez dans <strong>Paramètres &gt; Tableaux de bord &gt; Ajouter un tableau de bord</strong>.</li>
                                    <li>Choisissez "Tableau de bord vide" et donnez-lui un nom (ex: "Mon Poêle").</li>
                                    <li>Ouvrez votre nouveau tableau de bord, cliquez sur les <strong>3 petits points</strong> &gt; <strong>Modifier le tableau de bord</strong>.</li>
                                    <li>Cliquez à nouveau sur les <strong>3 petits points</strong> &gt; <strong>Éditeur de configuration (YAML)</strong>.</li>
                                    <li>Effacez tout et collez le code ci-dessous.</li>
                                </ol>
                            </div>
                            <p className="text-muted-foreground text-sm mb-6">
                                Copiez ce code YAML complet pour générer l'interface premium Granulo sur votre Home Assistant.
                            </p>
                            
                            <div className="bg-card rounded-xl border border-border overflow-hidden relative group">
                                <div className="bg-muted px-4 py-2 text-[10px] font-bold border-b border-border flex justify-between items-center">
                                    <span>DASHBOARD COMPLET (YAML)</span>
                                    <button 
                                        onClick={handleCopy}
                                        className="hover:text-primary transition-colors flex items-center gap-1.5 font-bold"
                                    >
                                        {copied ? (
                                            <>
                                                <Check size={12} className="text-green-500" />
                                                <span className="text-green-500">COPIÉ !</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy size={12} />
                                                <span>COPIER LE CODE</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                                <div className="p-4 font-mono text-[10px] text-gray-400 overflow-x-auto bg-black/20">
                                    <pre>{`views:
  - title: Mon Poêle
    icon: mdi:fire
    cards:
      - type: grid
        columns: 2
        cards:
          - type: gauge
            entity: sensor.granulo_poele_stock_actuel
          - type: entity
            entity: sensor.granulo_poele_jours_restants
      - type: entities
        title: "✍️ Saisie Rapide"
        entities:
          - entity: number.granulo_poele_quantite
          - entity: number.granulo_poele_prix
          - entity: button.granulo_poele_actualiser_donnees
            name: 🔄 Actualiser données
      # ... (cliquez sur copier pour le code complet)`}</pre>
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
