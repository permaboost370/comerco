"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { HeroBlockData } from "@/lib/home-page-types";
import { mediaUrl, mediaAlt } from "@/lib/home-page-types";

export default function Hero({ data }: { data: HeroBlockData }) {
  const {
    title = "",
    titleHighlight = "",
    description = "",
    image,
    primaryCta,
    secondaryCta,
    stats = [],
  } = data;

  const imageUrl = mediaUrl(image);
  const imageAltText = mediaAlt(image, "");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-4 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl xl:text-6xl">
              {title}
              {titleHighlight ? (
                <>
                  {" "}
                  <span className="text-primary">{titleHighlight}</span>
                </>
              ) : null}
            </h1>

            {description ? (
              <p className="mb-8 max-w-lg text-lg text-muted-foreground">{description}</p>
            ) : null}

            <div className="flex flex-col gap-4 sm:flex-row">
              {primaryCta?.label && primaryCta.href ? (
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-full px-8 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
                >
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              ) : null}
              {secondaryCta?.label && secondaryCta.href ? (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 px-8 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary"
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>

            {stats && stats.length > 0 ? (
              <div
                className="mt-12 grid gap-4"
                style={{ gridTemplateColumns: `repeat(${Math.max(1, stats.length)}, minmax(0, 1fr))` }}
              >
                {stats.map((stat, i) => (
                  <div
                    key={stat.id ?? i}
                    className="rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-4 text-center shadow-lg shadow-black/5 transition-all duration-300 hover:bg-white/80 hover:shadow-xl"
                  >
                    <div className="text-3xl font-bold text-primary lg:text-4xl">{stat.value}</div>
                    <div className="text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </motion.div>

          {imageUrl ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto w-full max-w-md lg:max-w-lg"
            >
              <div className="rounded-3xl bg-white/60 backdrop-blur-sm border border-white/40 p-3 shadow-xl shadow-black/10">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={imageUrl}
                    alt={imageAltText}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5" />
                </div>
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
