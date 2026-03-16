import { useLocale, useTranslations } from 'next-intl';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Divider from '@/components/ui/Divider';

const FREE_SHIPPING_THRESHOLD = 500;
const SHIPPING_FEE = 50;

export default function OrderSummary() {
  const locale = useLocale() as 'zh' | 'en';
  const t = useTranslations('checkout');
  const tCart = useTranslations('cart');
  const { items, totalPriceHKD } = useCart();

  const shipping = totalPriceHKD >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = totalPriceHKD + shipping;

  return (
    <div className="bg-gold-50 rounded-xl p-6">
      <h2 className="font-serif text-lg font-bold text-ink mb-4">{t('orderSummary')}</h2>
      <div className="space-y-3 mb-4">
        {items.map((item) => (
          <div key={item.product.id} className="flex justify-between text-sm">
            <span className="text-ink truncate mr-2">
              {item.product.translations[locale].name} × {item.quantity}
            </span>
            <span className="font-medium text-gold-700 flex-shrink-0">
              {formatPrice(item.product.priceHKD * item.quantity)}
            </span>
          </div>
        ))}
      </div>
      <Divider className="mb-4" />
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gold-700">{tCart('subtotal')}</span>
          <span>{formatPrice(totalPriceHKD)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gold-700">{tCart('shipping')}</span>
          <span className={shipping === 0 ? 'text-green-600' : ''}>
            {shipping === 0 ? tCart('shippingFree') : formatPrice(shipping)}
          </span>
        </div>
      </div>
      <Divider className="my-3" />
      <div className="flex justify-between font-bold">
        <span>{tCart('total')}</span>
        <span className="text-gold-700">{formatPrice(total)}</span>
      </div>
    </div>
  );
}
