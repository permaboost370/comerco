"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Leaf, FlaskConical, Boxes, Droplets, Sprout, Pipette, TreeDeciduous, ArrowRight, Download, FileText } from "lucide-react";
import { productCategories } from "@/data/products";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FlaskConical,
  Boxes,
  Droplets,
  Sprout,
  Pipette,
  TreeDeciduous,
  Leaf,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProductsPage() {
  const t = useTranslations("products");
  const locale = useLocale();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/products-hero.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for white text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40" />
        </div>

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-white lg:text-5xl" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{t("title")}</h1>
            <p className="text-lg text-white/90" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
              {t("subtitle")}
            </p>

            {/* Download Catalogue Card */}
            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-sm px-6 py-4 shadow-lg shadow-black/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FileText className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">
                  {locale === "en" ? "Product Catalogue" : "Κατάλογος Προϊόντων"}
                </p>
                <p className="text-sm text-muted-foreground">PDF</p>
              </div>
              <a
                href="/catalogue.pdf"
                download
                className="ml-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
                title={locale === "en" ? "Download Catalogue" : "Λήψη Καταλόγου"}
              >
                <Download className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {productCategories.map((category) => {
              const Icon = iconMap[category.icon] || Leaf;
              const productCount = category.products.length;
              return (
                <motion.div key={category.id} variants={itemVariants}>
                  <Link
                    href={`/products/${category.id}`}
                    className="group relative block h-full rounded-2xl border border-white/40 bg-white/60 backdrop-blur-sm p-8 shadow-lg shadow-black/5 transition-all duration-300 hover:bg-white/80 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                  >
                    {/* Product Count Badge */}
                    {productCount > 0 && (
                      <Badge className="absolute top-4 right-4 bg-primary/10 text-primary hover:bg-primary/20 text-xs font-semibold">
                        {productCount} {locale === "en" ? "products" : "προϊόντα"}
                      </Badge>
                    )}

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:from-primary group-hover:to-primary/80 group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h2 className="mb-3 text-xl font-bold leading-tight text-foreground group-hover:text-primary">
                      {locale === "en" ? category.nameEn : category.name}
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                      {locale === "en" ? category.descriptionEn : category.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      {t("viewProduct")}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
              {t("notFoundTitle")}
            </h2>
            <p className="mb-6 text-muted-foreground">
              {t("notFoundDesc")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t("contactUs")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
