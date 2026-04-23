import type { GlobalConfig } from 'payload'
import { ALL_SECTION_BLOCKS } from '../blocks/sectionBlocks'

/**
 * The homepage as a stack of Blocks. Drag to reorder, click "+" to add a
 * new section, click the trash icon to remove one. Each block type has its
 * own editable fields (text, images, CTAs).
 */
export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: { en: 'Home Page', el: 'Αρχική Σελίδα' },
  admin: {
    description: 'The homepage layout. Add, remove, or reorder sections.',
  },
  access: { read: () => true },
  fields: [
    {
      name: 'sections',
      type: 'blocks',
      label: { en: 'Sections', el: 'Ενότητες' },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      blocks: [...ALL_SECTION_BLOCKS] as any,
      required: true,
      minRows: 1,
      admin: { description: 'The sections shown on the homepage, from top to bottom.' },
    },
  ],
}
