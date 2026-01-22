import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useParallaxElement } from '../hooks/useParallax'
import pfp1 from '../assets/pfp1.jpg'
import pfp2 from '../assets/pfp2.jpg'
import pfp3 from '../assets/pfp3.jpg'

function About() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true })
  const [imagesRef, imagesVisible] = useScrollAnimation({ threshold: 0.2, once: true })
  const [textRef, textVisible] = useScrollAnimation({ threshold: 0.2, once: true })
  
  // Parallax effects
  const [parallaxRef, parallaxOffset] = useParallaxElement(0.2)

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative">
      {/* Decorative parallax background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div 
          className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}
        ></div>
      </div>
      
      <div 
        ref={parallaxRef}
        className="max-w-7xl mx-auto relative z-10"
      >
        <h2 
          ref={titleRef}
          className={`text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white animate-on-scroll fade-up ${titleVisible ? 'visible' : ''}`}
        >
          About Me
        </h2>
        
        <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center justify-items-center md:justify-items-start">
          {/* Images Column - Fixed width, centered on mobile */}
          <div 
            ref={imagesRef}
            className={`space-y-4 w-80 animate-on-scroll slide-left ${imagesVisible ? 'visible' : ''}`}
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={pfp2} 
                alt="Brian Tran casual"
                className="w-full h-72 object-cover rounded-lg shadow-lg"
              />
              <img 
                src={pfp3} 
                alt="Brian Tran graduation"
                className="w-full h-72 object-cover rounded-lg shadow-lg"
              />
            </div>
            <img 
              src={pfp1} 
              alt="Brian Tran professional"
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* About Text - Takes remaining space */}
          <div 
            ref={textRef}
            className={`bg-gray-100 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 h-full flex items-center w-full animate-on-scroll slide-right ${textVisible ? 'visible' : ''}`}
          >
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg">
                Hi! I'm Brian, a recent Computer Science graduate from UC Santa Cruz (June 2025) 
                with a 3.8 GPA. I'm passionate about building scalable, user-focused applications 
                that solve real problems.
              </p>
              
              <p className="text-lg">
                My experience includes developing <span className="text-blue-500 dark:text-blue-400 font-semibold">Blue Road</span>, 
                a fleet optimization tool that actively serves 20-50 users with optimized performance, 
                and creating modern web experiences like the <span className="text-blue-500 dark:text-blue-400 font-semibold">Leung Noodle restaurant website</span>.
              </p>
              
              <p className="text-lg">
                I'm particularly drawn to full-stack development, where I can work across the entire 
                application stack - from designing intuitive user interfaces with React to building 
                robust backend APIs and optimizing database performance.
              </p>
              
              <p className="text-lg">
                Currently seeking <span className="text-blue-500 dark:text-blue-400 font-semibold">Software Engineer 1 / Junior SWE / Associate SWE</span> positions 
                where I can contribute to meaningful projects, learn from experienced teams, and continue 
                growing as a developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About