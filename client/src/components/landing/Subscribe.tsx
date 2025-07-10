'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Subscribe() {
  const t = useTranslations('Index.subscribe');

  return (
    <section id="subscribe" className="py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">{t('title')}</h3>
        <p className="mb-8">{t('subtitle')}</p>
        <form className="flex max-w-md mx-auto">
          <Input type="email" placeholder={t('placeholder')} className="rounded-r-none" />
          <Button type="submit" className="rounded-l-none">{t('cta')}</Button>
        </form>
      </div>
    </section>
  );
}