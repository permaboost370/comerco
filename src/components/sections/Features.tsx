"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Leaf, Sprout, TreeDeciduous } from "lucide-react";

export default function Features() {
  const t = useTranslations("mission");

  const results = [
    { icon: Sprout, text: t("result1") },
    { icon: Leaf, text: t("result2") },
    { icon: TreeDeciduous, text: t("result3") },
  ];

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
            {t("title")}
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
                {t("description1")}{" "}
                <span className="font-semibold text-foreground">
                  {t("highlight1")}
                </span>
                {t("description2")}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t("description3")}{" "}
                <span className="font-semibold text-foreground">
                  {t("highlight2")}
                </span>
                {t("description4")}
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
                {t("resultsTitle")}
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
                    className="group flex items-center gap-4 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-sm p-5 shadow-lg shadow-black/5 transition-all duration-300 hover:bg-white/80 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25 group-hover:scale-110">
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
            className="mt-12 rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-8 text-center text-primary-foreground shadow-2xl shadow-primary/25 lg:p-12 ring-1 ring-white/10"
          >
            <p className="mx-auto max-w-3xl text-lg lg:text-xl">
              {t("futureVision")} <span className="font-bold">{t("sustainableFuture")}</span> {t("futureVisionEnd")}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
