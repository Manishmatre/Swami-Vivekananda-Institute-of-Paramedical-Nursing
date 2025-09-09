import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Camera, Users, Building2, Award } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Photos', icon: <Camera className="w-5 h-5" /> },
    { id: 'campus', name: 'Campus', icon: <Building2 className="w-5 h-5" /> },
    { id: 'students', name: 'Student Life', icon: <Users className="w-5 h-5" /> },
    { id: 'events', name: 'Events', icon: <Award className="w-5 h-5" /> },
    { id: 'labs', name: 'Labs & Facilities', icon: <Camera className="w-5 h-5" /> }
  ]

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "students",
      title: "Nursing Students in Clinical Training",
      description: "Our nursing students practicing clinical skills in our state-of-the-art simulation lab"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "students",
      title: "Hands-on Learning Experience",
      description: "Students gaining practical experience with modern medical equipment"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "labs",
      title: "Advanced Laboratory Setup",
      description: "Our modern pathology laboratory equipped with latest diagnostic equipment"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "students",
      title: "Medical Students in Action",
      description: "Students participating in a medical procedure simulation"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "campus",
      title: "Modern Campus Building",
      description: "Our contemporary campus building with state-of-the-art facilities"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "students",
      title: "Physiotherapy Training Session",
      description: "Students learning physiotherapy techniques under expert supervision"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "labs",
      title: "Computer Laboratory",
      description: "Digital learning center with modern computers and high-speed internet"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "campus",
      title: "Medical Library",
      description: "Comprehensive library with extensive collection of medical books and journals"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "labs",
      title: "Clinical Skills Laboratory",
      description: "Advanced simulation lab for practicing clinical procedures"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "labs",
      title: "Pharmacy Laboratory",
      description: "Well-equipped pharmacy lab for pharmaceutical training"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "events",
      title: "Graduation Ceremony",
      description: "Annual graduation ceremony celebrating our successful graduates"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "campus",
      title: "Student Hostel Facilities",
      description: "Comfortable hostel accommodation for outstation students"
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "students",
      title: "Laboratory Training",
      description: "Students learning advanced laboratory techniques"
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "events",
      title: "Medical Conference",
      description: "Annual medical conference with industry experts"
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "events",
      title: "White Coat Ceremony",
      description: "Traditional white coat ceremony for new medical students"
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1594824475317-87ebc9c5c5e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "students",
      title: "Nursing Skills Practice",
      description: "Nursing students practicing patient care techniques"
    }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory)

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    let newIndex
    
    if (direction === 'next') {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    }
    
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Gallery" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Take a visual journey through our campus, facilities, and student life. 
            See what makes our institute a premier destination for healthcare education.
          </p>
        </div>
      </section>

      {/* Category Filter */}
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

      {/* Gallery Grid */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="bg-white p-4">
                  <h3 className="font-semibold text-primary-700 text-sm mb-1 line-clamp-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-xs line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-700 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="bg-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Campus in Numbers</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-200">Modern Classrooms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">15+</div>
              <div className="text-gray-200">Advanced Laboratories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">25+</div>
              <div className="text-gray-200">Hospital Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">1000+</div>
              <div className="text-gray-200">Happy Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="bg-orange-500 text-white section-padding">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Want to See More?</h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a campus visit or take our virtual tour to experience our 
              facilities firsthand and meet our faculty and students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                Schedule Campus Visit
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold transition-all">
                Virtual Campus Tour
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
