function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Get In Touch</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I'm currently looking for Software Engineer opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a 
              href="mailto:btran54@ucsc.edu"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition font-medium"
            >
              Send Email
            </a>
            <a 
              href="https://github.com/btran54"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400 text-gray-700 dark:text-gray-300 rounded-lg transition font-medium"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/brian-tran-27"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400 text-gray-700 dark:text-gray-300 rounded-lg transition font-medium"
            >
              LinkedIn
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