"use client";

import { use } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Package, Phone, Mail, ChevronRight, Leaf, FlaskConical, Boxes, Droplets, Sprout, Pipette, TreeDeciduous } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getCategoryById, getProductById, productCategories } from "@/data/products";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FlaskConical,
  Boxes,
  Droplets,
  Sprout,
  Pipette,
  TreeDeciduous,
  Leaf,
};

export default function ProductPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const resolvedParams = use(params);
  const category = getCategoryById(resolvedParams.category);
  const product = getProductById(resolvedParams.product);
  const t = useTranslations("products");
  const locale = useLocale();

  if (!category || !product) {
    notFound();
  }

  const Icon = iconMap[category.icon] || Leaf;

  // Get related products from same category (exclude current product)
  const relatedProducts = category.products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      {/* Breadcrumb Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-6">
        <div className="container mx-auto px-4">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap"
          >
            <Link href="/products" className="hover:text-primary transition-colors">
              {t("allProducts")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={`/products/${category.id}`} className="hover:text-primary transition-colors">
              {locale === "en" ? category.nameEn : category.name}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">
              {locale === "en" ? product.nameEn : product.name}
            </span>
          </motion.nav>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-square rounded-2xl border border-white/40 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center overflow-hidden shadow-lg">
                <Package className="h-32 w-32 text-primary/30" />
                {/* BIO Badge */}
                {product.isBio && (
                  <Badge className="absolute top-4 right-4 bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-3 py-1">
                    BIO
                  </Badge>
                )}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              {/* Category Badge */}
              <Link
                href={`/products/${category.id}`}
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-4 w-fit"
              >
                <Icon className="h-4 w-4" />
                {locale === "en" ? category.nameEn : category.name}
              </Link>

              {/* Product Name */}
              <h1 className="text-3xl font-bold text-foreground lg:text-4xl mb-4">
                {locale === "en" ? product.nameEn : product.name}
              </h1>

              {/* BIO indicator */}
              {product.isBio && (
                <div className="flex items-center gap-2 mb-6">
                  <Badge variant="outline" className="border-green-600 text-green-700 bg-green-50">
                    <Leaf className="h-3 w-3 mr-1" />
                    {locale === "en" ? "Organic Certified" : "Βιολογικό Πιστοποιημένο"}
                  </Badge>
                </div>
              )}

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  {locale === "en" ? "Description" : "Περιγραφή"}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {locale === "en" ? product.descriptionEn : product.description}
                </p>
              </div>

              <Separator className="my-6" />

              {/* Contact CTA */}
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h3 className="font-semibold text-foreground mb-2">
                  {locale === "en" ? "Interested in this product?" : "Ενδιαφέρεστε για αυτό το προϊόν;"}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {locale === "en"
                    ? "Contact us for pricing, availability and technical specifications."
                    : "Επικοινωνήστε μαζί μας για τιμές, διαθεσιμότητα και τεχνικές προδιαγραφές."}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1">
                    <Link href="/contact">
                      <Mail className="h-4 w-4 mr-2" />
                      {locale === "en" ? "Contact Us" : "Επικοινωνία"}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href="tel:+302103612754">
                      <Phone className="h-4 w-4 mr-2" />
                      210 361 2754
                    </a>
                  </Button>
                </div>
              </div>

              {/* Back to category link */}
              <Link
                href={`/products/${category.id}`}
                className="inline-flex items-center gap-2 mt-6 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                {locale === "en" ? "Back to" : "Πίσω στα"} {locale === "en" ? category.nameEn : category.name}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="bg-muted/30 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">
                {locale === "en" ? "Related Products" : "Σχετικά Προϊόντα"}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((relatedProduct, index) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link
                      href={`/products/${category.id}/${relatedProduct.id}`}
                      className="group relative flex flex-col rounded-xl border border-white/40 bg-white/60 backdrop-blur-sm shadow-md shadow-black/5 transition-all duration-300 hover:bg-white/80 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                    >
                      {/* Product Image Placeholder */}
                      <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                        <Package className="h-12 w-12 text-primary/30" />
                        {relatedProduct.isBio && (
                          <Badge className="absolute top-3 right-3 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-2 py-0.5">
                            BIO
                          </Badge>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <h3 className="font-bold text-foreground text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                          {locale === "en" ? relatedProduct.nameEn : relatedProduct.name}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {locale === "en" ? relatedProduct.descriptionEn : relatedProduct.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Other Categories Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">
              {t("otherCategories")}
            </h2>
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
