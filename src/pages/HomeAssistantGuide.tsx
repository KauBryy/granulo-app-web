import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Copy, Check, Download, Zap, RefreshCw } from "lucide-react";

type Language = "fr" | "en" | "it" | "de";

const translations = {
    fr: {
        title: "Granulo + Home Assistant",
        subtitle: "Suivez ce guide pour piloter votre stock de granulés directement depuis votre domotique.",
        syncTitle: "Synchronisation 24h/24",
        syncDesc: "Grâce à votre UID, l'intégration communique directement avec nos serveurs. Vos données restent synchronisées même si l'application est fermée. L'actualisation automatique se fait toutes les 6 heures ou manuellement via le bouton dédié.",
        step1: "Installation de l'intégration",
        step2: "Connexion à votre compte",
        step3: "Configuration du Dashboard",
        hacsMethod: "HACS (Recommandé)",
        manualMethod: "MANUELLE (Zip)",
        hacsBadge: "Mises à jour automatiques via GitHub",
        hacsStep1: "Dans Home Assistant, allez dans HACS > Intégrations.",
        hacsStep2: "Cliquez sur les 3 points (en haut à droite) > Dépôts personnalisés.",
        hacsStep3: "Ajoutez l'URL du dépôt :",
        hacsStep4: "Sélectionnez Intégration et cliquez sur Ajouter.",
        hacsStep5: "Recherchez \"Granulo\" dans la barre de recherche et cliquez sur Télécharger.",
        manualTitle: "Archive ZIP Officielle",
        manualWarn: "Attention : les mises à jour seront manuelles.",
        manualStep1: "Extrayez l'archive pour obtenir un dossier nommé granulo.",
        manualStep2: "Copiez ce dossier dans /config/custom_components/ de votre Home Assistant.",
        restartNote: "Une fois les fichiers installés, n'oubliez pas de redémarrer Home Assistant.",
        appSide: "1. Côté App mobile",
        appDesc: "Allez dans Réglages > Assistant Domotique (ou Home Assistant) et copiez votre ID Utilisateur (UID).",
        haSide: "2. Côté Home Assistant",
        haDesc: "Allez dans Paramètres > Appareils et services > Ajouter, cherchez \"Granulo\" et collez votre UID.",
        dashDesc: "Pour un affichage optimal, nous vous conseillons d'ajouter une carte \"Manuel\" à votre tableau de bord :",
        dashStep1: "Cliquez sur Modifier le tableau de bord > Ajouter une carte.",
        dashStep2: "Cherchez \"Manuel\" tout en bas de la liste.",
        dashStep3: "Basculez en mode Éditeur de code et collez le code suivant :",
        copyBtn: "Copier le code YAML",
        copiedBtn: "Code copié !",
        backBtn: "Retour au site"
    },
    en: {
        title: "Granulo + Home Assistant",
        subtitle: "Follow this guide to manage your pellet stock directly from your home automation.",
        syncTitle: "24/7 Synchronization",
        syncDesc: "Using your UID, the integration communicates directly with our servers. Your data stays synced even if the app is closed. Auto-refresh occurs every 6 hours or manually via the dedicated button.",
        step1: "Integration Installation",
        step2: "Connect your Account",
        step3: "Dashboard Configuration",
        hacsMethod: "HACS (Recommended)",
        manualMethod: "MANUAL (Zip)",
        hacsBadge: "Automatic updates via GitHub",
        hacsStep1: "In Home Assistant, go to HACS > Integrations.",
        hacsStep2: "Click the 3 dots (top right) > Custom repositories.",
        hacsStep3: "Add the repository URL:",
        hacsStep4: "Select Integration and click Add.",
        hacsStep5: "Search for \"Granulo\" in the search bar and click Download.",
        manualTitle: "Official ZIP Archive",
        manualWarn: "Warning: updates will be manual.",
        manualStep1: "Extract the archive to get a folder named granulo.",
        manualStep2: "Copy this folder to /config/custom_components/ in your Home Assistant.",
        restartNote: "Once files are installed, remember to restart Home Assistant.",
        appSide: "1. Mobile App side",
        appDesc: "Go to Settings > Home Assistant and copy your User ID (UID).",
        haSide: "2. Home Assistant side",
        haDesc: "Go to Settings > Devices & Services > Add, search for \"Granulo\" and paste your UID.",
        dashDesc: "For optimal display, we recommend adding a \"Manual\" card to your dashboard:",
        dashStep1: "Click Edit Dashboard > Add Card.",
        dashStep2: "Search for \"Manual\" at the bottom of the list.",
        dashStep3: "Switch to Code Editor mode and paste the following code:",
        copyBtn: "Copy YAML code",
        copiedBtn: "Code copied!",
        backBtn: "Back to site"
    },
    it: {
        title: "Granulo + Home Assistant",
        subtitle: "Segui questa guida per gestire il tuo stock di pellet direttamente dalla tua domotica.",
        syncTitle: "Sincronizzazione 24/7",
        syncDesc: "Utilizzando il tuo UID, l'integrazione comunica direttamente con i nostri server. I tuoi dati rimangono sincronizzati anche se l'app è chiusa. L'aggiornamento automatico avviene ogni 6 ore o manualmente tramite il pulsante dedicato.",
        step1: "Installazione Integrazione",
        step2: "Collega il tuo Account",
        step3: "Configurazione Dashboard",
        hacsMethod: "HACS (Consigliato)",
        manualMethod: "MANUALE (Zip)",
        hacsBadge: "Aggiornamenti automatici via GitHub",
        hacsStep1: "In Home Assistant, vai su HACS > Integrazioni.",
        hacsStep2: "Fai clic sui 3 punti (in alto a destra) > Repository personalizzati.",
        hacsStep3: "Aggiungi l'URL del repository:",
        hacsStep4: "Seleziona Integrazione e fai clic su Aggiungi.",
        hacsStep5: "Cerca \"Granulo\" nella barra di ricerca e fai clic su Scarica.",
        manualTitle: "Archivio ZIP Ufficiale",
        manualWarn: "Attenzione: gli aggiornamenti saranno manuali.",
        manualStep1: "Estrai l'archivio per ottenere una cartella chiamata granulo.",
        manualStep2: "Copia questa cartella in /config/custom_components/ nel tuo Home Assistant.",
        restartNote: "Once files are installed, remember to restart Home Assistant.",
        appSide: "1. Lato App mobile",
        appDesc: "Vai su Impostazioni > Home Assistant e copia il tuo ID Utente (UID).",
        haSide: "2. Lato Home Assistant",
        haDesc: "Vai su Impostazioni > Dispositivi e servizi > Aggiungi, cerca \"Granulo\" e incolla il tuo UID.",
        dashDesc: "Per una visualizzazione ottimale, ti consigliamo di aggiungere una scheda \"Manuale\" alla tua dashboard:",
        dashStep1: "Fai clic su Modifica dashboard > Aggiungi scheda.",
        dashStep2: "Cerca \"Manuale\" in fondo alla lista.",
        dashStep3: "Passa alla modalità Editor di codice e incolla il seguente codice:",
        copyBtn: "Copia codice YAML",
        copiedBtn: "Codice copiato!",
        backBtn: "Torna al sito"
    },
    de: {
        title: "Granulo + Home Assistant",
        subtitle: "Folgen Sie dieser Anleitung, um Ihren Pelletvorrat direkt über Ihre Hausautomation zu verwalten.",
        syncTitle: "24/7 Synchronisierung",
        syncDesc: "Mithilfe Ihrer UID kommuniziert die Integration direkt mit unseren Servern. Ihre Daten bleiben synchronisiert, auch wenn die App geschlossen ist. Die automatische Aktualisierung erfolgt alle 6 Stunden oder manuell über die entsprechende Schaltfläche.",
        step1: "Installation der Integration",
        step2: "Konto verbinden",
        step3: "Dashboard-Konfiguration",
        hacsMethod: "HACS (Empfohlen)",
        manualMethod: "MANUELL (Zip)",
        hacsBadge: "Automatische Updates über GitHub",
        hacsStep1: "Gehen Sie in Home Assistant zu HACS > Integrationen.",
        hacsStep2: "Klicken Sie auf die 3 Punkte (oben rechts) > Benutzerdefinierte Repositories.",
        hacsStep3: "Fügen Sie die Repository-URL hinzu:",
        hacsStep4: "Wählen Sie Integration und klicken Sie auf Hinzufügen.",
        hacsStep5: "Suchen Sie in der Suchleiste nach „Granulo“ und klicken Sie auf Herunterladen.",
        manualTitle: "Offizielles ZIP-Archiv",
        manualWarn: "Achtung: Updates müssen manuell durchgeführt werden.",
        manualStep1: "Entpacken Sie das Archiv, um einen Ordner namens granulo erhalten.",
        manualStep2: "Kopieren Sie diesen Ordner nach /config/custom_components/ in Ihrem Home Assistant.",
        restartNote: "Sobald die Dateien installiert sind, denken Sie daran, Home Assistant neu zu starten.",
        appSide: "1. Seite der mobilen App",
        appDesc: "Gehen Sie zu Einstellungen > Home Assistant und kopieren Sie Ihre Benutzer-ID (UID).",
        haSide: "2. Seite von Home Assistant",
        haDesc: "Gehen Sie zu Einstellungen > Geräte & Dienste > Hinzufügen, suchen Sie nach „Granulo“ und fügen Sie Ihre UID ein.",
        dashDesc: "Für eine optimale Anzeige empfehlen wir, Ihrem Dashboard eine „Manuelle“ Karte hinzuzufügen:",
        dashStep1: "Klicken Sie auf Dashboard bearbeiten > Karte hinzufügen.",
        dashStep2: "Suchen Sie am Ende der Liste nach „Manuell“.",
        dashStep3: "Wechseln Sie in den Code-Editor-Modus und fügen Sie den folgenden Code ein:",
        copyBtn: "YAML-Code kopieren",
        copiedBtn: "Code kopiert!",
        backBtn: "Zurück zur Website"
    }
};

