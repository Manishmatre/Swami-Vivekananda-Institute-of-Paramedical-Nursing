import React, { useState } from 'react'
import { 
  FileText, 
  Download, 
  CheckCircle, 
  Calendar, 
  Users, 
  BookOpen, 
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Clock,
  MapPin,
  Award
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Admissions = () => {
  const [selectedCourse, setSelectedCourse] = useState('')
  const [heroRef, heroVisible] = useScrollAnimation(0.2)
  const [processRef, processVisible] = useScrollAnimation(0.2)
  const [requirementsRef, requirementsVisible] = useScrollAnimation(0.3)
  const [formRef, formVisible] = useScrollAnimation(0.2)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    qualification: '',
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

  const admissionSteps = [
    {
      step: 1,
      title: "Online Application",
      description: "Fill out the online application form or download and submit the PDF form",
      icon: <FileText className="w-6 h-6 text-primary-500" />
    },
    {
      step: 2,
      title: "Document Verification",
      description: "Submit required documents for verification and eligibility check",
      icon: <CheckCircle className="w-6 h-6 text-primary-500" />
    },
    {
      step: 3,
      title: "Entrance Test/Interview",
      description: "Appear for entrance test or interview as per course requirements",
      icon: <Users className="w-6 h-6 text-primary-500" />
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description: "Complete fee payment and confirm your admission to secure your seat",
      icon: <Award className="w-6 h-6 text-primary-500" />
    }
  ]

  const importantDates = [
    { event: "Application Start Date", date: "January 15, 2024" },
    { event: "Application Deadline", date: "June 30, 2024" },
    { event: "Entrance Test", date: "July 15, 2024" },
    { event: "Results Declaration", date: "July 25, 2024" },
    { event: "Admission Confirmation", date: "August 10, 2024" },
    { event: "Classes Begin", date: "August 20, 2024" }
  ]

  const requiredDocuments = [
    "10th Mark Sheet & Certificate",
    "12th Mark Sheet & Certificate",
    "Transfer Certificate",
    "Character Certificate",
    "Caste Certificate (if applicable)",
    "Passport Size Photographs (6 copies)",
    "Aadhar Card Copy",
    "Medical Fitness Certificate"
  ]

  const courses = [
    "B.Sc Nursing",
    "GNM (General Nursing & Midwifery)",
    "ANM (Auxiliary Nursing & Midwifery)",
    "Medical Laboratory Technology",
    "Radiology & Imaging Technology",
    "Operation Theatre Technology",
    "Physiotherapy Assistant",
    "Pharmacy Assistant"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Admissions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative container-max text-center" ref={heroRef}>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 fade-in-up ${heroVisible ? 'animate' : ''}`}>Admissions</h1>
          <p className={`text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed fade-in-up ${heroVisible ? 'animate' : ''} stagger-1`}>
            Join India's premier institute for paramedical and nursing education. 
            Start your journey towards a rewarding healthcare career.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-white py-8 shadow-lg">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="font-semibold">WhatsApp Inquiry</span>
            </a>
            <button className="flex items-center justify-center space-x-3 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg transition-colors">
              <Download className="w-6 h-6" />
              <span className="font-semibold">Download Brochure</span>
            </button>
            <button className="flex items-center justify-center space-x-3 bg-primary-500 hover:bg-primary-600 text-white p-4 rounded-lg transition-colors">
              <FileText className="w-6 h-6" />
              <span className="font-semibold">Download Form</span>
            </button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-gray-50 section-padding" ref={processRef}>
        <div className="container-max">
          <div className={`text-center mb-16 fade-in-up ${processVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to secure your admission at our institute
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className={`text-center fade-in-up ${processVisible ? 'animate' : ''} stagger-${index + 1}`}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 float-animation">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-700 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form & Important Info */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Application Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary-700 mb-6">
                Online Application Form
              </h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-green-600 mb-4">
                    Thank you for your interest. Our admissions team will contact you within 24 hours.
                  </p>
                  <div className="space-y-2 text-sm text-green-600">
                    <p>📧 Check your email for confirmation</p>
                    <p>📱 WhatsApp updates will be sent to your number</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Course Interest *
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a course</option>
                        {courses.map((course, index) => (
                          <option key={index} value={course}>{course}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Highest Qualification *
                    </label>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select qualification</option>
                      <option value="10th">10th Pass</option>
                      <option value="12th-science">12th Science</option>
                      <option value="12th-other">12th Other Stream</option>
                      <option value="graduation">Graduation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Any specific questions or requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Important Information */}
            <div className="space-y-8">
              {/* Important Dates */}
              <div className="card">
                <h3 className="text-xl font-semibold text-primary-700 mb-4 flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  Important Dates
                </h3>
                <div className="space-y-3">
                  {importantDates.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700 text-sm">{item.event}</span>
                      <span className="text-primary-600 font-medium text-sm">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div className="card">
                <h3 className="text-xl font-semibold text-primary-700 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-2" />
                  Required Documents
                </h3>
                <ul className="space-y-2">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="card bg-primary-50">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">
                  Need Help?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-700">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-700">admissions@svipn.edu.in</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-700">Mon-Sat: 9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-700">Admissions Office, Ground Floor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-700 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="card">
                <h4 className="font-semibold text-primary-700 mb-2">
                  What is the minimum eligibility for nursing courses?
                </h4>
                <p className="text-gray-600 text-sm">
                  For B.Sc Nursing: 10+2 with PCB and minimum 50% marks. 
                  For GNM: 10+2 with any stream and 45% marks.
                </p>
              </div>
              
              <div className="card">
                <h4 className="font-semibold text-primary-700 mb-2">
                  Is there an entrance exam?
                </h4>
                <p className="text-gray-600 text-sm">
                  Yes, we conduct entrance tests for most courses. Some courses may have interviews instead.
                </p>
              </div>

              <div className="card">
                <h4 className="font-semibold text-primary-700 mb-2">
                  What are the fee payment options?
                </h4>
                <p className="text-gray-600 text-sm">
                  We offer flexible payment options including installments, education loans, and scholarships for deserving students.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card">
                <h4 className="font-semibold text-primary-700 mb-2">
                  Do you provide hostel facilities?
                </h4>
                <p className="text-gray-600 text-sm">
                  Yes, we have separate hostel facilities for boys and girls with modern amenities and 24/7 security.
                </p>
              </div>

              <div className="card">
                <h4 className="font-semibold text-primary-700 mb-2">
                  What about placement assistance?
                </h4>
                <p className="text-gray-600 text-sm">
                  We provide 100% placement assistance with partnerships in 50+ hospitals and healthcare institutions.
                </p>
              </div>

              <div className="card">
                <h4 className="font-semibold text-primary-700 mb-2">
                  Can I apply for multiple courses?
                </h4>
                <p className="text-gray-600 text-sm">
                  Yes, you can apply for multiple courses, but you'll need to submit separate applications for each.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admissions
