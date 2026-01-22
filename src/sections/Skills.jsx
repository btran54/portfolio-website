import { 
  SiJavascript, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiMysql,
  SiReact, 
  SiTailwindcss,
  SiNodedotjs, 
  SiExpress, 
  SiMongodb,
  SiGit, 
  SiLinux 
} from 'react-icons/si'
import { FaCode } from 'react-icons/fa'

function Skills() {
  const skills = {
    "Spoken Languages": [
      { name: "English" },
      { name: "Cantonese" },
      { name: "Vietnamese" },
    ],
    "Frontend": [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> }
    ],
    "Backend": [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "REST APIs", icon: <FaCode className="text-green-400" /> },
      { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "Java", icon: <FaCode className="text-red-500" /> }
    ],
    "Tools & Others": [
      { name: "Git Version Control", icon: <SiGit className="text-orange-600" /> },
      { name: "CI/CD", icon: <FaCode className="text-purple-400" /> },
      { name: "Linux Ubuntu", icon: <SiLinux className="text-gray-800 dark:text-gray-200" /> },
    ]
  }

  // Featured icons for the rotating carousel
  const featuredIcons = [
    <SiJavascript className="text-yellow-400" />,
    <SiReact className="text-cyan-400" />,
    <SiNodedotjs className="text-green-500" />,
    <SiMongodb className="text-green-600" />,
    <SiPython className="text-blue-400" />,
    <SiTailwindcss className="text-cyan-500" />,
    <SiGit className="text-orange-600" />,
    <SiHtml5 className="text-orange-500" />,
    <SiCss3 className="text-blue-500" />
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-100 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-blue-500 dark:text-blue-400">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition flex items-center gap-2"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Rotating Icon Carousel */}
        <div className="flex justify-center overflow-hidden">
          <div className="relative w-[600px] h-[400px]">
            <style>{`
              @keyframes rotate {
                from {
                  transform: rotateY(0deg);
                }
                to {
                  transform: rotateY(360deg);
                }
              }
              .carousel-container {
                transform-style: preserve-3d;
                animation: rotate 20s linear infinite;
              }
              .carousel-item {
                position: absolute;
                width: 100px;
                height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 4.5rem;
                border-radius: 12px;
                border: 2px solid rgba(59, 130, 246, 0.3);
              }
              .dark .carousel-item {
                background: rgba(31, 41, 55, 0.8);
              }
              .carousel-item {
                background: rgba(255, 255, 255, 0.8);
              }
            `}</style>
            
            <div className="carousel-container absolute inset-0">
              {featuredIcons.map((icon, index) => {
                const angle = (360 / featuredIcons.length) * index;
                const radius = 220;
                return (
                  <div
                    key={index}
                    className="carousel-item"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                      left: '50%',
                      top: '50%',
                      marginLeft: '-50px',
                      marginTop: '-50px',
                    }}
                  >
                    {icon}
                  </div>
                );
              })}
            </div>
          </div>
        </div>      
      </div>
    </section>
  )
}

export default Skills