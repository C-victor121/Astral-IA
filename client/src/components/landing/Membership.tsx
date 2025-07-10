'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Membership() {
  const t = useTranslations('Index.membership');

  return (
    <section id="membership" className="py-16 md:py-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        <Card className="bg-gray-800 border-purple-500/50 text-center">
          <CardHeader>
            <CardTitle className="text-2xl">{t('member.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{t('member.description')}</p>
            <Button variant="outline">{t('member.cta')}</Button>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-purple-500/50 text-center">
          <CardHeader>
            <CardTitle className="text-2xl">{t('learningCenter.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{t('learningCenter.description')}</p>
            <Button>{t('learningCenter.cta')}</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}