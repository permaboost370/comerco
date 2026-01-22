"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const animalFeedProducts = [
  {
    id: "feed-n-more",
    name: "Feed 'n' More",
    nameEn: "Feed 'n' More",
    pdf: "/pdfs/animal-feed/feed-n-more.pdf",
  },
  {
    id: "calfpremium-50",
    name: "Σκόνη Γάλακτος CalfPremium 50",
    nameEn: "Milk Powder CalfPremium 50",
    pdf: "/pdfs/animal-feed/calfpremium-50.pdf",
  },
  {
    id: "calfbest-12",
    name: "Σκόνη Γάλακτος CalfBest 12",
    nameEn: "Milk Powder CalfBest 12",
    pdf: "/pdfs/animal-feed/calfbest-12.pdf",
  },
  {
    id: "lambkid-50nmore",
    name: "Σκόνη Γάλακτος LambKid 50'n'More",
    nameEn: "Milk Powder LambKid 50'n'More",
    pdf: "/pdfs/animal-feed/lambkid-50nmore.pdf",
  },
];

export default function AnimalFeedPage() {
  const t = useTranslations("animalFeed");
  const locale = useLocale();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">
              {t("title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 text-center"
          >
            <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
              {t("ourProducts")}
            </h2>
          </motion.div>

          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {animalFeedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                >
                  <div className="flex items-center gap-4 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-sm px-5 py-4 shadow-lg shadow-black/5 transition-all duration-300 hover:bg-white/80 hover:shadow-xl">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground truncate">
                        {locale === "en" ? product.nameEn : product.name}
                      </p>
                      <p className="text-sm text-muted-foreground">PDF</p>
                    </div>
                    <a
                      href={product.pdf}
                      download
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
                      title={t("downloadCatalogue")}
                    >
                      <Download className="h-5 w-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
