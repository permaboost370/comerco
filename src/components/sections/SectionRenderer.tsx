import Hero from "./Hero";
import Features from "./Features";
import ImageShowcase from "./ImageShowcase";
import FullWidthImage from "./FullWidthImage";
import WizardSection from "./WizardSection";
import ProductsOverview from "./ProductsOverview";
import type { SectionBlock } from "@/lib/home-page-types";
import type { ProductCategory } from "@/lib/products";
import type { WizardCropCategory } from "@/lib/wizard";

/**
 * Dispatches each section block in the HomePage Global to its corresponding
 * React component. Adding a new block type = adding a case here + defining
 * the block in src/blocks/sectionBlocks.ts + implementing the component.
 */
export default function SectionRenderer({
  sections,
  categories,
  wizardCategories,
}: {
  sections: SectionBlock[];
  categories: ProductCategory[];
  wizardCategories: WizardCropCategory[];
}) {
  return (
    <>
      {sections.map((section, i) => {
        const key = section.id ?? `${section.blockType}-${i}`;
        switch (section.blockType) {
          case "hero":
            return <Hero key={key} data={section} />;
          case "mission":
            return <Features key={key} data={section} />;
          case "imageShowcase":
            return <ImageShowcase key={key} data={section} />;
          case "fullWidthImage":
            return <FullWidthImage key={key} data={section} />;
          case "wizard":
            return (
              <WizardSection
                key={key}
                data={section}
                categories={categories}
                wizardCategories={wizardCategories}
              />
            );
          case "productsOverview":
            return <ProductsOverview key={key} data={section} categories={categories} />;
          default:
            return null;
        }
      })}
    </>
  );
}
