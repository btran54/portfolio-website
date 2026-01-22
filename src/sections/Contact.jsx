import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useParallaxElement } from '../hooks/useParallax'
import ContactForm from '../components/contactForm'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HiMail } from 'react-icons/hi'

function Contact() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true })
  const [cardRef, cardVisible] = useScrollAnimation({ threshold: 0.3, once: true })
  
  // Parallax effect
  const [parallaxRef, parallaxOffset] = useParallaxElement(0.1)

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Decorative parallax background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div 
          className="absolute top-10 left-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
        ></div>
        <div 
          className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}
        ></div>
      </div>
      
      <div 
        ref={parallaxRef}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 
          ref={titleRef}
          className={`text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white animate-on-scroll fade-up ${titleVisible ? 'visible' : ''}`}
        >
          Get In Touch
        </h2>
        
        <div 
          ref={cardRef}
          className={`bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 animate-on-scroll fade-in ${cardVisible ? 'visible' : ''}`}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
            I'm currently looking for Software Engineer opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          {/* Contact Form */}
          <div className="mb-8">
            <ContactForm />
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Or connect with me</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/brian-tran-42bb18207/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400 text-gray-700 dark:text-gray-300 rounded-lg transition font-medium flex items-center justify-center gap-2"
            >
              <SiLinkedin className="text-xl" />
              LinkedIn
            </a>
            <a
              href="https://github.com/btran54"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400 text-gray-700 dark:text-gray-300 rounded-lg transition font-medium flex items-center justify-center gap-2"
            >
              <SiGithub className="text-xl" />
              GitHub
            </a>
            <a
              href="mailto:briantran888@gmail.com"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition font-medium flex items-center justify-center gap-2"
            >
              <HiMail className="text-xl" />
              Email Directly
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500 dark:text-gray-500">
          <p>© 2026 Brian Tran. Built with React & TailwindCSS.</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact