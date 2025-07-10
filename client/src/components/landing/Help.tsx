'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function Help() {
  const t = useTranslations('Index.help');

  return (
    <section id="help" className="py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          {/* Placeholder for the geometric art */}
          <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center">
            <p>Geometric Art</p>
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-bold mb-4">{t('title')}</h3>
          <p className="mb-8">{t('description')}</p>
          <Button variant="secondary">{t('cta')}</Button>
        </div>
      </div>
    </section>
  );
}