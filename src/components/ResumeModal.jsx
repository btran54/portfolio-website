import { HiX } from 'react-icons/hi'

function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Resume Preview</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
          >
            <HiX className="text-2xl text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        
        {/* PDF Viewer */}
        <iframe
          src="/resume.pdf"
          className="w-full h-[calc(100%-4rem)]"
          title="Resume Preview"
        />
      </div>
    </div>
  )
}

export default ResumeModal