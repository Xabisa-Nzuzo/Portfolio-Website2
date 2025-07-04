import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-primary-500">
              <img 
                src="/src/components/images/thumbnail_Image.jpg" 
                alt="Xabisa Nzuzo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              AI/ML Engineer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming complex data into intelligent solutions through cutting-edge machine learning, 
            natural language processing, and AI-driven applications.
          </p>
          
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-12 shadow-2xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Personal Branding Statement</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate AI/ML engineer with expertise in sentiment analysis, conversational AI, and intelligent automation. 
              I bridge the gap between complex algorithms and practical business solutions, creating user-centric applications 
              that leverage the power of artificial intelligence to solve real-world problems. My unique combination of 
              technical proficiency and creative problem-solving drives innovation in every project I undertake.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View My Projects
            </button>
            
            <div className="flex space-x-4">
              <a 
                href="mailto:xabisa.nzuzo@outlook.com" 
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a 
                href="tel:+27733814039" 
                className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call</span>
              </a>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce-subtle"
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;