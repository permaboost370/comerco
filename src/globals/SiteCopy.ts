import type { GlobalConfig } from 'payload'

/**
 * Marketing copy — what used to live in messages/*.json.
 *
 * Split across 8 page-sized Globals so each stays well under Postgres'
 * 100-arg-per-function limit (a single Global with 160+ localized fields
 * generates a read query that busts that limit).
 *
 * Globals are organized the way the boss thinks about the site: one per
 * page or shared concern. next-intl's request.ts fetches all 8 in parallel
 * and merges them back into the nested {namespace: {key: value}} shape.
 */

const text = (name: string, label: string) => ({
  name,
  type: 'text' as const,
  localized: true,
  label,
})

const longText = (name: string, label: string) => ({
  name,
  type: 'textarea' as const,
  localized: true,
  label,
})

export const NavCopy: GlobalConfig = {
  slug: 'nav-copy',
  label: 'Navigation & Footer',
  admin: {
    description: 'Top-nav labels, footer headings, and shared UI strings used across every page.',
  },
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'common',
          label: 'Common',
          fields: [
            text('home', 'Home'),
            text('products', 'Products (nav)'),
            text('about', 'About (nav)'),
            text('distributors', 'Distributors (nav)'),
            text('animalFeed', 'Animal Feed (nav)'),
            text('contact', 'Contact (nav)'),
            text('privacyPolicy', 'Privacy Policy'),
            text('viewAll', 'View All'),
            text('learnMore', 'Learn More'),
            text('callUs', 'Call Us'),
            text('emailUs', 'Email Us'),
            text('followUs', 'Follow Us'),
            text('allRightsReserved', 'All rights reserved'),
          ],
        },
        {
          name: 'header',
          label: 'Header',
          fields: [
            text('ourProducts', 'Our Products (mega-menu title)'),
            text('viewAllProducts', 'View All Products (mega-menu CTA)'),
          ],
        },
        {
          name: 'footer',
          label: 'Footer',
          fields: [
            longText('description', 'Description'),
            text('products', 'Products heading'),
            text('company', 'Company heading'),
            text('aboutUs', 'About Us link'),
            text('partners', 'Partners link'),
            text('followUs', 'Follow Us heading'),
          ],
        },
      ],
    },
  ],
}

export const HomeCopy: GlobalConfig = {
  slug: 'home-copy',
  label: 'Home Page',
  admin: { description: 'Content that appears on the homepage.' },
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'hero',
          label: 'Hero',
          fields: [
            text('title', 'Title'),
            text('titleHighlight', 'Title highlight (colored part)'),
            longText('description', 'Description'),
            text('viewProducts', 'Button: View Products'),
            text('yearsInGreece', 'Stat: Years in Greece'),
            text('partnerFarmers', 'Stat: Partner Farmers'),
            text('greeceCoverage', 'Stat: Greece Coverage'),
          ],
        },
        {
          name: 'mission',
          label: 'Mission',
          fields: [
            text('title', 'Title'),
            text('description1', 'Description part 1'),
            text('highlight1', 'Highlight 1'),
            text('description2', 'Description part 2'),
            text('description3', 'Description part 3'),
            text('highlight2', 'Highlight 2'),
            text('description4', 'Description part 4'),
            text('resultsTitle', 'Results title'),
            text('result1', 'Result 1'),
            text('result2', 'Result 2'),
            text('result3', 'Result 3'),
            text('futureVision', 'Future vision prefix'),
            text('sustainableFuture', 'Sustainable future (highlight)'),
            text('futureVisionEnd', 'Future vision suffix'),
          ],
        },
        {
          name: 'stats',
          label: 'Stats',
          fields: [
            text('title', 'Title'),
            text('years', 'Years label'),
            text('farmers', 'Farmers label'),
            text('regions', 'Regions label'),
            text('products', 'Products label'),
          ],
        },
        {
          name: 'showcase',
          label: 'Showcase',
          fields: [
            text('title', 'Title'),
            longText('subtitle', 'Subtitle'),
            text('tagline', 'Tagline'),
            text('showcase1', 'Showcase 1 caption'),
            text('showcase2', 'Showcase 2 caption'),
            text('showcase3', 'Showcase 3 caption'),
            text('showcase4', 'Showcase 4 caption'),
          ],
        },
      ],
    },
  ],
}

