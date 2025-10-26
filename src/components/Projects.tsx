import React, { useState } from 'react';
import { Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<number>>(new Set());

  const toggleDescription = (index: number) => {
    const newExpanded = new Set(expandedDescriptions);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedDescriptions(newExpanded);
  };

  const projects = [
    {
      title: 'PropSense AI - Generative AI Property Insights Platform',
      description:
      'Built PropSense AI, a generative-AI driven property insights platform integrating Google Gemini with a React-Node-MongoDB stack. Engineered prompt templates and response parsing logic to convert free-text outputs into structured JSON valuations (price estimate, pros/cons, recommendations). Designed secure server-side orchestration for model requests using key management, rate-limit protection, and authenticated REST APIs.',
      image:
      'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Google Gemini', 'REST APIs'],
      liveUrl: 'https://github.com/tarak510605/PropSense-AI', 
      githubUrl: 'https://github.com/tarak510605/PropSense-AI', 
      category: 'Web App',
    },
    {
      title: 'ShelfX - Book Rental & Sales Platform',
      description:
      'A full-stack platform connecting sellers and buyers for renting or purchasing books. Features an admin dashboard, scalable architecture, and responsive UI.',
      image:
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'MySQL'],
      liveUrl: 'https://shelfx-app.vercel.app/', 
      githubUrl: 'https://github.com/tarak510605/ShelfX', 
      category: 'Web App',
    },
    {
      title: 'Elect Ease - An online Voting Platform',
      description:
      'A secure online voting system with JWT-based authentication, session management, and one-vote-per-user restriction for transparent elections.',
      image:
      'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'React.js'],
      liveUrl: 'https://elect-ease.vercel.app/',
      githubUrl: 'https://github.com/tarak510605/Elect-Ease',
      category: 'Web App',
    },
    {
      title: 'Chat-App - Real-Time Chat Application',
      description:
      'A real-time chat application with Socket.IO, modular server logic, responsive front-end, and smooth user experience. Deployed on Render.',
      image:
      'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'Express.js', 'Socket.IO', 'JavaScript', 'HTML5', 'CSS3'],
      liveUrl: 'https://chat-app-vert-ten-73.vercel.app/', // ✅ you already deployed this
      githubUrl: 'https://github.com/tarak510605/Chat-App',
      category: 'Web App',
    },
    {
      title: 'Weather Forecast',
      description: 'A weather application that fetches real-time weather data using APIs. Features location-based weather, 5-day forecast, and responsive design.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React.js', 'API Integration', 'Tailwind CSS'],
      liveUrl: 'https://weather-forcast08.netlify.app/',
      githubUrl: 'https://github.com/tarak510605/Weather-Forecast',
      category: 'Frontend'
    },
    // {
    //   title: 'Calculator App',
    //   description: 'A functional calculator built with vanilla JavaScript. Includes basic arithmetic operations, clear functionality, and keyboard support.',
    //   image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   category: 'Web App'
    // },
    {
      title: 'Interview AI',
      description: 'An AI-powered technical interview platform with resume parsing, dynamic question generation, and automated scoring. Built with React, TypeScript, and Redux to streamline the hiring process.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'CSS3','Vite'],
      liveUrl: 'https://interview-ai-lac.vercel.app/',
      githubUrl: 'https://github.com/tarak510605/interview-ai',
      category: 'Web App'
    },
    // {
    //   title: 'Personal Portfolio Website',
    //   description: 'A responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode toggle, and mobile-first design approach.',
    //   image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   category: 'Frontend'
    // },
    // {
      //   title: 'Recipe Finder',
      //   description: 'A web application that helps users find recipes based on available ingredients. Built as a learning project to practice API integration.',
      //   image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=600',
      //   technologies: ['React', 'API Integration', 'CSS3', 'JavaScript'],
      //   liveUrl: '#',
      //   githubUrl: '#',
    //   category: 'Web App'
    // },
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Academic & Personal Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of projects I've built during my studies and personal learning journey, 
            showcasing my growing skills in web development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setSelectedProject(index)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
                  selectedProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      <Eye className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <div className="mb-4">
                  <p className={`text-gray-600 dark:text-gray-400 ${expandedDescriptions.has(index) ? '' : 'line-clamp-3'}`}>
                    {project.description}
                  </p>
                  {project.description.length > 120 && (
                    <button
                      onClick={() => toggleDescription(index)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium mt-2 transition-colors duration-200"
                    >
                      {expandedDescriptions.has(index) ? 'Show less' : 'Show more'}
                    </button>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                  >
                    View Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
