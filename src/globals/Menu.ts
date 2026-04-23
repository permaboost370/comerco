import type { GlobalConfig } from 'payload'

/**
 * The main navigation menu. Reorder items by dragging. Each item links to
 * one of: a built-in route (home, products, distributors, etc.), a CMS page
 * from the Pages collection, or an arbitrary URL (external or internal path).
 */
export const Menu: GlobalConfig = {
  slug: 'menu',
  label: 'Menu',
  admin: {
    description: 'The main site navigation. Drag to reorder. New CMS pages created in the Pages collection do not appear in the nav until you add them here.',
  },
  access: { read: () => true },
  fields: [
    {
      name: 'items',
      type: 'array',
      labels: { singular: 'Menu item', plural: 'Menu items' },
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true,
          admin: { description: 'The label shown in the nav (e.g. "Products"). Translated per locale.' },
        },
        {
          name: 'type',
          type: 'select',
          required: true,
          defaultValue: 'builtin',
          options: [
            { label: 'Built-in route', value: 'builtin' },
            { label: 'CMS page', value: 'page' },
            { label: 'Custom URL', value: 'url' },
          ],
        },
        {
          name: 'builtinTarget',
          type: 'select',
          options: [
            { label: 'Home (/)', value: '/' },
            { label: 'Products (/products)', value: '/products' },
            { label: 'Distributors (/distributors)', value: '/distributors' },
            { label: 'About (/about)', value: '/about' },
            { label: 'Contact (/contact)', value: '/contact' },
            { label: 'Animal Feed (/animal-feed)', value: '/animal-feed' },
          ],
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'builtin',
            description: 'Pick one of the existing static pages.',
          },
        },
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'page',
            description: 'Pick a page from the Pages collection.',
          },
        },
        {
          name: 'url',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'url',
            description: 'Any absolute URL (https://...) or internal path (/something).',
          },
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'url',
            description: 'Open this link in a new browser tab.',
          },
        },
        {
          name: 'hasMegaMenu',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'If checked, a mega-menu with all product categories appears on hover. Typically only for the "Products" item.',
          },
        },
      ],
    },
  ],
}
