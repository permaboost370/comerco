"use client";

import { motion } from "framer-motion";
import { Leaf, Sprout, TreeDeciduous, FlaskConical, Droplets, Sparkles, type LucideIcon } from "lucide-react";
import type { MissionBlockData } from "@/lib/home-page-types";

const ICONS: Record<string, LucideIcon> = {
  Sprout,
  Leaf,
  TreeDeciduous,
  FlaskConical,
  Droplets,
  Sparkles,
};

export default function Features({ data }: { data: MissionBlockData }) {
  const {
    title = "",
    paragraphs = [],
    resultsTitle = "",
    results = [],
    futureVision = "",
    sustainableFuture = "",
    futureVisionEnd = "",
  } = data;

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl xl:text-5xl">{title}</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              {(paragraphs ?? []).map((p, i) => (
                <p
                  key={p.id ?? i}
                  className="mb-6 text-lg leading-relaxed text-muted-foreground lg:text-xl last:mb-0"
                >
                  {p.before}
                  {p.highlight ? (
                    <>
                      {" "}
                      <span className="font-semibold text-foreground">{p.highlight}</span>
                    </>
                  ) : null}
                  {p.after}
                </p>
              ))}
            </motion.div>

            {results && results.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                {resultsTitle ? (
                  <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                    {resultsTitle}
                  </p>
                ) : null}
                {results.map((result, index) => {
                  const Icon = (result.icon ? ICONS[result.icon] : undefined) ?? Sprout;
                  return (
                    <motion.div
                      key={result.id ?? index}
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
            ) : null}
          </div>

          {futureVision || sustainableFuture || futureVisionEnd ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-8 text-center text-primary-foreground shadow-2xl shadow-primary/25 lg:p-12 ring-1 ring-white/10"
            >
              <p className="mx-auto max-w-3xl text-lg lg:text-xl">
                {futureVision}{" "}
                {sustainableFuture ? <span className="font-bold">{sustainableFuture}</span> : null}{" "}
                {futureVisionEnd}
              </p>
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
