import React, { useState, useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Python', level: 85, color: 'from-blue-500 to-cyan-500' },
    { name: 'React.js', level: 80, color: 'from-green-500 to-green-600' },
    { name: 'Node.js & Express.js', level: 75, color: 'from-purple-500 to-indigo-500' },
    { name: 'SQL (MySQL)', level: 70, color: 'from-orange-500 to-red-500' },
    { name: 'MongoDB', level: 70, color: 'from-emerald-500 to-green-600' },
    { name: 'Docker & GCP', level: 65, color: 'from-sky-500 to-indigo-600' },
  ];
  

  const technologies = [
    'JavaScript', 'React.js (Hooks, Context API, Redux)', 'HTML5', 'CSS3',
    'Python (Flask, FastAPI)', 'SQL (MySQL)', 'MongoDB (Mongoose)',
    'Node.js', 'Express.js (JWT, Middleware, REST APIs)',
    'REST APIs', 'GraphQL', 'WebSockets (Socket.IO)', 'Postman', 'Swagger',
    'Git', 'GitHub', 'GitHub Actions (CI/CD)', 'Docker', 'GCP (Compute Engine, Cloud Storage, BigQuery)',
    'Tailwind CSS', 'Responsive Design'
  ];
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications and solving complex challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Skill Bars */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                      isVisible ? '' : 'w-0'
                    }`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technologies I'm Learning
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-lg text-center font-medium text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-default transform hover:scale-105 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '6+', label: 'Projects Built' },
            { number: 'Fresher', label: 'Persuing' },
            { number: '100%', label: 'Dedication' },
            { number: '15+', label: 'Technologies Learned' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transform transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;