'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function Readings() {
  const t = useTranslations('Index.readings');

  return (
    <section id="readings" className="py-16 md:py-24 bg-gray-800">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">{t('title')}</h3>
        {/* Placeholder for moon phases */}
        <div className="w-full h-32 bg-gray-700 rounded-lg flex items-center justify-center mb-8">
            <p>Moon Phases</p>
        </div>
        <p className="max-w-3xl mx-auto mb-8">{t('description')}</p>
        <Button>{t('cta')}</Button>
      </div>
    </section>
  );
}