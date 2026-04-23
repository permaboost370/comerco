import 'server-only'
import { cache } from 'react'
import { getPayloadClient } from './payload'
import type { SectionBlock } from './home-page-types'

export interface PageDoc {
  id: string | number
  slug: string
  title: string
  sections: SectionBlock[]
  seo?: { metaTitle?: string | null; metaDescription?: string | null } | null
}

export const getPageBySlug = cache(
  async (slug: string, locale: 'el' | 'en'): Promise<PageDoc | null> => {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      locale,
      limit: 1,
      depth: 1,
    })
    const doc = result.docs[0]
    if (!doc) return null

    return {
      id: doc.id,
      slug: doc.slug as string,
      title: (doc.title as string) ?? '',
      sections: ((doc as unknown as { sections?: SectionBlock[] | null }).sections ?? []) as SectionBlock[],
      seo: (doc as unknown as { seo?: PageDoc['seo'] }).seo ?? null,
    }
  },
)

export const getAllPageSlugs = cache(async (): Promise<string[]> => {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'pages',
    limit: 1000,
    depth: 0,
  })
  return result.docs.map((d) => d.slug as string).filter(Boolean)
})
