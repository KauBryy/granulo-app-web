import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const LegalNotice = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Mentions légales - Granulo</title>
        <meta 
          name="description" 
          content="Mentions légales du site web granulo.app" 
        />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Mentions légales
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Éditeur du site</h2>
              <p className="text-muted-foreground">
                Le site granulo.app est édité par un développeur indépendant.<br />
                Contact : <strong className="text-foreground">contact@granulo.app</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Hébergement</h2>
              <p className="text-muted-foreground">
                Ce site est hébergé par Lovable (lovable.dev)<br />
                Les données de l'application mobile sont hébergées sur Firebase (Google Cloud Platform)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Propriété intellectuelle</h2>
              <p className="text-muted-foreground">
                L'ensemble du contenu de ce site (textes, images, logo, icônes) est la propriété exclusive de Granulo, sauf mention contraire.
                Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Responsabilité</h2>
              <p className="text-muted-foreground">
                L'éditeur s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
                Toutefois, il ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Liens hypertextes</h2>
              <p className="text-muted-foreground">
                Ce site peut contenir des liens vers d'autres sites internet. L'éditeur n'est pas responsable du contenu de ces sites externes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Données personnelles</h2>
              <p className="text-muted-foreground">
                Pour plus d'informations sur le traitement de vos données personnelles, veuillez consulter notre{" "}
                <a href="/privacy-website" className="text-primary hover:underline">
                  Politique de confidentialité
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Droit applicable</h2>
              <p className="text-muted-foreground">
                Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l'utilisation de ce site relève de la compétence exclusive des tribunaux français.
              </p>
            </section>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default LegalNotice;
