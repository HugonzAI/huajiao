import { useTranslations } from 'next-intl';
import Divider from '@/components/ui/Divider';

export default function BuyingGuide() {
  const t = useTranslations('home.guide');

  const items = [
    { title: t('item1Title'), body: t('item1Body') },
    { title: t('item2Title'), body: t('item2Body') },
    { title: t('item3Title'), body: t('item3Body') },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-gold-500 text-sm tracking-widest uppercase mb-2 font-medium">Guide</p>
          <h2 className="font-serif text-3xl font-bold text-ink mb-3">{t('title')}</h2>
          <p className="text-gold-700 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">{t('intro')}</p>
          <Divider className="w-16 mx-auto mt-4 border-gold-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-gold-100 bg-gold-50 p-6 hover:border-gold-300 transition-all"
            >
              <h3 className="font-serif text-xl font-bold text-ink mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-gold-800 leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
