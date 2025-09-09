import React, { useState, useEffect } from 'react'
import { ArrowUp, MessageCircle, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const FloatingActions = () => {
  const [showGoToTop, setShowGoToTop] = useState(false)
  const [showSocial, setShowSocial] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setShowGoToTop(scrollTop > 300) // Show after scrolling 300px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toggleSocial = () => {
    setShowSocial(!showSocial)
  }

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={20} />,
      url: 'https://wa.me/919876543210',
      color: 'bg-green-500 hover:bg-green-600',
      delay: '0.1s'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={20} />,
      url: 'https://facebook.com/svipn',
      color: 'bg-blue-600 hover:bg-blue-700',
      delay: '0.2s'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      url: 'https://instagram.com/svipn',
      color: 'bg-pink-500 hover:bg-pink-600',
      delay: '0.3s'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/company/svipn',
      color: 'bg-blue-700 hover:bg-blue-800',
      delay: '0.4s'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      url: 'https://twitter.com/svipn',
      color: 'bg-blue-400 hover:bg-blue-500',
      delay: '0.5s'
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Social Media Links */}
      <div className={`flex flex-col space-y-2 transition-all duration-500 ${showSocial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 transform hover:shadow-xl`}
            style={{ 
              animationDelay: showSocial ? social.delay : '0s',
              animation: showSocial ? 'fadeInUp 0.5s ease-out forwards' : 'none'
            }}
            title={`Follow us on ${social.name}`}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Social Toggle Button */}
      <button
        onClick={toggleSocial}
        className={`bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 transform hover:shadow-xl ${showSocial ? 'rotate-45' : 'rotate-0'}`}
        title="Social Media Links"
      >
        <div className="relative w-5 h-5">
          <div className={`absolute inset-0 transition-opacity duration-300 ${showSocial ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-5 h-0.5 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-0.5 h-5 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className={`transition-opacity duration-300 ${showSocial ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full absolute bottom-0.5 left-0.5"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full absolute bottom-0.5 right-0.5"></div>
          </div>
        </div>
      </button>

      {/* Go to Top Button */}
      <button
        onClick={scrollToTop}
        className={`bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-500 hover:scale-110 transform hover:shadow-xl ${
          showGoToTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        title="Go to Top"
      >
        <ArrowUp size={20} className="animate-bounce" />
      </button>
    </div>
  )
}

export default FloatingActions
