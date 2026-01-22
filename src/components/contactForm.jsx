import { useState } from 'react'
import { HiMail, HiUser, HiAnnotation, HiCheckCircle, HiXCircle } from 'react-icons/hi'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // EmailJS configuration
      // Replace these with your actual EmailJS credentials
      const serviceId = 'service_308giub'
      const templateId = 'template_ov7p5x6'
      const publicKey = 'gk7BZ6l8xEb4h40W2'
      
      // Import emailjs dynamically
      const emailjs = await import('@emailjs/browser')
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Brian Tran'
      }
      
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
      
    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus('error')
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiUser className="text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-3 border ${
                errors.name 
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                  : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
              } rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition`}
              placeholder="Your name"
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiMail className="text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-3 border ${
                errors.email 
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                  : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
              } rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition`}
              placeholder="your.email@example.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Subject *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiAnnotation className="text-gray-400" />
            </div>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-3 border ${
                errors.subject 
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                  : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
              } rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition`}
              placeholder="What's this about?"
            />
          </div>
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`w-full px-3 py-3 border ${
              errors.message 
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
            } rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition resize-none`}
            placeholder="Tell me about your project or opportunity..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg transform hover:scale-[1.02]'
          } text-white`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 rounded-lg flex items-center gap-3 animate-fade-in">
            <HiCheckCircle className="text-2xl text-green-600 dark:text-green-400 flex-shrink-0" />
            <div>
              <p className="font-medium text-green-800 dark:text-green-300">Message sent successfully!</p>
              <p className="text-sm text-green-700 dark:text-green-400">I'll get back to you as soon as possible.</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 rounded-lg flex items-center gap-3 animate-fade-in">
            <HiXCircle className="text-2xl text-red-600 dark:text-red-400 flex-shrink-0" />
            <div>
              <p className="font-medium text-red-800 dark:text-red-300">Failed to send message</p>
              <p className="text-sm text-red-700 dark:text-red-400">Please try again or email me directly at briantran888@gmail.com</p>
            </div>
          </div>
        )}
      </form>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

export default ContactForm