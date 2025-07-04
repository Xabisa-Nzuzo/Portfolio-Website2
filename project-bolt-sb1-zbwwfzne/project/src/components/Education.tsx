import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, ExternalLink } from 'lucide-react';

const Education = () => {
  const formalEducation = [
    {
      degree: "National Diploma in Information Technology (Software Development)",
      institution: "Nelson Mandela University",
      period: "Feb 2015 - Feb 2020",
      status: "Completed",
      description: "3-year National Diploma",
      coursework: [ "ASP.Net", "SQL", "UI Design", "System Analysis & Design"
      ],
      grade: "Distinction"
    }
  ];

  const professionalCertifications = [
    {
      name: "AI/ML Engineering Bootcamp",
      issuer: "HyperionDev",
      date: "Mar 2024 - Oct 2024",
      credentialId: "HYPIT-2020-001",
      skills: ["Machine Learning Algorithms & Implementation",
        "Deep Learning with TensorFlow & PyTorch",
        "Natural Language Processing",
        "Computer Vision",
        "Data Science & Analytics",
        "AI Ethics & Responsible Development"],
      verified: true
    }
  ];

  const continuingEducation = [
    {
      course: "Advanced Machine Learning Specialization",
      platform: "Coursera",
      status: "In Progress",
      progress: 75
    },
    {
      course: "MLOps Engineering",
      platform: "Udacity",
      status: "Completed",
      progress: 100
    },
    {
      course: "Computer Vision Nanodegree",
      platform: "Udacity",
      status: "Planned",
      progress: 0
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development in AI/ML engineering
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <GraduationCap className="w-8 h-8 text-primary-400 mr-3" />
            Formal Education
          </h3>
          
          {formalEducation.map((edu, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-300 mb-4">
                    <span className="font-semibold text-primary-400">{edu.institution}</span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{edu.period}</span>
                    </div>
                    <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      {edu.status}
                    </span>
                  </div>
                  {edu.grade && (
                    <div className="flex items-center mb-4">
                      <Award className="w-5 h-5 text-accent-400 mr-2" />
                      <span className="font-semibold text-accent-400">Grade: {edu.grade}</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {edu.description}
              </p>

              <div>
                <h5 className="font-semibold text-white mb-3">Key Coursework:</h5>
                <div className="grid md:grid-cols-2 gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Award className="w-8 h-8 text-accent-400 mr-3" />
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {professionalCertifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{cert.name}</h4>
                    <p className="text-primary-400 font-semibold">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm">{cert.date}</p>
                  </div>
                  {cert.verified && (
                    <div className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                      Verified
                    </div>
                  )}
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2">Credential ID: {cert.credentialId}</p>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2">Skills Covered:</h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuing Education */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <BookOpen className="w-8 h-8 text-primary-400 mr-3" />
            Continuing Education
          </h3>
          
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
            <div className="space-y-6">
              {continuingEducation.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{course.course}</h4>
                    <p className="text-gray-300">{course.platform}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        course.status === 'In Progress' ? 'bg-blue-900/50 text-blue-300' :
                        course.status === 'Completed' ? 'bg-green-900/50 text-green-300' :
                        'bg-gray-600 text-gray-300'
                      }`}>
                        {course.status}
                      </span>
                      {course.status === 'In Progress' && (
                        <div className="mt-2">
                          <div className="w-24 bg-gray-600 rounded-full h-2">
                            <div 
                              className="bg-primary-500 h-2 rounded-full" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-400">{course.progress}%</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Commitment to Learning</h3>
          <p className="text-primary-100 mb-6 max-w-3xl mx-auto">
            Dedicated to continuous professional development and staying current with the latest advancements 
            in AI/ML technologies, methodologies, and industry best practices.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-primary-100">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Learning Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">∞</div>
              <div className="text-primary-100">Growth Mindset</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;