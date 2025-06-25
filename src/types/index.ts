export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: 'men' | 'women' | 'kids' | 'accessories';
  subcategory: string;
  sizes: string[];
  colors: string[];
  images: string[];
  description: string;
  fabric: string;
  careInstructions: string;
  sku: string;
  availability: number;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
  tags: string[];
}

export interface CartItem {
  productId: string;
  size: string;
  color: string;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  addresses: Address[];
  wishlist: string[];
  sizePreferences: SizePreferences;
}

export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface SizePreferences {
  shirts: string;
  pants: string;
  shoes: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface Filter {
  category?: string;
  subcategory?: string;
  sizes?: string[];
  colors?: string[];
  priceRange?: [number, number];
  rating?: number;
}

export interface SortOption {
  value: string;
  label: string;
}