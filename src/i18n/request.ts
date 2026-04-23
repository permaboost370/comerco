import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';
import { getSiteMessages } from '@/lib/site-copy';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  const messages = await getSiteMessages(locale as 'el' | 'en');

  return {
    locale,
    messages,
  };
});
