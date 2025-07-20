import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun size={20} className="text-yellow-500" />
      ) : (
        <Moon size={20} className="text-gray-600 dark:text-gray-300" />
      )}
    </button>
  )
}

export default ThemeToggle