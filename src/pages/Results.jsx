import React, { useState } from 'react'
import { Search, Download, Calendar, User, Award, FileText, GraduationCap, CheckCircle, XCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Results = () => {
  const [heroRef, heroVisible] = useScrollAnimation(0.1, true)
  const [searchRef, searchVisible] = useScrollAnimation(0.1)
  const [resultRef, resultVisible] = useScrollAnimation(0.1)
  
  const [searchQuery, setSearchQuery] = useState('')
  const [searchType, setSearchType] = useState('rollNumber')
  const [searchResult, setSearchResult] = useState(null)
  const [isSearching, setIsSearching] = useState(false)

  // Sample student results data
  const sampleResults = [
    {
      rollNumber: 'SVI2023001',
      name: 'Priya Sharma',
      course: 'General Nursing and Midwifery (GNM)',
      batch: '2021-2024',
      semester: 'Final Year',
      examDate: '2024-05-15',
      result: 'Pass',
      percentage: 78.5,
      grade: 'First Class',
      subjects: [
        { name: 'Medical Surgical Nursing', marks: 82, total: 100, status: 'Pass' },
        { name: 'Community Health Nursing', marks: 76, total: 100, status: 'Pass' },
        { name: 'Mental Health Nursing', marks: 79, total: 100, status: 'Pass' },
        { name: 'Midwifery & Obstetrical Nursing', marks: 75, total: 100, status: 'Pass' },
        { name: 'Pediatric Nursing', marks: 81, total: 100, status: 'Pass' }
      ]
    },
    {
      rollNumber: 'SVI2023002',
      name: 'Rahul Kumar',
      course: 'Auxiliary Nurse Midwifery (ANM)',
      batch: '2022-2024',
      semester: 'Second Year',
      examDate: '2024-05-15',
      result: 'Pass',
      percentage: 85.2,
      grade: 'First Class with Distinction',
      subjects: [
        { name: 'Primary Health Care Nursing', marks: 88, total: 100, status: 'Pass' },
        { name: 'Child Health Nursing', marks: 84, total: 100, status: 'Pass' },
        { name: 'Health Promotion', marks: 87, total: 100, status: 'Pass' },
        { name: 'Community Health Nursing', marks: 82, total: 100, status: 'Pass' }
      ]
    },
    {
      rollNumber: 'SVI2023003',
      name: 'Anita Das',
      course: 'Medical Laboratory Technology (MLT)',
      batch: '2022-2024',
      semester: 'Second Year',
      examDate: '2024-05-15',
      result: 'Pass',
      percentage: 72.8,
      grade: 'Second Class',
      subjects: [
        { name: 'Clinical Pathology', marks: 75, total: 100, status: 'Pass' },
        { name: 'Clinical Microbiology', marks: 71, total: 100, status: 'Pass' },
        { name: 'Clinical Biochemistry', marks: 74, total: 100, status: 'Pass' },
        { name: 'Hematology', marks: 70, total: 100, status: 'Pass' }
      ]
    }
  ]

  const handleSearch = () => {
    setIsSearching(true)
    
    // Simulate API call delay
    setTimeout(() => {
      const result = sampleResults.find(student => {
        if (searchType === 'rollNumber') {
          return student.rollNumber.toLowerCase().includes(searchQuery.toLowerCase())
        } else {
          return student.name.toLowerCase().includes(searchQuery.toLowerCase())
        }
      })
      
      setSearchResult(result || 'not_found')
      setIsSearching(false)
    }, 1000)
  }

  const downloadResult = () => {
    if (searchResult && searchResult !== 'not_found') {
      // In a real application, this would generate and download a PDF
      alert('Result PDF download would be implemented here')
    }
  }

  const getGradeColor = (grade) => {
    if (grade.includes('Distinction')) return 'text-green-600'
    if (grade.includes('First')) return 'text-blue-600'
    if (grade.includes('Second')) return 'text-yellow-600'
    return 'text-gray-600'
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <img 
            src="/src/assets/hero_image.jpeg" 
            alt="Swami Vivekananda Institute" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative container-max text-center" ref={heroRef}>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 fade-in-up ${heroVisible ? 'animate' : ''}`}>Student Results</h1>
          <p className={`text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed fade-in-up ${heroVisible ? 'animate' : ''} stagger-1`}>
            Check your examination results and academic performance with instant access to detailed marksheets.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white section-padding" ref={searchRef}>
        <div className="container-max">
          <div className={`max-w-2xl mx-auto fade-in-up ${searchVisible ? 'animate' : ''}`}>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center text-primary-700 mb-8">
                Search Your Results
              </h2>
              
              {/* Search Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Search By:
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setSearchType('rollNumber')}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      searchType === 'rollNumber'
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <FileText className="w-5 h-5 mx-auto mb-2" />
                    <span className="text-sm font-medium">Roll Number</span>
                  </button>
                  <button
                    onClick={() => setSearchType('name')}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      searchType === 'name'
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <User className="w-5 h-5 mx-auto mb-2" />
                    <span className="text-sm font-medium">Student Name</span>
                  </button>
                </div>
              </div>

              {/* Search Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {searchType === 'rollNumber' ? 'Enter Roll Number' : 'Enter Student Name'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={searchType === 'rollNumber' ? 'e.g., SVI2023001' : 'e.g., John Doe'}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                disabled={!searchQuery.trim() || isSearching}
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
              >
                {isSearching ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Searching...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Search className="w-5 h-5" />
                    Search Results
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Display Section */}
      {searchResult && (
        <section className="bg-gray-50 section-padding" ref={resultRef}>
          <div className="container-max">
            <div className={`fade-in-up ${resultVisible ? 'animate' : ''}`}>
              {searchResult === 'not_found' ? (
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
                  <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No Results Found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any results matching your search criteria. Please check your {searchType === 'rollNumber' ? 'roll number' : 'name'} and try again.
                  </p>
                  <button
                    onClick={() => {
                      setSearchResult(null)
                      setSearchQuery('')
                    }}
                    className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Search Again
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Result Header */}
                  <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{searchResult.name}</h3>
                        <p className="text-primary-100">Roll Number: {searchResult.rollNumber}</p>
                      </div>
                      <button
                        onClick={downloadResult}
                        className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2 w-fit"
                      >
                        <Download className="w-4 h-4" />
                        Download Result
                      </button>
                    </div>
                  </div>

                  {/* Student Details */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 text-primary-600" />
                        <div>
                          <p className="text-sm text-gray-500">Course</p>
                          <p className="font-medium">{searchResult.course}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary-600" />
                        <div>
                          <p className="text-sm text-gray-500">Batch</p>
                          <p className="font-medium">{searchResult.batch}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-primary-600" />
                        <div>
                          <p className="text-sm text-gray-500">Grade</p>
                          <p className={`font-medium ${getGradeColor(searchResult.grade)}`}>
                            {searchResult.grade}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-sm text-gray-500">Percentage</p>
                          <p className="font-medium text-green-600">{searchResult.percentage}%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subject-wise Results */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Subject-wise Results</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="text-left py-3 px-4 font-medium text-gray-700">Subject</th>
                            <th className="text-center py-3 px-4 font-medium text-gray-700">Marks Obtained</th>
                            <th className="text-center py-3 px-4 font-medium text-gray-700">Total Marks</th>
                            <th className="text-center py-3 px-4 font-medium text-gray-700">Percentage</th>
                            <th className="text-center py-3 px-4 font-medium text-gray-700">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {searchResult.subjects.map((subject, index) => (
                            <tr key={index} className="border-t border-gray-200">
                              <td className="py-3 px-4 font-medium">{subject.name}</td>
                              <td className="py-3 px-4 text-center">{subject.marks}</td>
                              <td className="py-3 px-4 text-center">{subject.total}</td>
                              <td className="py-3 px-4 text-center">
                                {((subject.marks / subject.total) * 100).toFixed(1)}%
                              </td>
                              <td className="py-3 px-4 text-center">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  subject.status === 'Pass' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-red-100 text-red-800'
                                }`}>
                                  {subject.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Result Summary */}
                  <div className="bg-gray-50 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div>
                        <p className="text-2xl font-bold text-primary-600">{searchResult.percentage}%</p>
                        <p className="text-sm text-gray-600">Overall Percentage</p>
                      </div>
                      <div>
                        <p className={`text-2xl font-bold ${getGradeColor(searchResult.grade)}`}>
                          {searchResult.grade}
                        </p>
                        <p className="text-sm text-gray-600">Grade Achieved</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600">{searchResult.result}</p>
                        <p className="text-sm text-gray-600">Final Result</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Instructions Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-primary-700 mb-8">
              How to Check Your Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Choose Search Type</h3>
                <p className="text-gray-600">Select whether to search by roll number or student name</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Enter Details</h3>
                <p className="text-gray-600">Type your roll number or full name as registered</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">View & Download</h3>
                <p className="text-gray-600">View your detailed results and download the certificate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Results
