import 'server-only'
import { cache } from 'react'
import { getPayloadClient } from './payload'

export type UserType = 'farmer' | 'agronomist'
export type AgronomistPath = 'crop' | 'category'

export interface WizardCrop {
  id: string
  name: string
  nameEn: string
  emoji: string
}

export interface WizardPhase {
  id: string
  name: string
  nameEn: string
  description: string
  descriptionEn: string
  emoji: string
  productIds: string[]
}

export interface WizardCropCategory {
  id: string
  name: string
  nameEn: string
  description: string
  descriptionEn: string
  emoji: string
  color: string
  image: string
  crops: WizardCrop[]
  phases: WizardPhase[]
}

type RawProduct = { slug?: string | null }

function readRelationshipSlugs(rel: unknown): string[] {
  if (!Array.isArray(rel)) return []
  return rel
    .map((item) => {
      if (typeof item === 'object' && item !== null && 'slug' in item) {
        return (item as RawProduct).slug ?? null
      }
      return null
    })
    .filter((s): s is string => typeof s === 'string' && s.length > 0)
}

/**
 * Fetches wizard crop categories from Payload. Returns data in the same shape
 * as the previous src/data/wizardData.ts export, so ProductWizard's internal
 * state management and product-recommendation logic render unchanged.
 *
 * Nested arrays (crops, phases) need Payload's depth>=1 on the outer query,
 * plus depth=1 for the phase.products relationship to get product slugs back.
 */
export const getWizardCategories = cache(async (): Promise<WizardCropCategory[]> => {
  const payload = await getPayloadClient()

  const [elDocs, enDocs] = await Promise.all([
    payload.find({
      collection: 'wizard-crop-categories',
      locale: 'el',
      limit: 50,
      sort: 'order',
      depth: 2,
    }),
    payload.find({
      collection: 'wizard-crop-categories',
      locale: 'en',
      limit: 50,
      sort: 'order',
      depth: 0,
    }),
  ])

  const enById = new Map(enDocs.docs.map((d) => [d.id, d]))

  return elDocs.docs.map((cat) => {
    const en = enById.get(cat.id)

    const elCrops = (cat.crops ?? []) as Array<{ slug: string; name: string; emoji: string }>
    const enCrops = ((en?.crops ?? []) as Array<{ slug: string; name: string }>)
    const enCropBySlug = new Map(enCrops.map((c) => [c.slug, c]))

    const elPhases = (cat.phases ?? []) as Array<{
      slug: string
      name: string
      description?: string | null
      emoji: string
      products?: unknown
    }>
    const enPhases = ((en?.phases ?? []) as Array<{
      slug: string
      name: string
      description?: string | null
    }>)
    const enPhaseBySlug = new Map(enPhases.map((p) => [p.slug, p]))

    return {
      id: cat.slug as string,
      name: (cat.name as string) ?? '',
      nameEn: (en?.name as string) ?? (cat.name as string) ?? '',
      description: (cat.description as string) ?? '',
      descriptionEn: (en?.description as string) ?? '',
      emoji: (cat.emoji as string) ?? '',
      color: (cat.color as string) ?? '',
      image: (cat.image as string) ?? '',
      crops: elCrops.map((c) => ({
        id: c.slug,
        name: c.name,
        nameEn: enCropBySlug.get(c.slug)?.name ?? c.name,
        emoji: c.emoji,
      })),
      phases: elPhases.map((p) => {
        const enP = enPhaseBySlug.get(p.slug)
        return {
          id: p.slug,
          name: p.name,
          nameEn: enP?.name ?? p.name,
          description: p.description ?? '',
          descriptionEn: enP?.description ?? '',
          emoji: p.emoji,
          productIds: readRelationshipSlugs(p.products),
        }
      }),
    }
  })
})
