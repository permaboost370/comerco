"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, FlaskConical, Boxes, Droplets, Sprout, Pipette, TreeDeciduous, Building2, Users, MessageSquare, Shield } from "lucide-react";
import { productCategories } from "@/data/products";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FlaskConical,
  Boxes,
  Droplets,
  Sprout,
  Pipette,
  TreeDeciduous,
};

export default function Footer() {
  const t = useTranslations("footer");
  const tc = useTranslations("common");
  const locale = useLocale();

  return (
    <footer className="border-t border-white/20 bg-gradient-to-b from-muted/50 to-muted/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Comerco Agrotechnology"
                width={200}
                height={50}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t("description")}
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Microspore Hellas – Sacom Hellas</p>
                  <p className="text-muted-foreground">Πανεπιστημίου 44, 10679 Αθήνα</p>
                </div>
              </div>
              <a
                href="tel:+302103612754"
                className="group flex items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Phone className="h-5 w-5 text-primary transition-colors group-hover:text-white" />
                </div>
                <span className="text-muted-foreground transition-colors group-hover:text-primary">210 361 2754</span>
              </a>
              <a
                href="tel:+302106548176"
                className="group flex items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Phone className="h-5 w-5 text-primary transition-colors group-hover:text-white" />
                </div>
                <span className="text-muted-foreground transition-colors group-hover:text-primary">210 654 8176</span>
              </a>
              <a
                href="mailto:info@comerco.gr"
                className="group flex items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Mail className="h-5 w-5 text-primary transition-colors group-hover:text-white" />
                </div>
                <span className="text-muted-foreground transition-colors group-hover:text-primary">info@comerco.gr</span>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">
              {t("products")}
            </h3>
            <div className="space-y-2">
              {productCategories.map((category) => {
                const Icon = iconMap[category.icon] || Sprout;
                return (
                  <Link
                    key={category.id}
                    href={`/products/${category.id}`}
                    className="group flex items-center gap-3 rounded-lg border border-transparent p-2 -ml-2 transition-all hover:border-border hover:bg-card"
                  >
                    <Icon className="h-4 w-4 text-primary transition-colors group-hover:text-primary" />
                    <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                      {locale === "en" ? category.nameEn : category.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">
              {t("company")}
            </h3>
            <div className="space-y-2">
              <Link
                href="/about"
                className="group flex items-center gap-3 rounded-lg border border-transparent p-2 -ml-2 transition-all hover:border-border hover:bg-card"
              >
                <Building2 className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  {t("aboutUs")}
                </span>
              </Link>
              <Link
                href="/distributors"
                className="group flex items-center gap-3 rounded-lg border border-transparent p-2 -ml-2 transition-all hover:border-border hover:bg-card"
              >
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  {t("partners")}
                </span>
              </Link>
              <Link
                href="/contact"
                className="group flex items-center gap-3 rounded-lg border border-transparent p-2 -ml-2 transition-all hover:border-border hover:bg-card"
              >
                <MessageSquare className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  {tc("contact")}
                </span>
              </Link>
              <Link
                href="/privacy-policy"
                className="group flex items-center gap-3 rounded-lg border border-transparent p-2 -ml-2 transition-all hover:border-border hover:bg-card"
              >
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  {tc("privacyPolicy")}
                </span>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="mt-10">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {t("followUs")}
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/comercoagrotechnology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/60 backdrop-blur-sm border border-white/40 text-primary shadow-sm transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/25"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/comerco_agrotechnology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/60 backdrop-blur-sm border border-white/40 text-primary shadow-sm transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/25"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://gr.linkedin.com/company/comerco-agrotechnology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/60 backdrop-blur-sm border border-white/40 text-primary shadow-sm transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/25"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Comerco Agrotechnology. {tc("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
