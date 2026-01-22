"use client";

import Link from "next/link";
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
              Οι Κατηγορίες Προϊόντων μας
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Πλήρης γκάμα λιπασμάτων για κάθε γεωργική ανάγκη. Από βασικά θρεπτικά στοιχεία έως
              εξειδικευμένες λύσεις.
            </p>
          </div>
          <Button asChild variant="outline" className="gap-2">
            <Link href="/products">
              Δείτε Όλα τα Προϊόντα
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
                  className="group block h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold leading-tight text-foreground group-hover:text-primary">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
