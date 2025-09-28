import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = ['Full Stack Developer', 'React Enthusiast', 'Problem Solver'];

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [displayText, currentIndex, isTyping, texts]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Tarak Reddy
              </span>
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-600 dark:text-gray-300 h-12">
              <span>{displayText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Computer Science student at <span className="font-semibold text-blue-600 dark:text-blue-400">Indian Institute of Information Technology Sri City</span> passionate about web development and creating innovative solutions.
            Eager to apply my technical skills and fresh perspective to build impactful applications.
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/tarak510605"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/tarak-reddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </a>
            <a
              href="mailto:tarakreddy.k0820@gmail.com"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </a>
          </div>

          <div className="pt-8">
            <button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;