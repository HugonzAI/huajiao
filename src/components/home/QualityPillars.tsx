import { useTranslations } from 'next-intl';
import Divider from '@/components/ui/Divider';

const icons = ['🌊', '☀️', '🏆', '✅'];

export default function QualityPillars() {
  const t = useTranslations('home');

  const pillars = [
    { icon: icons[0], title: t('pillar1Title'), body: t('pillar1Body') },
    { icon: icons[1], title: t('pillar2Title'), body: t('pillar2Body') },
    { icon: icons[2], title: t('pillar3Title'), body: t('pillar3Body') },
    { icon: icons[3], title: t('pillar4Title'), body: t('pillar4Body') },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl font-bold text-ink mb-3">{t('pillarsTitle')}</h2>
        <Divider className="w-16 mx-auto border-gold-400" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="text-center p-6 rounded-xl border border-gold-100 hover:border-gold-300 hover:shadow-sm transition-all bg-white"
          >
            <div className="text-4xl mb-4">{pillar.icon}</div>
            <h3 className="font-serif font-bold text-ink mb-2">{pillar.title}</h3>
            <p className="text-sm text-gold-800 leading-relaxed">{pillar.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
