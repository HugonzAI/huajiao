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
      <div className="relative aspect-square rounded-xl overflow-hidden bg-gold-50 border border-gold-100">
        <Image
          src={images[selected]}
          alt={alt}
          fill
          className="object-cover"
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
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                selected === i ? 'border-gold-500' : 'border-gold-100 hover:border-gold-300'
              }`}
            >
              <Image src={img} alt={`${alt} ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
