import React from 'react';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = ({ currentLang, onLanguageChange }) => {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-400" />
      <Button
        variant={currentLang === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onLanguageChange('en')}
        className="text-xs"
      >
        EN
      </Button>
      <Button
        variant={currentLang === 'es' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onLanguageChange('es')}
        className="text-xs"
      >
        ES
      </Button>
    </div>
  );
};

export default LanguageSwitcher;