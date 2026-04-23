import 'server-only'
import { cache } from 'react'
import { getPayloadClient } from './payload'

export interface MenuItem {
  id?: string
  label: string
  href: string
  hasMegaMenu?: boolean
  openInNewTab?: boolean
}

type RawItem = {
  id?: string
  label?: string | null
  type?: 'builtin' | 'page' | 'url' | null
  builtinTarget?: string | null
  page?: { slug?: string | null } | string | number | null
  url?: string | null
  openInNewTab?: boolean | null
  hasMegaMenu?: boolean | null
}

function itemHref(item: RawItem): string {
  switch (item.type) {
    case 'builtin':
      return item.builtinTarget ?? '/'
    case 'page': {
      const ref = item.page
      if (ref && typeof ref === 'object' && 'slug' in ref && ref.slug) {
        return `/${ref.slug}`
      }
      return '/'
    }
    case 'url':
      return item.url ?? '/'
    default:
      return '/'
  }
}

export const getMenu = cache(async (locale: 'el' | 'en'): Promise<MenuItem[]> => {
  const payload = await getPayloadClient()
  const doc = await payload.findGlobal({
    slug: 'menu',
    locale,
    depth: 1,
  })
  const rawItems = ((doc as unknown as { items?: RawItem[] | null }).items ?? []) as RawItem[]

  return rawItems
    .map((raw) => ({
      id: raw.id,
      label: raw.label ?? '',
      href: itemHref(raw),
      hasMegaMenu: Boolean(raw.hasMegaMenu),
      openInNewTab: Boolean(raw.openInNewTab),
    }))
    .filter((i) => i.label.length > 0)
})
