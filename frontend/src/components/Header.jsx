import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Monitor } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ content, currentLang, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">GITS Tech</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
                {content.nav.home}
              </a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                {content.nav.services}
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                {content.nav.about}
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                {content.nav.contact}
              </a>
            </nav>
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col gap-4">
              <a 
                href="#home" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {content.nav.home}
              </a>
              <a 
                href="#services" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {content.nav.services}
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {content.nav.about}
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {content.nav.contact}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;