const HomeAssistantGuide = () => {
    const [copied, setCopied] = useState(false);
    const [installMethod, setInstallMethod] = useState<"hacs" | "manual">("hacs");
    const [urlCopied, setUrlCopied] = useState(false);
    const [lang, setLang] = useState<Language>("fr");

    const t = translations[lang];

    const handleCopyUrl = () => {
        navigator.clipboard.writeText("https://github.com/KauBryy/granulo-home-assistant");
        setUrlCopied(true);
        setTimeout(() => setUrlCopied(false), 2000);
    };

    const handleCopyYaml = () => {
        const yaml = `type: vertical-stack
cards:
  - type: entity
    entity: sensor.granulo_poele_stock_actuel
    name: Stock de granulés
    icon: mdi:package-variant
  - type: horizontal-stack
    cards:
      - type: button
        name: Actualiser
        icon: mdi:refresh
        entity: button.granulo_poele_actualiser_donnees
        show_name: true
        show_icon: true
      - type: button
        name: Entretien
        icon: mdi:wrench
        entity: sensor.granulo_poele_entretien
  - type: entities
    entities:
      - entity: sensor.granulo_poele_jours_restants
      - entity: sensor.granulo_poele_moyenne_7j
      - entity: sensor.granulo_poele_brulages_saison
      - entity: sensor.granulo_poele_achats_saison`;
        navigator.clipboard.writeText(yaml);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <Helmet>
                <title>{t.title} - Granulo</title>
                <meta name="description" content={t.subtitle} />
            </Helmet>

            <main className="min-h-screen bg-background">
                <div className="container mx-auto px-4 py-16 max-w-4xl">
                    <div className="flex items-center justify-between mb-8">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            {t.backBtn}
                        </Link>

                        {/* Language Switcher */}
                        <div className="flex gap-2 bg-muted p-1 rounded-lg border border-border">
                            {(["fr", "en", "it", "de"] as Language[]).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${lang === l ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold text-foreground mb-4">
                        {t.title}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        {t.subtitle}
                    </p>

                    <div className="bg-blue-500/10 p-6 rounded-xl border border-blue-500/20 flex gap-4 items-start mb-12">
                        <Zap className="h-6 w-6 text-blue-400 shrink-0" />
                        <div>
                            <p className="font-bold text-sm text-blue-400">{t.syncTitle}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                                {t.syncDesc}
                            </p>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-12">
                        {/* Étape 1 : Installation */}
                        <section>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                                    {t.step1}
                                </h2>
                                
                                {/* Sélecteur de méthode (Tabs) */}
                                <div className="flex bg-muted p-1 rounded-lg border border-border">
                                    <button 
                                        onClick={() => setInstallMethod("hacs")}
                                        className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${installMethod === "hacs" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                                    >
                                        {t.hacsMethod}
                                    </button>
                                    <button 
                                        onClick={() => setInstallMethod("manual")}
                                        className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${installMethod === "manual" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                                    >
                                        {t.manualMethod}
                                    </button>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                {installMethod === "hacs" ? (
                                    <div className="bg-card p-6 rounded-xl border border-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                            <p className="text-sm font-bold text-green-500">{t.hacsBadge}</p>
                                        </div>
                                        <div className="space-y-4 text-sm text-muted-foreground">
                                            <div className="flex gap-4">
                                                <span className="font-mono text-primary font-bold">01.</span>
                                                <p>{t.hacsStep1}</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="font-mono text-primary font-bold">02.</span>
                                                <p>{t.hacsStep2}</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="font-mono text-primary font-bold">03.</span>
                                                <div className="flex-1">
                                                    <p className="mb-2">{t.hacsStep3}</p>
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
                                                <p>{t.hacsStep4}</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="font-mono text-primary font-bold">05.</span>
                                                <p>{t.hacsStep5}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-card p-6 rounded-xl border border-border animate-in fade-in slide-in-from-bottom-2 duration-300">
                                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8 border-b border-border pb-6">
                                            <div>
                                                <p className="font-bold text-foreground">{t.manualTitle}</p>
                                                <p className="text-xs text-muted-foreground mt-1 text-red-400">⚠️ {t.manualWarn}</p>
                                            </div>
                                            <a href="/granulo-ha-integration.zip" download className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                                                <Download className="h-5 w-5" /> {t.manualMethod}
                                            </a>
                                        </div>
                                        <div className="space-y-4 text-sm text-muted-foreground">
                                            <div className="flex gap-4">
                                                <span className="font-mono text-foreground font-bold">01.</span>
                                                <p>{t.manualStep1}</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="font-mono text-foreground font-bold">02.</span>
                                                <p>{t.manualStep2}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            <div className="mt-8 bg-muted/50 p-4 rounded-lg flex items-center gap-3">
                                <RefreshCw className="h-4 w-4 text-primary animate-spin-slow" />
                                <p className="text-xs text-muted-foreground italic">
                                    {t.restartNote}
                                </p>
                            </div>
                        </section>

                        {/* Étape 2 : Activation */}
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                                {t.step2}
                            </h2>
                            <div className="flex flex-col gap-4">
                                <div className="bg-card p-5 rounded-xl border border-border space-y-4">
                                    <div className="flex items-center gap-3">
                                        <img src="/logo-granulo.jpg" alt="Granulo" className="h-6 w-6 rounded-md object-cover" />
                                        <span className="font-bold text-orange-500">{t.appSide}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        {t.appDesc}
                                    </p>
                                </div>
                                <div className="bg-card p-5 rounded-xl border border-border space-y-4">
                                    <div className="flex items-center gap-3">
                                        <img src="https://brands.home-assistant.io/_/homeassistant/icon.png" alt="Home Assistant" className="h-6 w-6" />
                                        <span className="font-bold text-blue-500">{t.haSide}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        {t.haDesc}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Étape 3 : Dashboard */}
                        <section className="pb-12">
                            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                                {t.step3}
                            </h2>
                            <div className="bg-card p-6 rounded-xl border border-border space-y-6">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {t.dashDesc}
                                </p>
                                <div className="space-y-4 text-xs text-muted-foreground border-l-2 border-primary/20 pl-4 py-1">
                                    <p>• {t.dashStep1}</p>
                                    <p>• {t.dashStep2}</p>
                                    <p>• {t.dashStep3}</p>
                                </div>

                                <div className="relative group">
                                    <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto text-[11px] leading-relaxed text-blue-300 font-mono border border-white/5">
                                        {`type: vertical-stack
cards:
  - type: entity
    entity: sensor.granulo_poele_stock_actuel
    name: Stock de granulés
    icon: mdi:package-variant
  - type: horizontal-stack
    cards:
      - type: button
        name: Actualiser
        icon: mdi:refresh
        entity: button.granulo_poele_actualiser_donnees
        show_name: true
        show_icon: true
      - type: button
        name: Entretien
        icon: mdi:wrench
        entity: sensor.granulo_poele_entretien
  - type: entities
    entities:
      - entity: sensor.granulo_poele_jours_restants
      - entity: sensor.granulo_poele_moyenne_7j
      - entity: sensor.granulo_poele_brulages_saison
      - entity: sensor.granulo_poele_achats_saison`}
                                    </pre>
                                    <button
                                        onClick={handleCopyYaml}
                                        className="absolute top-4 right-4 flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary-foreground px-3 py-1.5 rounded-lg text-xs font-bold transition-all backdrop-blur-sm border border-primary/30"
                                    >
                                        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                        {copied ? t.copiedBtn : t.copyBtn}
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
};

export default HomeAssistantGuide;
