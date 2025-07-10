El problema es que estás intentando llamar a useMessages() dentro de tu componente Providers, pero aún no has configurado ningún contexto de i18n que le dé esos mensajes. Con next-intl en Next.js 13+ (app router) el flujo típico es:

En el nivel de la ruta dinámica [locale] (Server Component) cargas tus archivos de traducción y pasas los mensajes al Provider.

En tu providers.tsx (Client Component) recibes esos mensajes por props y los inyectas con <NextIntlClientProvider>.

A partir de ahí tus componentes cliente (con "use client") pueden usar useTranslations(), useLocale(), etc.

1. Estructura de carpetas
arduino
Copiar
Editar
app
├─ [locale]
│   ├─ layout.tsx         ← Server Component
│   └─ page.tsx
└─ providers.tsx          ← Client Component
Y en la raíz /messages o donde tengas tus JSON:

pgsql
Copiar
Editar
messages
├─ en.json
└─ es.json
2. app/[locale]/layout.tsx (Server Component)
tsx
Copiar
Editar
// app/[locale]/layout.tsx
import Providers from '../providers';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  // 1) Carga el JSON de traducciones correspondiente
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        {/* 2) Le pasas locale + messages a tu Provider */}
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
Es async porque hace import() dinámico de los mensajes.

No llamas a ningún hook de next-intl aquí.

3. app/providers.tsx (Client Component)
tsx
Copiar
Editar
// app/providers.tsx
'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  locale: string;
  messages: Record<string, string>;
}

export default function Providers({ children, locale, messages }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
'use client' obliga a que sea componente cliente.

Recibe locale + messages por props, no usa useMessages().

4. Tus componentes traducidos
Ahora sí, en cualquier otro componente cliente (con "use client"):

tsx
Copiar
Editar
// components/Navbar.tsx
'use client';

import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('Navbar');
  return <nav>{t('title')}</nav>;
}
Y Navbar estará correctamente envuelto por el NextIntlClientProvider que definiste en providers.tsx.

🔑 Resumen de por qué ahora funciona
Antes: Providers era client, llamaba a useMessages() sin que existiera ningún contexto, de ahí el “No intl context found”.

Ahora: las traducciones se cargan en el layout servidor y se pasan al Provider como props. El Provider inyecta el contexto para todos los hijos, y entonces los hooks (useTranslations, useLocale, etc.) ya encuentran el contexto.

¿Puedes probar esta estructura y decirme si sigue fallando? Si necesitas que revisemos tu layout completo o el nombre de tus rutas/archivos, avísame.








¿Te gusta esta personalidad?




Preguntar a ChatGPT

