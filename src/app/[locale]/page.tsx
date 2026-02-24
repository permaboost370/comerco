import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ImageShowcase from "@/components/sections/ImageShowcase";
import ProductsOverview from "@/components/sections/ProductsOverview";
import FullWidthImage from "@/components/sections/FullWidthImage";
import WizardSection from "@/components/sections/WizardSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WizardSection />
      <Features />
      <ImageShowcase />
      <ProductsOverview />
      <FullWidthImage />
    </>
  );
}
