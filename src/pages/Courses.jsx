import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Clock, 
  Users, 
  BookOpen, 
  Award, 
  CheckCircle, 
  ArrowRight,
  GraduationCap,
  Stethoscope,
  Microscope,
  Heart,
  Activity,
  Zap
} from 'lucide-react'

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Courses', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'nursing', name: 'Nursing', icon: <Heart className="w-5 h-5" /> },
    { id: 'paramedical', name: 'Paramedical', icon: <Stethoscope className="w-5 h-5" /> },
    { id: 'technology', name: 'Medical Technology', icon: <Microscope className="w-5 h-5" /> }
  ]

  const courses = [
    {
      id: 1,
      title: "B.Sc Nursing",
      category: "nursing",
      duration: "4 Years",
      eligibility: "10+2 with PCB (50% marks)",
      seats: "60",
      fee: "₹80,000/year",
      description: "Comprehensive undergraduate nursing program with clinical training in top hospitals.",
      highlights: [
        "Clinical training in 50+ hospitals",
        "International exposure programs",
        "100% placement assistance",
        "Modern simulation labs"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <Heart className="w-8 h-8 text-red-500" />
    },
    {
      id: 2,
      title: "GNM (General Nursing & Midwifery)",
      category: "nursing",
      duration: "3.5 Years",
      eligibility: "10+2 with any stream (45% marks)",
      seats: "100",
      fee: "₹60,000/year",
      description: "Diploma program in General Nursing and Midwifery with extensive practical training.",
      highlights: [
        "Hands-on clinical experience",
        "Midwifery specialization",
        "Government job opportunities",
        "Experienced faculty"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <Heart className="w-8 h-8 text-pink-500" />
    },
    {
      id: 3,
      title: "ANM (Auxiliary Nursing & Midwifery)",
      category: "nursing",
      duration: "2 Years",
      eligibility: "10th Pass (45% marks)",
      seats: "80",
      fee: "₹45,000/year",
      description: "Foundation course in nursing and midwifery for community healthcare.",
      highlights: [
        "Community health focus",
        "Rural healthcare training",
        "Government recognition",
        "Quick employment opportunities"
      ],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <Heart className="w-8 h-8 text-rose-500" />
    },
    {
      id: 4,
      title: "Medical Laboratory Technology",
      category: "technology",
      duration: "2 Years",
      eligibility: "10+2 with PCB (50% marks)",
      seats: "40",
      fee: "₹70,000/year",
      description: "Advanced training in laboratory diagnostics and medical testing procedures.",
      highlights: [
        "Modern laboratory equipment",
        "Industry-standard protocols",
        "Pathology lab partnerships",
        "High demand career"
      ],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <Microscope className="w-8 h-8 text-blue-500" />
    },
    {
      id: 5,
      title: "Radiology & Imaging Technology",
      category: "technology",
      duration: "2 Years",
      eligibility: "10+2 with PCM/PCB (50% marks)",
      seats: "30",
      fee: "₹85,000/year",
      description: "Specialized training in medical imaging, X-ray, CT, MRI, and ultrasound technology.",
      highlights: [
        "Latest imaging equipment",
        "Radiation safety training",
        "Hospital internships",
        "Growing field opportunities"
      ],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <Activity className="w-8 h-8 text-green-500" />
    },
    {
      id: 6,
      title: "Operation Theatre Technology",
      category: "paramedical",
      duration: "2 Years",
      eligibility: "10+2 with PCB (45% marks)",
      seats: "25",
      fee: "₹75,000/year",
      description: "Comprehensive training in surgical procedures and operation theatre management.",
      highlights: [
        "Surgical procedure training",
        "Sterilization techniques",
        "Emergency response skills",
        "Critical care knowledge"
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <Zap className="w-8 h-8 text-orange-500" />
    },
    {
      id: 7,
      title: "Physiotherapy Assistant",
      category: "paramedical",
      duration: "1.5 Years",
      eligibility: "10+2 with any stream (45% marks)",
      seats: "35",
      fee: "₹55,000/year",
      description: "Training in physical therapy techniques and rehabilitation procedures.",
      highlights: [
        "Rehabilitation techniques",
        "Exercise therapy",
        "Sports medicine basics",
        "Elderly care specialization"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <Activity className="w-8 h-8 text-teal-500" />
    },
    {
      id: 8,
      title: "Pharmacy Assistant",
      category: "paramedical",
      duration: "1 Year",
      eligibility: "10+2 with PCB (45% marks)",
      seats: "50",
      fee: "₹50,000/year",
      description: "Training in pharmaceutical operations, drug dispensing, and pharmacy management.",
      highlights: [
        "Drug knowledge",
        "Pharmacy operations",
        "Inventory management",
        "Customer service skills"
      ],
      image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <BookOpen className="w-8 h-8 text-purple-500" />
    }
  ]

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Courses" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare education programs designed to prepare you for a successful 
            career in nursing and paramedical sciences.
          </p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="bg-white py-8 sticky top-20 z-40 shadow-md">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="card group hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg">
                    {course.icon}
                  </div>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.duration}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary-700">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-primary-500" />
                      <span className="text-gray-600">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary-500" />
                      <span className="text-gray-600">{course.seats} seats</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-primary-500" />
                      <span className="text-gray-600 text-xs">{course.eligibility}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-primary-500" />
                      <span className="text-gray-600 font-medium">{course.fee}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary-700 text-sm">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {course.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Link 
                      to="/admissions" 
                      className="flex-1 btn-primary text-center text-sm py-2"
                    >
                      Apply Now
                    </Link>
                    <button className="flex items-center justify-center px-4 py-2 border border-primary-500 text-primary-500 hover:bg-primary-50 rounded-lg text-sm font-medium transition-colors">
                      Details
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              Why Choose Our Courses?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs are designed with industry needs in mind, ensuring you graduate 
              with the skills and knowledge required for immediate employment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-primary-700">Updated Curriculum</h3>
              <p className="text-gray-600 text-sm">
                Industry-aligned syllabus updated regularly to meet current healthcare standards
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-primary-700">Expert Faculty</h3>
              <p className="text-gray-600 text-sm">
                Learn from experienced healthcare professionals and qualified educators
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Stethoscope className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-primary-700">Practical Training</h3>
              <p className="text-gray-600 text-sm">
                Extensive hands-on experience in hospitals and clinical settings
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-primary-700">Placement Support</h3>
              <p className="text-gray-600 text-sm">
                Dedicated placement cell ensuring job opportunities in top healthcare institutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-orange-500 text-white section-padding">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Healthcare Career?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Choose from our comprehensive range of courses and take the first step 
              towards a rewarding career in healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                Apply for Admission
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all">
                Get Course Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses
