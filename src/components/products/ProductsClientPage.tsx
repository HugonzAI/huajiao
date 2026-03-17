'use client';

import { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import { ProductGrade, ProductCategory } from '@/types/product';
import ProductFilter from './ProductFilter';
import ProductGrid from './ProductGrid';
import Divider from '@/components/ui/Divider';

function ProductsContent() {
  const t = useTranslations('products');
  const params = useSearchParams();

  const grade = params.get('grade') as ProductGrade | null;
  const category = params.get('category') as ProductCategory | null;

  const filtered = products.filter((p) => {
    if (grade && p.grade !== grade) return false;
    if (category && p.category !== category) return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-ink mb-2">{t('title')}</h1>
        <p className="text-gold-700 text-sm">{t('subtitle')}</p>
        <Divider className="mt-4" />
      </div>
      <div className="mb-8">
        <ProductFilter />
      </div>
      <ProductGrid products={filtered} emptyMessage={t('noProducts')} />
    </div>
  );
}

export default function ProductsClientPage() {
  return (
    <Suspense fallback={<div className="max-w-6xl mx-auto px-4 py-24 text-center text-gold-500">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
