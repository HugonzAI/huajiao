import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import { products } from '@/data/products';
import { ProductGrade, ProductCategory } from '@/types/product';
import ProductFilter from '@/components/products/ProductFilter';
import ProductGrid from '@/components/products/ProductGrid';
import Divider from '@/components/ui/Divider';

interface ProductsPageProps {
  searchParams: { grade?: string; category?: string };
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const t = await getTranslations('products');

  const filtered = products.filter((p) => {
    if (searchParams.grade && p.grade !== searchParams.grade) return false;
    if (searchParams.category && p.category !== searchParams.category) return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-ink mb-2">{t('title')}</h1>
        <p className="text-gold-700 text-sm">{t('subtitle')}</p>
        <Divider className="mt-4" />
      </div>

      {/* Filters */}
      <div className="mb-8">
        <Suspense fallback={null}>
          <ProductFilter />
        </Suspense>
      </div>

      {/* Grid */}
      <ProductGrid products={filtered} emptyMessage={t('noProducts')} />
    </div>
  );
}
