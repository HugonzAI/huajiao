'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { CartItem as CartItemType } from '@/types/cart';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import QuantitySelector from '@/components/ui/QuantitySelector';
import GradeBadge from '@/components/ui/GradeBadge';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const locale = useLocale() as 'zh' | 'en';
  const t = useTranslations('cart');
  const tGrades = useTranslations('grades');
  const { removeItem, updateQuantity } = useCart();
  const info = item.product.translations[locale];

  return (
    <div className="flex gap-4 py-5 border-b border-gold-100 last:border-0">
      {/* Image */}
      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gold-50 flex-shrink-0 p-1">
        <Image
          src={item.product.images[0]}
          alt={info.name}
          fill
          className="object-contain"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/placeholder.svg'; }}
        />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col gap-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <GradeBadge grade={item.product.grade} label={tGrades(item.product.grade)} className="mb-1" />
            <p className="font-serif font-semibold text-ink text-sm leading-snug">{info.name}</p>
            <p className="text-xs text-gold-500">{item.product.weightGrams}g</p>
          </div>
          <button
            onClick={() => removeItem(item.product.id)}
            className="text-gold-300 hover:text-red-400 transition-colors text-xs flex-shrink-0 mt-0.5"
            aria-label={t('remove')}
          >
            ✕
          </button>
        </div>
        <div className="flex items-center justify-between mt-1">
          <QuantitySelector
            value={item.quantity}
            onChange={(q) => updateQuantity(item.product.id, q)}
          />
          <span className="font-bold text-gold-700">
            {formatPrice(item.product.priceHKD * item.quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}
