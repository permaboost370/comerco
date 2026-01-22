"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, FlaskConical, Boxes, Droplets, Sprout, Pipette, TreeDeciduous } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/data/products";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Leaf,
  FlaskConical,
  Boxes,
  Droplets,
  Sprout,
  Pipette,
  TreeDeciduous,
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

export default function ProductsOverview() {
  const t = useTranslations("products");
  const locale = useLocale();

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-start justify-between gap-4 lg:mb-16 lg:flex-row lg:items-end"
        >
          <div>
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              {t("ourCategories")}
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              {t("categoriesDesc")}
            </p>
          </div>
          <Button asChild variant="outline" className="gap-2 rounded-full border-2 px-6 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/25">
            <Link href="/products">
              {t("viewAllProducts")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {productCategories.map((category) => {
            const Icon = iconMap[category.icon] || Leaf;
            return (
              <motion.div key={category.id} variants={itemVariants}>
                <Link
                  href={`/products/${category.id}`}
                  className="group block h-full rounded-2xl border border-white/40 bg-white/60 backdrop-blur-sm p-6 shadow-lg shadow-black/5 transition-all duration-300 hover:bg-white/80 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:from-primary group-hover:to-primary/80 group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold leading-tight text-foreground group-hover:text-primary">
                    {locale === "en" ? category.nameEn : category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === "en" ? category.descriptionEn : category.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
