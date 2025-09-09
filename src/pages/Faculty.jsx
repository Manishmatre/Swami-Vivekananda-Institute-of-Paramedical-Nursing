import React from 'react'
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Users, 
  Building2, 
  Microscope, 
  Stethoscope, 
  Wifi, 
  Car, 
  Home,
  Shield,
  Coffee,
  Monitor,
  Heart,
  Mail,
  Phone,
  Star
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Faculty = () => {
  const [heroRef, heroVisible] = useScrollAnimation(0.2)
  const [facultyRef, facultyVisible] = useScrollAnimation(0.2)
  const [facilitiesRef, facilitiesVisible] = useScrollAnimation(0.3)
  const [achievementsRef, achievementsVisible] = useScrollAnimation(0.2)
  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Principal & Director",
      qualification: "MD, Ph.D in Medical Education",
      experience: "25+ years",
      specialization: "Medical Administration & Healthcare Management",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Prof. Sunita Sharma",
      position: "Head of Nursing Department",
      qualification: "M.Sc Nursing, Ph.D",
      experience: "20+ years",
      specialization: "Community Health Nursing & Research",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Amit Patel",
      position: "Professor of Anatomy",
      qualification: "MBBS, MD Anatomy",
      experience: "18+ years",
      specialization: "Human Anatomy & Physiology",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Mrs. Priya Gupta",
      position: "Senior Nursing Instructor",
      qualification: "M.Sc Nursing",
      experience: "15+ years",
      specialization: "Medical-Surgical Nursing",
      image: "https://images.unsplash.com/photo-1594824475317-87ebc9c5c5e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Kavita Singh",
      position: "Professor of Pathology",
      qualification: "MBBS, MD Pathology",
      experience: "22+ years",
      specialization: "Clinical Pathology & Laboratory Medicine",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Mr. Rohit Verma",
      position: "Lab Technology Instructor",
      qualification: "M.Sc Medical Technology",
      experience: "12+ years",
      specialization: "Medical Laboratory Technology",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ]

  const facilities = [
    {
      title: "Modern Laboratories",
      description: "State-of-the-art labs equipped with latest medical equipment and technology",
      features: ["Anatomy Lab", "Physiology Lab", "Pathology Lab", "Microbiology Lab", "Biochemistry Lab"],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <Microscope className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Clinical Training Centers",
      description: "Simulation labs and clinical training areas for hands-on practice",
      features: ["Nursing Skills Lab", "Operation Theatre Simulation", "ICU Training Unit", "Emergency Care Setup"],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <Stethoscope className="w-8 h-8 text-red-500" />
    },
    {
      title: "Digital Learning Center",
      description: "Advanced computer labs and digital learning resources",
      features: ["Computer Lab", "Digital Library", "E-Learning Platform", "High-Speed Internet"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <Monitor className="w-8 h-8 text-green-500" />
    },
    {
      title: "Library & Resources",
      description: "Comprehensive library with medical books, journals, and research materials",
      features: ["10,000+ Medical Books", "International Journals", "Digital Resources", "Study Areas"],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <BookOpen className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Student Hostels",
      description: "Comfortable accommodation facilities for outstation students",
      features: ["Separate Boys & Girls Hostels", "24/7 Security", "Mess Facilities", "Wi-Fi Enabled"],
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <Home className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Campus Infrastructure",
      description: "Modern campus with all necessary amenities and facilities",
      features: ["Spacious Classrooms", "Auditorium", "Cafeteria", "Sports Facilities", "Parking Area"],
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: <Building2 className="w-8 h-8 text-teal-500" />
    }
  ]

  const hospitalPartners = [
    "City General Hospital",
    "Apollo Healthcare",
    "Fortis Medical Center",
    "Max Super Specialty Hospital",
    "AIIMS Regional Center",
    "Government Medical College Hospital",
    "Manipal Hospital",
    "Columbia Asia Hospital"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Faculty and Facilities" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative container-max text-center" ref={heroRef}>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 fade-in-up ${heroVisible ? 'animate' : ''}`}>Faculty & Facilities</h1>
          <p className={`text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed fade-in-up ${heroVisible ? 'animate' : ''} stagger-1`}>
            Learn from experienced professionals in world-class facilities designed 
            for excellence in healthcare education.
          </p>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="bg-white section-padding" ref={facultyRef}>
        <div className="container-max">
          <div className={`text-center mb-16 fade-in-up ${facultyVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              Our Esteemed Faculty
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our dedicated team of experienced educators and healthcare professionals 
              committed to shaping the next generation of medical experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <div key={index} className={`card group card-hover fade-in-up ${facultyVisible ? 'animate' : ''} stagger-${(index % 3) + 1}`}>
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary-700">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-semibold">
                    {member.position}
                  </p>
                  <p className="text-gray-600">
                    {member.qualification}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{member.experience}</span>
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    <strong>Specialization:</strong> {member.specialization}
                  </p>
                  
                  <div className="flex space-x-3 pt-4">
                    <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      <Mail className="inline w-4 h-4 mr-1" />
                      Contact
                    </button>
                    <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      <BookOpen className="inline w-4 h-4 mr-1" />
                      Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-gray-50 section-padding" ref={facilitiesRef}>
        <div className="container-max">
          <div className={`text-center mb-16 fade-in-up ${facilitiesVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-primary-700 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art infrastructure provides the perfect environment 
              for learning and practical training in healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className={`card card-hover fade-in-up ${facilitiesVisible ? 'animate' : ''} stagger-${(index % 2) + 1}`}>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      {facility.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary-700 mb-2">{facility.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-primary-700 mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {facility.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Partners */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className={`text-center mb-12 fade-in-up ${achievementsVisible ? 'animate' : ''}`}>
            <h2 className="text-3xl font-bold text-primary-700 mb-4">Hospital Training Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our students gain practical experience through partnerships with leading hospitals and healthcare institutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hospitalPartners.map((hospital, index) => (
              <div key={index} className={`bg-gray-50 p-4 rounded-lg text-center hover:bg-primary-50 transition-colors card-hover fade-in-up ${achievementsVisible ? 'animate' : ''} stagger-${(index % 4) + 1}`}>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">{hospital}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Amenities */}
      <section className="bg-primary-700 text-white section-padding">
        <div className="container-max">
          <div className={`text-center mb-12 fade-in-up ${achievementsVisible ? 'animate' : ''}`}>
            <h2 className="text-3xl font-bold mb-4">Campus Amenities</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Everything you need for a comfortable and productive learning experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wifi className="w-8 h-8" />
              </div>
              <p className="text-sm">High-Speed Wi-Fi</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Car className="w-8 h-8" />
              </div>
              <p className="text-sm">Parking Facility</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Coffee className="w-8 h-8" />
              </div>
              <p className="text-sm">Cafeteria</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8" />
              </div>
              <p className="text-sm">24/7 Security</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8" />
              </div>
              <p className="text-sm">Sports Complex</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-8 h-8" />
              </div>
              <p className="text-sm">Study Halls</p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="bg-orange-500 text-white section-padding">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Experience Our Campus</h2>
            <p className="text-xl mb-8 opacity-90">
              Take a virtual tour of our facilities or schedule a visit to see our 
              world-class infrastructure and meet our faculty in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                Virtual Campus Tour
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold transition-all">
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faculty
