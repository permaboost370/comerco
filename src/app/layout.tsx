import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";

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
    default: "Comerco Agrotechnology | Wholesale Fertilizers in Greece",
    template: "%s | Comerco Agrotechnology",
  },
  description:
    "Leading wholesale supplier of premium fertilizers in Greece. Quality nitrogen, phosphate, potassium, and organic fertilizers for farmers and agricultural shops.",
  keywords: [
    "fertilizers",
    "wholesale fertilizers",
    "agricultural products",
    "Greece",
    "farming",
    "nitrogen fertilizer",
    "phosphate fertilizer",
    "organic fertilizer",
  ],
  authors: [{ name: "Comerco Agrotechnology" }],
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://comerco.gr",
    siteName: "Comerco Agrotechnology",
    title: "Comerco Agrotechnology | Wholesale Fertilizers in Greece",
    description:
      "Leading wholesale supplier of premium fertilizers in Greece. Quality products for farmers and agricultural shops.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
