'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Navigation({ onClose }: { onClose?: () => void }) {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/products`, label: t('products') },
  ];

  return (
    <nav className="flex flex-col md:flex-row gap-1 md:gap-0">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClose}
          className={cn(
            'px-4 py-2 text-sm font-medium transition-colors hover:text-gold-600',
            pathname === link.href ? 'text-gold-600' : 'text-ink'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
