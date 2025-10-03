import React from 'react'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  BookOpen, 
  Globe,
  Calendar,
  CheckCircle,
  Lightbulb,
  Building2,
  TrendingUp,
  Shield
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const [heroRef, heroVisible] = useScrollAnimation(0.2)
  const [valuesRef, valuesVisible] = useScrollAnimation(0.2)
  const [achievementsRef, achievementsVisible] = useScrollAnimation(0.3)
  const [visionRef, visionVisible] = useScrollAnimation(0.2)
  const milestones = [
    {
      year: "2025",
      title: "Foundation",
      description: "Established with a vision to provide quality healthcare education and modern facilities"
    },
    {
      year: "2025",
      title: "Infrastructure Development",
      description: "Built state-of-the-art laboratories, modern classrooms, and advanced simulation centers"
    },
    {
      year: "2025",
      title: "AICTE Application",
      description: "Applied for official recognition and approval from AICTE for all programs"
    },
    {
      year: "2025",
      title: "Hospital Partnerships",
      description: "Established partnerships with leading hospitals for clinical training"
    },
    {
      year: "2025",
      title: "Digital Learning Platform",
      description: "Integrated advanced digital learning platforms and e-library systems"
    },
    {
      year: "2025",
      title: "First Batch Admission",
      description: "Successfully launched with the first batch of dedicated healthcare students"
    }
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-orange-500" />,
      title: "Compassion",
      description: "We believe healthcare begins with genuine care and empathy for others"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "Excellence",
      description: "We strive for the highest standards in education and professional development"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-orange-500" />,
      title: "Knowledge",
      description: "We foster continuous learning and evidence-based practice"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Service",
      description: "We dedicate ourselves to serving humanity through healthcare"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      title: "Innovation",
      description: "We embrace new technologies and methodologies in healthcare education"
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our endeavors"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="About Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative container-max text-center" ref={heroRef}>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 fade-in-up ${heroVisible ? 'animate' : ''}`}>About Our Institute</h1>
          <p className={`text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed fade-in-up ${heroVisible ? 'animate' : ''} stagger-1`}>
A new beginning in healthcare education starting 2025, 
            inspired by Swami Vivekananda's vision of holistic education and modern learning.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-700">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide world-class education in paramedical and nursing sciences, 
                fostering excellence, compassion, and ethical practice in healthcare. 
                We are committed to developing skilled professionals who serve humanity 
                with dedication and integrity.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Provide quality healthcare education</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Foster compassionate healthcare professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Promote ethical medical practice</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary-700">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be recognized as the leading institute for paramedical and nursing education, 
                creating healthcare professionals who embody Swami Vivekananda's ideals of 
                service, strength, and spiritual growth while contributing to global health and wellness.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Leading healthcare education institute</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Global recognition for excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Contribute to worldwide health improvement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vivekananda Philosophy */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-6 fade-in-left ${heroVisible ? 'animate' : ''}`}>
              <h2 className="text-4xl font-bold text-primary-700 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2025 with a vision to create world-class healthcare professionals, 
                Swami Vivekananda Institute of Paramedical & Nursing represents a new era 
                of medical education excellence with modern facilities and innovative teaching methods.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Inspired by Swami Vivekananda's philosophy of "Education is the manifestation 
                of perfection already in man," we believe in nurturing not just skilled 
                professionals, but compassionate healers who serve humanity with dedication.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a newly established institute, we are committed to building a comprehensive 
                healthcare education hub that will produce skilled graduates who will serve 
                in leading hospitals and healthcare institutions across the country.
              </p>
            </div>
            <div className={`relative fade-in-right ${heroVisible ? 'animate' : ''} float-animation`}>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Our Institute" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">2025</div>
                  <div className="text-sm opacity-90">New Beginning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 section-padding" ref={valuesRef}>
        <div className="container-max">
          <div className={`text-center mb-16 fade-in-up ${valuesVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-primary-700 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the character 
              of our students and institution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`card text-center card-hover fade-in-up ${valuesVisible ? 'animate' : ''} stagger-${index + 1}`}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-700 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-700 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our humble beginnings to becoming a leading healthcare education institute, 
              here are the key milestones in our journey of excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div className="card">
                      <div className="flex items-center justify-center lg:justify-start space-x-3 mb-3">
                        <Calendar className="w-5 h-5 text-orange-500" />
                        <span className="text-2xl font-bold text-primary-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-primary-700 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>

                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white section-padding" ref={visionRef}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`fade-in-left ${visionVisible ? 'animate' : ''}`}>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-orange-400 float-animation" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed mb-8">
                To provide world-class healthcare education that combines academic excellence 
                with practical training, producing competent and compassionate healthcare 
                professionals who contribute to society's wellbeing.
              </p>
            </div>
            <div className={`fade-in-right ${visionVisible ? 'animate' : ''} stagger-1`}>
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-8 h-8 text-orange-400 float-animation" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed">
                To be recognized as the leading institution for paramedical and nursing 
                education in India, known for our innovative teaching methods, 
                state-of-the-art facilities, and graduates who excel in their careers 
                while serving humanity with dedication and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="bg-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Message from Leadership</h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                "At Swami Vivekananda Institute, we don't just educate; we transform lives. 
                Our commitment goes beyond imparting medical knowledge – we nurture compassionate 
                healers who will serve society with dedication and integrity."
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                "Every student who walks through our doors carries the potential to make a 
                significant difference in healthcare. Our role is to unlock that potential 
                and guide them towards excellence."
              </p>
              <div className="pt-4">
                <p className="font-semibold text-orange-300">Dr. Rajesh Kumar</p>
                <p className="text-gray-300">Principal & Director</p>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Principal" 
                className="w-80 h-80 object-cover rounded-full mx-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
