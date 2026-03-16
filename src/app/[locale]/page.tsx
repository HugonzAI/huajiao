import HeroBanner from '@/components/home/HeroBanner';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BrandStory from '@/components/home/BrandStory';
import QualityPillars from '@/components/home/QualityPillars';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedProducts />
      <BrandStory />
      <QualityPillars />
    </>
  );
}
