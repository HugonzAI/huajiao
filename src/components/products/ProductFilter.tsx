'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ProductGrade, ProductCategory } from '@/types/product';
import { cn } from '@/lib/utils';

const grades: ProductGrade[] = ['AAA', 'AA', 'A', 'B'];
const categories: ProductCategory[] = ['dried', 'processed', 'gift-set'];

export default function ProductFilter() {
  const t = useTranslations('products');
  const tGrades = useTranslations('grades');
  const tCats = useTranslations('categories');
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const activeGrade = params.get('grade') as ProductGrade | null;
  const activeCategory = params.get('category') as ProductCategory | null;

  function setParam(key: string, value: string | null) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    router.push(`${pathname}?${next.toString()}`);
  }

  const chipBase = 'text-xs px-3 py-1.5 rounded-full border transition-colors cursor-pointer font-medium';
  const active = 'bg-gold-500 border-gold-500 text-white';
  const inactive = 'border-gold-300 text-gold-700 hover:bg-gold-50';

  return (
    <div className="flex flex-wrap gap-4 items-start">
      {/* Grade filter */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-xs text-gold-600 font-medium mr-1">{t('filterByGrade')}:</span>
        <button
          className={cn(chipBase, !activeGrade ? active : inactive)}
          onClick={() => setParam('grade', null)}
        >
          {t('allGrades')}
        </button>
        {grades.map((g) => (
          <button
            key={g}
            className={cn(chipBase, activeGrade === g ? active : inactive)}
            onClick={() => setParam('grade', activeGrade === g ? null : g)}
          >
            {tGrades(g)}
          </button>
        ))}
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-xs text-gold-600 font-medium mr-1">{t('filterByCategory')}:</span>
        <button
          className={cn(chipBase, !activeCategory ? active : inactive)}
          onClick={() => setParam('category', null)}
        >
          {t('allCategories')}
        </button>
        {categories.map((c) => (
          <button
            key={c}
            className={cn(chipBase, activeCategory === c ? active : inactive)}
            onClick={() => setParam('category', activeCategory === c ? null : c)}
          >
            {tCats(c)}
          </button>
        ))}
      </div>
    </div>
  );
}
