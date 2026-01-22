"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";

const languages = [
  { code: "el", name: "Ελληνικά", flag: "🇬🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  const switchLocale = (newLocale: "el" | "en") => {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-muted disabled:opacity-50"
      >
        <Globe className={`h-4 w-4 text-primary ${isPending ? "animate-spin" : ""}`} />
        <span className="hidden sm:inline">{currentLanguage.flag}</span>
        <span className="hidden md:inline">{currentLanguage.code.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 cursor-default"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full z-50 mt-2 min-w-[160px] overflow-hidden rounded-xl border border-border bg-card shadow-xl"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLocale(lang.code)}
                  className={`flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-muted ${
                    locale === lang.code ? "bg-primary/5" : ""
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="flex-1 font-medium">{lang.name}</span>
                  {locale === lang.code && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
