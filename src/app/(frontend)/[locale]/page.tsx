import { getProductCategories } from "@/lib/products";
import { getWizardCategories } from "@/lib/wizard";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ImageShowcase from "@/components/sections/ImageShowcase";
import ProductsOverview from "@/components/sections/ProductsOverview";
import FullWidthImage from "@/components/sections/FullWidthImage";
import WizardSection from "@/components/sections/WizardSection";

export default async function Home() {
  const [categories, wizardCategories] = await Promise.all([
    getProductCategories(),
    getWizardCategories(),
  ]);

  return (
    <>
      <Hero />
      <WizardSection categories={categories} wizardCategories={wizardCategories} />
      <Features />
      <ImageShowcase />
      <ProductsOverview categories={categories} />
      <FullWidthImage />
    </>
  );
}
