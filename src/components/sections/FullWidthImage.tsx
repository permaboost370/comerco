"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FullWidthImage() {
  return (
    <section className="relative w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative h-[400px] w-full overflow-hidden lg:h-[500px]"
      >
        {/* Image - replace src with your actual image */}
        <Image
          src="/images/banner.png"
          alt="Comerco Agrotechnology - Γεωργία"
          fill
          className="object-cover"
        />
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-white/10" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </motion.div>
    </section>
  );
}
