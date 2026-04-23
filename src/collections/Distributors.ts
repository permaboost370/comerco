import type { CollectionConfig } from 'payload'

const GREECE_REGION_OPTIONS = [
  { label: 'East Macedonia & Thrace', value: 'east-macedonia-thrace' },
  { label: 'Central Macedonia', value: 'central-macedonia' },
  { label: 'West Macedonia', value: 'west-macedonia' },
  { label: 'Epirus', value: 'epirus' },
  { label: 'Thessaly', value: 'thessaly' },
  { label: 'Ionian Islands', value: 'ionian-islands' },
  { label: 'West Greece', value: 'west-greece' },
  { label: 'Central Greece', value: 'central-greece' },
  { label: 'Attica', value: 'attica' },
  { label: 'Peloponnese', value: 'peloponnese' },
  { label: 'North Aegean', value: 'north-aegean' },
  { label: 'South Aegean', value: 'south-aegean' },
  { label: 'Crete', value: 'crete' },
]

export const Distributors: CollectionConfig = {
  slug: 'distributors',
  labels: {
    singular: { en: 'Distributor', el: 'Διανομέας' },
    plural: { en: 'Distributors', el: 'Διανομείς' },
  },
  admin: {
    useAsTitle: 'region',
    defaultColumns: ['region', 'company', 'regionIds', 'order'],
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
        description: 'URL-friendly identifier (e.g. "attica-sterea-evia"). Do not change after creation.',
      },
    },
    {
      name: 'region',
      type: 'text',
      required: true,
      localized: true,
      label: 'Region name',
    },
    {
      name: 'areas',
      type: 'textarea',
      localized: true,
      label: 'Areas covered',
    },
    {
      name: 'regionIds',
      type: 'select',
      hasMany: true,
      required: true,
      options: GREECE_REGION_OPTIONS,
      admin: {
        description: 'Greek administrative regions this distributor covers (used to highlight the map).',
      },
    },
    {
      name: 'company',
      type: 'text',
      admin: {
        description: 'Optional company name if different from the distributor contact.',
      },
    },
    {
      name: 'contacts',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Contact', plural: 'Contacts' },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'phone', type: 'text' },
        { name: 'role', type: 'text' },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'latitude',
          type: 'number',
          required: true,
          admin: { width: '50%', description: 'Map pin latitude (e.g. 37.9838).' },
        },
        {
          name: 'longitude',
          type: 'number',
          required: true,
          admin: { width: '50%', description: 'Map pin longitude (e.g. 23.7275).' },
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { description: 'Display order (lower = first).' },
    },
  ],
}
