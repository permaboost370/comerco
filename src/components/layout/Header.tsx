"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, Leaf, FlaskConical, Boxes, Droplets, Sprout, Pipette, TreeDeciduous, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { productCategories } from "@/data/products";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SearchModal from "@/components/SearchModal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Leaf,
  FlaskConical,
  Boxes,
  Droplets,
  Sprout,
  Pipette,
  TreeDeciduous,
};

export default function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const t = useTranslations("common");
  const th = useTranslations("header");
  const locale = useLocale();

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("products"), href: "/products", hasMegaMenu: true },
    { name: t("animalFeed"), href: "/animal-feed" },
    { name: t("distributors"), href: "/distributors" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)] supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Comerco Agrotechnology"
              width={180}
              height={42}
              className="h-9 w-auto lg:h-10"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1 font-[family-name:var(--font-inter)]">
            {navLinks.map((link) =>
              link.hasMegaMenu ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="group relative flex items-center gap-1.5 px-4 py-2.5 text-[14px] font-semibold tracking-wide text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-primary hover:to-emerald-500 hover:bg-clip-text hover:text-transparent"
                  >
                    {link.name}
                    <ChevronDown
                      className={`h-3.5 w-3.5 text-foreground/50 transition-all duration-300 group-hover:text-primary ${
                        isMegaMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {isMegaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full z-50 w-[900px] -translate-x-1/2 pt-2"
                      >
                        <div className="rounded-2xl border border-border/50 bg-background p-6 shadow-2xl shadow-black/15 backdrop-blur-xl">
                          <div className="mb-5 flex items-center justify-between border-b border-border/50 pb-4">
                            <h3 className="text-base font-semibold tracking-tight text-foreground">{th("ourProducts")}</h3>
                            <Link
                              href="/products"
                              className="group flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5"
                            >
                              {th("viewAllProducts")}
                              <span className="transition-transform group-hover:translate-x-0.5">→</span>
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {productCategories.map((category) => {
                              const Icon = iconMap[category.icon] || Leaf;
                              return (
                                <Link
                                  key={category.id}
                                  href={`/products/${category.id}`}
                                  className="group rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-primary/20 hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent hover:shadow-lg hover:shadow-primary/5"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:from-primary group-hover:to-primary/80 group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                                      <Icon className="h-5 w-5" />
                                    </div>
                                    <h4 className="text-sm font-medium leading-tight text-foreground/80 transition-colors group-hover:text-foreground">
                                      {locale === "en" ? category.nameEn : category.name}
                                    </h4>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2.5 text-[14px] font-semibold tracking-wide text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-primary hover:to-emerald-500 hover:bg-clip-text hover:text-transparent"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-foreground/70 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
              title={locale === "en" ? "Search products" : "Αναζήτηση προϊόντων"}
            >
              <Search className="h-5 w-5" />
            </button>
            <LanguageSwitcher />
            <Button asChild className="relative overflow-hidden rounded-full border-2 border-primary bg-transparent px-6 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25">
              <Link href="/contact">{t("contact")}</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-foreground/70 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </button>
            <LanguageSwitcher />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm border-l-white/10 bg-background/95 backdrop-blur-xl">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="/images/logo.png"
                    alt="Comerco Agrotechnology"
                    width={140}
                    height={32}
                    className="h-8 w-auto"
                  />
                </Link>

                <nav className="flex flex-col gap-2 font-[family-name:var(--font-inter)]">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block rounded-xl px-4 py-3.5 text-base font-medium text-foreground/80 transition-all duration-200 hover:bg-primary/5 hover:text-foreground hover:pl-5"
                      >
                        {link.name}
                      </Link>
                      {link.hasMegaMenu && (
                        <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-primary/20 pl-4">
                          {productCategories.map((category) => (
                            <Link
                              key={category.id}
                              href={`/products/${category.id}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block rounded-lg py-2.5 pl-2 text-sm text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary hover:pl-3"
                            >
                              {locale === "en" ? category.nameEn : category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <Button asChild className="mt-6 rounded-full border-2 border-primary bg-transparent text-primary transition-all duration-300 hover:bg-primary hover:text-white">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    {t("contact")}
                  </Link>
                </Button>
              </div>
            </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
