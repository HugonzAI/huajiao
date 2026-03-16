export type ProductGrade = 'AAA' | 'AA' | 'A' | 'B';
export type ProductCategory = 'dried' | 'processed' | 'gift-set';
export type ProductOrigin = 'philippines' | 'indonesia' | 'india' | 'south-africa';

export interface ProductTranslation {
  name: string;
  shortDescription: string;
  description: string;
  preparationNotes: string;
  tags: string[];
}

export interface Product {
  id: string;
  slug: string;
  grade: ProductGrade;
  category: ProductCategory;
  origin: ProductOrigin;
  weightGrams: number;
  priceHKD: number;
  images: string[];
  inStock: boolean;
  isFeatured: boolean;
  translations: {
    zh: ProductTranslation;
    en: ProductTranslation;
  };
}
