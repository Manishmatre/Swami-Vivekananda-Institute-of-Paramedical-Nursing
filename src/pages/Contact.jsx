import React, { useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  User,
  MessageSquare,
  Building2,
  Navigation
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary-500" />,
      title: "Address",
      details: [
        "123 Healthcare Avenue",
        "Medical District, City - 123456",
        "State, India"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-500" />,
      title: "Phone Numbers",
      details: [
        "Main Office: +91 98765 43210",
        "Admissions: +91 98765 43211",
        "Emergency: +91 98765 43212"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-primary-500" />,
      title: "Email Addresses",
      details: [
        "info@svipn.edu.in",
        "admissions@svipn.edu.in",
        "principal@svipn.edu.in"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-500" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ]

  const departments = [
    {
      name: "Admissions Office",
      phone: "+91 98765 43211",
      email: "admissions@svipn.edu.in",
      head: "Mrs. Priya Sharma"
    },
    {
      name: "Academic Office",
      phone: "+91 98765 43213",
      email: "academics@svipn.edu.in",
      head: "Dr. Rajesh Kumar"
    },
    {
      name: "Student Affairs",
      phone: "+91 98765 43214",
      email: "students@svipn.edu.in",
      head: "Mr. Amit Verma"
    },
    {
      name: "Placement Cell",
      phone: "+91 98765 43215",
      email: "placements@svipn.edu.in",
      head: "Ms. Sunita Gupta"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for admissions, inquiries, or any information about 
            our healthcare education programs. We're here to help you start your journey.
          </p>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="bg-white py-8 shadow-lg">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="tel:+919876543210"
              className="flex items-center justify-center space-x-3 bg-primary-500 hover:bg-primary-600 text-white p-4 rounded-lg transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span className="font-semibold">Call Now</span>
            </a>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="font-semibold">WhatsApp</span>
            </a>
            <a 
              href="mailto:info@svipn.edu.in"
              className="flex items-center justify-center space-x-3 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span className="font-semibold">Email Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary-700 mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-600 mb-4">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="courses">Course Information</option>
                        <option value="fees">Fee Structure</option>
                        <option value="facilities">Facilities & Infrastructure</option>
                        <option value="placement">Placement Assistance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="5"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Please describe your inquiry in detail..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary-700">{info.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-700 mb-4">Find Us on Map</h2>
            <p className="text-lg text-gray-600">
              Located in the heart of the medical district, easily accessible by all modes of transport.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <Navigation className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg font-medium">Interactive Map</p>
                  <p className="text-gray-400 text-sm">
                    Google Maps integration would be placed here
                  </p>
                  <button className="mt-4 bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                    Open in Google Maps
                  </button>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="space-y-6">
              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-700 mb-4">How to Reach</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <strong>By Metro:</strong> Medical College Station (2 min walk)
                  </div>
                  <div>
                    <strong>By Bus:</strong> Routes 15, 23, 45 stop nearby
                  </div>
                  <div>
                    <strong>By Car:</strong> Ample parking available on campus
                  </div>
                  <div>
                    <strong>Landmarks:</strong> Near City Hospital & Medical College
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-700 mb-4">Campus Facilities</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Free Parking Available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Wheelchair Accessible</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Cafeteria & Rest Areas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>24/7 Security</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-700 mb-4">Department Contacts</h2>
            <p className="text-lg text-gray-600">
              Connect directly with specific departments for targeted assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Building2 className="w-6 h-6 text-primary-500" />
                  <h3 className="text-lg font-semibold text-primary-700">{dept.name}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a href={`tel:${dept.phone}`} className="text-gray-600 hover:text-primary-500">
                      {dept.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a href={`mailto:${dept.email}`} className="text-gray-600 hover:text-primary-500">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{dept.head}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-700 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-primary-700 mb-2">
                  What are your visiting hours?
                </h4>
                <p className="text-gray-600 text-sm">
                  Our campus is open Monday-Friday 9AM-6PM, Saturday 9AM-2PM. 
                  We recommend scheduling an appointment for personalized attention.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-primary-700 mb-2">
                  How can I schedule a campus tour?
                </h4>
                <p className="text-gray-600 text-sm">
                  You can schedule a campus tour by calling our admissions office 
                  or filling out the contact form above.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-primary-700 mb-2">
                  Do you provide hostel facilities?
                </h4>
                <p className="text-gray-600 text-sm">
                  Yes, we have separate hostel facilities for boys and girls with 
                  modern amenities. Contact our student affairs office for details.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-primary-700 mb-2">
                  What documents do I need for admission?
                </h4>
                <p className="text-gray-600 text-sm">
                  Required documents include mark sheets, certificates, photos, 
                  and ID proof. Visit our admissions page for the complete list.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
