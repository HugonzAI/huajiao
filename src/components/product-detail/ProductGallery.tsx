'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gold-50 border border-gold-100 p-3 sm:p-4">
        <Image
          src={images[selected]}
          alt={alt}
          fill
          className="object-contain"
          priority
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/images/placeholder.svg';
          }}
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors bg-gold-50 p-1 ${
                selected === i ? 'border-gold-500' : 'border-gold-100 hover:border-gold-300'
              }`}
            >
              <Image src={img} alt={`${alt} ${i + 1}`} fill className="object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
