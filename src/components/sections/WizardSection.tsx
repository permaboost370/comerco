"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronRight } from "lucide-react";
import ProductWizard from "@/components/wizard/ProductWizard";
import type { ProductCategory } from "@/lib/products";
import type { WizardCropCategory } from "@/lib/wizard";
import type { WizardBlockData } from "@/lib/home-page-types";

export default function WizardSection({
  data,
  categories,
  wizardCategories,
}: {
  data: WizardBlockData;
  categories: ProductCategory[];
  wizardCategories: WizardCropCategory[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    badge = "",
    title = "",
    description = "",
    ctaLabel = "",
    steps = [],
    cropPreview = [],
    moreLabel = "",
  } = data;

  return (
    <>
      <section className="relative overflow-hidden bg-[#1B4D3E]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {badge ? (
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 border border-emerald-400/30 px-4 py-1.5 text-emerald-300 text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  {badge}
                </div>
              ) : null}

              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight whitespace-pre-line">
                  {title}
                </h2>
                {description ? (
                  <p className="text-emerald-100/80 text-lg leading-relaxed max-w-md">{description}</p>
                ) : null}
              </div>

              {steps && steps.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {steps.map((step, i) => (
                    <div key={step.id ?? i} className="flex items-center gap-1.5">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold">
                        {i + 1}
                      </div>
                      <span className="text-emerald-100/70 text-sm">{step.label}</span>
                      {i < steps.length - 1 ? (
                        <ChevronRight className="w-3.5 h-3.5 text-emerald-400/40" />
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}

              {ctaLabel ? (
                <div>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="group inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-base font-bold text-[#1B4D3E] shadow-lg hover:shadow-xl hover:bg-emerald-50 transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <Sparkles className="w-5 h-5 text-[#1B4D3E] group-hover:rotate-12 transition-transform" />
                    {ctaLabel}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              ) : null}
            </motion.div>

            {cropPreview && cropPreview.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hidden lg:block"
              >
                <div className="grid grid-cols-4 gap-3">
                  {cropPreview.map((crop, i) => (
                    <motion.button
                      key={crop.id ?? i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.05 * i }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      onClick={() => setIsOpen(true)}
                      className="flex flex-col items-center gap-2 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm p-4 cursor-pointer hover:bg-white/15 transition-colors"
                    >
                      <span className="text-3xl">{crop.emoji}</span>
                      <span className="text-xs text-emerald-100/80 font-medium text-center leading-tight">
                        {crop.label}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {moreLabel ? (
                  <div className="mt-3 text-center">
                    <span className="text-emerald-400/60 text-sm">{moreLabel}</span>
                  </div>
                ) : null}
              </motion.div>
            ) : null}
          </div>
        </div>
      </section>

      <ProductWizard
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        categories={categories}
        wizardCategories={wizardCategories}
      />
    </>
  );
}
