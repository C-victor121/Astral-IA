import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
export const locales = ['en', 'es'] as const;
export const defaultLocale = 'es' as const;

type Locale = (typeof locales)[number];

function isValidLocale(locale: string | undefined): locale is Locale {
  return locale !== undefined && locales.includes(locale as Locale);
}
 
export default getRequestConfig(async ({ locale }) => {
  if (!isValidLocale(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
    timeZone: 'Europe/Madrid',
    now: new Date(),
    onError(error) {
      if (
        error.message ===
        (process.env.NODE_ENV === 'production'
          ? 'MISSING_MESSAGE'
          : 'MISSING_MESSAGE: Could not resolve `missing` in `Index`.')
      ) {
        // Do nothing, this error is triggered on purpose
      } else {
        console.error(JSON.stringify(error.message));
      }
    },
    getMessageFallback({ key, namespace }) {
      return (
        '`getMessageFallback`: Could not resolve `'
        + key
        + '` in `'
        + namespace
        + '`.'
      );
    },
  };
});