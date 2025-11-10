import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const TermsApp = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Conditions d'utilisation - Application Granulo</title>
        <meta 
          name="description" 
          content="Conditions d'utilisation de l'application mobile Granulo" 
        />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Conditions d'utilisation - Application Granulo
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground">
              <strong>Dernière mise à jour : 7 octobre 2025</strong>
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptation des conditions</h2>
              <p className="text-muted-foreground">
                En utilisant l'application Granulo, vous acceptez les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Description du service</h2>
              <p className="text-muted-foreground mb-3">Granulo est une application mobile permettant de :</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Suivre vos achats de sacs de granulés</li>
                <li>Enregistrer votre consommation</li>
                <li>Consulter vos statistiques de chauffage</li>
                <li>Exporter vos données</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Compte utilisateur</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Création de compte</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Vous devez fournir une adresse e-mail valide</li>
                <li>Vous êtes responsable de la confidentialité de votre mot de passe</li>
                <li>Un seul compte par utilisateur</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Responsabilités</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Vous êtes responsable de toutes les activités sur votre compte</li>
                <li>Vous devez nous notifier immédiatement en cas d'utilisation non autorisée</li>
                <li>Vous ne devez pas partager vos identifiants</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Utilisation du service</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Autorisé</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Utilisation personnelle de l'application</li>
                <li>Saisie de vos propres données</li>
                <li>Export de vos données</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Interdit</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Utilisation commerciale sans autorisation</li>
                <li>Tentative de piratage ou d'accès non autorisé</li>
                <li>Utilisation abusive des ressources</li>
                <li>Partage de contenu illégal ou inapproprié</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Propriété intellectuelle</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>L'application Granulo et son contenu sont protégés par le droit d'auteur</li>
                <li>Le logo et le nom "Granulo" sont des marques déposées</li>
                <li>Vous ne pouvez pas copier, modifier ou distribuer l'application sans autorisation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation de responsabilité</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>L'application est fournie "en l'état"</li>
                <li>Nous ne garantissons pas l'exactitude absolue des calculs statistiques</li>
                <li>Nous ne sommes pas responsables des décisions prises sur la base des données de l'application</li>
                <li>L'utilisation de l'application se fait à vos propres risques</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Disponibilité du service</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Nous nous efforçons de maintenir le service disponible 24/7</li>
                <li>Nous ne garantissons pas une disponibilité ininterrompue</li>
                <li>Des maintenances planifiées peuvent survenir</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Modifications du service</h2>
              <p className="text-muted-foreground mb-3">Nous nous réservons le droit de :</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Modifier les fonctionnalités de l'application</li>
                <li>Suspendre ou arrêter le service</li>
                <li>Modifier ces conditions d'utilisation</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Les modifications importantes seront notifiées via l'application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Résiliation</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Vous pouvez supprimer votre compte à tout moment depuis les paramètres</li>
                <li>Nous pouvons suspendre ou supprimer votre compte en cas de violation de ces conditions</li>
                <li>En cas de résiliation, vos données seront supprimées définitivement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Droit applicable</h2>
              <p className="text-muted-foreground">
                Ces conditions sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents français.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant ces conditions :<br />
                <strong className="text-foreground">contact@granulo.app</strong>
              </p>
            </section>

            <div className="border-t border-border pt-8 mt-12">
              <p className="text-muted-foreground italic text-center">
                En continuant à utiliser Granulo, vous confirmez avoir lu et accepté ces conditions d'utilisation.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default TermsApp;
