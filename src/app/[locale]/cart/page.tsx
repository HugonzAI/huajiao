'use client';

import { useTranslations } from 'next-intl';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import EmptyCart from '@/components/cart/EmptyCart';
import Divider from '@/components/ui/Divider';

export default function CartPage() {
  const t = useTranslations('cart');
  const { items, totalItems } = useCart();

  if (items.length === 0) return <EmptyCart />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="font-serif text-3xl font-bold text-ink mb-2">{t('title')}</h1>
      <p className="text-gold-600 text-sm mb-6">
        {totalItems} {t('unit')}
      </p>
      <Divider className="mb-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gold-100 px-6">
          {items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
