import type { CollectionConfig } from 'payload'

export const WizardCropCategories: CollectionConfig = {
  slug: 'wizard-crop-categories',
  labels: {
    singular: { en: 'Wizard Crop Category', el: 'Κατηγορία Καλλιέργειας (Wizard)' },
    plural: { en: 'Wizard Crop Categories', el: 'Κατηγορίες Καλλιεργειών (Wizard)' },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'order'],
    description: 'Controls the Product Finder wizard on the homepage — categories, crops within each, and recommended products per growth phase.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g. "vegetables"). Do not change after creation.',
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'emoji',
          type: 'text',
          required: true,
          admin: { width: '33%', description: 'e.g. 🥦' },
        },
        {
          name: 'image',
          type: 'text',
          admin: { width: '33%', description: 'Filename under /public/images/crops/ (e.g. "vegetables.jpg").' },
        },
        {
          name: 'color',
          type: 'text',
          admin: {
            width: '34%',
            description: 'Tailwind gradient classes (e.g. "from-green-500 to-emerald-600").',
          },
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { description: 'Display order on the wizard (lower = first).' },
    },
    {
      name: 'crops',
      type: 'array',
      labels: { singular: 'Crop', plural: 'Crops' },
      admin: {
        description: 'Individual crops shown when "agronomist" flow picks this category.',
      },
      fields: [
        {
          name: 'slug',
          type: 'text',
          required: true,
          admin: { description: 'Identifier (e.g. "tomato").' },
        },
        {
          name: 'name',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'emoji',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'phases',
      type: 'array',
      labels: { singular: 'Growth Phase', plural: 'Growth Phases' },
      admin: {
        description: 'Growth phases shown after a user picks a crop, with recommended products per phase.',
      },
      fields: [
        {
          name: 'slug',
          type: 'text',
          required: true,
          admin: { description: 'Identifier (e.g. "flowering").' },
        },
        {
          name: 'name',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'emoji',
          type: 'text',
          required: true,
        },
        {
          name: 'products',
          type: 'relationship',
          relationTo: 'products',
          hasMany: true,
          admin: {
            description: 'Products recommended for this phase. Pick from the Products collection.',
          },
        },
      ],
    },
  ],
}
