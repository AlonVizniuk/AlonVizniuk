const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">More About Me</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Get to know me better
                </p>
            </div>

            {/* Bio Section - Moved to top */}
            <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Biography</h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                    <p>
                        I'm a recent Computer Science graduate from the College of Management Academic Studies, where I just completed my final year.
                        My journey through tech has been driven by a deep love for solving problems and mathematical thinking, 
                        a passion that started as early as high school and continues to guide me today.
                    </p>
                    
                    <p>
                        One of the most meaningful parts of my academic journey was my involvement in the college's Developer Club.
                        In my second year, I joined as a participant, and in my third year, I returned as a mentor. 
                        I led a student team through a successful full-stack project, conducting weekly follow-ups, code reviews, and technical guidance. 
                        These experiences helped shape me not just as a developer, but as a teammate, mentor, and leader.
                        I also served as the student representative for the third-year CS class, supporting others both academically and personally.
                    </p>
                    
                    <p>
                        My technical interests revolve around optimization problems, where I enjoy finding the right algorithms and system architectures to achieve the best possible performance under real-world constraints.
                        I'm also highly interested in data science and excited to explore its many applications.
                    </p>
                    
                    <p>
                        Before university, I served in the IDF as a systems instructor for SAP and ERP platforms. While I haven't yet worked in the tech industry, 
                        I've spent a great deal of time studying how tech companies operate - from development workflows to team dynamics - and I'm eager to apply that knowledge in a real-world setting.
                    </p>
                    
                    <p>
                        Outside of tech, I enjoy hiking, training, and eating great food. Nature gives me space to recharge - both mentally and physically.
                        Friends often describe me as caring, driven, practical, funny, emotionally intelligent, and a natural teacher.
                        I genuinely love helping others learn - whether through private tutoring or mentoring - and see this as a core part of who I am.
                    </p>
                    
                    <p>
                        Looking ahead, I'm excited to join a tech company where I can contribute, grow, and become part of something meaningful.
                        I don't see work as a stepping stone - I see it as a home. Whether temporary or long-term, I want to make an impact.
                        My dream is to work on algorithmic challenges or dive deeper into data science - but above all, I'm hungry to learn, and ready to start building.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Profile Section */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Profile</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Name</h3>
                            <p className="text-gray-900 dark:text-white">Alon Vizniuk</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Location</h3>
                            <p className="text-gray-900 dark:text-white">Rehovot, Israel</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Field</h3>
                            <p className="text-gray-900 dark:text-white">Full Stack & Data Science</p>
                        </div>
                    </div>
                </div>

                {/* Interests & Skills */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Interests & Skills</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Interests</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Web Development',
                                    'Data Science',
                                    'Machine Learning',
                                    'Full-Stack',
                                    'Cloud Development',
                                    'Mentoring',
                                    'DevOps & Automation',
                                    'Community Involvement'
                                ].map((interest) => (
                                    <span
                                        key={interest}
                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {['C',
                                    'C++',
                                    'C#',
                                    'Java',
                                    'JavaScript',
                                    'TypeScript',
                                    'Python',
                                    'SQL',
                                    'Bash',
                                    'Assembly 8086',

                                    // Frontend
                                    'React',
                                    'Next.js',
                                    'HTML',
                                    'CSS',
                                    'Tailwind',
                                    'Axios',
                                    'Vite',

                                    // Backend
                                    'Node.js',
                                    'Express',
                                    'NestJS',
                                    'REST APIs',
                                    'Mongoose',

                                    // Databases & Caching
                                    'PostgreSQL',
                                    'MySQL',
                                    'MongoDB',
                                    'SQLite',
                                    'Redis',

                                    // DevOps, Cloud & Automation
                                    'Docker',
                                    'Ansible',
                                    'Terraform',
                                    'AWS Services',
                                    'GitHub Actions',
                                    'Nginx',
                                    'Firebase',
                                    'Vercel',

                                    // Testing & Tools
                                    'Jest',
                                    'Postman',
                                    'Appium',
                                    'Selenium',
                                    'Git',
                                    'GitHub',

                                    // Productivity & UI/UX
                                    'Figma'].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About