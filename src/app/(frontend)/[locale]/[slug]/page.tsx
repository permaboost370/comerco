import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug, getAllPageSlugs } from "@/lib/pages";
import { getProductCategories } from "@/lib/products";
import { getWizardCategories } from "@/lib/wizard";
import SectionRenderer from "@/components/sections/SectionRenderer";

type Params = { locale: string; slug: string };

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();
  return slugs.flatMap((slug) => [
    { locale: "el", slug },
    { locale: "en", slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = await getPageBySlug(slug, locale as "el" | "en");
  if (!page) return {};

  const title = page.seo?.metaTitle || page.title;
  const description = page.seo?.metaDescription || undefined;
  return { title, description };
}

export default async function CmsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;

  const page = await getPageBySlug(slug, locale as "el" | "en");
  if (!page) notFound();

  const [categories, wizardCategories] = await Promise.all([
    getProductCategories(),
    getWizardCategories(),
  ]);

  return (
    <SectionRenderer
      sections={page.sections}
      categories={categories}
      wizardCategories={wizardCategories}
    />
  );
}
