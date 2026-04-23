import 'server-only'
import { cache } from 'react'
import { getPayloadClient } from './payload'

export interface DistributorContact {
  name: string
  phone: string
  role?: string
}

export interface Distributor {
  id: string
  region: string
  regionEn: string
  areas: string
  areasEn: string
  regionIds: string[]
  contacts: DistributorContact[]
  company?: string
  coordinates: { lat: number; lng: number }
}

/**
 * Fetches all distributors from Payload. Returns data in the same shape as
 * the previous src/data/distributors.ts export, so components render unchanged
 * once the data is passed in as a prop.
 */
export const getDistributors = cache(async (): Promise<Distributor[]> => {
  const payload = await getPayloadClient()

  const [elDocs, enDocs] = await Promise.all([
    payload.find({ collection: 'distributors', locale: 'el', limit: 100, sort: 'order' }),
    payload.find({ collection: 'distributors', locale: 'en', limit: 100, sort: 'order' }),
  ])

  const enById = new Map(enDocs.docs.map((d) => [d.id, d]))

  return elDocs.docs.map((d) => {
    const en = enById.get(d.id)
    const rawContacts = (d.contacts ?? []) as Array<{
      name: string
      phone?: string | null
      role?: string | null
    }>
    return {
      id: d.slug as string,
      region: (d.region as string) ?? '',
      regionEn: (en?.region as string) ?? (d.region as string) ?? '',
      areas: (d.areas as string) ?? '',
      areasEn: (en?.areas as string) ?? '',
      regionIds: (d.regionIds as string[]) ?? [],
      contacts: rawContacts.map((c) => ({
        name: c.name,
        phone: c.phone ?? '',
        role: c.role ?? undefined,
      })),
      company: (d.company as string | null | undefined) ?? undefined,
      coordinates: {
        lat: Number(d.latitude ?? 0),
        lng: Number(d.longitude ?? 0),
      },
    }
  })
})
