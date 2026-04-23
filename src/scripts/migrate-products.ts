/**
 * One-time migration: seeds Payload with data from src/data/products.ts
 *
 * Usage:
 *   npm run migrate:products
 *
 * Idempotent — existing records (matched by slug) are skipped, not duplicated.
 * Product images are not migrated; upload them through the admin UI.
 */
import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../payload.config.js'
import { productCategories } from '../data/products.js'

async function main() {
  const payload = await getPayload({ config })

  for (const [index, category] of productCategories.entries()) {
    const existingCategory = await payload.find({
      collection: 'product-categories',
      where: { slug: { equals: category.id } },
      limit: 1,
    })

    let categoryId: string | number
    if (existingCategory.docs.length > 0) {
      categoryId = existingCategory.docs[0].id
      console.log(`· category ${category.id}: already exists, skipping`)
    } else {
      const created = await payload.create({
        collection: 'product-categories',
        locale: 'el',
        data: {
          slug: category.id,
          name: category.name,
          description: category.description,
          icon: category.icon,
          order: index,
        },
      })
      await payload.update({
        collection: 'product-categories',
        id: created.id,
        locale: 'en',
        data: {
          name: category.nameEn,
          description: category.descriptionEn,
        },
      })
      categoryId = created.id
      console.log(`+ category ${category.id} (${category.products.length} products)`)
    }

    for (const [pIndex, product] of category.products.entries()) {
      const existingProduct = await payload.find({
        collection: 'products',
        where: { slug: { equals: product.id } },
        limit: 1,
      })

      if (existingProduct.docs.length > 0) {
        console.log(`  · product ${product.id}: already exists, skipping`)
        continue
      }

      const createdProduct = await payload.create({
        collection: 'products',
        locale: 'el',
        data: {
          slug: product.id,
          name: product.name,
          description: product.description,
          category: categoryId,
          isBio: product.isBio,
          order: pIndex,
        },
      })
      await payload.update({
        collection: 'products',
        id: createdProduct.id,
        locale: 'en',
        data: {
          name: product.nameEn,
          description: product.descriptionEn,
        },
      })
      console.log(`  + product ${product.id}`)
    }
  }

  console.log('\nMigration complete.')
  process.exit(0)
}

main().catch((err) => {
  console.error('Migration failed:', err)
  process.exit(1)
})
