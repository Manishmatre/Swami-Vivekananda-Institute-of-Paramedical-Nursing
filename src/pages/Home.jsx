import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, 
  Award, 
  Building2, 
  TrendingUp, 
  Stethoscope, 
  GraduationCap, 
  Heart, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'

const Home = () => {
  const highlights = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Experienced Faculty",
      description: "Learn from industry experts and qualified medical professionals"
    },
    {
      icon: <Building2 className="w-8 h-8 text-orange-500" />,
      title: "Modern Labs",
      description: "State-of-the-art laboratories with latest medical equipment"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-orange-500" />,
      title: "Hospital Training",
      description: "Hands-on clinical experience in top-tier healthcare facilities"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: "100% Placement Assistance",
      description: "Guaranteed job placement support with leading healthcare institutions"
    }
  ]

  const stats = [
    { number: "500+", label: "Students Graduated" },
    { number: "15+", label: "Years of Excellence" },
    { number: "50+", label: "Hospital Partners" },
    { number: "95%", label: "Placement Rate" }
  ]

  const courses = [
    {
      title: "B.Sc Nursing",
      duration: "4 Years",
      description: "Comprehensive nursing program with clinical training",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "GNM (General Nursing)",
      duration: "3.5 Years",
      description: "Diploma in General Nursing and Midwifery",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Medical Lab Technology",
      duration: "2 Years",
      description: "Advanced laboratory techniques and diagnostics",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-transparent"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Nursing students" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Shaping Future
                  <span className="block text-gradient bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                    Healthcare Professionals
                  </span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                  With Excellence and Compassion. Join India's premier institute for 
                  paramedical and nursing education, inspired by Swami Vivekananda's vision.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/admissions" className="btn-secondary text-center">
                  Apply Now
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </Link>
                <Link to="/courses" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-6 py-3 rounded-lg font-medium transition-all duration-200 text-center">
                  Explore Courses
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">AICTE Approved</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Government Recognized</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block animate-slide-up">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Medical students" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white text-primary-700 p-6 rounded-xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <Star className="w-8 h-8 text-orange-500" />
                    <div>
                      <div className="text-2xl font-bold">4.9/5</div>
                      <div className="text-sm text-gray-600">Student Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide world-class education with a perfect blend of theoretical knowledge 
              and practical experience in healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="card text-center hover:transform hover:scale-105 transition-all duration-300 animate-slide-up">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-700 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of paramedical and nursing programs 
              designed to prepare you for a successful healthcare career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="card group hover:transform hover:scale-105 transition-all duration-300">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-primary-700">
                      {course.title}
                    </h3>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      {course.duration}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {course.description}
                  </p>
                  <Link 
                    to="/courses" 
                    className="inline-flex items-center text-primary-600 hover:text-orange-500 font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses" className="btn-primary">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Vivekananda Quote Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Heart className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8">
              "Education is the manifestation of the perfection already in man. 
              We want that education by which character is formed, strength of mind is increased, 
              the intellect is expanded, and by which one can stand on one's own feet."
            </blockquote>
            <cite className="text-orange-300 text-lg font-medium">
              - Swami Vivekananda
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 text-white section-padding">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Healthcare Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful healthcare professionals who started their journey with us. 
              Apply now and take the first step towards a rewarding career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                Apply for Admission
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold transition-all">
                Get More Info
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
