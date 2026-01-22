import { useState } from 'react'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { HiMail, HiDownload, HiEye } from 'react-icons/hi'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { useParallax } from '../hooks/useParallax'
import ResumeModal from '../components/ResumeModal'

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Parallax effects for background elements - different speeds for depth
  const [parallax1Ref, parallax1Offset] = useParallax(0.3)
  const [parallax2Ref, parallax2Offset] = useParallax(0.5)
  const [parallax3Ref, parallax3Offset] = useParallax(0.2)
  
  // Typing animation for different roles
  const roles = [
    "Full-Stack Software Engineer",
    "React Developer",
    "Based in San Jose, CA",
    "Please hire me :)",
    "Problem Solver",
    "Tech Enthusiast"
  ]
  
  const typedText = useTypingEffect(roles, 100, 50, 2000)

  return (
    <>
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated background elements with parallax */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            ref={parallax1Ref}
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-float"
            style={{ transform: `translateY(${parallax1Offset}px)` }}
          ></div>
          <div 
            ref={parallax2Ref}
            className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"
            style={{ transform: `translateY(${parallax2Offset}px)` }}
          ></div>
          <div 
            ref={parallax3Ref}
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl animate-float-slow"
            style={{ transform: `translateY(${parallax3Offset}px)` }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-fade-in">
            Brian Tran
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4 animate-fade-in-delay-1 h-12 flex items-center justify-center">
            <span>{typedText}</span>
            <span className="inline-block w-0.5 h-8 bg-blue-500 ml-1 animate-blink"></span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
            Recent UC Santa Cruz Computer Science graduate building scalable full-stack applications. 
            Passionate about learning new technologies and solving challenging problems 
            using modern development practices.
          </p>
          
          <div className="flex gap-4 justify-center mb-6 animate-fade-in-delay-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-400 hover:text-blue-400 rounded-lg transition font-medium flex items-center gap-2 text-gray-700 dark:text-gray-300"
            >
              <HiEye className="text-xl" />
              Preview Resume
            </button>
            <a 
              href="/resume.pdf"
              download="Brian_Tran_Resume.pdf"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition font-medium flex items-center gap-2"
            >
              <HiDownload className="text-xl" />
              Download Resume
            </a>
          </div>

          <div className="flex gap-4 justify-center animate-fade-in-delay-4">
            <a 
              href="https://linkedin.com/in/brian-tran-27"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:text-blue-400 rounded-lg transition hover:scale-110 transform duration-200"
            >
              <SiLinkedin className="text-2xl" />
            </a>
            <a 
              href="https://github.com/btran54"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-300 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400 rounded-lg transition hover:scale-110 transform duration-200"
            >
              <SiGithub className="text-2xl" />
            </a>
            <a 
              href="mailto:briantran888@gmail.com@ucsc.edu"
              className="p-4 border border-gray-300 dark:border-gray-600 hover:border-red-400 hover:text-red-400 rounded-lg transition hover:scale-110 transform duration-200"
            >
              <HiMail className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-30px) translateX(10px); }
          }
          
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }

          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite;
          }
          
          .animate-float-slow {
            animation: float-slow 10s ease-in-out infinite;
          }

          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }

          .animate-fade-in-delay-1 {
            animation: fade-in 0.8s ease-out 0.2s both;
          }

          .animate-fade-in-delay-2 {
            animation: fade-in 0.8s ease-out 0.4s both;
          }

          .animate-fade-in-delay-3 {
            animation: fade-in 0.8s ease-out 0.6s both;
          }

          .animate-fade-in-delay-4 {
            animation: fade-in 0.8s ease-out 0.8s both;
          }

          .animate-blink {
            animation: blink 1s step-end infinite;
          }
        `}</style>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Hero