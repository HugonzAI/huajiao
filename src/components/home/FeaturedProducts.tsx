import { useTranslations } from 'next-intl';
import { getFeaturedProducts } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import Divider from '@/components/ui/Divider';

export default function FeaturedProducts() {
  const t = useTranslations('home');
  const featured = getFeaturedProducts();

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <p className="text-gold-500 text-sm tracking-widest uppercase mb-2 font-medium">Featured</p>
        <h2 className="font-serif text-3xl font-bold text-ink mb-3">{t('featuredTitle')}</h2>
        <p className="text-gold-700 text-sm">{t('featuredSubtitle')}</p>
        <Divider className="w-16 mx-auto mt-4 border-gold-400" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
