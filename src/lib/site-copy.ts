import 'server-only'
import { cache } from 'react'
import { getPayloadClient } from './payload'
import { GLOBAL_NAMESPACE_MAP } from '../globals/SiteCopy'

type Messages = Record<string, Record<string, string>>

/**
 * Fetches every copy Global in parallel for the given locale, then merges
 * them into the nested {namespace: {key: value}} dict that next-intl's
 * useTranslations() expects. Cached per-render via React.cache so all
 * server components in one request share a single set of queries.
 */
export const getSiteMessages = cache(async (locale: 'el' | 'en'): Promise<Messages> => {
  const payload = await getPayloadClient()

  const entries = Object.entries(GLOBAL_NAMESPACE_MAP) as Array<
    [Parameters<typeof payload.findGlobal>[0]['slug'], readonly string[]]
  >

  const docs = await Promise.all(
    entries.map(([slug]) =>
      payload.findGlobal({ slug, locale, depth: 0 }),
    ),
  )

  const messages: Messages = {}
  entries.forEach(([, namespaces], i) => {
    const doc = docs[i] as Record<string, unknown>
    for (const ns of namespaces) {
      const section = doc[ns]
      if (section && typeof section === 'object') {
        // Strip internal Payload fields (id, _locale, etc.) and coerce values to strings
        const clean: Record<string, string> = {}
        for (const [k, v] of Object.entries(section as Record<string, unknown>)) {
          if (k.startsWith('_') || k === 'id') continue
          clean[k] = typeof v === 'string' ? v : v == null ? '' : String(v)
        }
        messages[ns] = clean
      }
    }
  })

  return messages
})
