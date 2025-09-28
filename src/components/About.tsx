import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import profilePic from '../../pic2.jpeg';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Learning to write clean, readable code following best practices and industry standards.',
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Passionate about creating intuitive and visually appealing user interfaces.',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Focused on building efficient applications with optimal performance in mind.',
    },
    {
      icon: Heart,
      title: 'User-Centered',
      description: 'Committed to creating user-friendly applications with great user experience.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Computer Science student at <span className="font-semibold text-blue-600 dark:text-blue-400">Indian Institute of Information Technology Sri City</span> with a passion for web development and a strong 
            foundation in modern technologies. Ready to contribute and learn in a professional environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Ready to Start My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              As a Computer Science student at <span className="font-semibold text-blue-600 dark:text-blue-400">Indian Institute of Information Technology Sri City</span>, I bring fresh energy and modern technical skills 
              to web development. My academic projects and self-learning have given me a solid foundation 
              in React, JavaScript, and modern development practices. I'm excited to contribute to 
              innovative projects and grow as a developer.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm passionate about learning new technologies, building personal projects, and 
              staying updated with the latest trends in web development. Ready to bring my 
              enthusiasm and dedication to a dynamic development team.
            </p>
            <div className="pt-4">
              <a
                href="https://drive.google.com/file/d/1UKv2TkNlJUNNlPA1AOkFAQcdU8mHRO7I/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                View Resume
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-96 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <img 
                src={profilePic} 
                alt="Profile Photo" 
                className="w-full h-full object-cover rounded-2xl"
              />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full animate-bounce"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;