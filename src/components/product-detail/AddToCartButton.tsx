'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import QuantitySelector from '@/components/ui/QuantitySelector';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const t = useTranslations('productDetail');
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  if (!product.inStock) {
    return (
      <Button variant="secondary" size="lg" disabled className="w-full">
        {t('outOfStock')}
      </Button>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="text-sm text-gold-700">{t('quantity')}</span>
        <QuantitySelector value={qty} onChange={setQty} />
      </div>
      <Button
        variant="primary"
        size="lg"
        onClick={handleAdd}
        className={`w-full transition-all ${added ? 'bg-green-600 hover:bg-green-600' : ''}`}
      >
        {added ? `✓ ${t('addedToCart')}` : t('addToCart')}
      </Button>
    </div>
  );
}
