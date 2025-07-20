import { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Portfolio from './pages/Portfolio'

function App() {
  const [currentPage, setCurrentPage] = useState('home') // Back to 'home'

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'academics':
        return <Academics />
      case 'portfolio':
        return <Portfolio />
      default:
        return <Home />
    }
  }

  return (
    <ThemeProvider>
      <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
        {renderPage()}
      </Layout>
    </ThemeProvider>
  )
}

export default App