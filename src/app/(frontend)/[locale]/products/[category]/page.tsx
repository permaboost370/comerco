"use client";

import { use, useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Leaf, FlaskConical, Boxes, Droplets, Sprout, Pipette, TreeDeciduous, Package, LayoutGrid, List, AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { productCategories, getCategoryById, Product } from "@/data/products";

type ViewMode = "grid" | "list" | "compact";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FlaskConical,
  Boxes,
  Droplets,
  Sprout,
  Pipette,
  TreeDeciduous,
  Leaf,
};

// Product Card Components for different view modes
function ProductGridCard({ product, category, locale }: { product: Product; category: { id: string }; locale: string }) {
  return (
    <Link
      href={`/products/${category.id}/${product.id}`}
      className="group relative flex flex-col rounded-xl border border-white/40 bg-white/60 backdrop-blur-sm shadow-md shadow-black/5 transition-all duration-300 hover:bg-white/80 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
    >
      <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
        <Package className="h-16 w-16 text-primary/30" />
        {product.isBio && (
          <Badge className="absolute top-3 right-3 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-2 py-0.5">
            BIO
          </Badge>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {locale === "en" ? product.nameEn : product.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {locale === "en" ? product.descriptionEn : product.description}
        </p>
        <p className="mt-3 text-sm font-medium text-primary group-hover:underline">
          {locale === "en" ? "View Product" : "Δείτε το Προϊόν"} →
        </p>
      </div>
    </Link>
  );
}

function ProductListCard({ product, category, locale }: { product: Product; category: { id: string }; locale: string }) {
  return (
    <Link
      href={`/products/${category.id}/${product.id}`}
      className="group flex items-start gap-4 rounded-xl border border-white/40 bg-white/60 backdrop-blur-sm shadow-md shadow-black/5 transition-all duration-300 hover:bg-white/80 hover:border-primary/30 hover:shadow-lg p-4"
    >
      <div className="relative shrink-0 w-24 h-24 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
        <Package className="h-10 w-10 text-primary/30" />
        {product.isBio && (
          <Badge className="absolute -top-1 -right-1 bg-green-600 hover:bg-green-700 text-white text-[10px] font-bold px-1.5 py-0.5">
            BIO
          </Badge>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-foreground text-base mb-1 group-hover:text-primary transition-colors">
          {locale === "en" ? product.nameEn : product.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-2">
          {locale === "en" ? product.descriptionEn : product.description}
        </p>
        <p className="text-sm font-medium text-primary group-hover:underline">
          {locale === "en" ? "View Product" : "Δείτε το Προϊόν"} →
        </p>
      </div>
    </Link>
  );
}

function ProductCompactCard({ product, category, locale }: { product: Product; category: { id: string }; locale: string }) {
  return (
    <Link
      href={`/products/${category.id}/${product.id}`}
      className="group flex items-center gap-3 rounded-lg border border-white/40 bg-white/60 backdrop-blur-sm shadow-sm transition-all duration-200 hover:bg-white/80 hover:border-primary/30 px-4 py-3"
    >
      <div className="shrink-0 w-10 h-10 rounded-md bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
        <Package className="h-5 w-5 text-primary/30" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors truncate">
          {locale === "en" ? product.nameEn : product.name}
        </h3>
      </div>
      {product.isBio && (
        <Badge className="shrink-0 bg-green-600 hover:bg-green-700 text-white text-[10px] font-bold px-1.5 py-0.5">
          BIO
        </Badge>
      )}
      <span className="text-xs text-primary font-medium group-hover:underline shrink-0">
        {locale === "en" ? "View" : "Δείτε"} →
      </span>
    </Link>
  );
}

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = use(params);
  const category = getCategoryById(resolvedParams.category);
  const t = useTranslations("products");
  const locale = useLocale();
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  if (!category) {
    notFound();
  }

  const Icon = iconMap[category.icon] || Leaf;
  const hasProducts = category.products.length > 0;

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
                {hasProducts && (
                  <p className="mt-2 text-sm text-primary font-medium">
                    {category.products.length} {locale === "en" ? "products" : "προϊόντα"}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      {hasProducts ? (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            {/* View Toggle */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                {category.products.length} {locale === "en" ? "products" : "προϊόντα"}
              </p>
              <div className="flex items-center gap-1 rounded-lg border border-white/40 bg-white/60 backdrop-blur-sm p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center justify-center w-9 h-9 rounded-md transition-all ${
                    viewMode === "grid"
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                  }`}
                  title={locale === "en" ? "Grid view" : "Προβολή πλέγματος"}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`flex items-center justify-center w-9 h-9 rounded-md transition-all ${
                    viewMode === "list"
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                  }`}
                  title={locale === "en" ? "List view" : "Προβολή λίστας"}
                >
                  <List className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("compact")}
                  className={`flex items-center justify-center w-9 h-9 rounded-md transition-all ${
                    viewMode === "compact"
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                  }`}
                  title={locale === "en" ? "Compact view" : "Συμπαγής προβολή"}
                >
                  <AlignJustify className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Products Grid View */}
            {viewMode === "grid" && (
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {category.products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                  >
                    <ProductGridCard product={product} category={category} locale={locale} />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Products List View */}
            {viewMode === "list" && (
              <div className="flex flex-col gap-4">
                {category.products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                  >
                    <ProductListCard product={product} category={category} locale={locale} />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Products Compact View */}
            {viewMode === "compact" && (
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {category.products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.015 }}
                  >
                    <ProductCompactCard product={product} category={category} locale={locale} />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center"
            >
              <h2 className="mb-3 text-xl font-bold text-foreground">
                {t("notFoundTitle")}
              </h2>
              <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
                {t("notFoundDesc")}
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">{t("requestPriceList")}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+302103612754">{t("call")}: 210 361 2754</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        /* Empty State - Coming Soon */
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-sm p-8 shadow-xl shadow-black/5 lg:p-12"
            >
              <div className="mx-auto max-w-3xl text-center">
                <Boxes className="mx-auto mb-6 h-16 w-16 text-primary/50" />
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
      )}

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
                      {cat.products.length > 0 && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {cat.products.length} {locale === "en" ? "products" : "προϊόντα"}
                        </p>
                      )}
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
