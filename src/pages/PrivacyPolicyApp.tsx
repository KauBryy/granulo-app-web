import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PrivacyPolicyApp = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Politique de confidentialité - Application Granulo</title>
        <meta 
          name="description" 
          content="Politique de confidentialité de l'application mobile Granulo - Protection de vos données personnelles" 
        />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Politique de confidentialité - Application Granulo
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground">
              <strong>Dernière mise à jour : 7 octobre 2025</strong>
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                Granulo s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Données collectées</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Informations d'identification</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Adresse e-mail</li>
                <li>Identifiant utilisateur unique (généré automatiquement)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Données d'utilisation</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Achats de sacs de granulés (date, quantité, prix)</li>
                <li>Consommations de sacs (date, quantité)</li>
                <li>Paramètres de saison de chauffe</li>
                <li>Notes personnelles (optionnelles)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Utilisation des données</h2>
              <p className="text-muted-foreground mb-3">Vos données sont utilisées uniquement pour :</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Vous permettre de suivre votre consommation de granulés</li>
                <li>Calculer vos statistiques personnelles</li>
                <li>Synchroniser vos données entre vos appareils</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Stockage et sécurité</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Vos données sont stockées de manière sécurisée sur Firebase (Google Cloud)</li>
                <li>Chiffrement des données en transit (HTTPS)</li>
                <li>Accès strictement limité à votre compte personnel</li>
                <li>Aucun partage avec des tiers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Vos droits</h2>
              <p className="text-muted-foreground mb-3">Vous avez le droit de :</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Accéder à vos données</li>
                <li>Exporter vos données (format Excel/CSV)</li>
                <li>Supprimer votre compte et toutes vos données</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Pour supprimer votre compte et toutes vos données, ouvrez l'application, accédez au menu Paramètres puis cliquez sur « Supprimer le compte ». La suppression est immédiate et irréversible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Conservation des données</h2>
              <p className="text-muted-foreground">
                Vos données sont conservées tant que votre compte est actif. En cas de suppression de compte, toutes vos données sont définitivement effacées de nos serveurs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies</h2>
              <p className="text-muted-foreground">
                L'application n'utilise pas de cookies de tracking. Les données de session sont gérées localement pour votre authentification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Modifications</h2>
              <p className="text-muted-foreground">
                Nous nous réservons le droit de modifier cette politique. Les modifications seront notifiées via l'application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant vos données personnelles, contactez-nous à :<br />
                <strong className="text-foreground">contact@granulo.app</strong>
              </p>
            </section>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default PrivacyPolicyApp;
