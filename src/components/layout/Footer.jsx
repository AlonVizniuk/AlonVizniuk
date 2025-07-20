import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/alon-vizniuk-95b3a7209/" 
              className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/AlonVizniuk" 
              className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:alonvizniuk@gmail.com" 
              className="text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://wa.me/972525353410" 
              className="text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
            </a>
          </div>
          
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>&copy; 2025 Alon Vizniuk. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer