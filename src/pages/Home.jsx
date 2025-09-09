import React, { useEffect } from 'react'
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
  Star,
  Quote,
  MapPin,
  Calendar,
  Trophy,
  BookOpen,
  Target
} from 'lucide-react'
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation'

const Home = () => {
  const [statsRef, statsVisible] = useScrollAnimation(0.3)
  const [highlightsRef, highlightsVisible] = useScrollAnimation(0.2)
  const [coursesRef, coursesVisible] = useScrollAnimation(0.2)
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation(0.2)
  const [achievementsRef, achievementsVisible] = useScrollAnimation(0.2)
  const [partnershipsRef, partnershipsVisible] = useScrollAnimation(0.2)
  const [quoteRef, quoteVisible] = useScrollAnimation(0.3)
  
  const [count1, startCount1] = useCountUp(1000, 2000)
  const [count2, startCount2] = useCountUp(15, 2000)
  const [count3, startCount3] = useCountUp(25, 2000)
  const [count4, startCount4] = useCountUp(90, 2000)
  
  const counters = [count1, count2, count3, count4]
  const startCounters = [startCount1, startCount2, startCount3, startCount4]
  
  useEffect(() => {
    if (statsVisible) {
      startCounters.forEach(start => start())
    }
  }, [statsVisible])
  const highlights = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Expert Faculty",
      description: "Learn from qualified professionals with extensive industry experience"
    },
    {
      icon: <Building2 className="w-8 h-8 text-orange-500" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art laboratories and facilities with latest equipment"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-orange-500" />,
      title: "Practical Training",
      description: "Hands-on clinical experience and industry internships"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: "Career Support",
      description: "Comprehensive placement assistance and career guidance"
    }
  ]

  const stats = [
    { number: 1000, label: "Students Enrolled", suffix: "+" },
    { number: 15, label: "Course Programs", suffix: "+" },
    { number: 25, label: "Expert Faculty", suffix: "+" },
    { number: 90, label: "Placement Rate", suffix: "%" }
  ]

  const courses = [
    {
      title: "DMLT & BMLT",
      duration: "2-3 Years",
      description: "Medical Laboratory Technology programs with advanced diagnostics training",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "DPT & BPT",
      duration: "2-4 Years",
      description: "Physiotherapy programs with rehabilitation and clinical training",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "BCA & BBA",
      duration: "3 Years",
      description: "Computer Applications and Business Administration programs",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "ANM Nursing",
      duration: "2 Years",
      description: "Auxiliary Nursing & Midwifery for community healthcare",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "B.Pharm & D.Pharm",
      duration: "2-4 Years",
      description: "Comprehensive pharmacy education and pharmaceutical sciences",
      image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "BAMS (Ayurvedic)",
      duration: "5.5 Years",
      description: "Bachelor of Ayurvedic Medicine & Surgery with traditional knowledge",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ]

  // Student Testimonials Data
  const testimonials = [
    {
      name: "Priya Sharma",
      course: "DMLT Graduate 2023",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The practical training at Swami Vivekananda Institute was exceptional. I'm now working as a Lab Technician at Apollo Hospital with excellent salary package.",
      position: "Lab Technician, Apollo Hospital"
    },
    {
      name: "Rahul Kumar",
      course: "BPT Graduate 2022",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The faculty support and modern infrastructure helped me excel in physiotherapy. Now I run my own clinic and treat 50+ patients daily.",
      position: "Physiotherapist & Clinic Owner"
    },
    {
      name: "Anita Das",
      course: "ANM Graduate 2023",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The nursing program prepared me well for real-world healthcare challenges. I'm proud to serve in community healthcare at government hospital.",
      position: "Staff Nurse, District Hospital"
    }
  ]

  // Achievements Data
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8 text-orange-500" />,
      title: "Best Institute Award 2023",
      description: "Recognized as the Best Paramedical Institute in West Bengal"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "100% Placement Record",
      description: "Consistent 100% placement rate for the last 3 years"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-orange-500" />,
      title: "AICTE Approved",
      description: "All programs approved by AICTE and Sikkim Skill University"
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "1000+ Alumni Success",
      description: "Over 1000 successful healthcare professionals graduated"
    }
  ]

  // Hospital Partners Data
  const hospitalPartners = [
    {
      name: "Apollo Hospital",
      type: "Multi-specialty Hospital",
      location: "Kolkata",
      opportunities: "Internship & Placement"
    },
    {
      name: "AMRI Hospital",
      type: "Super-specialty Hospital", 
      location: "Kolkata",
      opportunities: "Clinical Training"
    },
    {
      name: "District Hospital",
      type: "Government Hospital",
      location: "Paschim Medinipur",
      opportunities: "Community Health Training"
    },
    {
      name: "Medica Hospital",
      type: "Multi-specialty Hospital",
      location: "Kolkata", 
      opportunities: "Practical Training"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/src/assets/hero_image.jpeg" 
            alt="Swami Vivekananda Institute - Healthcare Education" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800/80 via-primary-700/60 to-primary-600/40"></div>

        <div className="relative container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 fade-in-left animate">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Shaping Future
                  <span className="block text-gradient bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                    Healthcare Professionals
                  </span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                  Affiliated to Sikkim Skill University & Recognised by AICVT. 
                  A premium class institute for Paramedical, Technical & Management Courses.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/admissions" className="btn-secondary text-center pulse-glow">
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
                  <span className="text-sm">Sikkim Skill University</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">AICVT Recognised</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block fade-in-right animate float-animation">
              <div className="relative">
                {/* Curved pattern background */}
                <div className="absolute -inset-8 bg-gradient-to-br from-orange-400/30 to-primary-600/30 rounded-[3rem] transform rotate-3"></div>
                <div className="absolute -inset-6 bg-gradient-to-tl from-primary-500/20 to-orange-300/20 rounded-[2.5rem] transform -rotate-2"></div>
                
                {/* Angular geometric shapes */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400/40 transform rotate-45 rounded-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-500/40 transform rotate-12 rounded-lg"></div>
                
                {/* Curved decorative circles */}
                <div className="absolute top-8 -left-4 w-12 h-12 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-70"></div>
                <div className="absolute bottom-12 -right-2 w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full opacity-80"></div>
                
                {/* Main image container with mixed borders */}
                <div className="relative bg-white/10 backdrop-blur-sm p-3 rounded-2xl border border-white/20">
                  <img 
                    src="/src/assets/hero-image.png" 
                    alt="Swami Vivekananda Institute Healthcare Education" 
                    className="rounded-xl shadow-2xl relative z-10"
                  />
                  
                  {/* Curved corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-4 border-t-4 border-orange-400 rounded-tl-xl"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-r-4 border-t-4 border-primary-500 rounded-tr-xl"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-l-4 border-b-4 border-primary-500 rounded-bl-xl"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-4 border-b-4 border-orange-400 rounded-br-xl"></div>
                </div>
                
                {/* Enhanced rating badge with angular design */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-white via-white to-gray-50 text-primary-700 p-6 rounded-xl shadow-xl border-l-4 border-orange-400">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Star className="w-8 h-8 text-orange-500" />
                      <div className="absolute -inset-1 bg-orange-400/20 rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">4.9/5</div>
                      <div className="text-sm text-gray-600">Student Rating</div>
                    </div>
                  </div>
                  {/* Angular accent on badge */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-orange-400 transform rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16" ref={statsRef}>
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center scale-in ${statsVisible ? 'animate' : ''} stagger-${index + 1}`}>
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-gray-50 section-padding" ref={highlightsRef}>
        <div className="container-max">
          <div className={`text-center mb-16 fade-in-up ${highlightsVisible ? 'animate' : ''}`}>
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
              <div key={index} className={`card text-center card-hover fade-in-up ${highlightsVisible ? 'animate' : ''} stagger-${index + 1}`}>
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
      <section className="bg-white section-padding" ref={coursesRef}>
        <div className="container-max">
          <div className={`text-center mb-16 fade-in-up ${coursesVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of paramedical, technical, and management programs 
              designed to prepare you for a successful career in healthcare and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className={`card group card-hover fade-in-up ${coursesVisible ? 'animate' : ''} stagger-${index + 1}`}>
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

          <div className={`text-center mt-12 fade-in-up ${coursesVisible ? 'animate' : ''} stagger-4`}>
            <Link to="/courses" className="btn-primary pulse-glow">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="bg-gray-50 section-padding" ref={testimonialsRef}>
        <div className="container-max">
          <div className={`text-center mb-16 fade-in-up ${testimonialsVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our successful graduates who are now making a difference in healthcare industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 shadow-lg card-hover fade-in-up ${testimonialsVisible ? 'animate' : ''} stagger-${index + 1}`}>
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-primary-700">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                    <div className="flex text-orange-400 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="w-8 h-8 text-orange-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic mb-4 pl-6">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-primary-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Accreditations Section */}
      <section className="bg-white section-padding" ref={achievementsRef}>
        <div className="container-max">
          <div className={`text-center mb-16 fade-in-up ${achievementsVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              Our Achievements & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proud milestones that reflect our commitment to excellence in healthcare education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className={`text-center card card-hover fade-in-up ${achievementsVisible ? 'animate' : ''} stagger-${index + 1}`}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-primary-700 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Partnerships Section */}
      <section className="bg-primary-50 section-padding" ref={partnershipsRef}>
        <div className="container-max">
          <div className={`text-center mb-16 fade-in-up ${partnershipsVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              Hospital Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic partnerships with leading hospitals for practical training and placement opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hospitalPartners.map((partner, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow card-hover fade-in-up ${partnershipsVisible ? 'animate' : ''} stagger-${index + 1}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <Building2 className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700">{partner.name}</h4>
                    <p className="text-xs text-gray-500">{partner.type}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                    {partner.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Target className="w-4 h-4 mr-2 text-orange-500" />
                    {partner.opportunities}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 fade-in-up ${partnershipsVisible ? 'animate' : ''} stagger-5`}>
            <p className="text-lg text-gray-600 mb-6">
              <strong>25+ Hospital Partners</strong> providing comprehensive training and placement opportunities
            </p>
            <Link to="/contact" className="btn-primary">
              Explore Partnership Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Vivekananda Quote Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white section-padding" ref={quoteRef}>
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto">
            <div className={`mb-8 scale-in ${quoteVisible ? 'animate' : ''}`}>
              <Heart className="w-16 h-16 text-orange-400 mx-auto mb-6 float-animation" />
            </div>
            <blockquote className={`text-2xl md:text-3xl font-light italic leading-relaxed mb-8 fade-in-up ${quoteVisible ? 'animate' : ''} stagger-1`}>
              "Education is the manifestation of the perfection already in man. 
              We want that education by which character is formed, strength of mind is increased, 
              the intellect is expanded, and by which one can stand on one's own feet."
            </blockquote>
            <cite className={`text-orange-300 text-lg font-medium fade-in-up ${quoteVisible ? 'animate' : ''} stagger-2`}>
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
