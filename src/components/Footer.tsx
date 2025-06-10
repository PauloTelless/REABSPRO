import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-2">
          <p className="text-sm">Feito com</p>
          <Heart className="h-4 w-4 mx-1 text-red-400 fill-current" />
          <p className="text-sm">para sua saúde</p>
        </div>
        <p className="text-xs text-gray-400">© 2025 REABSPRO - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;