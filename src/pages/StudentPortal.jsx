import React from 'react'
import { User, BookOpen, FileText, Calendar, Bell, Download, CreditCard, MessageSquare } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const StudentPortal = () => {
  const [heroRef, heroVisible] = useScrollAnimation(0.2)
  const [servicesRef, servicesVisible] = useScrollAnimation(0.2)

  const portalServices = [
    {
      icon: <User className="w-8 h-8 text-primary-600" />,
      title: "Student Profile",
      description: "View and update your personal information, contact details, and academic records",
      status: "Coming Soon",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: "Academic Records",
      description: "Access your grades, transcripts, and academic performance reports",
      status: "Coming Soon",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: "Class Schedule",
      description: "View your daily class timetable, room assignments, and faculty information",
      status: "Coming Soon",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-600" />,
      title: "Fee Payment",
      description: "Pay tuition fees, view payment history, and download fee receipts",
      status: "Coming Soon",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
      title: "Library Services",
      description: "Search library catalog, renew books, and access digital resources",
      status: "Coming Soon",
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      icon: <Bell className="w-8 h-8 text-red-600" />,
      title: "Notifications",
      description: "Receive important announcements, exam schedules, and college updates",
      status: "Coming Soon",
      color: "bg-red-50 border-red-200"
    },
    {
      icon: <Download className="w-8 h-8 text-teal-600" />,
      title: "Downloads",
      description: "Access study materials, forms, certificates, and official documents",
      status: "Coming Soon",
      color: "bg-teal-50 border-teal-200"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-pink-600" />,
      title: "Support Center",
      description: "Get help with technical issues, submit queries, and contact administration",
      status: "Coming Soon",
      color: "bg-pink-50 border-pink-200"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <img 
            src="/assets/hero_image.jpeg" 
            alt="Student Portal" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative container-max text-center" ref={heroRef}>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 fade-in-up ${heroVisible ? 'animate' : ''}`}>
            Student Portal
          </h1>
          <p className={`text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed fade-in-up ${heroVisible ? 'animate' : ''} stagger-1`}>
            Your comprehensive digital platform for academic services, resources, and student information management.
          </p>
        </div>
      </section>

      {/* Portal Services */}
      <section className="bg-gray-50 section-padding" ref={servicesRef}>
        <div className="container-max">
          <div className={`text-center mb-16 fade-in-up ${servicesVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              Portal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access all your academic and administrative services from one convenient location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portalServices.map((service, index) => (
              <div key={index} className={`${service.color} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer fade-in-up ${servicesVisible ? 'animate' : ''} stagger-${index + 1}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    {service.icon}
                  </div>
                  <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-full font-medium">
                    {service.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Login Section */}
          <div className={`mt-16 max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 fade-in-up ${servicesVisible ? 'animate' : ''} stagger-9`}>
            <div className="text-center mb-6">
              <User className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Student Login</h3>
              <p className="text-gray-600">Access your student portal account</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Student ID</label>
                <input 
                  type="text" 
                  placeholder="Enter your student ID"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  disabled
                />
              </div>
              <button 
                className="w-full bg-gray-400 text-white py-3 rounded-lg font-medium cursor-not-allowed"
                disabled
              >
                Login (Coming Soon)
              </button>
            </div>
          </div>

          {/* Notice */}
          <div className={`mt-12 bg-primary-50 border border-primary-200 rounded-xl p-6 fade-in-up ${servicesVisible ? 'animate' : ''} stagger-10`}>
            <div className="flex items-start space-x-3">
              <Bell className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Portal Launch Notice</h3>
                <p className="text-primary-700">
                  The Student Portal is currently under development and will be launched with the start of our first academic session. 
                  Students will receive login credentials and access instructions during the orientation program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudentPortal
