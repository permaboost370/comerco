"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Τηλέφωνο",
    details: ["210 361 2754", "210 654 8176"],
    action: "tel:+302103612754",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@comerco.gr"],
    action: "mailto:info@comerco.gr",
  },
  {
    icon: MapPin,
    title: "Διεύθυνση",
    details: ["Microspore Hellas – Sacom Hellas", "Πανεπιστημίου 44, 10679 Αθήνα"],
    action: "https://maps.google.com/?q=Πανεπιστημίου+44+Αθήνα",
  },
  {
    icon: Clock,
    title: "Ωράριο Λειτουργίας",
    details: ["Δευ - Παρ: 9:00 - 17:00", "Σάβ - Κυρ: Κλειστά"],
    action: null,
  },
];

const socials = [
  {
    icon: Facebook,
    name: "Facebook",
    href: "https://facebook.com",
    bgColor: "group-hover:bg-[#1877F2]",
  },
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://instagram.com",
    bgColor: "group-hover:bg-[#E4405F]",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com",
    bgColor: "group-hover:bg-[#0A66C2]",
  },
];

export default function ContactPage() {
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
            <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Επικοινωνία</h1>
            <p className="text-lg text-muted-foreground">
              Επικοινωνήστε μαζί μας για οποιαδήποτε απορία ή πληροφορία σχετικά με τα προϊόντα μας.
              Είμαστε εδώ για να σας εξυπηρετήσουμε.
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
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
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
                      <Card className="group h-full cursor-pointer border-2 border-transparent bg-card transition-all hover:border-primary hover:shadow-xl">
                        {cardContent}
                      </Card>
                    </a>
                  ) : (
                    <Card className="h-full border-2 border-transparent bg-card">
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
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full overflow-hidden">
                <CardContent className="h-full min-h-[400px] p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.5288456!2d23.7325!3d37.9838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3b3b3b3b3b%3A0x0!2sPanepistimiou%2044%2C%20Athens%20106%2079!5e0!3m2!1sen!2sgr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
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
              <Card>
                <CardContent className="p-6 lg:p-8">
                  <h3 className="mb-2 text-xl font-bold text-foreground">Ακολουθήστε μας</h3>
                  <p className="mb-6 text-muted-foreground">
                    Μείνετε ενημερωμένοι για τα νέα μας προϊόντα και τις τελευταίες εξελίξεις.
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
                          className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-transparent hover:shadow-md"
                        >
                          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground transition-all ${social.bgColor} group-hover:text-white`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{social.name}</p>
                            <p className="text-sm text-muted-foreground">@comerco.gr</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">Χρειάζεστε Άμεση Βοήθεια;</h3>
                  <p className="mb-4 text-primary-foreground/90">
                    Καλέστε μας απευθείας για επείγουσες ερωτήσεις.
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
