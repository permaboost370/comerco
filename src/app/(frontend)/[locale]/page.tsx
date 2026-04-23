import { getProductCategories } from "@/lib/products";
import { getWizardCategories } from "@/lib/wizard";
import { getHomePageSections } from "@/lib/home-page";
import SectionRenderer from "@/components/sections/SectionRenderer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const [sections, categories, wizardCategories] = await Promise.all([
    getHomePageSections(locale as "el" | "en"),
    getProductCategories(),
    getWizardCategories(),
  ]);

  return (
    <SectionRenderer
      sections={sections}
      categories={categories}
      wizardCategories={wizardCategories}
    />
  );
}
