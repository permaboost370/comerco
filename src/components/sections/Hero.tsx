"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-4 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl xl:text-6xl">
              Λιπάσματα Υψηλής Ποιότητας για{" "}
              <span className="text-primary">Εξαιρετικές Σοδειές</span>
            </h1>

            <p className="mb-8 max-w-lg text-lg text-muted-foreground">
              Η Comerco Agrotechnology είναι ένας από τους μεγαλύτερους παραγωγούς φυσικών και
              βιολογικών λιπασμάτων στην Ευρώπη. Προσφέρουμε καινοτόμες και οικολογικά βιώσιμες
              λύσεις βιοτεχνολογίας για τη θρέψη των φυτών.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/products">
                  Δείτε τα Προϊόντα
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Επικοινωνία</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary lg:text-4xl">12+</div>
                <div className="text-sm text-muted-foreground">Χρόνια στην Ελλάδα</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary lg:text-4xl">500+</div>
                <div className="text-sm text-muted-foreground">Συνεργαζόμενοι Αγρότες</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary lg:text-4xl">100%</div>
                <div className="text-sm text-muted-foreground">Κάλυψη Ελλάδας</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image
                src="/images/hero.png"
                alt="Comerco Agrotechnology - Λιπάσματα υψηλής ποιότητας"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
