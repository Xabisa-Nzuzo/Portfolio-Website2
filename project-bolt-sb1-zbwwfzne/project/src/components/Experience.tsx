import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI/ML Engineering Bootcamp Graduate",
      company: "HyperionDev",
      location: "Remote",
      period: "Mar 2024 - Oct 2024",
      type: "Intensive Training Program",
      description: "Completed comprehensive AI/ML engineering bootcamp focusing on practical application of machine learning algorithms, natural language processing, and intelligent system development.",
      achievements: [
        "Developed 4+ production-ready AI/ML applications",
        "Mastered Python, TensorFlow, and modern ML frameworks",
        "Specialized in sentiment analysis and conversational AI",
        "Built end-to-end machine learning pipelines",
        "Implemented NLP solutions for real-world problems"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "NLP", "Machine Learning", "Data Science"]
    },
    {
      title: "Freelance AI/ML Developer",
      company: "Independent",
      location: "South Africa",
      period: "Nov 2024 - Present",
      type: "Freelance",
      description: "Providing AI/ML consulting and development services to small businesses and startups, focusing on intelligent automation and data-driven solutions.",
      achievements: [
        "Delivered custom AI solutions for 3+ clients",
        "Developed sentiment analysis tools for business intelligence",
        "Created conversational AI systems for customer service",
        "Implemented automated data processing pipelines",
        "Provided technical consulting on AI strategy"
      ],
      technologies: ["Python", "OpenAI API", "Streamlit", "React", "Machine Learning"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional journey in AI/ML engineering and software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-700 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-600">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Briefcase className="w-6 h-6 text-primary-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-300 mb-4">
                    <div className="flex items-center">
                      <span className="font-semibold text-primary-400">{exp.company}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <span className="inline-block bg-primary-900/50 text-primary-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {exp.type}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <Award className="w-5 h-5 text-accent-400 mr-2" />
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Technologies & Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-sm border border-gray-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Career Highlights</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1+</div>
                <div className="text-primary-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4+</div>
                <div className="text-primary-100">AI Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">3+</div>
                <div className="text-primary-100">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-primary-100">Project Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;