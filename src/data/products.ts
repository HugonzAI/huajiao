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
    images: ['/images/products/real/aaa-large-real-v2.jpg'],
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
    images: ['/images/products/real/aaa-medium-real-v2.jpg'],
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
        whoItsFor:
          'A strong fit for New Zealand households wanting a premium fish maw they can buy more regularly without jumping straight to the highest-priced format.',
        bestFor:
          'Best for everyday nourishing soups, repeat purchase customers, and buyers looking for a balanced premium option rather than a gifting-first piece.',
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
    images: ['/images/products/real/aa-large-real-v2.jpg'],
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
    images: ['/images/products/real/aa-medium-real.jpg'],
    inStock: true,
    isFeatured: false,
    translations: {
      zh: {
        name: 'Better Health 实用花胶（中）',
        shortDescription: '更适合日常炖汤与新手入门的中规格花胶选择',
        description:
          '这款中规格 Better Health 实用花胶更偏向家庭日常使用，规格适中、容易上手，适合想从更稳妥价位开始接触花胶的客户。',
        preparationNotes:
          '1. 冷水浸泡6-8小时。\n2. 汆水去腥备用。\n3. 炖煮约1.5-2小时。',
        tags: ['Better Health 精选', '中规格', '日常炖汤', '入门友好'],
      },
      en: {
        name: 'Better Health Everyday Fish Maw (Medium)',
        shortDescription: 'A practical medium-size option for everyday soup cooking and first-time buyers',
        description:
          'This Better Health medium-size option is positioned for regular home use, with an approachable format that suits first-time buyers and customers wanting a practical fish maw for repeated family cooking.',
        preparationNotes:
          '1. Soak in cold water for 6–8 hours.\n2. Blanch to remove odour, then rinse.\n3. Simmer for approximately 1.5–2 hours.',
        tags: ['Better Health Selection', 'Medium', 'Everyday Soups', 'Beginner Friendly'],
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
    images: ['/images/products/real/a-large-real.jpg'],
    inStock: true,
    isFeatured: false,
    translations: {
      zh: {
        name: 'Better Health 家庭装花胶（大）',
        shortDescription: '更重视性价比与家庭常备的大片花胶选择',
        description:
          '这款 Better Health 家庭装花胶更适合希望兼顾规格与预算的客户，适合规律滋补、家庭分次炖煮，以及想买得更实在一些的用户。',
        preparationNotes:
          '1. 冷水浸泡6-8小时。\n2. 汆水去腥，过冷水。\n3. 与各种食材炖煮2小时。',
        tags: ['Better Health 精选', '家庭装', '性价比', '大片'],
      },
      en: {
        name: 'Better Health Family Fish Maw (Large)',
        shortDescription: 'A larger-format family option with strong value for regular wellness cooking',
        description:
          'This Better Health family-size selection is designed for customers who want a larger-format fish maw while keeping the purchase practical and value-conscious. It works well for repeat home cooking and family nourishment.',
        preparationNotes:
          '1. Soak in cold water for 6–8 hours.\n2. Blanch to remove odour, then rinse.\n3. Simmer with various ingredients for 2 hours.',
        tags: ['Better Health Selection', 'Family Size', 'Value Choice', 'Large'],
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
    images: ['/images/products/real/b-bulk-real.jpg'],
    inStock: true,
    isFeatured: false,
    translations: {
      zh: {
        name: 'Better Health 大包装花胶（1kg）',
        shortDescription: '适合餐饮、大家庭或长期炖汤使用的大包装选择',
        description:
          '这款 Better Health 大包装花胶更适合有较高用量需求的客户，例如餐饮用途、大家庭分次炖煮，或希望一次备齐一批花胶的顾客。',
        preparationNotes:
          '1. 冷水浸泡4-6小时。\n2. 汆水去腥。\n3. 炖煮1.5-2小时。',
        tags: ['Better Health 精选', '大包装', '餐饮/家庭', '高性价比'],
      },
      en: {
        name: 'Better Health Bulk Fish Maw (1kg)',
        shortDescription: 'A bulk-format option for larger households, kitchen prep, or higher-volume cooking',
        description:
          'This Better Health bulk pack is aimed at customers with higher usage needs, including larger households, repeated soup preparation, or kitchen use where buying in volume makes more practical sense.',
        preparationNotes:
          '1. Soak in cold water for 4–6 hours.\n2. Blanch to remove odour.\n3. Simmer for 1.5–2 hours.',
        tags: ['Better Health Selection', 'Bulk Pack', 'Family / Kitchen Use', 'Value'],
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
    images: ['/images/products/gift-classic.svg'],
    inStock: true,
    isFeatured: false,
    translations: {
      zh: {
        name: 'Better Health 经典礼盒',
        shortDescription: '更适合送礼、探望长辈与节日体面场景的花胶礼盒',
        description:
          'Better Health 经典礼盒围绕送礼场景设计，适合节日拜访、探望长辈、商务心意或想送得更体面的客户。礼盒感比单买产品更完整，也更方便直接送出。',
        preparationNotes:
          '产品附有详细食用方法说明书，按指引操作即可。',
        tags: ['Better Health 礼盒', '送礼优先', '节日体面', '高端选择'],
      },
      en: {
        name: 'Better Health Classic Gift Set',
        shortDescription: 'A gifting-first fish maw set designed for festive visits, elders, and premium presentation',
        description:
          'The Better Health Classic Gift Set is designed around gifting occasions, making it suitable for festive visits, elders, thoughtful wellness gifts, and customers who want a more polished presentation than buying a single product on its own.',
        preparationNotes:
          'Full preparation instructions are included inside the gift box.',
        tags: ['Better Health Gift Set', 'Gifting', 'Premium Presentation', 'Festive Choice'],
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
    images: ['/images/products/processed.svg'],
    inStock: true,
    isFeatured: false,
    translations: {
      zh: {
        name: 'Better Health 即食花胶',
        shortDescription: '更省时、更适合忙碌家庭与新手入门的即食型选择',
        description:
          '这款 Better Health 即食花胶更适合没有太多时间泡发处理、但又想把花胶更轻松地加入日常炖汤和滋补饮食中的客户。购买后处理门槛更低，也更适合新手。',
        preparationNotes:
          '1. 开封后直接使用，无需浸泡。\n2. 加入已煮好的汤底，炖煮30分钟。\n3. 开封后请尽快食用，冷藏保存不超过3天。',
        tags: ['Better Health 精选', '即食方便', '新手友好', '省时'],
      },
      en: {
        name: 'Better Health Ready-to-Cook Fish Maw',
        shortDescription: 'A convenience-first option for busy households and first-time buyers',
        description:
          'This Better Health ready-to-cook option is designed for customers who want fish maw to feel easier, faster, and more approachable in everyday cooking. It is especially suitable for busy households and first-time buyers.',
        preparationNotes:
          '1. Open pack and use directly — no soaking needed.\n2. Add to prepared soup or broth and simmer for 30 minutes.\n3. Consume soon after opening. Refrigerate and use within 3 days.',
        tags: ['Better Health Selection', 'Ready-to-Cook', 'Beginner Friendly', 'Convenient'],
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

