"use client";

import { use } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Leaf, Microscope, Package, Droplets, Sparkles, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productCategories, getCategoryById } from "@/data/products";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Leaf,
  Microscope,
  Package,
  Droplets,
  Sparkles,
  Settings,
};

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = use(params);
  const category = getCategoryById(resolvedParams.category);
  const t = useTranslations("products");
  const locale = useLocale();

  if (!category) {
    notFound();
  }

  const Icon = iconMap[category.icon] || Leaf;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("backToProducts")}
              </Link>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground lg:h-20 lg:w-20">
                <Icon className="h-8 w-8 lg:h-10 lg:w-10" />
              </div>
              <div>
                <h1 className="mb-2 text-2xl font-bold text-foreground lg:text-4xl">
                  {locale === "en" ? category.nameEn : category.name}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {locale === "en" ? category.descriptionEn : category.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-sm p-8 shadow-xl shadow-black/5 lg:p-12"
          >
            <div className="mx-auto max-w-3xl text-center">
              <Package className="mx-auto mb-6 h-16 w-16 text-primary/50" />
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                {t("productCatalog")}
              </h2>
              <p className="mb-8 text-muted-foreground">
                {t("catalogComingSoon")}
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">{t("requestPriceList")}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+302103612754">{t("call")}: 210 361 2754</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground">{t("otherCategories")}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {productCategories
              .filter((c) => c.id !== category.id)
              .slice(0, 3)
              .map((cat) => {
                const CatIcon = iconMap[cat.icon] || Leaf;
                return (
                  <Link
                    key={cat.id}
                    href={`/products/${cat.id}`}
                    className="group flex items-center gap-4 rounded-xl border border-white/40 bg-white/60 backdrop-blur-sm p-4 shadow-md shadow-black/5 transition-all duration-300 hover:bg-white/80 hover:border-primary/30 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <CatIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold leading-tight text-foreground group-hover:text-primary">
                        {locale === "en" ? cat.nameEn : cat.name}
                      </h3>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
