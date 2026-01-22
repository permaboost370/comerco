"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, Leaf, FlaskConical, Boxes, Droplets, Sprout, Pipette, TreeDeciduous } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { productCategories } from "@/data/products";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Leaf,
  FlaskConical,
  Boxes,
  Droplets,
  Sprout,
  Pipette,
  TreeDeciduous,
};

const navLinks = [
  { name: "Αρχική", nameEn: "Home", href: "/" },
  { name: "Προϊόντα", nameEn: "Products", href: "/products", hasMegaMenu: true },
  { name: "Σχετικά", nameEn: "About", href: "/about" },
  { name: "Συνεργάτες", nameEn: "Distributors", href: "/distributors" },
  { name: "Επικοινωνία", nameEn: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Comerco Agrotechnology"
              width={240}
              height={56}
              className="h-12 w-auto lg:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1">
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
                    className="group relative flex items-center gap-1.5 px-4 py-2 text-[15px] font-semibold tracking-wide text-foreground/80 transition-all hover:text-primary"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
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
                        <div className="rounded-xl border border-border bg-card p-6 shadow-xl">
                          <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-foreground">Τα Προϊόντα μας</h3>
                            <Link
                              href="/products"
                              className="text-sm font-medium text-primary hover:underline"
                            >
                              Δείτε Όλα τα Προϊόντα →
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {productCategories.map((category) => {
                              const Icon = iconMap[category.icon] || Leaf;
                              return (
                                <Link
                                  key={category.id}
                                  href={`/products/${category.id}`}
                                  className="group rounded-lg border border-transparent p-4 transition-all hover:border-border hover:bg-muted"
                                >
                                  <div className="mb-2 flex items-center gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                      <Icon className="h-5 w-5" />
                                    </div>
                                    <h4 className="text-sm font-semibold leading-tight text-foreground">
                                      {category.name}
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
                  className="group relative px-4 py-2 text-[15px] font-semibold tracking-wide text-foreground/80 transition-all hover:text-primary"
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              )
            )}
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <Button asChild>
              <Link href="/contact">Επικοινωνία</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="/images/logo.svg"
                    alt="Comerco Agrotechnology"
                    width={180}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block rounded-md px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                      >
                        {link.name}
                      </Link>
                      {link.hasMegaMenu && (
                        <div className="ml-4 mt-2 space-y-1 border-l border-border pl-4">
                          {productCategories.map((category) => (
                            <Link
                              key={category.id}
                              href={`/products/${category.id}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2 text-sm text-muted-foreground hover:text-primary"
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <Button asChild className="mt-4">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Επικοινωνία
                  </Link>
                </Button>
              </div>
            </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
