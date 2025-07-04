import React from 'react';
import { ExternalLink, Github, Brain, MessageCircle, FileText, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sentiment Analysis Dashboard",
      description: "Advanced sentiment analysis application that processes text data to determine emotional tone and sentiment patterns. Features real-time analysis, data visualization, and comprehensive reporting capabilities.",
      icon: <TrendingUp className="w-8 h-8" />,
      technologies: ["Python", "NLP", "Streamlit", "Machine Learning", "Data Visualization"],
      demoLink: "https://gregarious-puffpuff-f26a21.netlify.app/",
      features: [
        "Real-time sentiment analysis",
        "Interactive data visualizations",
        "Batch processing capabilities",
        "Comprehensive sentiment reports",
        "Multi-language support"
      ],
      category: "AI/ML"
    },
    {
      title: "Personal AI Study Companion",
      description: "Intelligent study assistant that leverages AI to provide personalized learning experiences. Includes adaptive questioning, progress tracking, and intelligent content recommendations.",
      icon: <Brain className="w-8 h-8" />,
      technologies: ["React", "OpenAI API", "Machine Learning", "Natural Language Processing"],
      demoLink: "https://incomparable-kitsune-35d1ea.netlify.app/",
      features: [
        "Personalized learning paths",
        "AI-powered question generation",
        "Progress tracking and analytics",
        "Adaptive difficulty adjustment",
        "Interactive learning modules"
      ],
      category: "AI/ML"
    },
    {
      title: "Intelligent Resume Builder",
      description: "AI-enhanced resume creation platform that helps users craft professional resumes with intelligent suggestions, formatting optimization, and industry-specific recommendations.",
      icon: <FileText className="w-8 h-8" />,
      technologies: ["React", "TypeScript", "AI Integration", "PDF Generation", "Modern UI"],
      demoLink: "https://rococo-rugelach-351690.netlify.app/",
      features: [
        "AI-powered content suggestions",
        "Professional templates",
        "Real-time preview",
        "Industry-specific optimization",
        "Export to multiple formats"
      ],
      category: "Web Development"
    },
    {
      title: "Conversational AI Chatbot",
      description: "Sophisticated chatbot implementation using advanced NLP and conversational AI techniques. Features context awareness, multi-turn conversations, and intelligent response generation.",
      icon: <MessageCircle className="w-8 h-8" />,
      technologies: ["Botpress", "NLP", "Conversational AI", "Machine Learning", "API Integration"],
      demoLink: "https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/05/17/20/20250517204448-HS5QQM1X.json",
      features: [
        "Natural conversation flow",
        "Context-aware responses",
        "Multi-platform integration",
        "Learning from interactions",
        "Customizable personality"
      ],
      category: "AI/ML"
    }
  ];

  const openDemo = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive portfolio of AI/ML projects with live demonstrations and detailed documentation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-600">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg p-3 text-white mr-4">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <span className="inline-block bg-primary-900/50 text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-sm border border-gray-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => openDemo(project.demoLink)}
                  className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Project Documentation Standards</h3>
            <p className="text-primary-100 mb-8 max-w-3xl mx-auto">
              All projects follow comprehensive documentation standards including detailed README files, 
              API documentation, deployment guides, and technical specifications to ensure maintainability 
              and scalability.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-primary-100">Documentation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4+</div>
                <div className="text-primary-100">Live Demos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-primary-100">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99%</div>
                <div className="text-primary-100">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;