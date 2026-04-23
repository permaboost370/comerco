/**
 * Seeds the HomePage Global with a default section layout that matches what
 * was on the site before the page-builder refactor.
 *
 * Also uploads the hardcoded /public/images/ assets (hero.png, showcase/*,
 * banner.png) into the Media collection so every image on the homepage is
 * editable via /admin.
 *
 * Usage:
 *   npm run seed:homepage
 *
 * Idempotent on images (matched by filename). Overwrites the HomePage
 * sections every run — safe, since the Global is a singleton.
 */
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { lookup } from 'node:dns'
import { getPayload } from 'payload'
import config from '../payload.config'

// Silence unused-import warnings for optional deps
void lookup

const dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(dirname, '..', '..', 'public')

type Locale = 'el' | 'en'

async function uploadOrGetImage(
  payload: Awaited<ReturnType<typeof getPayload>>,
  relPath: string,
  alt: { el: string; en: string },
): Promise<number | string> {
  const filename = path.basename(relPath)
  const existing = await payload.find({
    collection: 'media',
    where: { filename: { equals: filename } },
    limit: 1,
  })
  if (existing.docs.length > 0) {
    return existing.docs[0].id
  }

  const abs = path.join(publicDir, relPath)
  const data = await readFile(abs)
  const ext = path.extname(filename).toLowerCase()
  const mimetype =
    ext === '.png' ? 'image/png' :
    ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' :
    ext === '.webp' ? 'image/webp' :
    ext === '.svg' ? 'image/svg+xml' :
    'application/octet-stream'

  const created = await payload.create({
    collection: 'media',
    locale: 'el',
    data: { alt: alt.el },
    file: { data, mimetype, name: filename, size: data.length },
  })

  // Set English alt
  await payload.update({
    collection: 'media',
    id: created.id,
    locale: 'en',
    data: { alt: alt.en },
  })

  console.log(`  + uploaded ${filename}`)
  return created.id
}

function pick<T extends Record<string, unknown>>(obj: T, locale: Locale, key: string): string {
  const v = (obj as Record<string, unknown>)[key]
  return typeof v === 'string' ? v : ''
}

