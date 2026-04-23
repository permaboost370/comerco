import 'server-only'
import { cache } from 'react'
import { getPayloadClient } from './payload'
import type { SectionBlock } from './home-page-types'

export const getHomePageSections = cache(
  async (locale: 'el' | 'en'): Promise<SectionBlock[]> => {
    const payload = await getPayloadClient()
    const doc = await payload.findGlobal({
      slug: 'home-page',
      locale,
      depth: 1,
    })
    const sections = (doc as unknown as { sections?: SectionBlock[] | null }).sections
    return sections ?? []
  },
)

export type {
  SectionBlock,
  HeroBlockData,
  MissionBlockData,
  ImageShowcaseBlockData,
  FullWidthImageBlockData,
  WizardBlockData,
  ProductsOverviewBlockData,
  MediaRef,
} from './home-page-types'
export { mediaUrl, mediaAlt } from './home-page-types'
