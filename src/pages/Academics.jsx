import { useState, useMemo } from 'react'
import { ChevronUp, ChevronDown, Search, Filter } from 'lucide-react'

const Academics = () => {
    const courses = [
        { id: 1, name: 'Problem Solving & Algorithmic Thinking', grade: 100, credits: 2, semester: 'Semester A Year 1' },
        { id: 2, name: 'Introduction to Computer Science', grade: 100, credits: 5.5, semester: 'Semester A Year 1' },
        { id: 3, name: 'Linear Algebra 1', grade: 88, credits: 5, semester: 'Semester A Year 1' },
        { id: 4, name: 'Infinitesimal Calculus 1', grade: 100, credits: 5, semester: 'Semester A Year 1' },
        { id: 5, name: 'Discrete Mathematics 1', grade: 100, credits: 5, semester: 'Semester A Year 1' },

        { id: 6, name: 'Discrete Mathematics 2', grade: 100, credits: 5, semester: 'Semester B Year 1' },
        { id: 7, name: 'Database Systems', grade: 100, credits: 3, semester: 'Semester B Year 1' },
        { id: 8, name: 'Data structures', grade: 95, credits: 3, semester: 'Semester B Year 1' },
        { id: 9, name: 'Object-oriented programming', grade: 100, credits: 5, semester: 'Semester B Year 1' },
        { id: 10, name: 'Web App Development', grade: 100, credits: 3, semester: 'Semester B Year 1' },
        { id: 11, name: 'Operating Systems', grade: 76, credits: 4, semester: 'Semester B Year 1' },

        { id: 12, name: 'Linear Algebra 2', grade: 91, credits: 4, semester: 'Semester A Year 2' },
        { id: 13, name: 'Infinitesimal Calculus 2', grade: 82, credits: 5, semester: 'Semester A Year 2' },
        { id: 14, name: 'Introduction to Probability', grade: 81, credits: 5, semester: 'Semester A Year 2' },
        { id: 15, name: 'Algorithmic Development in Python', grade: 100, credits: 2, semester: 'Semester A Year 2' },
        { id: 16, name: 'Algorithms', grade: 85, credits: 4, semester: 'Semester A Year 2' },
        { id: 17, name: 'Advanced English B', grade: 91, credits: 2, semester: 'Semester A Year 2' },

        { id: 18, name: 'Machine Learning & Data Mining', grade: 100, credits: 3, semester: 'Semester B Year 2' },
        { id: 19, name: 'Advanced Software Development 1', grade: 100, credits: 3, semester: 'Semester B Year 2' },
        { id: 20, name: 'Applied Mathematics', grade: 88, credits: 4, semester: 'Semester B Year 2' },
        { id: 21, name: 'Computer Communication Networks', grade: 93, credits: 4, semester: 'Semester B Year 2' },
        { id: 22, name: 'Introduction to Cybersecurity', grade: 100, credits: 3, semester: 'Semester B Year 2' },

        { id: 23, name: 'Introduction to Data Science', grade: 87, credits: 3, semester: 'Semester A Year 3' },
        { id: 24, name: 'Deep Learning Fundamentals', grade: 96, credits: 3, semester: 'Semester A Year 3' },
        { id: 25, name: 'Advanced Software Development 2', grade: 100, credits: 4, semester: 'Semester A Year 3' },
        { id: 26, name: 'Computer Structure', grade: 100, credits: 4, semester: 'Semester A Year 3' },
        { id: 27, name: 'Computational Models', grade: 100, credits: 4, semester: 'Semester A Year 3' },
    ]

    // State for sorting and filtering
    const [sortField, setSortField] = useState('semester')
    const [sortDirection, setSortDirection] = useState('asc')
    const [searchTerm, setSearchTerm] = useState('')
    const [semesterFilter, setSemesterFilter] = useState('all')
    const [gradeFilter, setGradeFilter] = useState('all')

    // Custom sort function for semesters
    const semesterOrder = {
        'Semester A Year 1': 1,
        'Semester B Year 1': 2,
        'Semester A Year 2': 3,
        'Semester B Year 2': 4,
        'Semester A Year 3': 5
    }
    
    // Get unique semesters for filter dropdown
    const uniqueSemesters = [...new Set(courses.map(course => course.semester))]
        .sort((a, b) => semesterOrder[a] - semesterOrder[b])

    // Sorting function
    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
        } else {
            setSortField(field)
            setSortDirection('asc')
        }
    }

    // Calculate overall totals (independent of filtering)
    const overallTotalCredits = courses.reduce((sum, course) => sum + course.credits, 0)
    const overallWeightedSum = courses.reduce((sum, course) => sum + (course.grade * course.credits), 0)
    const overallAverageGrade = overallTotalCredits > 0 ? overallWeightedSum / overallTotalCredits : 0

    // Filtered and sorted courses
    const filteredAndSortedCourses = useMemo(() => {
        let filtered = courses.filter(course => {
            const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesSemester = semesterFilter === 'all' || course.semester === semesterFilter
            const matchesGrade = gradeFilter === 'all' || 
                (gradeFilter === 'excellent' && course.grade >= 95) ||
                (gradeFilter === 'good' && course.grade >= 85 && course.grade < 95) ||
                (gradeFilter === 'average' && course.grade >= 75 && course.grade < 85) ||
                (gradeFilter === 'below' && course.grade < 75)
            
            return matchesSearch && matchesSemester && matchesGrade
        })

        // Sort the filtered results
        filtered.sort((a, b) => {
            let aValue = a[sortField]
            let bValue = b[sortField]
            
            // Special handling for semester sorting
            if (sortField === 'semester') {
                const semesterOrder = {
                    'Semester A Year 1': 1,
                    'Semester B Year 1': 2,
                    'Semester A Year 2': 3,
                    'Semester B Year 2': 4,
                    'Semester A Year 3': 5
                }
                aValue = semesterOrder[aValue]
                bValue = semesterOrder[bValue]
            } else if (sortField === 'name') {
                aValue = aValue.toLowerCase()
                bValue = bValue.toLowerCase()
            }
            
            if (sortDirection === 'asc') {
                return aValue > bValue ? 1 : -1
            } else {
                return aValue < bValue ? 1 : -1
            }
        })

        return filtered
    }, [courses, searchTerm, semesterFilter, gradeFilter, sortField, sortDirection])

    // Grade color based on score
    const getGradeColor = (grade) => {
        if (grade >= 95) return 'text-green-600 dark:text-green-400'
        if (grade >= 85) return 'text-blue-600 dark:text-blue-400'
        if (grade >= 75) return 'text-yellow-600 dark:text-yellow-400'
        return 'text-red-600 dark:text-red-400'
    }

    // Sort icon component
    const SortIcon = ({ field }) => {
        if (sortField !== field) return <ChevronUp className="w-4 h-4 text-gray-400" />
        return sortDirection === 'asc' ? 
            <ChevronUp className="w-4 h-4 text-blue-600 dark:text-blue-400" /> : 
            <ChevronDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Academics</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    My educational journey and academic achievements
                </p>
            </div>

            <div className="space-y-8">
                {/* Academic Summary */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Academic Summary</h2>

                    {/* Important Note */}
                    <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 rounded-r-lg">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-blue-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-blue-700 dark:text-blue-300">
                                    <span className="font-medium">Note:</span> The displayed GPA does not reflect exemptions granted for two courses during my reserve service in the "Iron Swords" war. The actual GPA is higher.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{overallTotalCredits}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Total Credits</p>
                        </div>
                        <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
                                {overallAverageGrade.toFixed(2)}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Weighted Average</p>
                        </div>
                        <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">{courses.length}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Total Courses</p>
                        </div>
                    </div>
                </div>

                {/* Education Background */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Education</h2>

                    <div className="space-y-6">
                        <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-6">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h3>
                            <p className="text-gray-600 dark:text-gray-400">The College of Management Academic Studies | 2023 - 2025</p>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">
                                Specializing in Data Science.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        {/* Search */}
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search courses..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Semester Filter */}
                        <div className="flex items-center gap-2">
                            <Filter className="w-4 h-4 text-gray-400" />
                            <select
                                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={semesterFilter}
                                onChange={(e) => setSemesterFilter(e.target.value)}
                            >
                                <option value="all">All Semesters</option>
                                {uniqueSemesters.map(semester => (
                                    <option key={semester} value={semester}>{semester}</option>
                                ))}
                            </select>
                        </div>

                        {/* Grade Filter */}
                        <div>
                            <select
                                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={gradeFilter}
                                onChange={(e) => setGradeFilter(e.target.value)}
                            >
                                <option value="all">All Grades</option>
                                <option value="excellent">Excellent (95+)</option>
                                <option value="good">Good (85-94)</option>
                                <option value="average">Average (75-84)</option>
                                <option value="below">Below 75</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Grades Table */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Course Grades</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Showing {filteredAndSortedCourses.length} of {courses.length} courses
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-900">
                                <tr>
                                    <th 
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                        onClick={() => handleSort('name')}
                                    >
                                        <div className="flex items-center space-x-1">
                                            <span>Course Name</span>
                                            <SortIcon field="name" />
                                        </div>
                                    </th>
                                    <th 
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                        onClick={() => handleSort('grade')}
                                    >
                                        <div className="flex items-center space-x-1">
                                            <span>Grade</span>
                                            <SortIcon field="grade" />
                                        </div>
                                    </th>
                                    <th 
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                        onClick={() => handleSort('credits')}
                                    >
                                        <div className="flex items-center space-x-1">
                                            <span>Credits</span>
                                            <SortIcon field="credits" />
                                        </div>
                                    </th>
                                    <th 
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                        onClick={() => handleSort('semester')}
                                    >
                                        <div className="flex items-center space-x-1">
                                            <span>Semester</span>
                                            <SortIcon field="semester" />
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                {filteredAndSortedCourses.map((course) => (
                                    <tr key={course.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                            {course.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                                            <span className={getGradeColor(course.grade)}>
                                                {course.grade}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {course.credits}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {course.semester}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Academics