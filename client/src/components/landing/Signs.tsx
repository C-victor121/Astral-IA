'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';

const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer']; // Add all 12 signs

export default function Signs() {
  const t = useTranslations('Index.signs');

  return (
    <section id="signs" className="py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">{t('title')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {signs.map((sign) => (
            <Card key={sign} className="bg-gray-800 border-purple-500/50">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="w-24 h-24 bg-gray-700 rounded-full mb-4 flex items-center justify-center">
                  <p>{sign} Icon</p>
                </div>
                <p className="font-bold">{sign}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}