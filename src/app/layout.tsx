import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://comerco.gr"),
  title: {
    default: "Comerco Agrotechnology | Βιοτεχνολογία στην Υπηρεσία της Γεωργίας",
    template: "%s | Comerco Agrotechnology",
  },
  description:
    "Ένας από τους μεγαλύτερους παραγωγούς φυσικών και βιολογικών λιπασμάτων στην Ευρώπη. Καινοτόμες λύσεις βιοτεχνολογίας για βιώσιμη γεωργία. 14+ χρόνια εμπειρίας στην Ελλάδα.",
  keywords: [
    "λιπάσματα",
    "βιολογικά λιπάσματα",
    "οργανικά λιπάσματα",
    "βιοδιεγέρτες",
    "μικροοργανισμοί",
    "χονδρική λιπασμάτων",
    "γεωργικά προϊόντα",
    "βιοτεχνολογία",
    "Ελλάδα",
    "Microspore",
    "fertilizers Greece",
    "organic fertilizers",
    "biostimulants",
  ],
  authors: [{ name: "Comerco Agrotechnology" }],
  creator: "Comerco Agrotechnology",
  publisher: "Comerco Agrotechnology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "el_GR",
    alternateLocale: "en_US",
    url: "https://comerco.gr",
    siteName: "Comerco Agrotechnology",
    title: "Comerco Agrotechnology | Βιοτεχνολογία στην Υπηρεσία της Γεωργίας",
    description:
      "Ένας από τους μεγαλύτερους παραγωγούς φυσικών και βιολογικών λιπασμάτων στην Ευρώπη. Καινοτόμες λύσεις βιοτεχνολογίας για βιώσιμη γεωργία.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Comerco Agrotechnology - Βιολογικά Λιπάσματα",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comerco Agrotechnology | Βιοτεχνολογία στην Υπηρεσία της Γεωργίας",
    description:
      "Ένας από τους μεγαλύτερους παραγωγούς φυσικών και βιολογικών λιπασμάτων στην Ευρώπη.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://comerco.gr",
    languages: {
      "el-GR": "https://comerco.gr/el",
      "en-US": "https://comerco.gr/en",
    },
  },
  category: "agriculture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
