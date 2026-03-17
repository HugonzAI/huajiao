'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import GradeBadge from '@/components/ui/GradeBadge';
import Button from '@/components/ui/Button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const locale = useLocale() as 'zh' | 'en';
  const t = useTranslations('products');
  const tGrades = useTranslations('grades');
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const info = product.translations[locale];

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <Link
      href={`/${locale}/products/${product.slug}`}
      className="group bg-white rounded-xl overflow-hidden border border-gold-100 hover:border-gold-300 hover:shadow-md transition-all flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gold-50 overflow-hidden p-3 sm:p-4">
        <Image
          src={product.images[0]}
          alt={info.name}
          fill
          className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/images/placeholder.svg';
          }}
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white font-medium bg-black/60 px-3 py-1 rounded text-sm">
              {t('outOfStock')}
            </span>
          </div>
        )}
        <div className="absolute top-2 left-2">
          <GradeBadge grade={product.grade} label={tGrades(product.grade)} />
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <p className="font-serif font-semibold text-ink leading-snug line-clamp-2">{info.name}</p>
        <p className="text-xs text-gold-700 line-clamp-2 flex-1">{info.shortDescription}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-gold-700">{formatPrice(product.priceHKD)}</span>
          <span className="text-xs text-gray-400">{product.weightGrams}g</span>
        </div>
        <Button
          variant={added ? 'secondary' : 'primary'}
          size="sm"
          className="w-full mt-1"
          onClick={handleAdd}
          disabled={!product.inStock}
        >
          {added ? t('addedToCart') : t('addToCart')}
        </Button>
      </div>
    </Link>
  );
}
