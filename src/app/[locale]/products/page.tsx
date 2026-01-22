"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Microscope, Package, Droplets, Sparkles, Settings, ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Leaf,
  Microscope,
  Package,
  Droplets,
  Sparkles,
  Settings,
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
            <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Τα Προϊόντα μας</h1>
            <p className="text-lg text-muted-foreground">
              Εξερευνήστε την ολοκληρωμένη γκάμα προϊόντων μας. Από λιπάσματα κύριων στοιχείων έως
              βιοδιεγέρτες και οργανικά λιπάσματα νέου τύπου.
            </p>
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
              return (
                <motion.div key={category.id} variants={itemVariants}>
                  <Link
                    href={`/products/${category.id}`}
                    className="group block h-full rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-xl"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h2 className="mb-3 text-xl font-bold leading-tight text-foreground group-hover:text-primary">
                      {category.name}
                    </h2>
                    <p className="mb-6 text-muted-foreground">{category.description}</p>

                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      Δείτε Προϊόντα
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
      <section className="bg-muted/50 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
              Δεν βρήκατε αυτό που ψάχνετε;
            </h2>
            <p className="mb-6 text-muted-foreground">
              Η γκάμα προϊόντων μας είναι εκτενής. Επικοινωνήστε μαζί μας για εξειδικευμένα προϊόντα
              ή προσαρμοσμένα μείγματα για τις συγκεκριμένες ανάγκες των καλλιεργειών σας.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Επικοινωνήστε μαζί μας
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
