import { setRequestLocale } from 'next-intl/server';
import HeroBanner from '@/components/home/HeroBanner';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BrandStory from '@/components/home/BrandStory';
import QualityPillars from '@/components/home/QualityPillars';

export default function HomePage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return (
    <>
      <HeroBanner />
      <FeaturedProducts />
      <BrandStory />
      <QualityPillars />
    </>
  );
}
