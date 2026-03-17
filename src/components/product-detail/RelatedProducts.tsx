import { useTranslations } from 'next-intl';
import { Product } from '@/types/product';
import { getRelatedProducts } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import Divider from '@/components/ui/Divider';

interface RelatedProductsProps {
  product: Product;
}

export default function RelatedProducts({ product }: RelatedProductsProps) {
  const t = useTranslations('productDetail');
  const related = getRelatedProducts(product);

  if (related.length === 0) return null;

  return (
    <section>
      <h2 className="font-serif text-2xl font-bold text-ink mb-2">{t('relatedTitle')}</h2>
      <Divider className="mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
