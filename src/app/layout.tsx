import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Comerco Agrotechnology | Λιπάσματα Χονδρικής στην Ελλάδα",
    template: "%s | Comerco Agrotechnology",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  description:
    "Κορυφαίος προμηθευτής χονδρικής πώλησης premium λιπασμάτων στην Ελλάδα. Ποιοτικά λιπάσματα αζώτου, φωσφόρου, καλίου και οργανικά λιπάσματα για αγρότες.",
  keywords: [
    "λιπάσματα",
    "χονδρική λιπασμάτων",
    "γεωργικά προϊόντα",
    "Ελλάδα",
    "γεωργία",
    "βιολογικά λιπάσματα",
    "οργανικά λιπάσματα",
  ],
  authors: [{ name: "Comerco Agrotechnology" }],
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://comerco.gr",
    siteName: "Comerco Agrotechnology",
    title: "Comerco Agrotechnology | Λιπάσματα Χονδρικής στην Ελλάδα",
    description:
      "Κορυφαίος προμηθευτής χονδρικής πώλησης premium λιπασμάτων στην Ελλάδα. Ποιοτικά προϊόντα για αγρότες και γεωργικά καταστήματα.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
