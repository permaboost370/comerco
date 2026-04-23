import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/config";
import { getProductCategories } from "@/lib/products";
import { getMenu } from "@/lib/menu";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Fetch everything shared across pages in parallel
  const [messages, categories, menu] = await Promise.all([
    getMessages(),
    getProductCategories(),
    getMenu(locale as "el" | "en"),
  ]);

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="flex min-h-screen flex-col">
        <Header categories={categories} menu={menu} />
        <main className="flex-1">{children}</main>
        <Footer categories={categories} />
        <CookieConsent />
        <ScrollToTop />
      </div>
    </NextIntlClientProvider>
  );
}
