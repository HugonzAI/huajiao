'use client';

import { useTranslations } from 'next-intl';
import { useCart } from '@/context/CartContext';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import OrderSummary from '@/components/checkout/OrderSummary';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';

export default function CheckoutPage() {
  const t = useTranslations('checkout');
  const tCart = useTranslations('cart');
  const locale = useLocale();
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <p className="text-5xl mb-6">🛒</p>
        <p className="font-serif text-xl font-bold text-ink mb-4">{tCart('empty')}</p>
        <Link href={`/${locale}/products`}>
          <Button variant="primary">{tCart('continueShopping')}</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="font-serif text-3xl font-bold text-ink mb-2">{t('title')}</h1>
      <Divider className="mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <CheckoutForm />
        </div>
        <div className="lg:col-span-2">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
