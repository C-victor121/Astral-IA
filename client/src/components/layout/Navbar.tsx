'use client';

import { useTranslations } from 'next-intl';
import LoginModal from '../auth/LoginModal';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('Navbar');

  return (
    <header className="bg-gray-900 text-white py-4 px-6 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">AstralIA</h1>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-gray-400">{t('home')}</a>
          <a href="#" className="hover:text-gray-400">{t('readings')}</a>
          <a href="#" className="hover:text-gray-400">{t('psychics')}</a>
          <a href="#" className="hover:text-gray-400">{t('learningCenter')}</a>
          <a href="#" className="hover:text-gray-400">{t('faq')}</a>
          <a href="#" className="hover:text-gray-400">{t('contact')}</a>
        </nav>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <LoginModal />
        </div>
      </div>
    </header>
  );
}