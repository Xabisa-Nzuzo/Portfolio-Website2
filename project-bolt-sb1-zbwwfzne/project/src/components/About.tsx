import React from 'react';
import { Target, Award, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dedicated AI/ML professional with a passion for creating intelligent solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl p-8 border border-gray-600">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Biography</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am an emerging AI/ML engineer with a strong foundation in machine learning, natural language processing, 
                and intelligent application development. My journey in artificial intelligence began with a fascination 
                for how computers can understand and process human language, leading me to specialize in sentiment analysis, 
                conversational AI, and automated decision-making systems.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Through intensive bootcamp training and hands-on project development, I have cultivated expertise in 
                Python, machine learning frameworks, and cloud-based AI services. My approach combines technical rigor 
                with creative problem-solving, always focusing on delivering solutions that are both technically sound 
                and user-friendly.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I thrive in collaborative environments where I can contribute to innovative projects that push the 
                boundaries of what's possible with artificial intelligence. My goal is to join a forward-thinking 
                organization where I can apply my skills to real-world challenges while continuing to grow as a 
                professional in this rapidly evolving field.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-600">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-primary-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Career Objectives</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-accent-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Secure a challenging AI/ML Engineer position where I can apply my technical skills to solve complex business problems</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Contribute to innovative AI projects that have meaningful impact on user experiences and business outcomes</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-accent-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Continuously expand my expertise in emerging AI technologies and methodologies</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Develop leadership skills while mentoring junior developers and contributing to team growth</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Key Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">4+</div>
                  <div className="text-primary-100">AI Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-primary-100">Dedication</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-primary-100">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">∞</div>
                  <div className="text-primary-100">Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;