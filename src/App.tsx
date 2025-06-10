import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import { UserProfile } from './types';

function App() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleWelcomeComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    // Scroll to top when completing welcome
    window.scrollTo(0, 0);
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Scroll to top when changing categories
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
    // Scroll to top when going back to home
    window.scrollTo(0, 0);
  };

  // Show welcome page if user hasn't completed registration
  if (!userProfile) {
    return <WelcomePage onComplete={handleWelcomeComplete} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header userProfile={userProfile} />
      
      <main className="flex-grow py-6">
        {selectedCategory ? (
          <CategoryPage 
            categoryId={selectedCategory}
            onBack={handleBackToHome}
          />
        ) : (
          <HomePage 
            onSelectCategory={handleSelectCategory}
            userProfile={userProfile}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;