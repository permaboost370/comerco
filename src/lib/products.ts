import 'server-only'
import { cache } from 'react'
import { getPayloadClient } from './payload'

export interface Product {
  id: string
  name: string
  nameEn: string
  description: string
  descriptionEn: string
  image: string
  category: string
  isBio: boolean
}

export interface ProductCategory {
  id: string
  name: string
  nameEn: string
  description: string
  descriptionEn: string
  icon: string
  products: Product[]
}

/**
 * Fetches all product categories + products from Payload.
 * Returns data in the same shape as the previous src/data/products.ts export,
 * so existing components render unchanged once the data is passed in as a prop.
 *
 * Wrapped in React.cache — multiple server components calling this in one
 * render dedupe to a single set of queries.
 */
export const getProductCategories = cache(async (): Promise<ProductCategory[]> => {
  const payload = await getPayloadClient()

  const [elCategories, enCategories, elProducts, enProducts] = await Promise.all([
    payload.find({ collection: 'product-categories', locale: 'el', limit: 200, sort: 'order' }),
    payload.find({ collection: 'product-categories', locale: 'en', limit: 200, sort: 'order' }),
    payload.find({ collection: 'products', locale: 'el', limit: 500, sort: 'order', depth: 1 }),
    payload.find({ collection: 'products', locale: 'en', limit: 500, sort: 'order', depth: 0 }),
  ])

  const enCategoryById = new Map(enCategories.docs.map((c) => [c.id, c]))
  const enProductById = new Map(enProducts.docs.map((p) => [p.id, p]))

  return elCategories.docs.map((cat) => {
    const enCat = enCategoryById.get(cat.id)
    const categorySlug = cat.slug as string

    const products: Product[] = elProducts.docs
      .filter((p) => {
        const rel = p.category
        const relId = typeof rel === 'object' && rel !== null ? rel.id : rel
        return relId === cat.id
      })
      .map((p) => {
        const enP = enProductById.get(p.id)
        const image = p.image
        const imageUrl =
          typeof image === 'object' && image !== null && 'url' in image
            ? ((image as { url?: string | null }).url ?? '')
            : ''
        return {
          id: p.slug as string,
          name: (p.name as string) ?? '',
          nameEn: (enP?.name as string) ?? (p.name as string) ?? '',
          description: (p.description as string) ?? '',
          descriptionEn: (enP?.description as string) ?? '',
          image: imageUrl,
          category: categorySlug,
          isBio: Boolean(p.isBio),
        }
      })

    return {
      id: categorySlug,
      name: (cat.name as string) ?? '',
      nameEn: (enCat?.name as string) ?? (cat.name as string) ?? '',
      description: (cat.description as string) ?? '',
      descriptionEn: (enCat?.description as string) ?? '',
      icon: (cat.icon as string) ?? '',
      products,
    }
  })
})

export async function getCategoryById(id: string): Promise<ProductCategory | undefined> {
  const categories = await getProductCategories()
  return categories.find((c) => c.id === id)
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const categories = await getProductCategories()
  for (const cat of categories) {
    const product = cat.products.find((p) => p.id === id)
    if (product) return product
  }
  return undefined
}

export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  const category = await getCategoryById(categoryId)
  return category?.products ?? []
}

export async function getAllProducts(): Promise<Product[]> {
  const categories = await getProductCategories()
  return categories.flatMap((c) => c.products)
}
