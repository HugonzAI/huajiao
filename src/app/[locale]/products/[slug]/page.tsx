import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { products, getProductBySlug } from '@/data/products';
import ProductGallery from '@/components/product-detail/ProductGallery';
import ProductInfo from '@/components/product-detail/ProductInfo';
import ProductDescription from '@/components/product-detail/ProductDescription';
import RelatedProducts from '@/components/product-detail/RelatedProducts';
import Divider from '@/components/ui/Divider';
import Link from 'next/link';

export function generateStaticParams() {
  const locales = ['zh', 'en'];
  return locales.flatMap((locale) =>
    products.map((p) => ({ locale, slug: p.slug }))
  );
}

interface ProductDetailPageProps {
  params: { locale: string; slug: string };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const t = await getTranslations('common');

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-xs text-gold-500 mb-6 flex items-center gap-2">
        <Link href={`/${params.locale}/products`} className="hover:text-gold-700 transition-colors">
          {t('backToProducts')}
        </Link>
        <span>›</span>
        <span className="text-ink">
          {product.translations[params.locale as 'zh' | 'en']?.name ?? product.slug}
        </span>
      </nav>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <ProductGallery
          images={product.images}
          alt={product.translations[params.locale as 'zh' | 'en']?.name ?? product.slug}
        />
        <ProductInfo product={product} />
      </div>

      <Divider className="mb-10" />

      {/* Description tabs */}
      <div className="mb-14">
        <ProductDescription product={product} />
      </div>

      {/* Related products */}
      <RelatedProducts product={product} />
    </div>
  );
}
