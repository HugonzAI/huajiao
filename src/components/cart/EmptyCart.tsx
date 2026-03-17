import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';

export default function EmptyCart() {
  const locale = useLocale();
  const t = useTranslations('cart');

  return (
    <div className="text-center py-24">
      <div className="text-6xl mb-6">🛒</div>
      <h2 className="font-serif text-2xl font-bold text-ink mb-2">{t('empty')}</h2>
      <p className="text-gold-600 mb-8">{t('emptyHint')}</p>
      <Link href={`/${locale}/products`}>
        <Button variant="primary" size="lg">{t('continueShopping')}</Button>
      </Link>
    </div>
  );
}
