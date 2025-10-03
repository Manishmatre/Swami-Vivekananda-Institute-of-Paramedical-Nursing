import React from 'react'
import { Calendar as CalendarIcon, Clock, MapPin, Users } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Calendar = () => {
  const [heroRef, heroVisible] = useScrollAnimation(0.2)
  const [eventsRef, eventsVisible] = useScrollAnimation(0.2)

  const academicEvents = [
    {
      date: "2025-07-01",
      title: "New Academic Session Begins",
      type: "Academic",
      time: "9:00 AM",
      location: "Main Campus",
      description: "First day of classes for all programs"
    },
    {
      date: "2025-07-15",
      title: "Orientation Program",
      type: "Event",
      time: "10:00 AM",
      location: "Auditorium",
      description: "Welcome program for new students"
    },
    {
      date: "2025-09-15",
      title: "Mid-Term Examinations",
      type: "Exam",
      time: "9:00 AM",
      location: "Examination Hall",
      description: "Mid-semester examinations for all courses"
    },
    {
      date: "2025-12-15",
      title: "Final Examinations",
      type: "Exam",
      time: "9:00 AM",
      location: "Examination Hall",
      description: "End semester examinations"
    },
    {
      date: "2025-12-25",
      title: "Winter Break Begins",
      type: "Holiday",
      time: "All Day",
      location: "Campus",
      description: "Winter vacation starts"
    }
  ]

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'Academic': return 'bg-blue-100 text-blue-800'
      case 'Exam': return 'bg-red-100 text-red-800'
      case 'Event': return 'bg-green-100 text-green-800'
      case 'Holiday': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <img 
            src="/assets/hero_image.jpeg" 
            alt="Academic Calendar" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative container-max text-center" ref={heroRef}>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 fade-in-up ${heroVisible ? 'animate' : ''}`}>
            Academic Calendar
          </h1>
          <p className={`text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed fade-in-up ${heroVisible ? 'animate' : ''} stagger-1`}>
            Stay updated with important academic dates, examinations, and events for the 2025 academic year.
          </p>
        </div>
      </section>

      {/* Academic Events */}
      <section className="bg-white section-padding" ref={eventsRef}>
        <div className="container-max">
          <div className={`text-center mb-16 fade-in-up ${eventsVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              Academic Year 2025
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important dates and events for our inaugural academic session.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {academicEvents.map((event, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-6 mb-6 border-l-4 border-primary-500 fade-in-up ${eventsVisible ? 'animate' : ''} stagger-${index + 1}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <CalendarIcon className="w-5 h-5 text-primary-600" />
                      <span className="text-primary-600 font-semibold">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-3">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Notice */}
          <div className={`mt-12 bg-orange-50 border border-orange-200 rounded-xl p-6 fade-in-up ${eventsVisible ? 'animate' : ''} stagger-6`}>
            <div className="flex items-start space-x-3">
              <CalendarIcon className="w-6 h-6 text-orange-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-orange-800 mb-2">Important Notice</h3>
                <p className="text-orange-700">
                  This is our inaugural academic year starting in 2025. The calendar may be updated as we finalize 
                  our academic schedule. Students will be notified of any changes through official channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Calendar
