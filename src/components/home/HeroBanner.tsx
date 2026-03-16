import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';

export default function HeroBanner() {
  const locale = useLocale();
  const t = useTranslations('home.hero');

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-900 via-gold-800 to-gold-600" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #fdf8ee 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, #fdf8ee 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative gold lines */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold-300 to-transparent opacity-50" />
      <div className="absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold-300 to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-gold-300 text-sm tracking-[0.3em] uppercase mb-6 font-medium">
          BETTER HEALTH · 花胶养生精品
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {t('headline')}
        </h1>
        <p className="text-gold-100 text-base md:text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          {t('subheadline')}
        </p>
        <Link href={`/${locale}/products`}>
          <Button size="lg" className="bg-white text-gold-800 hover:bg-gold-50 font-semibold shadow-lg">
            {t('cta')} →
          </Button>
        </Link>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