async function main() {
  const payload = await getPayload({ config })

  // Fetch existing copy for defaults
  const [homeCopyEl, homeCopyEn] = await Promise.all([
    payload.findGlobal({ slug: 'home-copy', locale: 'el', depth: 0 }),
    payload.findGlobal({ slug: 'home-copy', locale: 'en', depth: 0 }),
  ])

  const hero = (homeCopyEl.hero ?? {}) as Record<string, unknown>
  const heroEn = (homeCopyEn.hero ?? {}) as Record<string, unknown>
  const mission = (homeCopyEl.mission ?? {}) as Record<string, unknown>
  const missionEn = (homeCopyEn.mission ?? {}) as Record<string, unknown>
  const showcase = (homeCopyEl.showcase ?? {}) as Record<string, unknown>
  const showcaseEn = (homeCopyEn.showcase ?? {}) as Record<string, unknown>

  console.log('Uploading images...')
  const heroImage = await uploadOrGetImage(payload, 'images/hero.png', {
    el: 'Λιπάσματα υψηλής ποιότητας',
    en: 'High-quality fertilizers',
  })
  const showcase1 = await uploadOrGetImage(payload, 'images/showcase/showcase-1.jpg', {
    el: pick(showcase, 'el', 'showcase1'),
    en: pick(showcaseEn, 'en', 'showcase1'),
  })
  const showcase2 = await uploadOrGetImage(payload, 'images/showcase/showcase-2.jpg', {
    el: pick(showcase, 'el', 'showcase2'),
    en: pick(showcaseEn, 'en', 'showcase2'),
  })
  const showcase3 = await uploadOrGetImage(payload, 'images/showcase/showcase-3.jpg', {
    el: pick(showcase, 'el', 'showcase3'),
    en: pick(showcaseEn, 'en', 'showcase3'),
  })
  const showcase4 = await uploadOrGetImage(payload, 'images/showcase/showcase-4.jpg', {
    el: pick(showcase, 'el', 'showcase4'),
    en: pick(showcaseEn, 'en', 'showcase4'),
  })
  const banner = await uploadOrGetImage(payload, 'images/banner.png', {
    el: 'Γεωργία',
    en: 'Agriculture',
  })

  console.log('\nSeeding HomePage sections (Greek)...')
  await payload.updateGlobal({
    slug: 'home-page',
    locale: 'el',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: {
      sections: [
        {
          blockType: 'hero',
          title: pick(hero, 'el', 'title'),
          titleHighlight: pick(hero, 'el', 'titleHighlight'),
          description: pick(hero, 'el', 'description'),
          image: heroImage,
          primaryCta: {
            label: pick(hero, 'el', 'viewProducts') || 'Δες τα Προϊόντα',
            href: '/products',
          },
          secondaryCta: {
            label: 'Επικοινωνία',
            href: '/contact',
          },
          stats: [
            { value: '14+', label: pick(hero, 'el', 'yearsInGreece') },
            { value: '1000+', label: pick(hero, 'el', 'partnerFarmers') },
            { value: '100%', label: pick(hero, 'el', 'greeceCoverage') },
          ],
        },
        {
          blockType: 'wizard',
          badge: 'Εύρεση Προϊόντος',
          title: 'Δεν ξέρεις ποιο προϊόν να επιλέξεις;',
          description:
            'Απάντησε σε 4 απλές ερωτήσεις για την καλλιέργειά σου και τη φάση ανάπτυξης. Θα σου δείξουμε ακριβώς τι χρειάζεσαι.',
          ctaLabel: 'Βρες τα προϊόντα μου',
          steps: [
            { label: 'Αγρότης ή Γεωπόνος;' },
            { label: 'Επίλεξε καλλιέργεια' },
            { label: 'Φάση ανάπτυξης' },
            { label: 'Δες τα προϊόντα' },
          ],
          cropPreview: [
            { emoji: '🍅', label: 'Ντομάτα' },
            { emoji: '🫒', label: 'Ελιά' },
            { emoji: '🍇', label: 'Αμπέλι' },
            { emoji: '🌽', label: 'Καλαμπόκι' },
            { emoji: '🍊', label: 'Εσπεριδοειδή' },
            { emoji: '🌾', label: 'Σιτάρι' },
            { emoji: '🥦', label: 'Λαχανικά' },
            { emoji: '🌸', label: 'Καλλωπιστικά' },
          ],
          moreLabel: '+ πολλές ακόμα καλλιέργειες →',
        },
        {
          blockType: 'mission',
          title: pick(mission, 'el', 'title'),
          paragraphs: [
            {
              before: pick(mission, 'el', 'description1'),
              highlight: pick(mission, 'el', 'highlight1'),
              after: pick(mission, 'el', 'description2'),
            },
            {
              before: pick(mission, 'el', 'description3'),
              highlight: pick(mission, 'el', 'highlight2'),
              after: pick(mission, 'el', 'description4'),
            },
          ],
          resultsTitle: pick(mission, 'el', 'resultsTitle'),
          results: [
            { icon: 'Sprout', text: pick(mission, 'el', 'result1') },
            { icon: 'Leaf', text: pick(mission, 'el', 'result2') },
            { icon: 'TreeDeciduous', text: pick(mission, 'el', 'result3') },
          ],
          futureVision: pick(mission, 'el', 'futureVision'),
          sustainableFuture: pick(mission, 'el', 'sustainableFuture'),
          futureVisionEnd: pick(mission, 'el', 'futureVisionEnd'),
        },
        {
          blockType: 'imageShowcase',
          title: pick(showcase, 'el', 'title'),
          subtitle: pick(showcase, 'el', 'subtitle'),
          tagline: pick(showcase, 'el', 'tagline'),
          images: [
            { image: showcase1, caption: pick(showcase, 'el', 'showcase1') },
            { image: showcase2, caption: pick(showcase, 'el', 'showcase2') },
            { image: showcase3, caption: pick(showcase, 'el', 'showcase3') },
            { image: showcase4, caption: pick(showcase, 'el', 'showcase4') },
          ],
        },
        {
          blockType: 'productsOverview',
          title: 'Οι Κατηγορίες μας',
          subtitle:
            'Πλήρης γκάμα λιπασμάτων για κάθε γεωργική ανάγκη. Από βασικά θρεπτικά μέχρι εξειδικευμένες λύσεις.',
          viewAllLabel: 'Δες όλα τα προϊόντα',
        },
        {
          blockType: 'fullWidthImage',
          image: banner,
          alt: 'Γεωργία',
        },
      ],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
  })

  console.log('Seeding HomePage sections (English)...')
  await payload.updateGlobal({
    slug: 'home-page',
    locale: 'en',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: {
      sections: [
        {
          blockType: 'hero',
          title: pick(heroEn, 'en', 'title'),
          titleHighlight: pick(heroEn, 'en', 'titleHighlight'),
          description: pick(heroEn, 'en', 'description'),
          image: heroImage,
          primaryCta: {
            label: pick(heroEn, 'en', 'viewProducts') || 'View Products',
            href: '/products',
          },
          secondaryCta: { label: 'Contact', href: '/contact' },
          stats: [
            { value: '14+', label: pick(heroEn, 'en', 'yearsInGreece') },
            { value: '1000+', label: pick(heroEn, 'en', 'partnerFarmers') },
            { value: '100%', label: pick(heroEn, 'en', 'greeceCoverage') },
          ],
        },
        {
          blockType: 'wizard',
          badge: 'Product Finder',
          title: 'Not sure which product to choose?',
          description:
            "Answer 4 simple questions about your crop and growth phase. We'll show you the exact products you need.",
          ctaLabel: 'Find my products',
          steps: [
            { label: 'Farmer or Agronomist?' },
            { label: 'Select your crop' },
            { label: 'Growth phase' },
            { label: 'See the products' },
          ],
          cropPreview: [
            { emoji: '🍅', label: 'Tomato' },
            { emoji: '🫒', label: 'Olive' },
            { emoji: '🍇', label: 'Vineyard' },
            { emoji: '🌽', label: 'Corn' },
            { emoji: '🍊', label: 'Citrus' },
            { emoji: '🌾', label: 'Wheat' },
            { emoji: '🥦', label: 'Vegetables' },
            { emoji: '🌸', label: 'Ornamentals' },
          ],
          moreLabel: '+ many more crops →',
        },
        {
          blockType: 'mission',
          title: pick(missionEn, 'en', 'title'),
          paragraphs: [
            {
              before: pick(missionEn, 'en', 'description1'),
              highlight: pick(missionEn, 'en', 'highlight1'),
              after: pick(missionEn, 'en', 'description2'),
            },
            {
              before: pick(missionEn, 'en', 'description3'),
              highlight: pick(missionEn, 'en', 'highlight2'),
              after: pick(missionEn, 'en', 'description4'),
            },
          ],
          resultsTitle: pick(missionEn, 'en', 'resultsTitle'),
          results: [
            { icon: 'Sprout', text: pick(missionEn, 'en', 'result1') },
            { icon: 'Leaf', text: pick(missionEn, 'en', 'result2') },
            { icon: 'TreeDeciduous', text: pick(missionEn, 'en', 'result3') },
          ],
          futureVision: pick(missionEn, 'en', 'futureVision'),
          sustainableFuture: pick(missionEn, 'en', 'sustainableFuture'),
          futureVisionEnd: pick(missionEn, 'en', 'futureVisionEnd'),
        },
        {
          blockType: 'imageShowcase',
          title: pick(showcaseEn, 'en', 'title'),
          subtitle: pick(showcaseEn, 'en', 'subtitle'),
          tagline: pick(showcaseEn, 'en', 'tagline'),
          images: [
            { image: showcase1, caption: pick(showcaseEn, 'en', 'showcase1') },
            { image: showcase2, caption: pick(showcaseEn, 'en', 'showcase2') },
            { image: showcase3, caption: pick(showcaseEn, 'en', 'showcase3') },
            { image: showcase4, caption: pick(showcaseEn, 'en', 'showcase4') },
          ],
        },
        {
          blockType: 'productsOverview',
          title: 'Our Categories',
          subtitle:
            'Complete range of fertilizers for every agricultural need. From basic nutrients to specialized solutions.',
          viewAllLabel: 'View all products',
        },
        {
          blockType: 'fullWidthImage',
          image: banner,
          alt: 'Agriculture',
        },
      ],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
  })

  console.log('\nDone.')
  process.exit(0)
}

main().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
