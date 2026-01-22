"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const t = useTranslations("hero");
  const tc = useTranslations("common");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-4 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl xl:text-6xl">
              {t("title")}{" "}
              <span className="text-primary">{t("titleHighlight")}</span>
            </h1>

            <p className="mb-8 max-w-lg text-lg text-muted-foreground">
              {t("description")}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2 rounded-full px-8 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
                <Link href="/products">
                  {t("viewProducts")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-2 px-8 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary">
                <Link href="/contact">{tc("contact")}</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-4 text-center shadow-lg shadow-black/5 transition-all duration-300 hover:bg-white/80 hover:shadow-xl">
                <div className="text-3xl font-bold text-primary lg:text-4xl">12+</div>
                <div className="text-xs text-muted-foreground sm:text-sm">{t("yearsInGreece")}</div>
              </div>
              <div className="rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-4 text-center shadow-lg shadow-black/5 transition-all duration-300 hover:bg-white/80 hover:shadow-xl">
                <div className="text-3xl font-bold text-primary lg:text-4xl">1000+</div>
                <div className="text-xs text-muted-foreground sm:text-sm">{t("partnerFarmers")}</div>
              </div>
              <div className="rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-4 text-center shadow-lg shadow-black/5 transition-all duration-300 hover:bg-white/80 hover:shadow-xl">
                <div className="text-3xl font-bold text-primary lg:text-4xl">100%</div>
                <div className="text-xs text-muted-foreground sm:text-sm">{t("greeceCoverage")}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual - Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            {/* Glass Card Container */}
            <div className="rounded-3xl bg-white/60 backdrop-blur-sm border border-white/40 p-3 shadow-xl shadow-black/10">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero.png"
                  alt="Comerco Agrotechnology - Λιπάσματα υψηλής ποιότητας"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
