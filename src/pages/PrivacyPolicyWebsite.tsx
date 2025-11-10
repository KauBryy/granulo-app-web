import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PrivacyPolicyWebsite = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Politique de confidentialité - Site web Granulo</title>
        <meta 
          name="description" 
          content="Politique de confidentialité du site web granulo.app - Protection de vos données personnelles" 
        />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Politique de confidentialité - Site web Granulo
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground">
              <strong>Dernière mise à jour : 10 novembre 2025</strong>
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                Le site granulo.app est un site vitrine présentant l'application mobile Granulo. Cette politique de confidentialité explique comment nous collectons et utilisons les informations sur ce site web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Données collectées</h2>
              <p className="text-muted-foreground mb-3">
                Le site granulo.app collecte un minimum de données :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Données de navigation (adresse IP, type de navigateur, pages visitées) via les logs serveur standard</li>
                <li>Informations de contact si vous nous envoyez un message via le formulaire de contact</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Utilisation des données</h2>
              <p className="text-muted-foreground mb-3">Les données collectées sont utilisées pour :</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Assurer le bon fonctionnement du site web</li>
                <li>Répondre à vos demandes de contact</li>
                <li>Améliorer le contenu et la présentation du site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies</h2>
              <p className="text-muted-foreground">
                Ce site web n'utilise pas de cookies de tracking ou de publicité. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Services tiers</h2>
              <p className="text-muted-foreground mb-3">
                Le site peut inclure des liens vers des services tiers :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Google Play Store (pour télécharger l'application)</li>
                <li>PayPal (pour les dons)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Ces services ont leurs propres politiques de confidentialité que nous vous encourageons à consulter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Vos droits</h2>
              <p className="text-muted-foreground mb-3">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit d'opposition au traitement de vos données</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Sécurité</h2>
              <p className="text-muted-foreground">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Modifications</h2>
              <p className="text-muted-foreground">
                Nous nous réservons le droit de modifier cette politique de confidentialité. Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits :<br />
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

export default PrivacyPolicyWebsite;
