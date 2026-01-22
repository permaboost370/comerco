"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "/images/showcase/showcase-1.jpg",
    alt: "showcase1",
    rotation: -8,
    zIndex: 1,
  },
  {
    src: "/images/showcase/showcase-2.jpg",
    alt: "showcase2",
    rotation: -3,
    zIndex: 2,
  },
  {
    src: "/images/showcase/showcase-3.jpg",
    alt: "showcase3",
    rotation: 3,
    zIndex: 2,
  },
  {
    src: "/images/showcase/showcase-4.jpg",
    alt: "showcase4",
    rotation: 8,
    zIndex: 1,
  },
];

export default function ImageShowcase() {
  const t = useTranslations("showcase");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Overlapping Cards */}
        <div className="relative mx-auto flex max-w-4xl items-center justify-center">
          <div className="relative flex items-center justify-center gap-4 lg:gap-0">
            {images.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: image.rotation,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
                className="relative cursor-pointer"
                style={{
                  zIndex: image.zIndex,
                  marginLeft: index > 0 ? '-60px' : '0',
                }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/20 transition-all duration-300 hover:shadow-3xl ring-1 ring-white/30">
                  {/* Card frame */}
                  <div className="absolute inset-0 rounded-2xl border-4 border-white/30 z-10 pointer-events-none" />

                  {/* Image */}
                  <div className="relative h-64 w-48 sm:h-80 sm:w-60 lg:h-[420px] lg:w-80">
                    <Image
                      src={image.src}
                      alt={t(image.alt)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 192px, (max-width: 1024px) 240px, 320px"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center text-lg font-medium text-primary"
        >
          {t("tagline")}
        </motion.p>
      </div>
    </section>
  );
}
