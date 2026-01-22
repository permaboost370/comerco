"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, Eye, X, ImageIcon } from "lucide-react";

type FileType = "pdf" | "image";

interface AnimalFeedProduct {
  id: string;
  name: string;
  nameEn: string;
  file: string;
  fileType: FileType;
}

const animalFeedProducts: AnimalFeedProduct[] = [
  {
    id: "feed-n-more",
    name: "Feed 'n' More",
    nameEn: "Feed 'n' More",
    file: "/pdfs/animal-feed/feed-n-more.pdf",
    fileType: "pdf",
  },
  {
    id: "calfpremium-50",
    name: "Σκόνη Γάλακτος CalfPremium 50",
    nameEn: "Milk Powder CalfPremium 50",
    file: "/pdfs/animal-feed/calfpremium-50.pdf",
    fileType: "pdf",
  },
  {
    id: "calfbest-12",
    name: "Σκόνη Γάλακτος CalfBest 12",
    nameEn: "Milk Powder CalfBest 12",
    file: "/pdfs/animal-feed/calfbest-12.jpg",
    fileType: "image",
  },
  {
    id: "lambkid-50nmore",
    name: "Σκόνη Γάλακτος LambKid 50'n'More",
    nameEn: "Milk Powder LambKid 50'n'More",
    file: "/pdfs/animal-feed/lambkid-50nmore.pdf",
    fileType: "pdf",
  },
];

export default function AnimalFeedPage() {
  const t = useTranslations("animalFeed");
  const locale = useLocale();
  const [selectedProduct, setSelectedProduct] = useState<AnimalFeedProduct | null>(null);

  const openModal = (product: AnimalFeedProduct) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/animal-feed-hero.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/70" />
        </div>

        <div className="container relative mx-auto px-4">
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
                      {product.fileType === "image" ? (
                        <ImageIcon className="h-6 w-6" />
                      ) : (
                        <FileText className="h-6 w-6" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground truncate">
                        {locale === "en" ? product.nameEn : product.name}
                      </p>
                      <p className="text-sm text-muted-foreground uppercase">
                        {product.fileType === "image" ? "JPG" : "PDF"}
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-2">
                      <button
                        onClick={() => openModal(product)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                        title={locale === "en" ? "View" : "Προβολή"}
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      <a
                        href={product.file}
                        download
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
                        title={t("downloadCatalogue")}
                      >
                        <Download className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Viewer */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative flex h-[90vh] w-full max-w-5xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-border/50 px-6 py-4">
                <h3 className="font-semibold text-foreground truncate pr-4">
                  {locale === "en" ? selectedProduct.nameEn : selectedProduct.name}
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={selectedProduct.file}
                    download
                    className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-primary/90"
                  >
                    <Download className="h-4 w-4" />
                    {locale === "en" ? "Download" : "Λήψη"}
                  </a>
                  <button
                    onClick={closeModal}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-auto bg-muted/30">
                {selectedProduct.fileType === "image" ? (
                  <div className="flex h-full items-center justify-center p-4">
                    <Image
                      src={selectedProduct.file}
                      alt={locale === "en" ? selectedProduct.nameEn : selectedProduct.name}
                      width={1200}
                      height={1600}
                      className="max-h-full w-auto object-contain rounded-lg shadow-lg"
                    />
                  </div>
                ) : (
                  <iframe
                    src={selectedProduct.file}
                    className="h-full w-full"
                    title={locale === "en" ? selectedProduct.nameEn : selectedProduct.name}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
