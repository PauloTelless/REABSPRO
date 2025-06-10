import React from 'react';
import { Dumbbell, User } from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  userProfile?: UserProfile;
}

const Header: React.FC<HeaderProps> = ({ userProfile }) => {
  return (
    <header className="bg-gradient-to-r from-teal-600 to-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Dumbbell className="h-8 w-8" />
          <h1 className="text-2xl font-bold">REABSPRO</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {userProfile ? (
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span className="text-sm md:text-base">Olá, {userProfile.name.split(' ')[0]}!</span>
            </div>
          ) : (
            <p className="text-sm md:text-base font-light">Sua jornada para recuperação e força</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;