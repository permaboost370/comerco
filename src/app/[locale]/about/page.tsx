"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Target, Lightbulb, Heart, Users, Award, Leaf, TrendingUp, Globe, FlaskConical, Microscope } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AboutPage() {
  const t = useTranslations("about");
  const th = useTranslations("hero");

  const values = [
    {
      icon: Award,
      title: t("responsibility"),
      description: t("responsibilityDesc"),
    },
    {
      icon: Heart,
      title: t("integrity"),
      description: t("integrityDesc"),
    },
    {
      icon: Leaf,
      title: t("sustainability"),
      description: t("sustainabilityDesc"),
    },
    {
      icon: Lightbulb,
      title: t("innovation"),
      description: t("innovationDesc"),
    },
  ];

  const milestones = [
    { year: "2012", title: t("founding"), description: t("foundingDesc") },
    { year: "2015", title: t("expansion"), description: t("expansionDesc") },
    { year: "2018", title: t("innovationMilestone"), description: t("innovationMilestoneDesc") },
    { year: "2019", title: t("growth"), description: t("growthDesc") },
    { year: "2020", title: t("rebranding"), description: t("rebrandingDesc") },
    { year: "2025", title: t("today"), description: t("todayDesc") },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">{t("title")}</h1>
            <p className="text-lg text-muted-foreground">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">{t("ourStory")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("storyP1")}</p>
                <p>{t("storyP2")}</p>
                <p>{t("storyP3")}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-sm p-8 shadow-lg shadow-black/5">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 ring-1 ring-white/20">
                  <Globe className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-foreground">{t("microsporeTitle")}</h3>
                <p className="text-muted-foreground">{t("microsporeP1")}</p>
                <p className="mt-4 text-muted-foreground">{t("microsporeP2")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-b from-muted/20 via-muted/40 to-muted/20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-sm p-8 shadow-lg shadow-black/5"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 ring-1 ring-white/20">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">{t("ourMission")}</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("missionP1")}</p>
                <p>{t("missionP2")}</p>
                <p>{t("missionP3")}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-sm p-8 shadow-lg shadow-black/5"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-lg shadow-accent/25 ring-1 ring-white/20">
                <FlaskConical className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">{t("rdTitle")}</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("rdP1")}</p>
                <p>{t("rdP2")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">{t("ourCommitment")}</h2>
            <p className="text-lg text-muted-foreground">{t("commitmentP1")}</p>
            <p className="mt-4 text-lg text-muted-foreground">{t("commitmentP2")}</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-b from-muted/20 via-muted/40 to-muted/20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">{t("ourValues")}</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {t("valuesSubtitle")}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-sm p-6 text-center shadow-lg shadow-black/5 transition-all duration-300 hover:bg-white/80 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">{t("ourJourney")}</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {t("journeySubtitle")}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block md:-translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:pr-8 md:text-right">
                    {index % 2 === 0 && (
                      <div className="rounded-xl border border-white/40 bg-white/60 backdrop-blur-sm p-6 shadow-lg shadow-black/5 md:ml-auto md:max-w-md">
                        <div className="mb-2 text-2xl font-bold text-primary">{milestone.year}</div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-4 top-6 hidden h-4 w-4 rounded-full border-4 border-primary bg-background md:left-1/2 md:block md:-translate-x-1/2" />

                  <div className="flex-1 md:pl-8">
                    {index % 2 !== 0 && (
                      <div className="rounded-xl border border-white/40 bg-white/60 backdrop-blur-sm p-6 shadow-lg shadow-black/5 md:max-w-md">
                        <div className="mb-2 text-2xl font-bold text-primary">{milestone.year}</div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-20 shadow-2xl shadow-primary/25 ring-1 ring-white/10">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: TrendingUp, value: "12+", label: th("yearsInGreece") },
              { icon: Users, value: "1000+", label: th("partnerFarmers") },
              { icon: Globe, value: "13", label: t("regionsCoverage") },
              { icon: Microscope, value: "50+", label: t("biotechProducts") },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/10">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="mb-1 text-4xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
