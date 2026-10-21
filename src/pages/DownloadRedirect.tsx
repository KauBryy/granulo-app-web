import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import granuloLogo from "@/assets/granulo-logo.jpg";
import { Loader2 } from "lucide-react";

export const ONELINK_URL = "https://onelink.to/626wcq";

const DownloadRedirect: React.FC = () => {
  useEffect(() => {
    // Redirection immédiate vers le lien OneLink
    window.location.replace(ONELINK_URL);
  }, []);

  return (
    <>
      <Helmet>
        <title>Télécharger Granulo | Application mobile</title>
        <meta
          name="description"
          content="Téléchargez l'application mobile Granulo sur iOS et Android pour suivre votre consommation de granulés de bois."
        />
        <meta property="og:title" content="Télécharger Granulo" />
        <meta
          property="og:description"
          content="Téléchargez l'application mobile Granulo sur iOS et Android pour suivre votre consommation de granulés de bois."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://granulo.app/download" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Télécharger Granulo" />
        <meta
          name="twitter:description"
          content="Téléchargez l'application mobile Granulo sur iOS et Android."
        />
        <link rel="canonical" href="https://granulo.app/download" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-card border border-border rounded-3xl p-8 text-center shadow-medium space-y-6">
          <div className="relative inline-block">
            <img
              src={granuloLogo}
              alt="Granulo"
              className="h-20 w-20 mx-auto rounded-full drop-shadow-md object-cover"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black tracking-tight text-foreground">
              Redirection vers le téléchargement...
            </h1>
            <p className="text-sm text-muted-foreground">
              Vous allez être redirigé vers l'App Store ou le Google Play Store selon votre appareil.
            </p>
          </div>

          <div className="flex justify-center items-center py-2">
            <Loader2 className="h-8 w-8 text-primary animate-spin" />
          </div>

          <div className="pt-2 border-t border-border/60">
            <p className="text-xs text-muted-foreground mb-3">
              Si la redirection ne fonctionne pas automatiquement :
            </p>
            <a
              href={ONELINK_URL}
              className="inline-flex items-center justify-center font-bold px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-sm shadow-soft"
            >
              Cliquez ici pour continuer
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default DownloadRedirect;
