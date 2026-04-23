/**
 * Seeds the Menu Global with the current hardcoded nav items.
 * Idempotent — re-runnable to reset the menu to the default layout.
 *
 * Usage:
 *   npm run seed:menu
 */
import { getPayload } from 'payload'
import config from '../payload.config'

const ITEMS = [
  { el: 'Αρχική',                  en: 'Home',           target: '/' },
  { el: 'Εταιρεία',                en: 'Company',        target: '/about' },
  { el: 'Λιπάσματα',               en: 'Fertilizers',    target: '/products', hasMegaMenu: true },
  { el: 'Ζωοτροφές',               en: 'Animal Feed',    target: '/animal-feed' },
  { el: 'Δίκτυο Πωλήσεων',         en: 'Sales Network',  target: '/distributors' },
]

async function main() {
  const payload = await getPayload({ config })

  // Write Greek labels + all the non-localized structure
  await payload.updateGlobal({
    slug: 'menu',
    locale: 'el',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: {
      items: ITEMS.map((item) => ({
        label: item.el,
        type: 'builtin',
        builtinTarget: item.target,
        hasMegaMenu: Boolean(item.hasMegaMenu),
        openInNewTab: false,
      })),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
  })
  console.log('+ menu seeded (el)')

  // Overwrite EN labels only — non-localized fields stay
  await payload.updateGlobal({
    slug: 'menu',
    locale: 'en',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: {
      items: ITEMS.map((item) => ({
        label: item.en,
        type: 'builtin',
        builtinTarget: item.target,
        hasMegaMenu: Boolean(item.hasMegaMenu),
        openInNewTab: false,
      })),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
  })
  console.log('+ menu seeded (en)')

  console.log('\nDone.')
  process.exit(0)
}

main().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
