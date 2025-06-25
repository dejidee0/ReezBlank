import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White Button-Up Shirt',
    brand: 'DRIP NAIJA',
    price: 15000,
    originalPrice: 18000,
    category: 'men',
    subcategory: 'shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue', 'Navy'],
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg'
    ],
    description: 'Premium cotton button-up shirt perfect for both casual and formal occasions. Tailored fit with modern styling.',
    fabric: '100% Premium Cotton',
    careInstructions: 'Machine wash cold, hang dry, iron if needed',
    sku: 'DN-MEN-001',
    availability: 50,
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
    isFeatured: true,
    tags: ['casual', 'formal', 'cotton', 'classic']
  },
  {
    id: '2',
    name: 'Ankara Print Maxi Dress',
    brand: 'DRIP NAIJA',
    price: 25000,
    category: 'women',
    subcategory: 'dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Multi', 'Blue Pattern', 'Red Pattern'],
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
      'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    ],
    description: 'Beautiful Ankara print maxi dress celebrating Nigerian heritage with modern tailoring. Perfect for special occasions.',
    fabric: 'Premium Ankara Cotton',
    careInstructions: 'Hand wash or gentle machine wash, air dry',
    sku: 'DN-WOM-001',
    availability: 30,
    rating: 4.9,
    reviewCount: 89,
    isFeatured: true,
    tags: ['ankara', 'traditional', 'maxi', 'special occasion']
  },
  {
    id: '3',
    name: 'Slim Fit Denim Jeans',
    brand: 'DRIP NAIJA',
    price: 20000,
    originalPrice: 24000,
    category: 'men',
    subcategory: 'pants',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Dark Blue', 'Light Blue', 'Black'],
    images: [
      'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg',
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg'
    ],
    description: 'Premium slim-fit denim jeans with perfect stretch and comfort. Versatile design for everyday wear.',
    fabric: '98% Cotton, 2% Elastane',
    careInstructions: 'Machine wash cold, tumble dry low',
    sku: 'DN-MEN-002',
    availability: 75,
    rating: 4.7,
    reviewCount: 156,
    tags: ['denim', 'casual', 'slim-fit', 'versatile']
  },
  {
    id: '4',
    name: 'Elegant Blazer',
    brand: 'DRIP NAIJA',
    price: 35000,
    category: 'women',
    subcategory: 'blazers',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Cream'],
    images: [
      'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg',
      'https://images.pexels.com/photos/1461064/pexels-photo-1461064.jpeg'
    ],
    description: 'Sophisticated blazer perfect for professional settings and formal events. Tailored fit with premium finishing.',
    fabric: 'Wool Blend',
    careInstructions: 'Dry clean only',
    sku: 'DN-WOM-002',
    availability: 25,
    rating: 4.8,
    reviewCount: 67,
    isNew: true,
    tags: ['professional', 'formal', 'blazer', 'sophisticated']
  },
  {
    id: '5',
    name: 'Kids Colorful T-Shirt',
    brand: 'DRIP NAIJA',
    price: 8000,
    category: 'kids',
    subcategory: 'shirts',
    sizes: ['2T', '3T', '4T', '5T', '6T'],
    colors: ['Rainbow', 'Blue', 'Pink', 'Yellow'],
    images: [
      'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg',
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg'
    ],
    description: 'Fun and colorful t-shirt for kids made with soft, breathable cotton. Perfect for playtime and everyday wear.',
    fabric: '100% Organic Cotton',
    careInstructions: 'Machine wash warm, tumble dry low',
    sku: 'DN-KID-001',
    availability: 100,
    rating: 4.9,
    reviewCount: 45,
    tags: ['kids', 'colorful', 'cotton', 'comfortable']
  },
  {
    id: '6',
    name: 'Leather Crossbody Bag',
    brand: 'DRIP NAIJA',
    price: 18000,
    category: 'accessories',
    subcategory: 'bags',
    sizes: ['One Size'],
    colors: ['Brown', 'Black', 'Cognac'],
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg'
    ],
    description: 'Handcrafted leather crossbody bag with multiple compartments. Perfect accessory for any outfit.',
    fabric: 'Genuine Leather',
    careInstructions: 'Clean with leather conditioner, avoid water',
    sku: 'DN-ACC-001',
    availability: 40,
    rating: 4.6,
    reviewCount: 78,
    isFeatured: true,
    tags: ['leather', 'accessories', 'crossbody', 'handcrafted']
  }
];

export const categories = [
  { id: 'men', name: 'Men', subcategories: ['shirts', 'pants', 'jackets', 'shoes'] },
  { id: 'women', name: 'Women', subcategories: ['dresses', 'tops', 'blazers', 'shoes'] },
  { id: 'kids', name: 'Kids', subcategories: ['shirts', 'pants', 'dresses', 'shoes'] },
  { id: 'accessories', name: 'Accessories', subcategories: ['bags', 'jewelry', 'belts', 'hats'] }
];

export const colors = ['Black', 'White', 'Navy', 'Brown', 'Blue', 'Red', 'Green', 'Multi'];
export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36', '38', '2T', '3T', '4T', '5T', '6T'];

export const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'popular', label: 'Most Popular' }
];