export const AboutCopy: GlobalConfig = {
  slug: 'about-copy',
  label: 'About Page',
  admin: { description: 'Content on the /about page.' },
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'about',
          label: 'About',
          fields: [
            text('title', 'Title'),
            longText('subtitle', 'Subtitle'),
            text('ourStory', 'Our Story heading'),
            longText('storyP1', 'Story paragraph 1'),
            longText('storyP2', 'Story paragraph 2'),
            longText('storyP3', 'Story paragraph 3'),
            text('microsporeTitle', 'Microspore section title'),
            longText('microsporeP1', 'Microspore paragraph 1'),
            longText('microsporeP2', 'Microspore paragraph 2'),
            text('ourMission', 'Our Mission heading'),
            longText('missionP1', 'Mission paragraph 1'),
            longText('missionP2', 'Mission paragraph 2'),
            longText('missionP3', 'Mission paragraph 3'),
            text('rdTitle', 'R&D title'),
            longText('rdP1', 'R&D paragraph 1'),
            longText('rdP2', 'R&D paragraph 2'),
            text('ourCommitment', 'Commitment heading'),
            longText('commitmentP1', 'Commitment paragraph 1'),
            longText('commitmentP2', 'Commitment paragraph 2'),
            text('ourValues', 'Values heading'),
            text('valuesSubtitle', 'Values subtitle'),
            text('responsibility', 'Value: Responsibility'),
            longText('responsibilityDesc', 'Responsibility description'),
            text('integrity', 'Value: Integrity'),
            longText('integrityDesc', 'Integrity description'),
            text('sustainability', 'Value: Sustainability'),
            longText('sustainabilityDesc', 'Sustainability description'),
            text('innovation', 'Value: Innovation'),
            longText('innovationDesc', 'Innovation description'),
            text('ourJourney', 'Journey heading'),
            text('journeySubtitle', 'Journey subtitle'),
            text('founding', 'Milestone: Founding'),
            longText('foundingDesc', 'Founding description'),
            text('expansion', 'Milestone: Expansion'),
            longText('expansionDesc', 'Expansion description'),
            text('innovationMilestone', 'Milestone: Innovation'),
            longText('innovationMilestoneDesc', 'Innovation milestone description'),
            text('growth', 'Milestone: Growth'),
            longText('growthDesc', 'Growth description'),
            text('rebranding', 'Milestone: Rebranding'),
            longText('rebrandingDesc', 'Rebranding description'),
            text('today', 'Milestone: Today'),
            longText('todayDesc', 'Today description'),
            text('regionsCoverage', 'Stat: Regions Coverage'),
            text('biotechProducts', 'Stat: Biotech Products'),
          ],
        },
      ],
    },
  ],
}

export const ProductsCopy: GlobalConfig = {
  slug: 'products-copy',
  label: 'Products Page',
  admin: { description: 'Copy for the /products listing and category pages.' },
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'products',
          label: 'Products',
          fields: [
            text('title', 'Title'),
            longText('subtitle', 'Subtitle'),
            text('viewCategory', 'Button: View Category'),
            text('viewProduct', 'Button: View Products'),
            text('allProducts', 'All Products'),
            text('categories', 'Categories'),
            text('notFoundTitle', 'Not-found title'),
            longText('notFoundDesc', 'Not-found description'),
            text('contactUs', 'Button: Contact Us'),
            text('ourCategories', 'Our Categories heading'),
            longText('categoriesDesc', 'Categories description'),
            text('viewAllProducts', 'Button: View All Products'),
            text('backToProducts', 'Back to Products'),
            text('productCatalog', 'Product Catalog heading'),
            longText('catalogComingSoon', 'Catalog-coming-soon message'),
            text('requestPriceList', 'Button: Request Price List'),
            text('call', 'Button: Call'),
            text('otherCategories', 'Other Categories heading'),
          ],
        },
      ],
    },
  ],
}

