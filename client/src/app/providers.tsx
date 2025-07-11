'use client';

import { NextIntlClientProvider } from 'next-intl';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  locale: string;
  messages: Record<string, string>;
}

export default function Providers({ children, locale, messages }: Props) {
  return (
    <SessionProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </SessionProvider>
  );
}