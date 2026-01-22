"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "Years in Business", description: "Serving Greek agriculture since 1999" },
  { value: "500+", label: "Partner Farms", description: "Across all regions of Greece" },
  { value: "50K+", label: "Tons Delivered", description: "Annually to Greek farmers" },
  { value: "13", label: "Regions Covered", description: "Complete nationwide coverage" },
];

export default function Stats() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-bold text-primary-foreground lg:text-5xl">
                {stat.value}
              </div>
              <div className="mb-1 text-lg font-semibold text-primary-foreground/90">
                {stat.label}
              </div>
              <div className="text-sm text-primary-foreground/70">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
