const Home = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Yoy Must Know That...
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          I’m a Computer Science graduate with honors, passionate about web development and data science.
           I mentored a student team through a full-stack project as part of the College of Management’s Dev Club,
            and I enjoy sharing knowledge on both frontend and backend topics. I also volunteered through the Student Union,
             helping fellow students solve challenges just for the fun of it.


          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 md:py-4 md:text-lg md:px-10 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Academics</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Discover my educational background and academic achievements.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">About Me</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Learn more about my personal journey, interests, and what drives me.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Portfolio</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Explore my projects, work samples, and creative endeavors.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Home