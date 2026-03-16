import { useLocale, useTranslations } from 'next-intl';
import Divider from '@/components/ui/Divider';

export default function BrandStory() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <section className="bg-gold-50 py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-gold-500 text-sm tracking-widest uppercase mb-2 font-medium">
            {locale === 'zh' ? '品牌故事' : 'Our Story'}
          </p>
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">{t('brandStoryTitle')}</h2>
          <Divider className="w-12 mb-6 border-gold-400" />
          <p className="text-gold-800 leading-loose text-sm md:text-base">{t('brandStoryBody')}</p>
        </div>

        {/* Decorative visual */}
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gold-800 to-gold-600 flex items-center justify-center shadow-lg">
          <div className="text-center text-white px-8">
            <p className="font-serif text-6xl font-bold text-gold-200 mb-2">20+</p>
            <p className="text-gold-100 text-sm tracking-widest uppercase">
              {locale === 'zh' ? '年匠心专注' : 'Years of Expertise'}
            </p>
            <div className="w-12 h-px bg-gold-300 mx-auto my-4" />
            <p className="font-serif text-2xl text-gold-200">Better Health</p>
          </div>
        </div>
      </div>
    </section>
  );
}
