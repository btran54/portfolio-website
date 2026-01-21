// Add imports at the top
import blueRoadDemo from '../assets/blue-road-demo.gif'
import leungNoodleDemo from '../assets/leung-noodle-demo.gif'
import projectManagerDemo from '../assets/project-manager-demo.gif'

function Projects() {
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
      tech: ["Vue.js", "Firebase", "Tailwind CSS, MongoDB, Express", "Node.js, React"],
      githubLink: "https://github.com/btran54/project-management-tool",
      highlights: ["Task assignments", "Progress tracking", "Real-time notifications", "User authentication"],
      image: projectManagerDemo
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition"
            >
              {/* Project GIF */}
              <img 
                src={project.image} 
                alt={`${project.title} demo`}
                className="w-full h-64 object-cover"
              />
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-500 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300">• {highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
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
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition text-sm font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400 text-gray-700 dark:text-gray-300 rounded transition text-sm font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects