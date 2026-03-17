'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Product } from '@/types/product';
import { cn } from '@/lib/utils';

interface ProductDescriptionProps {
  product: Product;
}

type Tab = 'description' | 'preparation' | 'storage';

export default function ProductDescription({ product }: ProductDescriptionProps) {
  const locale = useLocale() as 'zh' | 'en';
  const t = useTranslations('productDetail');
  const [tab, setTab] = useState<Tab>('description');

  const info = product.translations[locale];

  const tabs: { key: Tab; label: string }[] = [
    { key: 'description', label: t('description') },
    { key: 'preparation', label: t('preparation') },
    { key: 'storage', label: t('storage') },
  ];

  return (
    <div className="border border-gold-200 rounded-xl overflow-hidden">
      {/* Tab bar */}
      <div className="flex border-b border-gold-200 bg-gold-50">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={cn(
              'flex-1 py-3 text-sm font-medium transition-colors',
              tab === key
                ? 'bg-white text-gold-700 border-b-2 border-gold-500'
                : 'text-gold-500 hover:text-gold-700'
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6 text-sm text-ink leading-loose">
        {tab === 'description' && (
          <div className="space-y-5">
            <p>{info.description}</p>
            {(info.whoItsFor || info.bestFor) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {info.whoItsFor && (
                  <div className="rounded-xl bg-gold-50 border border-gold-100 p-4">
                    <p className="text-xs uppercase tracking-widest text-gold-500 mb-2">
                      {locale === 'zh' ? '适合谁买' : 'Who it suits'}
                    </p>
                    <p>{info.whoItsFor}</p>
                  </div>
                )}
                {info.bestFor && (
                  <div className="rounded-xl bg-gold-50 border border-gold-100 p-4">
                    <p className="text-xs uppercase tracking-widest text-gold-500 mb-2">
                      {locale === 'zh' ? '更适合什么场景' : 'Best for'}
                    </p>
                    <p>{info.bestFor}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        {tab === 'preparation' && (
          <div className="whitespace-pre-line">{info.preparationNotes}</div>
        )}
        {tab === 'storage' && <p>{t('storageText')}</p>}
      </div>
    </div>
  );
}
