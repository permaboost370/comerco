/**
 * Shared types + helpers for homepage section blocks. Kept separate from
 * home-page.ts (which imports 'server-only') so client components can
 * import the types without pulling the server runtime into the client bundle.
 */

export interface MediaRef {
  id: number | string
  url?: string | null
  alt?: string | null
  width?: number | null
  height?: number | null
}

export interface HeroStat {
  id?: string
  value?: string | null
  label?: string | null
}

export interface HeroBlockData {
  blockType: 'hero'
  id?: string
  title?: string | null
  titleHighlight?: string | null
  description?: string | null
  image?: MediaRef | string | number | null
  primaryCta?: { label?: string | null; href?: string | null } | null
  secondaryCta?: { label?: string | null; href?: string | null } | null
  stats?: HeroStat[] | null
}

export interface MissionParagraph {
  id?: string
  before?: string | null
  highlight?: string | null
  after?: string | null
}
export interface MissionResult {
  id?: string
  icon?: string | null
  text?: string | null
}
export interface MissionBlockData {
  blockType: 'mission'
  id?: string
  title?: string | null
  paragraphs?: MissionParagraph[] | null
  resultsTitle?: string | null
  results?: MissionResult[] | null
  futureVision?: string | null
  sustainableFuture?: string | null
  futureVisionEnd?: string | null
}

export interface ImageShowcaseImage {
  id?: string
  image?: MediaRef | string | number | null
  caption?: string | null
}
export interface ImageShowcaseBlockData {
  blockType: 'imageShowcase'
  id?: string
  title?: string | null
  subtitle?: string | null
  tagline?: string | null
  images?: ImageShowcaseImage[] | null
}

export interface FullWidthImageBlockData {
  blockType: 'fullWidthImage'
  id?: string
  image?: MediaRef | string | number | null
  alt?: string | null
}

export interface WizardStep {
  id?: string
  label?: string | null
}
export interface WizardCropPreview {
  id?: string
  emoji?: string | null
  label?: string | null
}
export interface WizardBlockData {
  blockType: 'wizard'
  id?: string
  badge?: string | null
  title?: string | null
  titleHighlight?: string | null
  description?: string | null
  ctaLabel?: string | null
  steps?: WizardStep[] | null
  cropPreview?: WizardCropPreview[] | null
  moreLabel?: string | null
}

export interface ProductsOverviewBlockData {
  blockType: 'productsOverview'
  id?: string
  title?: string | null
  subtitle?: string | null
  viewAllLabel?: string | null
}

export type SectionBlock =
  | HeroBlockData
  | MissionBlockData
  | ImageShowcaseBlockData
  | FullWidthImageBlockData
  | WizardBlockData
  | ProductsOverviewBlockData

/** Resolve an image ref (populated relation or id) to its public URL. */
export function mediaUrl(ref: MediaRef | string | number | null | undefined): string {
  if (!ref || typeof ref === 'string' || typeof ref === 'number') return ''
  return ref.url ?? ''
}
export function mediaAlt(
  ref: MediaRef | string | number | null | undefined,
  fallback = '',
): string {
  if (!ref || typeof ref === 'string' || typeof ref === 'number') return fallback
  return ref.alt ?? fallback
}
