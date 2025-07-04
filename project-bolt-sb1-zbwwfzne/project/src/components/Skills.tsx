import React from 'react';
import { Code, Database, Brain, Cloud, Zap, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <Brain className="w-8 h-8" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 88 },
        { name: "Natural Language Processing", level: 85 },
        { name: "Deep Learning", level: 82 }
      ]
    },
    {
      title: "Web Development",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 82 },
        { name: "HTML/CSS", level: 90 },
        { name: "Node.js", level: 78 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 88 },
        { name: "Matplotlib", level: 82 },
        { name: "Seaborn", level: 80 },
        { name: "SQL", level: 85 },
        { name: "Data Visualization", level: 88 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: "Azure", level: 70 },
        { name: "Git", level: 88 },
        { name: "Docker", level: 70 },
        { name: "Netlify", level: 80 }
      
      ]
    },
    {
      title: "AI Tools & Platforms",
      icon: <Zap className="w-8 h-8" />,
      skills: [
        { name: "OpenAI API", level: 85 },
        { name: "Hugging Face", level: 82 },
        { name: "Botpress", level: 88 },
        { name: "Jupyter", level: 90 },
        { name: "Google Colab", level: 88 }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "Problem Solving", level: 92 },
        { name: "Communication", level: 88 },
        { name: "Team Collaboration", level: 85 },
        { name: "Critical Thinking", level: 90 },
        { name: "Adaptability", level: 88 },
        { name: "Project Management", level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills & Competencies</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg p-3 text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary-900/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">AI/ML Development</h4>
              <p className="text-sm text-gray-400">End-to-end machine learning pipeline development</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-900/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">NLP & Sentiment Analysis</h4>
              <p className="text-sm text-gray-400">Natural language processing and text analysis</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Full-Stack Development</h4>
              <p className="text-sm text-gray-400">Modern web applications with AI integration</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-900/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-accent-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Data Science</h4>
              <p className="text-sm text-gray-400">Data analysis, visualization, and insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;