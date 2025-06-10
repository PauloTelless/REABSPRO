import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ExerciseCategory } from '../types';

interface CategoryCardProps {
  category: ExerciseCategory;
  onClick: (id: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={() => onClick(category.id)}
    >
      <div className="p-6 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
          <p className="text-gray-600 text-sm">{category.description}</p>
          <p className="text-sm text-teal-600 mt-2">{category.exercises.length} exercícios</p>
        </div>
        <div className="bg-teal-100 p-2 rounded-full">
          <ChevronRight className="h-6 w-6 text-teal-600" />
        </div>
      </div>
      <div className="h-2 bg-gradient-to-r from-teal-400 to-blue-500"></div>
    </div>
  );
};

export default CategoryCard;