'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const t = useTranslations('Index.hero');

  return (
    <section
      id="hero"
      className="py-20 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/galaxy-background.jpeg')" }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">{t('title')}</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          {t('subtitle')}
        </p>
        <Button>{t('cta')}</Button>
      </div>
    </section>
  );
}