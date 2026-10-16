import { Language } from "@/context/LanguageContext";

export interface TranslationSchema {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    features: string;
    screenshots: string;
    aiAndMap: string;
    support: string;
    contact: string;
    download: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    description: string;
    downloadPlayStore: string;
    supportGranulo: string;
    iosPlanned: string;
    chipAutonomy: string;
    chipStock: string;
    chipAi: string;
    chipMap: string;
    toastyBubble: string;
  };
  features: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      tag?: string;
    }>;
  };
  screenshots: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    zoomHint: string;
    closeModal: string;
    slides: Array<{
      title: string;
      caption: string;
      details: string;
    }>;
  };
  spotlight: {
    badgeAi: string;
    titleAi: string;
    descAi: string;
    bulletAi1: string;
    bulletAi2: string;
    bulletAi3: string;
    badgeMap: string;
    titleMap: string;
    descMap: string;
    bulletMap1: string;
    bulletMap2: string;
    bulletMap3: string;
  };
  donation: {
    title: string;
    description: string;
    tier1: string;
    tier2: string;
    tier3: string;
    gratitude: string;
  };
  cta: {
    title: string;
    subtitle: string;
    downloadBtn: string;
    iosBtn: string;
    freeBadge: string;
    cloudBadge: string;
    privacyBadge: string;
  };
  iosModal: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    flutterBonus: string;
    close: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    emailHelp: string;
    messageLabel: string;
    messagePlaceholder: string;
    privacyText: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    errName: string;
    errEmail: string;
    errMessage: string;
  };
  footer: {
    creator: string;
    mobileApp: string;
    website: string;
    privacyApp: string;
    termsApp: string;
    privacyWebsite: string;
    legalNotice: string;
    rightsReserved: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  fr: {
    meta: {
      title: "Granulo - Suivez votre consommation de granulés pour poêle à bois",
      description: "Application mobile complète pour poêles à granulés : stock en direct, calcul d'autonomie météo, carte collaborative des prix, entretiens et coach Granulo IA.",
      keywords: "granulés, pellets, poêle à bois, chauffage, suivi consommation, stock granulés, autonomie poêle, carte pellet, granulo ia",
    },
    nav: {
      features: "Fonctionnalités",
      screenshots: "Captures d'écran",
      aiAndMap: "IA & Carte",
      support: "Soutenir 💚",
      contact: "Contact",
      download: "Télécharger",
    },
    hero: {
      badge: "✨ Nouvelle version 2026 • Granulo+ & IA",
      titleLine1: "Maîtrisez votre poêle,",
      titleHighlight: "anticipez votre stock",
      titleLine2: "en toute sérénité",
      description: "L'application moderne et intuitive pensée pour votre confort : stock précis, autonomie calculée selon la météo locale, carte collaborative des prix et coach IA dédié.",
      downloadPlayStore: "Télécharger sur Google Play",
      supportGranulo: "Soutenir Granulo 💚",
      iosPlanned: "Bientôt sur l'App Store (iOS)",
      chipAutonomy: "Autonomie estimée : 40 jours",
      chipStock: "Stock restant : 8 sacs (53%)",
      chipAi: "Granulo IA : Conseils personnalisés",
      chipMap: "Carte pellet : Prix locaux partagés",
      toastyBubble: "Prêt pour l'hiver ? Je veille sur ton poêle ! 🔥",
    },
    features: {
      sectionBadge: "Fonctionnalités Clés",
      title: "Tout ce dont vous avez besoin pour votre chauffage",
      subtitle: "Fini les pannes imprévues et les calculs approximatifs. Granulo simplifie chaque étape de votre saison de chauffe.",
      items: [
        {
          title: "Dashboard & Autonomie intelligente",
          description: "Visualisez en un clin d'œil votre stock restant en sacs et la date exacte estimée de fin de stock selon votre météo locale.",
          tag: "Essentiel",
        },
        {
          title: "Carte Pellet collaborative",
          description: "Trouvez les sacs et palettes les moins chers autour de vous grâce aux prix et adresses partagés par les utilisateurs en temps réel.",
          tag: "Communauté",
        },
        {
          title: "Historique & Journal complet",
          description: "Enregistrez chaque sac brûlé, achat avec son prix au kg, et gardez une traçabilité limpide de vos dépenses.",
          tag: "Traçabilité",
        },
        {
          title: "Statistiques & Météo multi-saisons",
          description: "Comparez jusqu'à 4 saisons de chauffe et observez la corrélation directe entre températures extérieures et consommation.",
          tag: "Analytique",
        },
        {
          title: "Entretiens & Alertes ramonage",
          description: "Rappels configurables pour le nettoyage de vitre, vidage des cendres, et dates du ramonage obligatoire pour être serein.",
          tag: "Sécurité",
        },
        {
          title: "Coach Granulo IA",
          description: "Bilan mensuel en format Stories et réponses interactives à toutes vos questions d'entretien, de réglage et de stockage.",
          tag: "IA & Nouveauté",
        },
      ],
    },
    screenshots: {
      sectionBadge: "Visite Guidée",
      title: "Une interface sombre, épurée et moderne",
      subtitle: "Explorez les écrans de la nouvelle version. Cliquez sur une image pour l'admirer en haute définition.",
      zoomHint: "Cliquer pour agrandir",
      closeModal: "Fermer l'aperçu",
      slides: [
        {
          title: "Dashboard Granulo+",
          caption: "Tout votre poêle en un coup d'œil",
          details: "Stock actuel, pourcentage de remplissage, autonomie estimée avec météo en temps réel et accès rapide à la carte.",
        },
        {
          title: "Carte Communautaire",
          caption: "Partagez les prix des granulés",
          details: "Repérez les magasins, stations 24h/24 et livreurs de pellets à proximité avec les tarifs signalés par la communauté.",
        },
        {
          title: "Journal de Saison",
          caption: "Suivez votre historique",
          details: "Historique clair par mois avec filtres par achats, brûlages et entretiens réalisés.",
        },
        {
          title: "Statistiques Avancées",
          caption: "Analysez consommation et dépenses",
          details: "Graphiques comparatifs multi-saisons, dépenses mensuelles et courbe de température superposée.",
        },
        {
          title: "Gestion des Entretiens",
          caption: "Entretenez votre poêle sans oubli",
          details: "Suivi du nettoyage régulier, vitre, cendrier et échéance du ramonage obligatoire avec badges d'état.",
        },
        {
          title: "Coach Granulo IA",
          caption: "Conseils et bilans personnalisés",
          details: "Votre assistant intelligent toujours disponible pour diagnostiquer, conseiller et résumer votre saison en Stories.",
        },
      ],
    },
    spotlight: {
      badgeAi: "Intelligence Artificielle",
      titleAi: "Votre assistant Granulo IA dédié",
      descAi: "Besoin de savoir comment régler votre poêle, comment stocker vos sacs ou optimiser votre conso ? Granulo IA connaît vos vraies données.",
      bulletAi1: "Bilan mensuel interactif généré sous forme de Stories visuelles",
      bulletAi2: "Conseils concrets adaptés à votre modèle et votre région",
      bulletAi3: "Assistance rapide pour l'entretien et la résolution de problèmes",
      badgeMap: "Carte Collaborative",
      titleMap: "Les meilleurs tarifs près de chez vous",
      descMap: "Les utilisateurs partagent en direct le prix des sacs et des palettes repérés en magasin ou chez les livreurs.",
      bulletMap1: "Géolocalisation des points de vente partenaires et magasins",
      bulletMap2: "Filtres 24h/24, livreurs et magasins favoris",
      bulletMap3: "Signalement communautaire simple en 1 clic",
    },
    donation: {
      title: "Soutenez Granulo 💚",
      description: "Granulo est une application indépendante développée avec passion. Vos dons financent les serveurs Firebase, la météo, le domaine et encouragent l'arrivée sur iOS.",
      tier1: "Aide à couvrir les frais d'infrastructure et d'e-mail pro",
      tier2: "Le prix symbolique d'un sac de granulés pour nous motiver",
      tier3: "Participe activement au nom de domaine et aux futurs développements",
      gratitude: "Merci du fond du cœur à chacun d'entre vous. Chaque geste compte et permet à l'appli de rester gratuite et indépendante !",
    },
    cta: {
      title: "Prêt à optimiser votre chauffage aux granulés ?",
      subtitle: "Téléchargez l'application dès maintenant et rejoignez des milliers d'utilisateurs qui maîtrisent leur consommation.",
      downloadBtn: "Télécharger sur Google Play",
      iosBtn: "Prévu sur l'App Store (iOS)",
      freeBadge: "100% Gratuit au départ",
      cloudBadge: "Synchronisation Cloud sécurisée",
      privacyBadge: "Respect total de votre vie privée",
    },
    iosModal: {
      title: "Version Apple iOS",
      p1: "Le développement iOS nécessite des investissements spécifiques, dont la licence annuelle Apple Developer à 100 € par an.",
      p2: "La priorité a été donnée à la stabilisation et l'enrichissement de l'application Android pour vous offrir la meilleure expérience.",
      p3: "Grâce au soutien des utilisateurs et aux dons de la communauté, le lancement sur l'App Store pourra voir le jour prochainement.",
      flutterBonus: "✨ Bonne nouvelle : l'application est conçue avec Flutter, ce qui garantira une parité totale et rapide lors du portage iOS !",
      close: "J'ai compris",
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Une suggestion d'amélioration, un bug repéré, une question ou simplement un mot d'encouragement ? Nous vous répondons avec plaisir.",
      nameLabel: "Votre nom",
      namePlaceholder: "Pierre Aubry",
      emailLabel: "Adresse e-mail",
      emailPlaceholder: "votre@email.com",
      emailHelp: "Veuillez renseigner une adresse valide afin que nous puissions vous répondre.",
      messageLabel: "Votre message",
      messagePlaceholder: "Bonjour, j'aimerais vous suggérer...",
      privacyText: "Vos données restent strictement confidentielles et ne sont jamais transmises à des tiers.",
      submitBtn: "Envoyer mon message",
      submittingBtn: "Préparation de l'envoi...",
      successTitle: "Merci pour votre message !",
      successDesc: "Votre application de messagerie va s'ouvrir pour finaliser l'envoi du message.",
      errName: "Le nom est requis (maximum 100 caractères)",
      errEmail: "Veuillez entrer une adresse e-mail valide",
      errMessage: "Le message est requis (maximum 1000 caractères)",
    },
    footer: {
      creator: "Développé avec passion par un créateur indépendant, à l'écoute des retours de sa communauté.",
      mobileApp: "Application Mobile",
      website: "Site Web",
      privacyApp: "Politique de confidentialité (App)",
      termsApp: "Conditions d'utilisation (App)",
      privacyWebsite: "Politique de confidentialité (Site)",
      legalNotice: "Mentions légales",
      rightsReserved: "Tous droits réservés.",
    },
  },

  en: {
    meta: {
      title: "Granulo - Smart wood pellet stove tracking app",
      description: "Modern pellet stove management app: real-time stock, weather-based autonomy forecasts, community price map, maintenance reminders and Granulo AI coach.",
      keywords: "pellet stove, wood pellets, heating tracking, pellet stock, autonomy forecast, pellet price map, granulo ai",
    },
    nav: {
      features: "Features",
      screenshots: "Screenshots",
      aiAndMap: "AI & Map",
      support: "Support 💚",
      contact: "Contact",
      download: "Download",
    },
    hero: {
      badge: "✨ New 2026 Edition • Granulo+ & AI",
      titleLine1: "Master your stove,",
      titleHighlight: "forecast your pellet stock",
      titleLine2: "with total peace of mind",
      description: "The sleek, modern app designed for pellet & wood stoves: real-time inventory, intelligent autonomy forecasts linked to local weather, collaborative price map, and a personal AI coach.",
      downloadPlayStore: "Get it on Google Play",
      supportGranulo: "Support Granulo 💚",
      iosPlanned: "Coming soon to the App Store (iOS)",
      chipAutonomy: "Est. autonomy: 40 days",
      chipStock: "Remaining stock: 8 bags (53%)",
      chipAi: "Granulo AI: Personalized insights",
      chipMap: "Pellet Map: Live community prices",
      toastyBubble: "Ready for winter? I'm watching over your stove! 🔥",
    },
    features: {
      sectionBadge: "Key Capabilities",
      title: "Everything you need to master your heating",
      subtitle: "No more cold surprises or guesswork. Granulo streamlines every step of your heating season.",
      items: [
        {
          title: "Dashboard & Smart Autonomy",
          description: "See your remaining bags and the exact estimated run-out date at a single glance, dynamically adjusted to local weather.",
          tag: "Essential",
        },
        {
          title: "Collaborative Pellet Map",
          description: "Spot the cheapest bags and pallets nearby thanks to real-time prices and locations contributed by fellow pellet users.",
          tag: "Community",
        },
        {
          title: "Timeline & Heating Journal",
          description: "Log each burned bag, purchase details with price per kg, and keep transparent control of your winter heating budget.",
          tag: "Tracking",
        },
        {
          title: "Multi-Season Stats & Weather",
          description: "Compare up to 4 heating seasons and visualize the exact correlation between outdoor temperatures and pellet burn rate.",
          tag: "Analytics",
        },
        {
          title: "Maintenance & Sweeping Alerts",
          description: "Configurable reminders for glass cleaning, ash vacuuming, and mandatory annual chimney inspection.",
          tag: "Safety",
        },
        {
          title: "Granulo AI Coach",
          description: "Interactive monthly digest in Story format and instant answers to help you store pellets and optimize combustion.",
          tag: "AI Powered",
        },
      ],
    },
    screenshots: {
      sectionBadge: "Visual Tour",
      title: "A sleek, dark, and intuitive interface",
      subtitle: "Explore the new generation of Granulo screens. Click any image to preview in high definition.",
      zoomHint: "Click to enlarge",
      closeModal: "Close preview",
      slides: [
        {
          title: "Granulo+ Dashboard",
          caption: "Your stove at a single glance",
          details: "Current stock, fill percentage, estimated runtime with live weather and instant shortcut to the community map.",
        },
        {
          title: "Community Map",
          caption: "Share and discover pellet prices",
          details: "Locate nearby stores, 24/7 self-service stations, and bulk pellet suppliers with community-reported deals.",
        },
        {
          title: "Season Journal",
          caption: "Track your complete history",
          details: "Clean month-by-month timeline filtering purchases, burns, and maintenance logs.",
        },
        {
          title: "Advanced Statistics",
          caption: "Analyze consumption & costs",
          details: "Multi-season comparison bar charts, monthly expenses, and overlaid ambient temperature trendline.",
        },
        {
          title: "Maintenance Tracker",
          caption: "Maintain your stove on schedule",
          details: "Track glass cleaning, regular ash dumping, and annual professional sweeping with visual status badges.",
        },
        {
          title: "Granulo AI Coach",
          caption: "Personalized advice & monthly digests",
          details: "Your 24/7 intelligent companion to diagnose issues, provide seasonal advice, and summarize your monthly progress.",
        },
      ],
    },
    spotlight: {
      badgeAi: "Artificial Intelligence",
      titleAi: "Your personal Granulo AI Advisor",
      descAi: "Wondering how to store bags for summer, tune stove parameters, or optimize winter comfort? Granulo AI analyzes your actual logs.",
      bulletAi1: "Interactive monthly digests presented as engaging visual Stories",
      bulletAi2: "Actionable recommendations tailored to your stove and local climate",
      bulletAi3: "Fast troubleshooting assistance whenever an issue arises",
      badgeMap: "Community Powered",
      titleMap: "The best local pellet deals",
      descMap: "Stove owners share live pricing for 15kg bags and full pallets from retail stores, DIY centers, and delivery drivers.",
      bulletMap1: "GPS map of verified stockists and supermarkets",
      bulletMap2: "Filters for 24/7 availability, delivery options, and favorites",
      bulletMap3: "Easy one-tap price update mechanism for the community",
    },
    donation: {
      title: "Support Granulo 💚",
      description: "Granulo is an independent, passion-driven project. Donations fund Firebase cloud hosting, weather APIs, domain renewals, and accelerate the upcoming iOS release.",
      tier1: "Helps cover essential cloud infrastructure and professional email",
      tier2: "The symbolic price of a bag of pellets to keep our motivation fired up",
      tier3: "Directly funds domain names and future app capabilities",
      gratitude: "Huge thanks to everyone contributing. Every single contribution helps keep Granulo free, independent, and ad-free!",
    },
    cta: {
      title: "Ready to optimize your pellet stove heating?",
      subtitle: "Download the app for free today and join thousands of homeowners taking control of their winter comfort.",
      downloadBtn: "Get it on Google Play",
      iosBtn: "Planned for the App Store (iOS)",
      freeBadge: "Free to start",
      cloudBadge: "Secure Cloud Sync",
      privacyBadge: "Full privacy commitment",
    },
    iosModal: {
      title: "Apple iOS Version",
      p1: "Bringing an app to iOS involves extra yearly costs, notably the mandatory $99/year Apple Developer fee.",
      p2: "Our initial focus was to build the best, most stable experience on Android first.",
      p3: "With community support and donations, an official App Store release will be scheduled soon.",
      flutterBonus: "✨ Great news: Granulo is built with Flutter, which makes cross-platform iOS deployment fast and flawless!",
      close: "Understood",
    },
    contact: {
      title: "Get in touch",
      subtitle: "Have a feature suggestion, spotted a bug, or just want to share feedback? We'd love to hear from you.",
      nameLabel: "Your Name",
      namePlaceholder: "Pierre Aubry",
      emailLabel: "Email Address",
      emailPlaceholder: "your@email.com",
      emailHelp: "Please provide a valid email so we can get back to you promptly.",
      messageLabel: "Message",
      messagePlaceholder: "Hi! I would love to suggest...",
      privacyText: "We value your privacy: your email and message are never shared with third parties.",
      submitBtn: "Send Message",
      submittingBtn: "Opening mail client...",
      successTitle: "Thank you for reaching out!",
      successDesc: "Your email client will open to finalize sending your message.",
      errName: "Name is required (max 100 characters)",
      errEmail: "Please enter a valid email address",
      errMessage: "Message is required (max 1000 characters)",
    },
    footer: {
      creator: "Crafted with passion by an independent developer, tuned to user feedback and real-world winter needs.",
      mobileApp: "Mobile App",
      website: "Website",
      privacyApp: "Privacy Policy (App)",
      termsApp: "Terms of Service (App)",
      privacyWebsite: "Privacy Policy (Website)",
      legalNotice: "Legal Notice",
      rightsReserved: "All rights reserved.",
    },
  },

  it: {
    meta: {
      title: "Granulo - App per monitorare il consumo di pellet per stufe",
      description: "App completa per stufe a pellet: scorte in tempo reale, autonomia stimata col meteo, mappa collaborativa dei prezzi, manutenzioni e coach Granulo IA.",
      keywords: "pellet, stufa a pellet, riscaldamento, consumo pellet, scorta pellet, autonomia stufa, mappa pellet, granulo ia",
    },
    nav: {
      features: "Funzionalità",
      screenshots: "Schermate",
      aiAndMap: "IA & Mappa",
      support: "Sostieni 💚",
      contact: "Contatto",
      download: "Scarica",
    },
    hero: {
      badge: "✨ Nuova versione 2026 • Granulo+ & IA",
      titleLine1: "Controlla la tua stufa,",
      titleHighlight: "anticipa le tue scorte",
      titleLine2: "in totale serenità",
      description: "L'app moderna e intuitiva progettata per il tuo comfort: scorte in tempo reale, autonomia stimata in base al meteo locale, mappa collaborativa dei prezzi e coach IA su misura.",
      downloadPlayStore: "Scarica su Google Play",
      supportGranulo: "Sostieni Granulo 💚",
      iosPlanned: "In arrivo su App Store (iOS)",
      chipAutonomy: "Autonomia stimata: 40 giorni",
      chipStock: "Scorte rimaste: 8 sacchi (53%)",
      chipAi: "Granulo IA: Consigli personalizzati",
      chipMap: "Mappa pellet: Prezzi locali condivisi",
      toastyBubble: "Pronto per l'inverno? Vigilo io sulla tua stufa! 🔥",
    },
    features: {
      sectionBadge: "Funzionalità Principali",
      title: "Tutto ciò di cui hai bisogno per il tuo riscaldamento",
      subtitle: "Basta con le sorprese al freddo e i calcoli a spanne. Granulo semplifica ogni momento della tua stagione invernale.",
      items: [
        {
          title: "Dashboard & Autonomia intelligente",
          description: "Visualizza in un istante i sacchi rimasti e la data esatta in cui finiranno, calcolata sulle temperature locali.",
          tag: "Essenziale",
        },
        {
          title: "Mappa Pellet collaborativa",
          description: "Trova sacchi e bancali al prezzo più vantaggioso grazie alle segnalazioni in tempo reale della community.",
          tag: "Community",
        },
        {
          title: "Cronologia & Diario completo",
          description: "Registra ogni sacco bruciato, acquisto con relativo costo al kg e tieni traccia trasparente delle spese.",
          tag: "Tracciabilità",
        },
        {
          title: "Statistiche & Meteo multi-stagione",
          description: "Confronta fino a 4 stagioni di riscaldamento e scopri la correlazione diretta tra clima esterno e consumo.",
          tag: "Analitica",
        },
        {
          title: "Manutenzione & Spazzacamino",
          description: "Promemoria intelligenti per pulizia del vetro, aspirazione ceneri e controllo annuale con spazzacamino.",
          tag: "Sicurezza",
        },
        {
          title: "Coach Granulo IA",
          description: "Report mensile in formato Story e risposte puntuali per conservare i pellet ed ottimizzare i consumi.",
          tag: "Novità IA",
        },
      ],
    },
    screenshots: {
      sectionBadge: "Tour Visivo",
      title: "Un'interfaccia scura, raffinata e intuitiva",
      subtitle: "Scopri le nuove schermate di Granulo. Tocca un'immagine per vederla in alta risoluzione.",
      zoomHint: "Clicca per ingrandire",
      closeModal: "Chiudi anteprima",
      slides: [
        {
          title: "Dashboard Granulo+",
          caption: "La tua stufa a colpo d'occhio",
          details: "Scorte in corso, livello serbatoio, autonomia calcolata con meteo locale e accesso immediato alla mappa.",
        },
        {
          title: "Mappa Collaborativa",
          caption: "Condividi e scopri i prezzi del pellet",
          details: "Trova rivenditori, distributori 24h e fornitori di bancali nelle vicinanze con i prezzi inseriti dagli utenti.",
        },
        {
          title: "Diario di Stagione",
          caption: "Segui la tua cronologia completa",
          details: "Cronologia ordinata mese per mese con filtri per acquisti, sacchi bruciati e interventi tecnici eseguiti.",
        },
        {
          title: "Statistiche Avanzate",
          caption: "Analizza consumi e spese",
          details: "Grafici comparativi multi-stagione, spese mensili ed evoluzione della temperatura esterna.",
        },
        {
          title: "Gestione Manutenzioni",
          caption: "Mantieni la stufa sempre efficiente",
          details: "Scadenze per pulizia vetro, cassetto ceneri e manutenzione annuale con chiari badge di stato.",
        },
        {
          title: "Coach Granulo IA",
          caption: "Consigli e riassunti su misura",
          details: "Il tuo consulente virtuale per diagnosi, consigli di combustione e sintesi mensili interattive.",
        },
      ],
    },
    spotlight: {
      badgeAi: "Intelligenza Artificiale",
      titleAi: "Il tuo coach Granulo IA personale",
      descAi: "Vuoi sapere come regolare la stufa, stoccare i sacchi o evitare sprechi? Granulo IA analizza i tuoi dati reali.",
      bulletAi1: "Report mensile interattivo presentato sotto forma di Stories",
      bulletAi2: "Consigli concreti tarati sulla tua stufa e zona geografica",
      bulletAi3: "Assistenza rapida per pulizia e risoluzione di anomalie",
      badgeMap: "Community Attiva",
      titleMap: "I prezzi migliori vicino a te",
      descMap: "Gli utenti condividono in tempo reale il costo di sacchi da 15kg e bancali interi nei negozi e distributori.",
      bulletMap1: "Mappa GPS dei punti vendita e supermercati",
      bulletMap2: "Filtri 24h/24, consegna a domicilio e negozi preferiti",
      bulletMap3: "Segnalazione prezzi immediata con un semplice tocco",
    },
    donation: {
      title: "Sostieni Granulo 💚",
      description: "Granulo è un progetto autonomo portato avanti con cura. Le donazioni coprono i costi dei server Firebase, meteo, dominio e sostengono l'uscita su iOS.",
      tier1: "Aiuta a pagare l'infrastruttura server e la casella email pro",
      tier2: "Il costo simbolico di un sacco di pellet per incoraggiare lo sviluppo",
      tier3: "Contribuisce al dominio web e all'implementazione di nuove funzioni",
      gratitude: "Grazie di cuore a tutti voi. Ogni supporto permette a Granulo di rimanere gratuito, indipendente e senza pubblicità invasiva!",
    },
    cta: {
      title: "Pronto a ottimizzare la tua stufa a pellet?",
      subtitle: "Scarica subito l'app gratuita ed unisciti a migliaia di utilizzatori che gestiscono il riscaldamento senza pensieri.",
      downloadBtn: "Scarica su Google Play",
      iosBtn: "Previsto su App Store (iOS)",
      freeBadge: "Gratuito al 100%",
      cloudBadge: "Sincronizzazione Cloud protetta",
      privacyBadge: "Rispetto rigoroso della privacy",
    },
    iosModal: {
      title: "Versione Apple iOS",
      p1: "La pubblicazione su iOS richiede investimenti aggiuntivi, a partire dalla licenza annuale Apple Developer da 100 €.",
      p2: "Abbiamo preferito perfezionare e stabilizzare al massimo la versione Android per offrirti l'esperienza più fluida.",
      p3: "Con il continuo sostegno della community, l'uscita su App Store sarà presto una realtà.",
      flutterBonus: "✨ Ottima notizia: l'app è realizzata con Flutter, garantendo un porting rapido ed identico su iOS!",
      close: "Ho capito",
    },
    contact: {
      title: "Contattaci",
      subtitle: "Un'idea per migliorare l'app, un bug riscontrato o un messaggio di incoraggiamento? Saremo felici di risponderti.",
      nameLabel: "Il tuo nome",
      namePlaceholder: "Pierre Aubry",
      emailLabel: "Indirizzo e-mail",
      emailPlaceholder: "tua@email.com",
      emailHelp: "Inserisci un'email valida per permetterci di ricontattarti.",
      messageLabel: "Messaggio",
      messagePlaceholder: "Ciao! Vorrei proporre...",
      privacyText: "I tuoi dati rimangono riservati e non verranno mai ceduti a terze parti.",
      submitBtn: "Invia messaggio",
      submittingBtn: "Apertura client email...",
      successTitle: "Grazie per il tuo messaggio!",
      successDesc: "Si aprirà il tuo client di posta per completare l'invio.",
      errName: "Il nome è obbligatorio (max 100 caratteri)",
      errEmail: "Inserisci un indirizzo e-mail valido",
      errMessage: "Il messaggio è obbligatorio (max 1000 caratteri)",
    },
    footer: {
      creator: "Sviluppato con passione da uno sviluppatore indipendente, attento alle esigenze della community.",
      mobileApp: "Applicazione Mobile",
      website: "Sito Web",
      privacyApp: "Informativa sulla privacy (App)",
      termsApp: "Condizioni d'uso (App)",
      privacyWebsite: "Informativa sulla privacy (Sito)",
      legalNotice: "Note legali",
      rightsReserved: "Tutti i diritti riservati.",
    },
  },

  de: {
    meta: {
      title: "Granulo - Holzpellet-Verbrauch & Vorrat für Kamin- & Pelletöfen",
      description: "Komplette Pellet-App: Vorrat in Echtzeit, wetterbasierte Autonomieberechnung, Community-Preiskarte, Wartungen und Granulo KI-Coach.",
      keywords: "pellets, pelletofen, holzpellets, heizkosten, vorrat pellet, autonomie ofen, pelletkarte, granulo ki",
    },
    nav: {
      features: "Funktionen",
      screenshots: "Screenshots",
      aiAndMap: "KI & Karte",
      support: "Unterstützen 💚",
      contact: "Kontakt",
      download: "Download",
    },
    hero: {
      badge: "✨ Neue Edition 2026 • Granulo+ & KI",
      titleLine1: "Beherrsche deinen Ofen,",
      titleHighlight: "plane deinen Pelletvorrat",
      titleLine2: "völlig stressfrei",
      description: "Die moderne, durchdachte App für deinen Pelletofen: exakter Vorrat in Echtzeit, Autonomie-Prognose anhand des lokalen Wetters, Community-Preiskarte und persönlicher KI-Coach.",
      downloadPlayStore: "Auf Google Play laden",
      supportGranulo: "Granulo unterstützen 💚",
      iosPlanned: "Bald im App Store (iOS)",
      chipAutonomy: "Gesch. Autonomie: 40 Tage",
      chipStock: "Restbestand: 8 Säcke (53%)",
      chipAi: "Granulo KI: Individuelle Tipps",
      chipMap: "Pellet-Karte: Geteilte Preise vor Ort",
      toastyBubble: "Bereit für den Winter? Ich passe auf deinen Ofen auf! 🔥",
    },
    features: {
      sectionBadge: "Wichtigste Funktionen",
      title: "Alles, was du für eine sorgenfreie Heizsaison brauchst",
      subtitle: "Keine kalten Überraschungen oder groben Schätzungen mehr. Granulo macht das Heizen einfach, sparsam und transparent.",
      items: [
        {
          title: "Dashboard & Intelligente Autonomie",
          description: "Sieh auf einen Blick, wie viele Säcke noch da sind und an welchem Tag sie voraussichtlich leer sind – angepasst an das Wetter.",
          tag: "Kernelement",
        },
        {
          title: "Kollaborative Pellet-Karte",
          description: "Finde die günstigsten Säcke und Paletten in deiner Region dank Preisen und Händlertipps aus der Community.",
          tag: "Community",
        },
        {
          title: "Heiztagebuch & Chronik",
          description: "Trage jeden verbrannten Sack und Einkauf mit Kilopreis ein und behalte deine Heizkosten lückenlos im Blick.",
          tag: "Transparenz",
        },
        {
          title: "Mehrjährige Statistiken & Wetter",
          description: "Vergleiche bis zu 4 Heizperioden und erkenne sofort, wie Außentemperaturen deinen Pelletverbrauch beeinflussen.",
          tag: "Analysen",
        },
        {
          title: "Wartungserinnerungen & Schornsteinfeger",
          description: "Schlaue Erinnerungen für Scheibenreinigung, Aschebehälter und die jährliche Schornsteinfeger-Inspektion.",
          tag: "Sicherheit",
        },
        {
          title: "Granulo KI-Coach",
          description: "Interaktiver Monatsrückblick im Story-Format sowie kompetente Tipps zu Lagerung, Ofeneinstellungen und Sparpotenzial.",
          tag: "KI-Neuheit",
        },
      ],
    },
    screenshots: {
      sectionBadge: "Visueller Rundgang",
      title: "Klares, dunkles und modernes Design",
      subtitle: "Entdecke die neuen Ansichten der Granulo-App. Klicke auf ein Bild, um es in voller Schärfe zu betrachten.",
      zoomHint: "Klicken zum Vergrößern",
      closeModal: "Vorschau schließen",
      slides: [
        {
          title: "Granulo+ Dashboard",
          caption: "Dein Ofen auf einen Blick",
          details: "Aktueller Vorrat, Füllstand, geschätzte Laufzeit mit lokalem Wetter und Direktzugriff zur Pellet-Karte.",
        },
        {
          title: "Community-Karte",
          caption: "Pelletpreise teilen und finden",
          details: "Finde Baumärkte, 24h-Automaten und Lieferanten in deiner Nähe mit von Nutzern geprüften Preisen.",
        },
        {
          title: "Saison-Chronik",
          caption: "Dein lückenloser Heizverlauf",
          details: "Übersichtliche Monatslisten mit Filtern für Einkäufe, Verbrennungen und durchgeführte Wartungen.",
        },
        {
          title: "Erweiterte Statistiken",
          caption: "Verbrauch und Kosten analysieren",
          details: "Mehrperioden-Diagramme, Monatsausgaben und überlagerter Temperaturverlauf für maximale Transparenz.",
        },
        {
          title: "Wartungsverwaltung",
          caption: "Den Ofen zuverlässig pflegen",
          details: "Fälligkeiten für Scheibe, Aschekasten und jährliche Wartung mit eindeutigen Status-Badges.",
        },
        {
          title: "Granulo KI-Coach",
          caption: "Maßgeschneiderte Ratschläge",
          details: "Dein smarter Begleiter zur schnellen Fehlersuche, Effizienzsteigerung und monatlichen Story-Auswertung.",
        },
      ],
    },
    spotlight: {
      badgeAi: "Künstliche Intelligenz",
      titleAi: "Dein persönlicher Granulo KI-Coach",
      descAi: "Wie lagert man Pellets im Sommer feuchtigkeitsgeschützt? Wie senkt man den Verbrauch? Granulo KI nutzt deine echten Verbrauchsdaten.",
      bulletAi1: "Monatlicher Rückblick visualisiert in interaktiven Stories",
      bulletAi2: "Konkrete Praxistipps abgestimmt auf Ofentyp und Klima",
      bulletAi3: "Sofortige Hilfestellung bei Wartungsfragen und Brennerfehlern",
      badgeMap: "Community-Power",
      titleMap: "Die besten Angebote in deiner Nähe",
      descMap: "Pelletofen-Besitzer tragen live die Preise für 15kg-Säcke und Paletten ein – egal ob Baumarkt, Tankstelle oder Lieferdienst.",
      bulletMap1: "GPS-Übersicht aller Verkaufsstellen in deinem Umkreis",
      bulletMap2: "Filter für 24/7-Abholung, Lieferanten und Favoriten",
      bulletMap3: "Unkomplizierte 1-Klick-Preismeldung für alle",
    },
    donation: {
      title: "Granulo unterstützen 💚",
      description: "Granulo ist ein unabhängiges Herzensprojekt. Spenden decken Firebase-Serverkosten, Wetter-Schnittstellen, Domainkosten und beschleunigen die iOS-Entwicklung.",
      tier1: "Hilft bei den Basiskosten für Server und professionelle E-Mail",
      tier2: "Der symbolische Preis für einen Sack Pellets als Motivation",
      tier3: "Finanziert Domain-Verlängerungen und künftige Funktionen",
      gratitude: "Herzlichen Dank an jeden Einzelnen. Jede Hilfe stellt sicher, dass Granulo unabhängig, werbefrei und bezahlbar bleibt!",
    },
    cta: {
      title: "Bereit, deinen Holzpellet-Verbrauch zu optimieren?",
      subtitle: "Lade die App jetzt kostenlos herunter und schließe dich Tausenden an, die ihr Heizen entspannt im Griff haben.",
      downloadBtn: "Auf Google Play laden",
      iosBtn: "Geplant für den App Store (iOS)",
      freeBadge: "Kostenlos starten",
      cloudBadge: "Sichere Cloud-Synchronisation",
      privacyBadge: "Strikter Datenschutz",
    },
    iosModal: {
      title: "Apple iOS Version",
      p1: "Die Bereitstellung auf iOS erfordert Zusatzkosten, vor allem die jährliche Apple-Entwicklerlizenz für 99 $ / 100 €.",
      p2: "Wir haben uns zunächst voll darauf konzentriert, die Android-Version stabil und rundum ausgereift zu gestalten.",
      p3: "Mit Unterstützung der Community und Spenden wird der offizielle App Store Release bald umgesetzt.",
      flutterBonus: "✨ Gute Nachricht: Granulo basiert auf Flutter, was eine schnelle und identische Übertragung auf iOS ermöglicht!",
      close: "Verstanden",
    },
    contact: {
      title: "Kontaktiere uns",
      subtitle: "Ein Verbesserungsvorschlag, ein gefundener Fehler oder einfach ein nettes Feedback? Wir freuen uns auf deine Nachricht.",
      nameLabel: "Dein Name",
      namePlaceholder: "Pierre Aubry",
      emailLabel: "E-Mail-Adresse",
      emailPlaceholder: "deine@email.com",
      emailHelp: "Bitte gib eine echte E-Mail-Adresse an, damit wir dir antworten können.",
      messageLabel: "Nachricht",
      messagePlaceholder: "Hallo! Ich hätte folgenden Vorschlag...",
      privacyText: "Deine Daten werden streng vertraulich behandelt und niemals weitergegeben.",
      submitBtn: "Nachricht senden",
      submittingBtn: "Mailprogramm wird geöffnet...",
      successTitle: "Vielen Dank für deine Nachricht!",
      successDesc: "Dein E-Mail-Programm öffnet sich gleich, um die Nachricht abzuschicken.",
      errName: "Name ist erforderlich (max. 100 Zeichen)",
      errEmail: "Bitte gib eine gültige E-Mail-Adresse ein",
      errMessage: "Nachricht ist erforderlich (max. 1000 Zeichen)",
    },
    footer: {
      creator: "Mit Herzblut entwickelt von einem unabhängigen Entwickler, nah an den Wünschen der Community.",
      mobileApp: "Mobile App",
      website: "Website",
      privacyApp: "Datenschutzerklärung (App)",
      termsApp: "Nutzungsbedingungen (App)",
      privacyWebsite: "Datenschutzerklärung (Website)",
      legalNotice: "Impressum",
      rightsReserved: "Alle Rechte vorbehalten.",
    },
  },
};
