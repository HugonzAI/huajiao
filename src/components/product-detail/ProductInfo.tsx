import { useLocale, useTranslations } from 'next-intl';
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';
import GradeBadge from '@/components/ui/GradeBadge';
import AddToCartButton from './AddToCartButton';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const locale = useLocale() as 'zh' | 'en';
  const tGrades = useTranslations('grades');
  const tOrigins = useTranslations('origins');
  const tProducts = useTranslations('products');
  const tDetail = useTranslations('productDetail');

  const info = product.translations[locale];

  return (
    <div className="flex flex-col gap-5">
      {/* Grade + Stock */}
      <div className="flex items-center gap-3">
        <GradeBadge grade={product.grade} label={tGrades(product.grade)} />
        <span className={`text-xs font-medium ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
          {product.inStock ? `● ${tDetail('inStock')}` : `● ${tDetail('outOfStock')}`}
        </span>
      </div>

      {/* Name */}
      <h1 className="font-serif text-2xl md:text-3xl font-bold text-ink leading-snug">
        {info.name}
      </h1>

      {/* Short description */}
      <p className="text-gold-800 leading-relaxed">{info.shortDescription}</p>

      {/* Specs */}
      <div className="grid grid-cols-2 gap-3 text-sm bg-gold-50 rounded-lg p-4">
        <div>
          <p className="text-gold-500 text-xs mb-1">{tProducts('originLabel')}</p>
          <p className="font-medium text-ink">{tOrigins(product.origin)}</p>
        </div>
        <div>
          <p className="text-gold-500 text-xs mb-1">{tProducts('weightLabel')}</p>
          <p className="font-medium text-ink">{product.weightGrams}g</p>
        </div>
        <div>
          <p className="text-gold-500 text-xs mb-1">{tProducts('gradeLabel')}</p>
          <p className="font-medium text-ink">{tGrades(product.grade)}</p>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2">
        <span className="font-serif text-3xl font-bold text-gold-700">
          {formatPrice(product.priceHKD)}
        </span>
      </div>

      {/* Tags */}
      {info.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {info.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gold-100 text-gold-700 px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Add to cart */}
      <AddToCartButton product={product} />
    </div>
  );
}
