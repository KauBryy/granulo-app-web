import React from "react";
import { useLanguage, Language } from "@/context/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe, Check } from "lucide-react";

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

interface LanguageSelectorProps {
  variant?: "header" | "pill" | "minimal";
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = "header", className = "" }) => {
  const { language, setLanguage } = useLanguage();

  const current = languages.find((l) => l.code === language) || languages[0];

  if (variant === "pill") {
    return (
      <div className={`inline-flex items-center p-1 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-sm ${className}`}>
        {languages.map((lang) => {
          const isActive = lang.code === language;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm scale-105"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
              title={lang.label}
            >
              <span>{lang.flag}</span>
              <span className="uppercase">{lang.code}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`flex items-center gap-2 rounded-full border-border/80 bg-card/60 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-foreground hover:bg-card/90 shadow-sm transition-all duration-200 hover:scale-[1.02] ${className}`}
        >
          <Globe className="h-3.5 w-3.5 text-primary" />
          <span className="text-base leading-none">{current.flag}</span>
          <span className="font-medium">{current.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44 rounded-2xl p-1.5 backdrop-blur-xl bg-card/95 border-border/80 shadow-medium">
        {languages.map((lang) => {
          const isActive = lang.code === language;
          return (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium cursor-pointer transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary font-bold"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-base leading-none">{lang.flag}</span>
                <span>{lang.label}</span>
              </div>
              {isActive && <Check className="h-3.5 w-3.5 text-primary" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
