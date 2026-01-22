import { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useParallaxElement } from '../hooks/useParallax'
import blueRoadDemo from '../assets/blue-road-demo.gif'
import leungNoodleDemo from '../assets/leung-noodle-demo.gif'
import projectManagerDemo from '../assets/project-manager-demo.gif'

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true })
  const [carouselRef, carouselVisible] = useScrollAnimation({ threshold: 0.2, once: true })
  
  // Parallax effect for the entire section
  const [parallaxRef, parallaxOffset] = useParallaxElement(0.15)

  const projects = [
    {
      title: "Blue Road",
      description: "Fleet optimization web application for Azur Lane mobile game. Serves 20-50 active users with sub-500ms API response times. Built with MERN stack featuring React-based fleet builder with drag-and-drop functionality.",
      tech: ["React", "MongoDB", "Express", "Node.js", "Render", "GitHub Pages"],
      liveLink: "https://btran54.github.io/BREhp/",
      githubLink: "https://github.com/btran54/BREhp",
      highlights: ["20-50 active users", "Sub-500ms API", "Real user feedback integration"],
      image: blueRoadDemo
    },
    {
      title: "Leung Noodle Restaurant Website",
      description: "Modern restaurant website featuring vintage patina aesthetic. Responsive design with custom navigation and mobile optimization deployed on Vercel with custom domain configuration.",
      tech: ["React", "Vercel", "CSS", "Responsive Design"],
      liveLink: "https://leungnoodle.com",
      githubLink: "https://github.com/btran54/restaurant-website",
      highlights: ["Custom domain setup", "Mobile-responsive", "Vintage aesthetic"],
      image: leungNoodleDemo
    },
    {
      title: "Project Management Tool",
      description: "A web-based project management tool designed to help teams collaborate effectively. Features include task assignments, progress tracking, and real-time notifications.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS", "MongoDB", "Express", "Node.js", "React"],
      githubLink: "https://github.com/btran54/project-management-tool",
      highlights: ["Task assignments", "Progress tracking", "Real-time notifications", "User authentication"],
      image: projectManagerDemo
    }
  ]

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      {/* Decorative parallax background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        ></div>
      </div>
      
      <div 
        ref={parallaxRef}
        className="max-w-4xl mx-auto relative z-10"
        style={{ transform: `translateY(${-parallaxOffset * 0.1}px)` }}
      >
        <h2 
          ref={titleRef}
          className={`text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white animate-on-scroll fade-up ${titleVisible ? 'visible' : ''}`}
        >
          Featured Projects
        </h2>
        
        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className={`relative animate-on-scroll fade-in ${carouselVisible ? 'visible' : ''}`}
        >
          {/* Project Card */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300">
            {/* Project GIF */}
            <img 
              src={currentProject.image} 
              alt={`${currentProject.title} demo`}
              className="w-full object-contain bg-gray-200 dark:bg-gray-900"
            />
            
            {/* Content */}
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{currentProject.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">{currentProject.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-500 mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {currentProject.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300">• {highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {currentProject.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {currentProject.liveLink && (
                  <a 
                    href={currentProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition font-medium"
                  >
                    Live Demo
                  </a>
                )}
                <a 
                  href={currentProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400 text-gray-700 dark:text-gray-300 rounded-lg transition font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition border border-gray-200 dark:border-gray-700"
            aria-label="Previous project"
          >
            <HiChevronLeft className="text-2xl text-gray-700 dark:text-gray-300" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition border border-gray-200 dark:border-gray-700"
            aria-label="Next project"
          >
            <HiChevronRight className="text-2xl text-gray-700 dark:text-gray-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4 text-gray-500 dark:text-gray-400 text-sm">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects