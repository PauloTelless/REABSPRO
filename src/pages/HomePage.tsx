import React from 'react';
import { exerciseCategories } from '../data/exercises';
import CategoryCard from '../components/CategoryCard';
import { UserProfile } from '../types';

interface HomePageProps {
  onSelectCategory: (categoryId: string) => void;
  userProfile: UserProfile;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectCategory, userProfile }) => {
  // Filter categories based on user's injury type if specified
  const relevantCategories = userProfile.injuryType && userProfile.injuryType !== 'Outro'
    ? exerciseCategories.filter(cat => 
        cat.name.toLowerCase().includes(userProfile.injuryType.toLowerCase())
      )
    : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Personalized Welcome */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Bem-vindo de volta, {userProfile.name.split(' ')[0]}!
          </h2>
          <p className="text-gray-600 mb-2">
            Vamos continuar sua jornada de recuperação e fortalecimento.
          </p>
          {userProfile.injuryType && (
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mt-4">
              <p className="text-teal-800">
                <strong>Foco na sua lesão:</strong> {userProfile.injuryType}
              </p>
              {userProfile.painLevel > 7 && (
                <p className="text-orange-600 text-sm mt-1">
                  ⚠️ Nível de dor alto detectado. Consulte um profissional antes de iniciar os exercícios.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Recommended Categories */}
        {relevantCategories.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              📍 Recomendado para você
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {relevantCategories.map(category => (
                <div key={category.id} className="relative">
                  <CategoryCard 
                    category={category}
                    onClick={onSelectCategory}
                  />
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    Recomendado
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* All Categories */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Todas as Categorias de Exercícios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exerciseCategories.map(category => (
              <CategoryCard 
                key={category.id}
                category={category}
                onClick={onSelectCategory}
              />
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Seu Progresso</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-teal-600">
                {exerciseCategories.length}
              </div>
              <div className="text-sm text-gray-600">Categorias</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">
                {exerciseCategories.reduce((total, cat) => total + cat.exercises.length, 0)}
              </div>
              <div className="text-sm text-gray-600">Exercícios</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">
                {userProfile.painLevel}/10
              </div>
              <div className="text-sm text-gray-600">Nível de Dor</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">
                {userProfile.injuryType || 'N/A'}
              </div>
              <div className="text-sm text-gray-600">Foco Principal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;