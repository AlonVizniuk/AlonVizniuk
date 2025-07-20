import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, currentPage, onPageChange }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors">
      <Header currentPage={currentPage} onPageChange={onPageChange} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout