import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations('nav');

  return (
    <footer className="bg-ink text-gold-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="font-serif text-xl font-bold text-gold-300 mb-2">Better Health</p>
          <p className="text-xs text-gold-500 mb-2">花胶养生精品</p>
          <p className="text-sm text-gold-200 leading-relaxed">
            {locale === 'zh'
              ? '精选全球优质花胶，传承百年养生之道。'
              : 'Premium fish maw sourced from the world\'s finest origins.'}
          </p>
        </div>
        <div>
          <p className="font-medium text-gold-300 mb-3">{locale === 'zh' ? '快速导航' : 'Quick Links'}</p>
          <ul className="space-y-2 text-sm">
            <li><Link href={`/${locale}`} className="hover:text-gold-300 transition-colors">{t('home')}</Link></li>
            <li><Link href={`/${locale}/products`} className="hover:text-gold-300 transition-colors">{t('products')}</Link></li>
            <li><Link href={`/${locale}/cart`} className="hover:text-gold-300 transition-colors">{t('cart')}</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-gold-300 mb-3">{locale === 'zh' ? '联系我们' : 'Contact'}</p>
          <ul className="space-y-2 text-sm text-gold-200">
            <li>📧 info@huajiao.com</li>
            <li>📱 WeChat: huajiao_premium</li>
            <li>🕐 {locale === 'zh' ? '周一至周六 10:00–19:00' : 'Mon–Sat 10:00–19:00'}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold-900 text-center text-xs text-gold-600 py-4">
        © {new Date().getFullYear()} Better Health 花胶养生精品. All rights reserved.
      </div>
    </footer>
  );
}
