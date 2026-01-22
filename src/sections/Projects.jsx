import { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useParallaxElement } from '../hooks/useParallax'
import { useIsMobile } from '../hooks/useIsMobile'

// Import GIF versions
import blueRoadGif from '../assets/blue-road-demo.gif'
import leungNoodleGif from '../assets/leung-noodle-demo.gif'
import projectManagerGif from '../assets/project-manager-demo.gif'

// Import video versions
import blueRoadVideo from '../assets/blue-road-demo.mp4'
import leungNoodleVideo from '../assets/leung-noodle-demo.mp4'
import projectManagerVideo from '../assets/project-manager-demo.mp4'

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState('') // 'next' or 'prev'
  const [isMediaLoading, setIsMediaLoading] = useState(true)
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true })
  const [carouselRef, carouselVisible] = useScrollAnimation({ threshold: 0.2, once: true })
  
  // Detect if user is on mobile
  const isMobile = useIsMobile(768)
  
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
      gif: blueRoadGif,
      video: blueRoadVideo
    },
    {
      title: "Leung Noodle Restaurant Website",
      description: "Modern restaurant website featuring a Square ordering system integration. Responsive design with custom navigation and mobile optimization deployed on Vercel with custom domain configuration.",
      tech: ["React", "Vercel", "CSS", "Responsive Design"],
      liveLink: "https://leungnoodle.com",
      githubLink: "https://github.com/btran54/restaurant-website",
      highlights: ["Custom domain setup", "Mobile-responsive", "Vintage aesthetic"],
      gif: leungNoodleGif,
      video: leungNoodleVideo
    },
    {
      title: "Project Management Tool",
      description: "A web-based project management tool designed to help teams collaborate effectively. Features include task assignments, progress tracking, and real-time notifications.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS", "MongoDB", "Express", "Node.js", "React"],
      githubLink: "https://github.com/btran54/project-management-tool",
      highlights: ["Task assignments", "Progress tracking", "Real-time notifications", "User authentication"],
      gif: projectManagerGif,
      video: projectManagerVideo
    }
  ]

  const nextProject = () => {
    if (isAnimating) return
    const next = (currentIndex + 1) % projects.length
    setNextIndex(next)
    setIsAnimating(true)
    setSlideDirection('next')
    setIsMediaLoading(true) // Reset loading state
    
    setTimeout(() => {
      setCurrentIndex(next)
      setNextIndex(null)
      setSlideDirection('')
      setIsAnimating(false)
    }, 700)
  }

  const prevProject = () => {
    if (isAnimating) return
    const prev = (currentIndex - 1 + projects.length) % projects.length
    setNextIndex(prev)
    setIsAnimating(true)
    setSlideDirection('prev')
    setIsMediaLoading(true) // Reset loading state
    
    setTimeout(() => {
      setCurrentIndex(prev)
      setNextIndex(null)
      setSlideDirection('')
      setIsAnimating(false)
    }, 700)
  }

  const goToProject = (index) => {
    if (!isAnimating && index !== currentIndex) {
      setNextIndex(index)
      setIsAnimating(true)
      setSlideDirection(index > currentIndex ? 'next' : 'prev')
      setIsMediaLoading(true) // Reset loading state
      
      setTimeout(() => {
        setCurrentIndex(index)
        setNextIndex(null)
        setSlideDirection('')
        setIsAnimating(false)
      }, 700)
    }
  }

  const renderProjectCard = (project) => (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      {/* Project Media - GIF on mobile, Video on desktop */}
      <div className="relative bg-gray-200 dark:bg-gray-900">
        {/* Loading Spinner */}
        {isMediaLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-900">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-t-4 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Loading project demo...</p>
            </div>
          </div>
        )}

        {isMobile ? (
          <img 
            src={project.gif} 
            alt={`${project.title} demo`}
            className={`w-full object-contain transition-opacity duration-300 ${isMediaLoading ? 'opacity-0' : 'opacity-100'}`}
            loading="lazy"
            onLoad={() => setIsMediaLoading(false)}
            onError={() => setIsMediaLoading(false)}
          />
        ) : (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className={`w-full object-contain transition-opacity duration-300 ${isMediaLoading ? 'opacity-0' : 'opacity-100'}`}
            key={project.title}
            onLoadedData={() => setIsMediaLoading(false)}
            onError={() => setIsMediaLoading(false)}
          >
            <source src={project.video} type="video/mp4" />
            <img src={project.gif} alt={`${project.title} demo`} />
          </video>
        )}
      </div>
      
      {/* Content */}
      <div className="p-8">
        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">{project.description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-500 mb-3">Key Highlights:</h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="text-gray-700 dark:text-gray-300">• {highlight}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.liveLink && (
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition font-medium"
            >
              Live Demo
            </a>
          )}
          <a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400 text-gray-700 dark:text-gray-300 rounded-lg transition font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )

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
          {/* Project Card Container with overflow hidden for slide effect */}
          <div className="relative overflow-hidden rounded-lg">
            {/* Current Project */}
            <div 
              className={`transition-all duration-700 ease-in-out ${
                slideDirection === 'next' ? 'animate-slide-out-left' : 
                slideDirection === 'prev' ? 'animate-slide-out-right' : ''
              }`}
            >
              {renderProjectCard(projects[currentIndex])}
            </div>

            {/* Next Project (only visible during animation) */}
            {nextIndex !== null && (
              <div 
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  slideDirection === 'next' ? 'animate-slide-in-right' : 
                  slideDirection === 'prev' ? 'animate-slide-in-left' : ''
                }`}
              >
                {renderProjectCard(projects[nextIndex])}
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            disabled={isAnimating}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition border border-gray-200 dark:border-gray-700 ${
              isAnimating ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Previous project"
          >
            <HiChevronLeft className="text-2xl text-gray-700 dark:text-gray-300" />
          </button>

          <button
            onClick={nextProject}
            disabled={isAnimating}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition border border-gray-200 dark:border-gray-700 ${
              isAnimating ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Next project"
          >
            <HiChevronRight className="text-2xl text-gray-700 dark:text-gray-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                disabled={isAnimating}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                } ${isAnimating ? 'cursor-not-allowed' : 'cursor-pointer'}`}
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

      {/* Slide Animation Styles */}
      <style>{`
        @keyframes slide-out-left {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        @keyframes slide-out-right {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-out-left {
          animation: slide-out-left 0.7s ease-in-out forwards;
        }

        .animate-slide-out-right {
          animation: slide-out-right 0.7s ease-in-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.7s ease-in-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.7s ease-in-out forwards;
        }

        /* Ensure minimum height for loading state */
        .relative.bg-gray-200,
        .relative.bg-gray-900 {
          min-height: 400px;
        }
      `}</style>
    </section>
  )
}

export default Projects
