import React from 'react';
import { X, Filter } from 'lucide-react';
import { Filter as FilterType } from '../../types';
import { categories, colors, sizes } from '../../data/products';

interface ProductFiltersProps {
  filters: FilterType;
  onFiltersChange: (filters: FilterType) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFiltersChange,
  isOpen,
  onToggle
}) => {
  const handleCategoryChange = (category: string) => {
    onFiltersChange({
      ...filters,
      category: filters.category === category ? undefined : category
    });
  };

  const handleColorChange = (color: string) => {
    const currentColors = filters.colors || [];
    const newColors = currentColors.includes(color)
      ? currentColors.filter(c => c !== color)
      : [...currentColors, color];
    
    onFiltersChange({
      ...filters,
      colors: newColors.length > 0 ? newColors : undefined
    });
  };

  const handleSizeChange = (size: string) => {
    const currentSizes = filters.sizes || [];
    const newSizes = currentSizes.includes(size)
      ? currentSizes.filter(s => s !== size)
      : [...currentSizes, size];
    
    onFiltersChange({
      ...filters,
      sizes: newSizes.length > 0 ? newSizes : undefined
    });
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    onFiltersChange({
      ...filters,
      priceRange: [min, max]
    });
  };

  const clearFilters = () => {
    onFiltersChange({});
  };

  const filterContent = (
    <div className="space-y-6">
      {/* Clear Filters */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-amber-600 hover:text-amber-700"
        >
          Clear All
        </button>
      </div>

      {/* Categories */}
      <div>
        <h4 className="font-medium mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category.id} className="flex items-center">
              <input
                type="radio"
                name="category"
                checked={filters.category === category.id}
                onChange={() => handleCategoryChange(category.id)}
                className="mr-2 text-amber-600 focus:ring-amber-500"
              />
              <span className="text-sm">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-medium mb-3">Price Range</h4>
        <div className="space-y-2">
          {[
            { label: 'Under ₦10,000', min: 0, max: 10000 },
            { label: '₦10,000 - ₦20,000', min: 10000, max: 20000 },
            { label: '₦20,000 - ₦30,000', min: 20000, max: 30000 },
            { label: 'Over ₦30,000', min: 30000, max: 100000 }
          ].map(range => (
            <label key={range.label} className="flex items-center">
              <input
                type="radio"
                name="priceRange"
                checked={
                  filters.priceRange?.[0] === range.min && 
                  filters.priceRange?.[1] === range.max
                }
                onChange={() => handlePriceRangeChange(range.min, range.max)}
                className="mr-2 text-amber-600 focus:ring-amber-500"
              />
              <span className="text-sm">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <h4 className="font-medium mb-3">Colors</h4>
        <div className="grid grid-cols-4 gap-2">
          {colors.map(color => (
            <label key={color} className="flex flex-col items-center cursor-pointer">
              <div
                className={`w-8 h-8 rounded-full border-2 ${
                  filters.colors?.includes(color)
                    ? 'border-amber-500'
                    : 'border-gray-200'
                }`}
                style={{
                  backgroundColor: color.toLowerCase().includes('multi')
                    ? 'linear-gradient(45deg, #ff6b6b, #4ecdc4)'
                    : color.toLowerCase()
                }}
              />
              <input
                type="checkbox"
                checked={filters.colors?.includes(color) || false}
                onChange={() => handleColorChange(color)}
                className="sr-only"
              />
              <span className="text-xs mt-1">{color}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h4 className="font-medium mb-3">Sizes</h4>
        <div className="grid grid-cols-4 gap-2">
          {sizes.map(size => (
            <label key={size} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.sizes?.includes(size) || false}
                onChange={() => handleSizeChange(size)}
                className="sr-only"
              />
              <div
                className={`w-10 h-8 border rounded text-center text-sm flex items-center justify-center cursor-pointer ${
                  filters.sizes?.includes(size)
                    ? 'border-amber-500 bg-amber-50 text-amber-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {size}
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
        {filterContent}
      </div>

      {/* Mobile Filter Button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed bottom-4 right-4 bg-amber-600 text-white p-3 rounded-full shadow-lg z-40"
      >
        <Filter className="w-6 h-6" />
      </button>

      {/* Mobile Filter Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onToggle} />
          <div className="relative bg-white w-80 max-w-full h-full overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button onClick={onToggle}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              {filterContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
};