import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // Only show locale prefix for non-default locale
  localeDetection: false // Don't auto-detect browser language, always default to Greek
});

export const config = {
  // Match all pathnames except for
  // - ... if they start with `/api`, `/_next` or `/_vercel`
  // - ... the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/', '/(el|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
