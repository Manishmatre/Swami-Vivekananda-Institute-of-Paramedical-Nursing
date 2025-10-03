import React from 'react'
import { BookOpen, Search, Clock, Users, Wifi, Computer, Coffee, Shield } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Library = () => {
  const [heroRef, heroVisible] = useScrollAnimation(0.2)
  const [resourcesRef, resourcesVisible] = useScrollAnimation(0.2)
  const [facilitiesRef, facilitiesVisible] = useScrollAnimation(0.2)

  const libraryResources = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Medical Textbooks",
      count: "2,500+",
      description: "Comprehensive collection of medical, nursing, and paramedical textbooks"
    },
    {
      icon: <Search className="w-8 h-8 text-green-600" />,
      title: "Digital Database",
      count: "10,000+",
      description: "Access to online journals, research papers, and digital resources"
    },
    {
      icon: <Computer className="w-8 h-8 text-purple-600" />,
      title: "E-Books",
      count: "5,000+",
      description: "Digital library with latest editions and reference materials"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Study Seats",
      count: "200+",
      description: "Spacious reading halls with comfortable seating arrangements"
    }
  ]

  const facilities = [
    {
      icon: <Wifi className="w-6 h-6 text-primary-600" />,
      title: "Free Wi-Fi",
      description: "High-speed internet access throughout the library"
    },
    {
      icon: <Computer className="w-6 h-6 text-primary-600" />,
      title: "Computer Lab",
      description: "Dedicated computers for research and digital access"
    },
    {
      icon: <Coffee className="w-6 h-6 text-primary-600" />,
      title: "Reading Lounge",
      description: "Comfortable spaces for group study and discussions"
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-600" />,
      title: "Security System",
      description: "24/7 security with CCTV monitoring and access control"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-600" />,
      title: "Extended Hours",
      description: "Open from 8:00 AM to 10:00 PM on weekdays"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary-600" />,
      title: "Reference Section",
      description: "Dedicated area for reference books and study materials"
    }
  ]

  const libraryHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 10:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
    { day: "Holidays", hours: "Closed" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <img 
            src="/assets/hero_image.jpeg" 
            alt="Library Resources" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative container-max text-center" ref={heroRef}>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 fade-in-up ${heroVisible ? 'animate' : ''}`}>
            Library Resources
          </h1>
          <p className={`text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed fade-in-up ${heroVisible ? 'animate' : ''} stagger-1`}>
            State-of-the-art library with extensive medical literature, digital resources, and modern study facilities.
          </p>
        </div>
      </section>

      {/* Library Resources */}
      <section className="bg-white section-padding" ref={resourcesRef}>
        <div className="container-max">
          <div className={`text-center mb-16 fade-in-up ${resourcesVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              Our Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources to support your academic journey and research needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {libraryResources.map((resource, index) => (
              <div key={index} className={`text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 fade-in-up ${resourcesVisible ? 'animate' : ''} stagger-${index + 1}`}>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-full shadow-md">
                    {resource.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{resource.count}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Facilities */}
      <section className="bg-gray-50 section-padding" ref={facilitiesRef}>
        <div className="container-max">
          <div className={`text-center mb-16 fade-in-up ${facilitiesVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              Modern Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience learning in a comfortable, technology-enabled environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {facilities.map((facility, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 fade-in-up ${facilitiesVisible ? 'animate' : ''} stagger-${index + 1}`}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    {facility.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{facility.title}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Library Hours */}
          <div className={`max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 fade-in-up ${facilitiesVisible ? 'animate' : ''} stagger-7`}>
            <div className="text-center mb-6">
              <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Library Hours</h3>
              <p className="text-gray-600">Visit us during these hours for the best study experience</p>
            </div>
            
            <div className="space-y-4">
              {libraryHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <span className="font-medium text-gray-800">{schedule.day}</span>
                  <span className="text-primary-600 font-semibold">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notice */}
          <div className={`mt-12 bg-primary-50 border border-primary-200 rounded-xl p-6 fade-in-up ${facilitiesVisible ? 'animate' : ''} stagger-8`}>
            <div className="flex items-start space-x-3">
              <BookOpen className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Library Services</h3>
                <p className="text-primary-700">
                  Our library is currently being set up with the latest medical literature and digital resources. 
                  Full services will be available from the start of the academic session. Students will receive 
                  library orientation and access cards during the admission process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Library
