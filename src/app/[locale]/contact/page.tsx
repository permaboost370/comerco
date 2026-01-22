"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const socials = [
  {
    icon: Facebook,
    name: "Facebook",
    handle: "@comercoagrotechnology",
    href: "https://www.facebook.com/comercoagrotechnology",
    bgColor: "group-hover:bg-[#1877F2]",
  },
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@comerco_agrotechnology",
    href: "https://www.instagram.com/comerco_agrotechnology/",
    bgColor: "group-hover:bg-[#E4405F]",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    handle: "comerco-agrotechnology",
    href: "https://gr.linkedin.com/company/comerco-agrotechnology",
    bgColor: "group-hover:bg-[#0A66C2]",
  },
];

export default function ContactPage() {
  const t = useTranslations("contact");

  const contactInfo = [
    {
      icon: Phone,
      title: t("phone"),
      details: ["210 361 2754", "210 654 8176"],
      action: "tel:+302103612754",
    },
    {
      icon: Mail,
      title: t("email"),
      details: ["info@comerco.gr"],
      action: "mailto:info@comerco.gr",
    },
    {
      icon: MapPin,
      title: t("address"),
      details: ["Microspore Hellas – Sacom Hellas", "Πανεπιστημίου 44, 10679 Αθήνα"],
      action: "https://maps.google.com/?q=Πανεπιστημίου+44+Αθήνα",
    },
    {
      icon: Clock,
      title: t("businessHours"),
      details: [t("weekdays"), t("weekends")],
      action: null,
    },
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

      {/* Contact Info Cards */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const isClickable = info.action !== null;

              const cardContent = (
                <div className="flex h-full flex-col items-center text-center p-8">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 ring-1 ring-white/20">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {isClickable ? (
                    <a href={info.action!} target={info.action?.startsWith("https") ? "_blank" : undefined} rel="noopener noreferrer">
                      <Card className="group h-full cursor-pointer border border-white/40 bg-white/60 backdrop-blur-sm shadow-lg shadow-black/5 transition-all duration-300 hover:bg-white/80 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                        {cardContent}
                      </Card>
                    </a>
                  ) : (
                    <Card className="h-full border border-white/40 bg-white/60 backdrop-blur-sm shadow-lg shadow-black/5">
                      {cardContent}
                    </Card>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map & Socials Section */}
      <section className="bg-gradient-to-b from-muted/20 via-muted/40 to-muted/20 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full overflow-hidden border border-white/40 bg-white/60 backdrop-blur-sm shadow-xl shadow-black/10 rounded-2xl">
                <CardContent className="h-full min-h-[400px] p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12578!2d23.7325!3d37.9838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3b3b3b3b3b%3A0x0!2sPanepistimiou%2044%2C%20Athens%20106%2079!5e0!3m2!1sen!2sgr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    title="Comerco Location"
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Socials & Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              {/* Social Media */}
              <Card className="border border-white/40 bg-white/60 backdrop-blur-sm shadow-lg shadow-black/5 rounded-2xl">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="mb-2 text-xl font-bold text-foreground">{t("followUs")}</h3>
                  <p className="mb-6 text-muted-foreground">
                    {t("followUsDesc")}
                  </p>
                  <div className="grid gap-4">
                    {socials.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-4 rounded-xl border border-white/40 bg-white/40 backdrop-blur-sm p-4 transition-all duration-300 hover:bg-white/70 hover:shadow-lg"
                        >
                          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground transition-all ${social.bgColor} group-hover:text-white`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{social.name}</p>
                            <p className="text-sm text-muted-foreground">{social.handle}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground shadow-xl shadow-primary/25 rounded-2xl ring-1 ring-white/10">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">{t("needHelp")}</h3>
                  <p className="mb-4 text-primary-foreground/90">
                    {t("needHelpDesc")}
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <a href="tel:+302103612754">
                      <Phone className="mr-2 h-4 w-4" />
                      210 361 2754
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
