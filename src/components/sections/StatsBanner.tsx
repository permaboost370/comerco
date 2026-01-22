"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Calendar, Users, MapPin, Package } from "lucide-react";

const stats = [
  { key: "years", icon: Calendar, value: "12+" },
  { key: "farmers", icon: Users, value: "500+" },
  { key: "regions", icon: MapPin, value: "13" },
  { key: "products", icon: Package, value: "100+" },
];

export default function StatsBanner() {
  const t = useTranslations("stats");

  return (
    <section className="relative overflow-hidden bg-primary py-16 lg:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl font-bold text-white lg:text-3xl">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="mb-2 text-4xl font-bold text-white lg:text-5xl">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white/80 lg:text-base">
                  {t(stat.key)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
