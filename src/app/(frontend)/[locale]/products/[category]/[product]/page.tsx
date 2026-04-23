import { notFound } from "next/navigation";
import { getProductCategories } from "@/lib/products";
import ProductView from "./product-view";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { category: categorySlug, product: productSlug } = await params;
  const categories = await getProductCategories();
  const category = categories.find((c) => c.id === categorySlug);
  const product = category?.products.find((p) => p.id === productSlug);

  if (!category || !product) {
    notFound();
  }

  const otherCategories = categories.filter((c) => c.id !== category.id);

  return <ProductView category={category} product={product} otherCategories={otherCategories} />;
}
