import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    slug: 'aaa-philippines-large',
    grade: 'AAA',
    category: 'dried',
    origin: 'philippines',
    weightGrams: 500,
    priceHKD: 2980,
    images: ['/images/products/aaa-large.jpg'],
    inStock: true,
    isFeatured: true,
    translations: {
      zh: {
        name: 'Better Health 精选花胶（大）',
        shortDescription: '主打新西兰客户的高端花胶选择，片大肉厚，适合送礼与滋补炖汤',
        description:
          '这款 Better Health 精选大规格花胶面向新西兰客户挑选，片型完整饱满，胶质丰厚，适合用于高端炖汤、糖水或礼盒搭配。对于重视品质、卖相和送礼体面的客户来说，这是一款代表性产品。',
        preparationNotes:
          '1. 提前一晚将花胶浸泡于清水中，放入冰箱冷藏泡发约8-12小时。\n2. 取出后用姜、葱、料酒汆水5分钟去腥，再过冷水备用。\n3. 与瘦肉、莲子、红枣等材料一同炖煮约2-3小时即可。',
        tags: ['菲律宾', '特级', '干货', '大片'],
      },
      en: {
        name: 'Better Health Premium Fish Maw (Large)',
        shortDescription: 'Large premium fish maw selected for gifting, soups, and high-end wellness cooking in New Zealand',
        description:
          'A Better Health premium-grade fish maw selection curated for New Zealand customers who want larger, fuller pieces with strong gelatin content. Ideal for nourishing soups, dessert broths, or premium gifting, this is one of the standout options in the range for customers prioritising quality and presentation.',
        preparationNotes:
          '1. Soak overnight in cold water in the refrigerator for 8–12 hours until fully hydrated.\n2. Blanch with ginger, spring onion and Shaoxing wine for 5 minutes to remove odour, then rinse under cold water.\n3. Simmer with lean pork, lotus seeds, red dates and other ingredients for 2–3 hours.',
        tags: ['Philippines', 'AAA Grade', 'Dried', 'Large'],
      },
    },
  },
  {
    id: '2',
    slug: 'aaa-philippines-medium',
    grade: 'AAA',
    category: 'dried',
    origin: 'philippines',
    weightGrams: 250,
    priceHKD: 1580,
    images: ['/images/products/aaa-medium.jpg'],
    inStock: true,
    isFeatured: true,
    translations: {
      zh: {
        name: 'Better Health 精选花胶（中）',
        shortDescription: '适合新西兰家庭日常炖汤的优质花胶，中等规格更实用',
        description:
          '这款中规格 Better Health 精选花胶兼顾品质、实用性和价格，适合日常滋补炖汤，也适合想先从优质花胶开始尝试的客户。对很多新西兰家庭来说，这是更容易长期回购的一档。',
        preparationNotes:
          '1. 提前8-12小时冷水浸泡至完全发透。\n2. 汆水去腥后备用。\n3. 与喜欢的材料一同炖煮2小时。',
        tags: ['菲律宾', '特级', '干货', '中片'],
      },
      en: {
        name: 'Better Health Premium Fish Maw (Medium)',
        shortDescription: 'A balanced premium option for regular New Zealand wellness cooking',
        description:
          'A medium-size Better Health premium fish maw option that offers a strong balance of quality, versatility, and price. Suitable for regular home cooking, nourishing soups, and customers wanting a premium fish maw without moving to the largest gift-style grade.',
        preparationNotes:
          '1. Soak in cold water in the refrigerator for 8–12 hours.\n2. Blanch to remove odour, then rinse.\n3. Simmer with your preferred ingredients for 2 hours.',
        tags: ['Philippines', 'AAA Grade', 'Dried', 'Medium'],
      },
    },
  },
  {
    id: '3',
    slug: 'aa-indonesia-large',
    grade: 'AA',
    category: 'dried',
    origin: 'indonesia',
    weightGrams: 500,
    priceHKD: 1880,
    images: ['/images/products/aa-large.jpg'],
    inStock: true,
    isFeatured: true,
    translations: {
      zh: {
        name: '优级印尼花胶（大）',
        shortDescription: '印度尼西亚优质花胶，色泽金黄，胶质充足',
        description:
          '精选自印度尼西亚近海渔场，花胶片型完整，色泽呈自然金黄色，胶质充足。每片约60-100克，是家庭日常炖汤的理想选择，营养丰富，滋补效果显著。',
        preparationNotes:
          '1. 冷水浸泡8小时至发透。\n2. 汆水去腥，过冷水备用。\n3. 与猪骨、虫草花等材料炖煮2-3小时。',
        tags: ['印尼', '优级', '干货', '大片'],
      },
      en: {
        name: 'AA Indonesia Fish Maw (Large)',
        shortDescription: 'Premium Indonesian fish maw — golden colour, rich gelatin',
        description:
          'Sourced from Indonesian coastal fisheries, these large maws feature a natural golden colour and substantial gelatinous texture, weighing 60–100g per piece. An excellent daily wellness choice with strong nourishing properties.',
        preparationNotes:
          '1. Soak in cold water for 8 hours until fully hydrated.\n2. Blanch with aromatics to remove odour, then rinse.\n3. Simmer with pork bones, snow fungus or other ingredients for 2–3 hours.',
        tags: ['Indonesia', 'AA Grade', 'Dried', 'Large'],
      },
    },
  },
  {
    id: '4',
    slug: 'aa-indonesia-medium',
    grade: 'AA',
    category: 'dried',
    origin: 'indonesia',
    weightGrams: 250,
    priceHKD: 980,
    images: ['/images/products/aa-medium.jpg'],
    inStock: true,
    isFeatured: false,
    translations: {
      zh: {
        name: '优级印尼花胶（中）',
        shortDescription: '优级印尼花胶中等规格，实惠之选',
        description:
          '与大片同产地同工艺，中等规格，每片约30-60克。非常适合初次接触花胶的顾客，入门首选，价格实惠，效果显著。',
        preparationNotes:
          '1. 冷水浸泡6-8小时。\n2. 汆水去腥备用。\n3. 炖煮约1.5-2小时。',
        tags: ['印尼', '优级', '干货', '中片'],
      },
      en: {
        name: 'AA Indonesia Fish Maw (Medium)',
        shortDescription: 'Premium Indonesian maw in medium size — great entry point',
        description:
          'Same quality as our large AA Indonesia maw, in a 30–60g medium size. A great starting point for those new to fish maw, offering excellent nourishment at an approachable price.',
        preparationNotes:
          '1. Soak in cold water for 6–8 hours.\n2. Blanch to remove odour, then rinse.\n3. Simmer for approximately 1.5–2 hours.',
        tags: ['Indonesia', 'AA Grade', 'Dried', 'Medium'],
      },
    },
  },
  {
    id: '5',
    slug: 'a-india-large',
    grade: 'A',
    category: 'dried',
    origin: 'india',
    weightGrams: 500,
    priceHKD: 1280,
    images: ['/images/products/a-large.jpg'],
    inStock: true,
    isFeatured: false,
    translations: {
      zh: {
        name: '一级印度花胶（大）',
        shortDescription: '印度产优质花胶，经济实惠，适合日常养生',
        description:
          '精选自印度西海岸，花胶色泽淡黄，质地结实，每片约50-80克。虽为一级品，但营养价值丰富，是追求性价比的顾客最佳选择，特别适合家庭大量采购使用。',
        preparationNotes:
          '1. 冷水浸泡6-8小时。\n2. 汆水去腥，过冷水。\n3. 与各种食材炖煮2小时。',
        tags: ['印度', '一级', '干货', '大片'],
      },
      en: {
        name: 'A Grade India Fish Maw (Large)',
        shortDescription: 'Quality Indian fish maw — best value for everyday wellness',
        description:
          'From India\'s west coast, these light golden maws are firm in texture, weighing 50–80g each. While graded A, they remain highly nourishing and represent outstanding value — ideal for families buying in larger quantities.',
        preparationNotes:
          '1. Soak in cold water for 6–8 hours.\n2. Blanch to remove odour, then rinse.\n3. Simmer with various ingredients for 2 hours.',
        tags: ['India', 'A Grade', 'Dried', 'Large'],
      },
    },
  },
  {
    id: '6',
    slug: 'b-south-africa-bulk',
    grade: 'B',
    category: 'dried',
    origin: 'south-africa',
    weightGrams: 1000,
    priceHKD: 1480,
    images: ['/images/products/b-bulk.jpg'],
    inStock: true,
    isFeatured: false,
    translations: {
      zh: {
        name: '二级南非花胶（大装）',
        shortDescription: '南非花胶大装，适合餐厅或家庭大量使用',
        description:
          '产自南非的优质花胶，每公斤装，适合餐厅、酒楼或有大量需求的家庭。花胶片型较小，约20-40克每片，但胶质同样丰富，用于炖汤效果极佳，性价比突出。',
        preparationNotes:
          '1. 冷水浸泡4-6小时。\n2. 汆水去腥。\n3. 炖煮1.5-2小时。',
        tags: ['南非', '二级', '干货', '大装'],
      },
      en: {
        name: 'B Grade South Africa Fish Maw (Bulk 1kg)',
        shortDescription: 'South African fish maw in bulk — ideal for restaurants or large families',
        description:
          'Quality South African fish maw in a 1kg pack, suitable for restaurants or families with high demand. Pieces are smaller (20–40g each) but equally rich in gelatine and nourishment. Outstanding value for high-volume use.',
        preparationNotes:
          '1. Soak in cold water for 4–6 hours.\n2. Blanch to remove odour.\n3. Simmer for 1.5–2 hours.',
        tags: ['South Africa', 'B Grade', 'Dried', 'Bulk'],
      },
    },
  },
  {
    id: '7',
    slug: 'gift-classic',
    grade: 'AAA',
    category: 'gift-set',
    origin: 'philippines',
    weightGrams: 300,
    priceHKD: 2200,
    images: ['/images/products/gift-classic.jpg'],
    inStock: true,
    isFeatured: false,
    translations: {
      zh: {
        name: '经典礼盒装花胶',
        shortDescription: '特级菲律宾花胶精美礼盒，送礼自用两相宜',
        description:
          '精选特级菲律宾花胶300克，配以精美礼盒包装，可附个人贺卡。无论是节日送礼、探病慰问还是商务馈赠，均为上佳之选。礼盒采用烫金工艺，高贵典雅，令收礼者倍感珍重。',
        preparationNotes:
          '产品附有详细食用方法说明书，按指引操作即可。',
        tags: ['礼盒', '菲律宾', '特级', '送礼'],
      },
      en: {
        name: 'Classic Gift Set',
        shortDescription: 'AAA Philippine fish maw in a premium gift box — perfect for gifting',
        description:
          'A 300g selection of AAA Philippine fish maw presented in an elegant foil-stamped gift box, optionally accompanied by a personal greeting card. Perfect for festive occasions, get-well gifts, or corporate gifting — a truly memorable gesture of care.',
        preparationNotes:
          'Full preparation instructions are included inside the gift box.',
        tags: ['Gift Set', 'Philippines', 'AAA Grade', 'Premium'],
      },
    },
  },
  {
    id: '8',
    slug: 'processed-ready',
    grade: 'AA',
    category: 'processed',
    origin: 'indonesia',
    weightGrams: 200,
    priceHKD: 680,
    images: ['/images/products/processed.jpg'],
    inStock: true,
    isFeatured: false,
    translations: {
      zh: {
        name: '即食花胶（已发制）',
        shortDescription: '经专业发制处理，开袋即可烹调，省时方便',
        description:
          '选用优级印尼花胶，经过专业泡发及汆水处理，真空冷藏包装。购买后无需浸泡，直接加入汤底或食材中炖煮30分钟即可，省时省力，非常适合繁忙的现代家庭。',
        preparationNotes:
          '1. 开封后直接使用，无需浸泡。\n2. 加入已煮好的汤底，炖煮30分钟。\n3. 开封后请尽快食用，冷藏保存不超过3天。',
        tags: ['即食', '印尼', '优级', '方便'],
      },
      en: {
        name: 'Ready-to-Cook Fish Maw (Pre-soaked)',
        shortDescription: 'Professionally pre-soaked fish maw — cook straight from the pack',
        description:
          'AA-grade Indonesian fish maw, professionally soaked and blanched then vacuum-sealed for freshness. No soaking required — simply add to your soup or braise and cook for 30 minutes. Ideal for busy modern households.',
        preparationNotes:
          '1. Open pack and use directly — no soaking needed.\n2. Add to prepared soup or broth and simmer for 30 minutes.\n3. Consume soon after opening. Refrigerate and use within 3 days.',
        tags: ['Ready-to-Cook', 'Indonesia', 'AA Grade', 'Convenient'],
      },
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getRelatedProducts(current: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== current.id && (p.grade === current.grade || p.category === current.category))
    .slice(0, limit);
}
