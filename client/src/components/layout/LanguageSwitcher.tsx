'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    // The pathname is expected to start with the locale, so we remove it
    const newPath = `/${newLocale}${pathname.substring(3)}`;
    router.replace(newPath);
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="bg-transparent text-white border-none outline-none"
    >
      <option value="en" className="bg-gray-900">EN</option>
      <option value="es" className="bg-gray-900">ES</option>
    </select>
  );
}