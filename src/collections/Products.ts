import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: { en: 'Product', el: 'Προϊόν' },
    plural: { en: 'Products', el: 'Προϊόντα' },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'isBio', 'slug'],
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
        description: 'URL-friendly identifier (e.g. "sublic"). Do not change after creation.',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'product-categories',
      required: true,
      label: { en: 'Category', el: 'Κατηγορία' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: { en: 'Image', el: 'Εικόνα' },
    },
    {
      name: 'isBio',
      type: 'checkbox',
      defaultValue: false,
      label: { en: 'Organic / Bio', el: 'Βιολογικό' },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: { en: 'Order', el: 'Σειρά' },
      admin: {
        description: 'Display order within category (lower = first).',
      },
    },
  ],
}
