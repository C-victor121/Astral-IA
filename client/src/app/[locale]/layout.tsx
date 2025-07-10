import { ReactNode } from 'react';
import Providers from '../providers';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  
  // Carga el JSON de traducciones correspondiente
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  
  return (
    <html lang={locale}>
      <body>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}