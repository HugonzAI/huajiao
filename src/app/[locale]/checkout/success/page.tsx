'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';

// Generate a simple order reference on the client
function generateOrderRef(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `HJ-${timestamp}-${random}`;
}

export default function SuccessPage() {
  const locale = useLocale();
  const t = useTranslations('checkout');

  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      {/* Checkmark */}
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="font-serif text-3xl font-bold text-ink mb-4">{t('successTitle')}</h1>
      <p className="text-gold-700 leading-relaxed mb-6">{t('successBody')}</p>

      <div className="bg-gold-50 border border-gold-200 rounded-lg px-6 py-4 mb-8 inline-block">
        <p className="text-xs text-gold-500 mb-1">{t('orderRef')}</p>
        <p className="font-mono font-bold text-gold-800 text-lg">{generateOrderRef()}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href={`/${locale}`}>
          <Button variant="secondary">{t('backToHome')}</Button>
        </Link>
        <Link href={`/${locale}/products`}>
          <Button variant="primary">{t('continueShopping')}</Button>
        </Link>
      </div>
    </div>
  );
}
