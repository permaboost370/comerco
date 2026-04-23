import { getProductCategories } from "@/lib/products";
import ProductsView from "./products-view";

export default async function ProductsPage() {
  const categories = await getProductCategories();
  return <ProductsView categories={categories} />;
}
