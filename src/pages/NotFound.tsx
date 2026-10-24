import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import granuloLogo from "@/assets/granulo-logo.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground p-4">
      <div className="max-w-md w-full rounded-3xl bg-card border border-border p-8 text-center shadow-medium space-y-6">
        <img
          src={granuloLogo}
          alt="Granulo"
          className="h-20 w-20 mx-auto rounded-full drop-shadow-md object-cover"
        />
        <div className="space-y-2">
          <span className="inline-block text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
            Erreur 404
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
            Page introuvable
          </h1>
          <p className="text-sm text-muted-foreground">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        <Button asChild className="rounded-full font-bold px-6">
          <Link to="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Retour à l'accueil</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
