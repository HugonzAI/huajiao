import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';

const FREE_SHIPPING_THRESHOLD = 500;
const SHIPPING_FEE = 50;

export default function CartSummary() {
  const locale = useLocale();
  const t = useTranslations('cart');
  const { totalPriceHKD } = useCart();

  const shipping = totalPriceHKD >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = totalPriceHKD + shipping;

  return (
    <div className="bg-white rounded-xl border border-gold-200 p-6">
      <h2 className="font-serif text-lg font-bold text-ink mb-4">{t('subtotal')}</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gold-700">{t('subtotal')}</span>
          <span className="font-medium">{formatPrice(totalPriceHKD)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gold-700">{t('shipping')}</span>
          <span className={`font-medium ${shipping === 0 ? 'text-green-600' : ''}`}>
            {shipping === 0 ? t('shippingFree') : formatPrice(shipping)}
          </span>
        </div>
        {totalPriceHKD < FREE_SHIPPING_THRESHOLD && (
          <p className="text-xs text-gold-500">{t('shippingThreshold')}</p>
        )}
      </div>

      <Divider className="my-4" />

      <div className="flex justify-between font-bold text-base mb-5">
        <span>{t('total')}</span>
        <span className="text-gold-700">{formatPrice(total)}</span>
      </div>

      <Link href={`/${locale}/checkout`}>
        <Button variant="primary" size="lg" className="w-full">
          {t('checkout')} →
        </Button>
      </Link>
    </div>
  );
}