export const DistributorsCopy: GlobalConfig = {
  slug: 'distributors-copy',
  label: 'Distributors Page',
  admin: { description: 'Copy for the /distributors page.' },
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'distributors',
          label: 'Distributors',
          fields: [
            text('title', 'Title'),
            longText('subtitle', 'Subtitle'),
            text('findDistributor', 'Find a Partner'),
            text('region', 'Region label'),
            text('phone', 'Phone label'),
            text('mapTitle', 'Map title'),
            text('contact', 'Contact heading'),
            text('callComerco', 'Button: Call Comerco'),
            text('selectRegion', 'Select Region heading'),
            longText('selectRegionDesc', 'Select Region description'),
            text('allPartners', 'All Partners heading'),
            text('teamCoversGreece', 'Team-covers-Greece tagline'),
            text('notFoundTitle', 'Not-found title'),
            longText('notFoundDesc', 'Not-found description'),
          ],
        },
      ],
    },
  ],
}

export const ContactCopy: GlobalConfig = {
  slug: 'contact-copy',
  label: 'Contact Page',
  admin: { description: 'Copy for the /contact page.' },
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'contact',
          label: 'Contact',
          fields: [
            text('title', 'Title'),
            longText('subtitle', 'Subtitle'),
            text('phone', 'Phone label'),
            text('email', 'Email label'),
            text('address', 'Address label'),
            text('businessHours', 'Business Hours heading'),
            text('weekdays', 'Weekday hours'),
            text('weekends', 'Weekend hours'),
            text('ourLocation', 'Our Location heading'),
            text('openInMaps', 'Open in Google Maps'),
            text('followUs', 'Follow Us heading'),
            longText('followUsDesc', 'Follow Us description'),
            text('needHelp', 'Need Help heading'),
            longText('needHelpDesc', 'Need Help description'),
          ],
        },
      ],
    },
  ],
}

export const AnimalFeedCopy: GlobalConfig = {
  slug: 'animal-feed-copy',
  label: 'Animal Feed Page',
  admin: { description: 'Copy for the /animal-feed page.' },
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'animalFeed',
          label: 'Animal Feed',
          fields: [
            text('title', 'Title'),
            longText('subtitle', 'Subtitle'),
            text('downloadCatalogue', 'Button: Download Catalogue'),
            text('ourProducts', 'Our Products heading'),
          ],
        },
      ],
    },
  ],
}

export const CookiesCopy: GlobalConfig = {
  slug: 'cookies-copy',
  label: 'Cookies Banner',
  admin: { description: 'Cookie consent banner and settings dialog.' },
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'cookies',
          label: 'Cookies',
          fields: [
            text('title', 'Banner title'),
            longText('description', 'Banner description'),
            text('readPrivacy', 'Read our (prefix)'),
            text('forMoreInfo', 'for more info (suffix)'),
            text('acceptAll', 'Button: Accept All'),
            text('acceptNecessary', 'Button: Necessary Only'),
            text('settings', 'Button: Settings'),
            text('cookieSettings', 'Cookie Settings heading'),
            text('necessaryCookies', 'Necessary Cookies label'),
            longText('necessaryDesc', 'Necessary description'),
            text('analyticsCookies', 'Analytics Cookies label'),
            longText('analyticsDesc', 'Analytics description'),
            text('marketingCookies', 'Marketing Cookies label'),
            longText('marketingDesc', 'Marketing description'),
            text('savePreferences', 'Button: Save Preferences'),
          ],
        },
      ],
    },
  ],
}

export const ALL_COPY_GLOBALS = [
  NavCopy,
  HomeCopy,
  AboutCopy,
  ProductsCopy,
  DistributorsCopy,
  ContactCopy,
  AnimalFeedCopy,
  CookiesCopy,
] as const

/**
 * Maps each Global's slug → the list of namespace names that live inside it.
 * Used by request.ts to fetch + merge and by the seed script to route each
 * namespace's values to the right Global.
 */
export const GLOBAL_NAMESPACE_MAP: Record<string, readonly string[]> = {
  'nav-copy': ['common', 'header', 'footer'],
  'home-copy': ['hero', 'mission', 'stats', 'showcase'],
  'about-copy': ['about'],
  'products-copy': ['products'],
  'distributors-copy': ['distributors'],
  'contact-copy': ['contact'],
  'animal-feed-copy': ['animalFeed'],
  'cookies-copy': ['cookies'],
}
