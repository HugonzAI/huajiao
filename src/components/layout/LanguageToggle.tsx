'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function toggle() {
    const next = locale === 'zh' ? 'en' : 'zh';
    // Replace the locale prefix in the path
    const newPath = pathname.replace(`/${locale}`, `/${next}`);
    router.push(newPath);
  }

  return (
    <button
      onClick={toggle}
      className="text-sm font-medium border border-gold-500 text-gold-700 hover:bg-gold-500 hover:text-white transition-colors px-3 py-1 rounded-full"
      aria-label="Toggle language"
    >
      {locale === 'zh' ? 'EN' : '中文'}
    </button>
  );
}
