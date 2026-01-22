"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showMinimized, setShowMinimized] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    } else {
      setShowMinimized(true);
      setPreferences(JSON.parse(consent));
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowBanner(false);
    setShowMinimized(true);
  };

  const acceptNecessary = () => {
    const necessaryOnly = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem("cookie-consent", JSON.stringify(necessaryOnly));
    setPreferences(necessaryOnly);
    setShowBanner(false);
    setShowMinimized(true);
  };

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
    setShowMinimized(true);
  };

  const openSettings = () => {
    setShowMinimized(false);
    setShowBanner(true);
    setShowSettings(true);
  };

  return (
    <>
      {/* Minimized Cookie Icon */}
      <AnimatePresence>
        {showMinimized && !showBanner && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={openSettings}
            className="fixed bottom-4 right-4 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl ring-4 ring-primary/20 transition-all hover:scale-110 hover:shadow-2xl hover:ring-primary/40"
            aria-label="Ρυθμίσεις Cookies"
          >
            <Cookie className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-2xl">
              {!showSettings ? (
                /* Main Banner */
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Cookie className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-foreground">
                        Χρησιμοποιούμε Cookies
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας στον ιστότοπό μας.
                        Διαβάστε την{" "}
                        <Link href="/privacy-policy" className="cursor-pointer text-primary hover:underline">
                          Πολιτική Απορρήτου
                        </Link>{" "}
                        μας για περισσότερες πληροφορίες.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:shrink-0">
                    <Button variant="outline" size="sm" onClick={() => setShowSettings(true)} className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      Ρυθμίσεις
                    </Button>
                    <Button variant="outline" size="sm" onClick={acceptNecessary} className="cursor-pointer">
                      Μόνο Απαραίτητα
                    </Button>
                    <Button size="sm" onClick={acceptAll} className="cursor-pointer">
                      <Check className="mr-2 h-4 w-4" />
                      Αποδοχή Όλων
                    </Button>
                  </div>
                </div>
              ) : (
                /* Settings Panel */
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">Ρυθμίσεις Cookies</h3>
                    <Button variant="ghost" size="icon" onClick={() => setShowSettings(false)} className="cursor-pointer">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mb-6 space-y-4">
                    {/* Necessary Cookies */}
                    <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
                      <div>
                        <h4 className="font-medium text-foreground">Απαραίτητα Cookies</h4>
                        <p className="text-sm text-muted-foreground">
                          Είναι απαραίτητα για τη λειτουργία του ιστότοπου και δεν μπορούν να
                          απενεργοποιηθούν.
                        </p>
                      </div>
                      <div className="flex h-6 w-10 items-center justify-end rounded-full bg-primary px-1">
                        <div className="h-4 w-4 rounded-full bg-white" />
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
                      <div>
                        <h4 className="font-medium text-foreground">Cookies Ανάλυσης</h4>
                        <p className="text-sm text-muted-foreground">
                          Μας βοηθούν να κατανοήσουμε πώς χρησιμοποιείτε τον ιστότοπο.
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setPreferences((p) => ({ ...p, analytics: !p.analytics }))
                        }
                        className={`flex h-6 w-10 cursor-pointer items-center rounded-full px-1 transition-colors ${
                          preferences.analytics ? "justify-end bg-primary" : "justify-start bg-muted"
                        }`}
                      >
                        <div className="h-4 w-4 rounded-full bg-white shadow" />
                      </button>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
                      <div>
                        <h4 className="font-medium text-foreground">Cookies Μάρκετινγκ</h4>
                        <p className="text-sm text-muted-foreground">
                          Χρησιμοποιούνται για να σας εμφανίζουμε σχετικές διαφημίσεις.
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setPreferences((p) => ({ ...p, marketing: !p.marketing }))
                        }
                        className={`flex h-6 w-10 cursor-pointer items-center rounded-full px-1 transition-colors ${
                          preferences.marketing ? "justify-end bg-primary" : "justify-start bg-muted"
                        }`}
                      >
                        <div className="h-4 w-4 rounded-full bg-white shadow" />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={acceptNecessary} className="cursor-pointer">
                      Μόνο Απαραίτητα
                    </Button>
                    <Button onClick={savePreferences} className="cursor-pointer">Αποθήκευση Επιλογών</Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
