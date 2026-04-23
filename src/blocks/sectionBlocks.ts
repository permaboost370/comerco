import type { Block } from 'payload'

/**
 * Payload Blocks that compose the homepage (and, later, any Page created
 * through the Pages collection). Each block mirrors one section component
 * under src/components/sections/. Text fields are localized; images are
 * Media relationships uploadable via the admin.
 *
 * Block names must be stable — changing them breaks existing content.
 */

export const HeroBlock: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Hero sections' },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
          admin: { width: '60%' },
        },
        {
          name: 'titleHighlight',
          type: 'text',
          localized: true,
          admin: { width: '40%', description: 'Colored part of the title.' },
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    {
      type: 'row',
      fields: [
        {
          name: 'primaryCta',
          type: 'group',
          admin: { width: '50%' },
          fields: [
            { name: 'label', type: 'text', localized: true, required: true },
            { name: 'href', type: 'text', required: true, admin: { description: 'e.g. /products' } },
          ],
        },
        {
          name: 'secondaryCta',
          type: 'group',
          admin: { width: '50%' },
          fields: [
            { name: 'label', type: 'text', localized: true },
            { name: 'href', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      minRows: 0,
      maxRows: 4,
      labels: { singular: 'Stat', plural: 'Stats' },
      fields: [
        { name: 'value', type: 'text', required: true, admin: { description: 'e.g. "14+"' } },
        { name: 'label', type: 'text', required: true, localized: true },
      ],
    },
  ],
}

export const MissionBlock: Block = {
  slug: 'mission',
  labels: { singular: 'Mission', plural: 'Mission sections' },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    {
      name: 'paragraphs',
      type: 'array',
      labels: { singular: 'Paragraph', plural: 'Paragraphs' },
      admin: { description: 'Mixed text + bold highlight pairs.' },
      fields: [
        { name: 'before', type: 'textarea', localized: true },
        { name: 'highlight', type: 'text', localized: true, admin: { description: 'Bold emphasis' } },
        { name: 'after', type: 'textarea', localized: true },
      ],
    },
    { name: 'resultsTitle', type: 'text', localized: true },
    {
      name: 'results',
      type: 'array',
      minRows: 0,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            { label: 'Sprout', value: 'Sprout' },
            { label: 'Leaf', value: 'Leaf' },
            { label: 'TreeDeciduous', value: 'TreeDeciduous' },
            { label: 'FlaskConical', value: 'FlaskConical' },
            { label: 'Droplets', value: 'Droplets' },
            { label: 'Sparkles', value: 'Sparkles' },
          ],
        },
        { name: 'text', type: 'text', required: true, localized: true },
      ],
    },
    { name: 'futureVision', type: 'text', localized: true },
    { name: 'sustainableFuture', type: 'text', localized: true },
    { name: 'futureVisionEnd', type: 'text', localized: true },
  ],
}

export const ImageShowcaseBlock: Block = {
  slug: 'imageShowcase',
  labels: { singular: 'Image Showcase', plural: 'Image Showcase sections' },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'subtitle', type: 'textarea', localized: true },
    { name: 'tagline', type: 'text', localized: true },
    {
      name: 'images',
      type: 'array',
      minRows: 2,
      maxRows: 6,
      labels: { singular: 'Image', plural: 'Images' },
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'caption', type: 'text', localized: true },
      ],
    },
  ],
}

export const FullWidthImageBlock: Block = {
  slug: 'fullWidthImage',
  labels: { singular: 'Full-width Image', plural: 'Full-width Images' },
  fields: [
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'alt', type: 'text', localized: true, admin: { description: 'Alt text for accessibility.' } },
  ],
}

export const WizardBlock: Block = {
  slug: 'wizard',
  labels: { singular: 'Product Wizard', plural: 'Product Wizard sections' },
  admin: { description: 'The "Find Your Product" CTA + launcher. Crops and phases are configured in Wizard Crop Categories.' },
  fields: [
    { name: 'badge', type: 'text', localized: true, admin: { description: 'Small badge above title (e.g. "Product Finder").' } },
    { name: 'title', type: 'textarea', required: true, localized: true },
    { name: 'titleHighlight', type: 'text', localized: true },
    { name: 'description', type: 'textarea', localized: true },
    { name: 'ctaLabel', type: 'text', localized: true, required: true },
    {
      name: 'steps',
      type: 'array',
      minRows: 0,
      maxRows: 6,
      admin: { description: 'Numbered step labels shown next to the CTA.' },
      fields: [
        { name: 'label', type: 'text', required: true, localized: true },
      ],
    },
    {
      name: 'cropPreview',
      type: 'array',
      minRows: 0,
      maxRows: 12,
      admin: { description: 'Decorative crop tiles (emoji + label). Desktop only.' },
      fields: [
        { name: 'emoji', type: 'text', required: true },
        { name: 'label', type: 'text', required: true, localized: true },
      ],
    },
    { name: 'moreLabel', type: 'text', localized: true, admin: { description: 'e.g. "+ many more crops →"' } },
  ],
}

export const ProductsOverviewBlock: Block = {
  slug: 'productsOverview',
  labels: { singular: 'Products Overview', plural: 'Products Overview sections' },
  admin: { description: 'Grid of product categories. Categories themselves come from the Product Categories collection.' },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'subtitle', type: 'textarea', localized: true },
    { name: 'viewAllLabel', type: 'text', localized: true },
  ],
}

export const ALL_SECTION_BLOCKS = [
  HeroBlock,
  MissionBlock,
  ImageShowcaseBlock,
  FullWidthImageBlock,
  WizardBlock,
  ProductsOverviewBlock,
] as const
