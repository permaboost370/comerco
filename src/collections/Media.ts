import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: { en: 'Media', el: 'Αρχείο' },
    plural: { en: 'Media', el: 'Αρχεία' },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      localized: true,
      label: { en: 'Alt text', el: 'Εναλλακτικό κείμενο' },
    },
  ],
  upload: {
    mimeTypes: ['image/*'],
  },
}
