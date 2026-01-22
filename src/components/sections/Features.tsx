"use client";

import { motion } from "framer-motion";
import { Leaf, Sprout, TreeDeciduous } from "lucide-react";

const results = [
  { icon: Sprout, text: "Ανάπτυξη ριζικού συστήματος" },
  { icon: Leaf, text: "Βελτίωση ανάπτυξης φυτών" },
  { icon: TreeDeciduous, text: "Φυσική αντοχή στις καταπονήσεις" },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl xl:text-5xl">
            Η Αποστολή μας
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left - Mission Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
                Έχουμε αναπτύξει και προσφέρουμε{" "}
                <span className="font-semibold text-foreground">
                  καινοτόμες και οικολογικά βιώσιμες λύσεις βιοτεχνολογίας
                </span>
                , οι οποίες είναι αποτελεσματικές τόσο στον τομέα της θρέψης των φυτών
                όσο και στην ανάκαμψη του περιβάλλοντος.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Προσφέρουμε{" "}
                <span className="font-semibold text-foreground">
                  εναλλακτικές λύσεις έναντι παραδοσιακών λιπασμάτων
                </span>
                , και δημιουργούμε προστιθέμενη αξία για να κάνουμε τη διαφορά.
              </p>
            </motion.div>

            {/* Right - Results Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                Τα αποτελέσματα της εργασίας μας
              </p>
              {results.map((result, index) => {
                const Icon = result.icon;
                return (
                  <motion.div
                    key={result.text}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-lg font-medium text-foreground">{result.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Bottom - Future Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 rounded-3xl bg-primary p-8 text-center text-primary-foreground lg:p-12"
          >
            <p className="mx-auto max-w-3xl text-lg lg:text-xl">
              Για ένα <span className="font-bold">βιώσιμο μέλλον</span> για τις σημερινές
              και τις μελλοντικές γενιές.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
