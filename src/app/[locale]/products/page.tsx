import { setRequestLocale } from 'next-intl/server';
import ProductsClientPage from '@/components/products/ProductsClientPage';

export default function ProductsPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <ProductsClientPage />;
}
