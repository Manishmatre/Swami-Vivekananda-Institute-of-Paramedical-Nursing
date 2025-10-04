import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, ChevronDown, User, FileText, Calendar, BookOpen } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isStudentDropdownOpen, setIsStudentDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isStudentDropdownOpen && !event.target.closest('.student-dropdown')) {
        setIsStudentDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isStudentDropdownOpen])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  const studentLinks = [
    { name: 'Student Results', href: '/results', icon: <FileText size={16} /> },
    { name: 'Academic Calendar', href: '/calendar', icon: <Calendar size={16} /> },
    { name: 'Student Portal', href: '/student-portal', icon: <User size={16} /> },
    { name: 'Library Resources', href: '/library', icon: <BookOpen size={16} /> },
  ]

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary-700 text-white py-2 px-4 text-sm">
        <div className="container-max flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>info@svipn.edu.in</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={14} />
            <span>Excellence in Healthcare Education Since 2025</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="container-max">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/assets/Swami_Vivekananda_Institute-logo.png" 
                alt="Swami Vivekananda Institute Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-primary-700 leading-tight">
                  Swami Vivekananda Institute
                </h1>
                <p className="text-sm text-gray-600">of Paramedical & Nursing</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 hover:text-primary-500 ${
                    location.pathname === item.href
                      ? 'text-primary-500 border-b-2 border-primary-500 pb-1'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Student Dropdown */}
              <div className="relative student-dropdown">
                <button
                  onClick={() => setIsStudentDropdownOpen(!isStudentDropdownOpen)}
                  className={`font-medium transition-colors duration-200 hover:text-primary-500 flex items-center space-x-1 ${
                    studentLinks.some(link => location.pathname === link.href)
                      ? 'text-primary-500 border-b-2 border-primary-500 pb-1'
                      : 'text-gray-700'
                  }`}
                >
                  <span>Students</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isStudentDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isStudentDropdownOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {studentLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsStudentDropdownOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 text-sm transition-colors duration-200 hover:bg-primary-50 hover:text-primary-600 ${
                          location.pathname === item.href
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-gray-700'
                        }`}
                      >
                        <span className="text-primary-500">{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>


            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Student Section in Mobile */}
              <div className="pt-2">
                <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Student Services
                </div>
                {studentLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-primary-500 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-primary-500">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
              
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
