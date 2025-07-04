import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Brain, User, Mail, Briefcase, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Xabisa Nzuzo</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-1 text-gray-300 hover:text-primary-400 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>About</span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="flex items-center space-x-1 text-gray-300 hover:text-primary-400 transition-colors"
            >
              <Code className="w-4 h-4" />
              <span>Skills</span>
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="flex items-center space-x-1 text-gray-300 hover:text-primary-400 transition-colors"
            >
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="flex items-center space-x-1 text-gray-300 hover:text-primary-400 transition-colors"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="flex items-center space-x-1 text-gray-300 hover:text-primary-400 transition-colors"
            >
              <Briefcase className="w-4 h-4" />
              <span>Projects</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-1 text-gray-300 hover:text-primary-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>About</span>
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Code className="w-4 h-4" />
                <span>Skills</span>
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                <span>Experience</span>
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                <span>Projects</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;