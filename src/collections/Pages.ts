import type { CollectionConfig } from 'payload'
import { ALL_SECTION_BLOCKS } from '../blocks/sectionBlocks'

/**
 * Slugs that already map to static Next.js routes. A CMS page with one of
 * these slugs would be shadowed by its corresponding static route, so we
 * reject them on save. Keep in sync with src/app/(frontend)/[locale]/*.
 */
const RESERVED_SLUGS = new Set([
  '',
  'products',
  'distributors',
  'about',
  'contact',
  'animal-feed',
  'privacy-policy',
  'admin',
  'api',
])

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: { en: 'Page', el: 'Σελίδα' },
    plural: { en: 'Pages', el: 'Σελίδες' },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    description: 'Custom pages. Each page is a stack of the same blocks as the homepage. Reach a page at /<locale>/<slug>. After creating, remember to add it to the Menu if you want it in the nav.',
  },
  access: { read: () => true },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: { en: 'Title', el: 'Τίτλος' },
      admin: { description: 'Shown as the page <title> and in the breadcrumb. Translated per locale.' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL path segment (e.g. "news"). Reached at /<locale>/<slug>. Cannot be one of the reserved routes (products, about, contact, distributors, animal-feed, privacy-policy, admin, api).',
      },
      validate: (value: unknown) => {
        if (typeof value !== 'string') return 'Slug is required'
        const v = value.trim().toLowerCase()
        if (!/^[a-z0-9][a-z0-9-]*$/.test(v)) {
          return 'Slug must be lowercase letters, numbers, and hyphens only (start with a letter or number).'
        }
        if (RESERVED_SLUGS.has(v)) {
          return `"${v}" is reserved by an existing route. Pick another slug.`
        }
        return true
      },
    },
    {
      name: 'sections',
      type: 'blocks',
      label: { en: 'Sections', el: 'Ενότητες' },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      blocks: [...ALL_SECTION_BLOCKS] as any,
      required: true,
      minRows: 1,
      admin: { description: 'The content of the page. Add, remove, or reorder sections.' },
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      admin: { description: 'Optional overrides for search engines.' },
      fields: [
        { name: 'metaTitle', type: 'text', localized: true, admin: { description: 'Defaults to the page title.' } },
        { name: 'metaDescription', type: 'textarea', localized: true },
      ],
    },
  ],
}
