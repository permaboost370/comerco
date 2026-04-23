import type { CollectionConfig } from 'payload'

export const ProductCategories: CollectionConfig = {
  slug: 'product-categories',
  labels: {
    singular: { en: 'Product Category', el: 'Κατηγορία Προϊόντος' },
    plural: { en: 'Product Categories', el: 'Κατηγορίες Προϊόντων' },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
      label: { en: 'Name', el: 'Όνομα' },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      label: { en: 'Description', el: 'Περιγραφή' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: { en: 'Slug', el: 'Slug (URL)' },
      admin: {
        description: 'URL-friendly identifier (e.g. "microorganism-products"). Do not change after creation.',
      },
    },
    {
      name: 'icon',
      type: 'text',
      label: { en: 'Icon', el: 'Εικονίδιο' },
      admin: {
        description: 'Lucide icon name (e.g. "FlaskConical", "Sprout", "Droplets").',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: { en: 'Order', el: 'Σειρά' },
      admin: {
        description: 'Display order (lower = first).',
      },
    },
  ],
}
