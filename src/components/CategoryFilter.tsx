
import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  category: string;
  color: string;
  bgColor: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  category,
  color,
  bgColor,
  isActive,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-1 rounded-full flex items-center gap-2 text-sm font-medium transition-colors",
        isActive ? `${bgColor} ${color}` : "bg-gray-100 text-gray-500"
      )}
    >
      <span className={cn(
        "w-2 h-2 rounded-full",
        isActive ? color : "bg-gray-400"
      )}></span>
      {category}
    </button>
  );
};

export default CategoryFilter;
