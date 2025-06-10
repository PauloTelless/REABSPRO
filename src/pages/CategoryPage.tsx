import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { exerciseCategories } from '../data/exercises';
import ExerciseCard from '../components/ExerciseCard';
import { ExerciseCategory } from '../types';

interface CategoryPageProps {
  categoryId: string;
  onBack: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId, onBack }) => {
  const category = exerciseCategories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Categoria não encontrada.</p>
        <button 
          onClick={onBack}
          className="mt-4 inline-flex items-center px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="inline-flex items-center px-3 py-1 mb-6 text-teal-600 hover:text-teal-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Voltar
        </button>
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{category.name}</h2>
          <p className="text-gray-600">{category.description}</p>
        </div>
        
        <div className="space-y-6">
          {category.exercises.map(exercise => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;