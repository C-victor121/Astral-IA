import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
export const locales = ['en', 'es'] as const;
export const defaultLocale = 'es' as const;

type Locale = (typeof locales)[number];

function isValidLocale(locale: string | undefined): locale is Locale {
  return locale !== undefined && locales.includes(locale as Locale);
}
 
export default getRequestConfig(async ({locale}) => {
  if (!isValidLocale(locale)) {
    notFound();
  }
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});