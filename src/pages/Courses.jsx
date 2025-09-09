import React from 'react'
import { Clock, Users, Award, BookOpen, ArrowRight, CheckCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Courses = () => {
  const [heroRef, heroVisible] = useScrollAnimation(0.2)
  const [coursesRef, coursesVisible] = useScrollAnimation(0.2)
  const [featuresRef, featuresVisible] = useScrollAnimation(0.3)
  const [admissionRef, admissionVisible] = useScrollAnimation(0.2)
  const [selectedCategory, setSelectedCategory] = React.useState('all')

  const categories = [
    { id: 'all', name: 'All Courses', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'nursing', name: 'Nursing', icon: <Users className="w-5 h-5" /> },
    { id: 'paramedical', name: 'Paramedical', icon: <Award className="w-5 h-5" /> },
    { id: 'technology', name: 'Medical Technology', icon: <Clock className="w-5 h-5" /> }
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
      icon: <Users className="w-8 h-8 text-red-500" />
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
      icon: <Users className="w-8 h-8 text-pink-500" />
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
      icon: <Users className="w-8 h-8 text-rose-500" />
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
      icon: <Clock className="w-8 h-8 text-blue-500" />
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
      icon: <Clock className="w-8 h-8 text-green-500" />
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
      icon: <Award className="w-8 h-8 text-orange-500" />
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
      icon: <Award className="w-8 h-8 text-teal-500" />
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
      icon: <Award className="w-8 h-8 text-purple-500" />
    }
  ]

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Our Courses" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative container-max text-center" ref={heroRef}>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 fade-in-up ${heroVisible ? 'animate' : ''}`}>Our Courses</h1>
          <p className={`text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed fade-in-up ${heroVisible ? 'animate' : ''} stagger-1`}>
            Comprehensive healthcare education programs designed to prepare you 
            for a successful career in the medical field.
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
      <section className="bg-white section-padding" ref={coursesRef}>
        <div className="container-max">
          <div className={`text-center mb-16 fade-in-up ${coursesVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              Available Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of accredited programs, each designed with 
              industry-relevant curriculum and hands-on training.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCourses.map((course, index) => (
              <div key={index} className={`card group card-hover fade-in-up ${coursesVisible ? 'animate' : ''} ${index % 2 === 0 ? 'stagger-1' : 'stagger-2'}`}>
                <div className="overflow-hidden rounded-lg mb-6">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-primary-700">
                      {course.title}
                    </h3>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      {course.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-gray-600">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-gray-600">{course.seats} Seats</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary-700">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {course.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <button className="w-full btn-primary pulse-glow group-hover:bg-orange-600 transition-colors">
                      Apply Now
                      <ArrowRight className="inline ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="bg-gray-50 section-padding" ref={featuresRef}>
        <div className="container-max">
          <div className={`text-center mb-16 fade-in-up ${featuresVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              Why Choose Our Programs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our courses are designed with industry input and provide comprehensive 
              training for successful healthcare careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Updated Curriculum', description: 'Industry-aligned syllabus updated regularly to meet current healthcare standards', icon: <BookOpen className="w-8 h-8 text-orange-600" /> },
              { title: 'Expert Faculty', description: 'Learn from experienced healthcare professionals and qualified educators', icon: <Users className="w-8 h-8 text-orange-600" /> },
              { title: 'Practical Training', description: 'Extensive hands-on experience in hospitals and clinical settings', icon: <Clock className="w-8 h-8 text-orange-600" /> },
              { title: 'Placement Support', description: 'Dedicated placement cell ensuring job opportunities in top healthcare institutions', icon: <Award className="w-8 h-8 text-orange-600" /> }
            ].map((feature, index) => (
              <div key={index} className={`card text-center card-hover fade-in-up ${featuresVisible ? 'animate' : ''} stagger-${index + 1}`}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white section-padding" ref={admissionRef}>
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-4xl font-bold mb-6 fade-in-up ${admissionVisible ? 'animate' : ''}`}>
              Ready to Start Your Healthcare Journey?
            </h2>
            <p className={`text-xl mb-8 opacity-90 fade-in-up ${admissionVisible ? 'animate' : ''} stagger-1`}>
              Take the first step towards a rewarding career in healthcare. 
              Our admission process is simple and our counselors are here to help.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center fade-in-up ${admissionVisible ? 'animate' : ''} stagger-2`}>
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors pulse-glow">
                Apply Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses
