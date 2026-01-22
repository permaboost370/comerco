import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.svg"
                alt="Comerco Agrotechnology"
                width={200}
                height={50}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Ένας από τους μεγαλύτερους παραγωγούς φυσικών και βιολογικών
              λιπασμάτων στην Ευρώπη. Καινοτόμες λύσεις βιοτεχνολογίας για
              βιώσιμη γεωργία.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                  <Phone className="h-5 w-5 text-primary transition-colors group-hover:text-white" />
                </div>
                <span className="text-muted-foreground transition-colors group-hover:text-primary">210 361 2754</span>
              </a>
              <a
                href="tel:+302106548176"
                className="group flex items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                  <Phone className="h-5 w-5 text-primary transition-colors group-hover:text-white" />
                </div>
                <span className="text-muted-foreground transition-colors group-hover:text-primary">210 654 8176</span>
              </a>
              <a
                href="mailto:info@comerco.gr"
                className="group flex items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                  <Mail className="h-5 w-5 text-primary transition-colors group-hover:text-white" />
                </div>
                <span className="text-muted-foreground transition-colors group-hover:text-primary">info@comerco.gr</span>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">
              Προϊόντα
            </h3>
            <div className="space-y-3">
              {productCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/products/${category.id}`}
                  className="group flex items-center gap-2 rounded-lg border border-transparent p-2 -ml-2 transition-all hover:border-border hover:bg-card"
                >
                  <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-all group-hover:opacity-100" />
                  <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">
              Εταιρεία
            </h3>
            <div className="space-y-3">
              <Link
                href="/about"
                className="group flex items-center gap-2 rounded-lg border border-transparent p-2 -ml-2 transition-all hover:border-border hover:bg-card"
              >
                <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-all group-hover:opacity-100" />
                <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                  Σχετικά με εμάς
                </span>
              </Link>
              <Link
                href="/distributors"
                className="group flex items-center gap-2 rounded-lg border border-transparent p-2 -ml-2 transition-all hover:border-border hover:bg-card"
              >
                <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-all group-hover:opacity-100" />
                <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                  Συνεργάτες
                </span>
              </Link>
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-lg border border-transparent p-2 -ml-2 transition-all hover:border-border hover:bg-card"
              >
                <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-all group-hover:opacity-100" />
                <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                  Επικοινωνία
                </span>
              </Link>
              <Link
                href="/privacy-policy"
                className="group flex items-center gap-2 rounded-lg border border-transparent p-2 -ml-2 transition-all hover:border-border hover:bg-card"
              >
                <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-all group-hover:opacity-100" />
                <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                  Πολιτική Απορρήτου
                </span>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="mt-10">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Ακολουθήστε μας
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white"
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
            © {new Date().getFullYear()} Comerco Agrotechnology. Με επιφύλαξη παντός δικαιώματος.
          </p>
        </div>
      </div>
    </footer>
  );
}
