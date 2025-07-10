'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-4">{t('quickLinks.title')}</h4>
          <ul>
            <li><a href="#" className="hover:text-purple-400">{t('quickLinks.about')}</a></li>
            <li><a href="#" className="hover:text-purple-400">{t('quickLinks.readings')}</a></li>
            <li><a href="#" className="hover:text-purple-400">{t('quickLinks.contact')}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">{t('address.title')}</h4>
          <p>1234 Street Name</p>
          <p>City, AA 99999</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">{t('contact.title')}</h4>
          <p>contact@example.com</p>
          <p>+1 234 567 8900</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">{t('followUs.title')}</h4>
          <div className="flex space-x-4">
            {/* Add social media icons here */}
            <a href="#" className="hover:text-purple-400">Facebook</a>
            <a href="#" className="hover:text-purple-400">Instagram</a>
            <a href="#" className="hover:text-purple-400">Twitter</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8 border-t border-gray-700 pt-8">
        <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
      </div>
    </footer>
  );
}