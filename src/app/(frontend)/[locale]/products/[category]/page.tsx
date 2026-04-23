import { notFound } from "next/navigation";
import { getProductCategories } from "@/lib/products";
import CategoryView from "./category-view";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const categories = await getProductCategories();
  const category = categories.find((c) => c.id === categorySlug);

  if (!category) {
    notFound();
  }

  const otherCategories = categories.filter((c) => c.id !== category.id);

  return <CategoryView category={category} otherCategories={otherCategories} />;
}
