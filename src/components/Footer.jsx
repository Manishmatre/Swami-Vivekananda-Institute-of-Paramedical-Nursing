import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Footer = () => {
  const [footerRef, footerVisible] = useScrollAnimation(0.2)
  
  return (
    <footer className="bg-primary-800 text-white" ref={footerRef}>
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div className={`space-y-4 fade-in-up ${footerVisible ? 'animate' : ''} stagger-1`}>
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/Swami_Vivekananda_Institute-logo.png" 
                alt="Swami Vivekananda Institute Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">Swami Vivekananda Institute</h3>
                <p className="text-sm text-gray-300">of Paramedical & Nursing</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Shaping future healthcare professionals with excellence and compassion. 
              Inspired by Swami Vivekananda's vision of education and service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors hover:scale-110 transform duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors hover:scale-110 transform duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors hover:scale-110 transform duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors hover:scale-110 transform duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`fade-in-up ${footerVisible ? 'animate' : ''} stagger-2`}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className={`fade-in-up ${footerVisible ? 'animate' : ''}`} style={{animationDelay: '0.1s'}}><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-all text-sm hover:translate-x-2 transform duration-300 hover:font-medium">About Us</Link></li>
              <li className={`fade-in-up ${footerVisible ? 'animate' : ''}`} style={{animationDelay: '0.2s'}}><Link to="/courses" className="text-gray-300 hover:text-orange-500 transition-all text-sm hover:translate-x-2 transform duration-300 hover:font-medium">Our Courses</Link></li>
              <li className={`fade-in-up ${footerVisible ? 'animate' : ''}`} style={{animationDelay: '0.3s'}}><Link to="/admissions" className="text-gray-300 hover:text-orange-500 transition-all text-sm hover:translate-x-2 transform duration-300 hover:font-medium">Admissions</Link></li>
              <li className={`fade-in-up ${footerVisible ? 'animate' : ''}`} style={{animationDelay: '0.4s'}}><Link to="/faculty" className="text-gray-300 hover:text-orange-500 transition-all text-sm hover:translate-x-2 transform duration-300 hover:font-medium">Faculty</Link></li>
              <li className={`fade-in-up ${footerVisible ? 'animate' : ''}`} style={{animationDelay: '0.5s'}}><Link to="/gallery" className="text-gray-300 hover:text-orange-500 transition-all text-sm hover:translate-x-2 transform duration-300 hover:font-medium">Gallery</Link></li>
              <li className={`fade-in-up ${footerVisible ? 'animate' : ''}`} style={{animationDelay: '0.6s'}}><Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-all text-sm hover:translate-x-2 transform duration-300 hover:font-medium">Contact Us</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div className={`fade-in-up ${footerVisible ? 'animate' : ''} stagger-3`}>
            <h3 className="text-lg font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              <li className={`fade-in-up ${footerVisible ? 'animate' : ''}`} style={{animationDelay: '0.1s'}}><span className="text-gray-300 text-sm hover:text-orange-400 transition-all cursor-default hover:translate-x-1 transform duration-300">DMLT</span></li>
              <li className={`fade-in-up ${footerVisible ? 'animate' : ''}`} style={{animationDelay: '0.2s'}}><span className="text-gray-300 text-sm hover:text-orange-400 transition-all cursor-default hover:translate-x-1 transform duration-300">BMLT</span></li>
              <li className={`fade-in-up ${footerVisible ? 'animate' : ''}`} style={{animationDelay: '0.3s'}}><span className="text-gray-300 text-sm hover:text-orange-400 transition-all cursor-default hover:translate-x-1 transform duration-300">DPT & BPT</span></li>
              <li className={`fade-in-up ${footerVisible ? 'animate' : ''}`} style={{animationDelay: '0.4s'}}><span className="text-gray-300 text-sm hover:text-orange-400 transition-all cursor-default hover:translate-x-1 transform duration-300">BCA & BBA</span></li>
              <li className={`fade-in-up ${footerVisible ? 'animate' : ''}`} style={{animationDelay: '0.5s'}}><span className="text-gray-300 text-sm hover:text-orange-400 transition-all cursor-default hover:translate-x-1 transform duration-300">ANM Nursing</span></li>
              <li className={`fade-in-up ${footerVisible ? 'animate' : ''}`} style={{animationDelay: '0.6s'}}><span className="text-gray-300 text-sm hover:text-orange-400 transition-all cursor-default hover:translate-x-1 transform duration-300">B.Pharm & D.Pharm</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`fade-in-up ${footerVisible ? 'animate' : ''} stagger-4`}>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className={`flex items-start space-x-3 fade-in-up ${footerVisible ? 'animate' : ''}`} style={{animationDelay: '0.1s'}}>
                <MapPin size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Bakhrabad Sabuj Pally,<br />
                  Paschim Medinipur,<br />
                  West Bengal
                </p>
              </div>
              <div className={`flex items-center space-x-3 fade-in-up ${footerVisible ? 'animate' : ''}`} style={{animationDelay: '0.2s'}}>
                <Phone size={16} className="text-orange-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm hover:text-orange-400 transition-colors cursor-pointer">+91 79082 38939 / 99339 70075</p>
              </div>
              <div className={`flex items-center space-x-3 fade-in-up ${footerVisible ? 'animate' : ''}`} style={{animationDelay: '0.3s'}}>
                <Mail size={16} className="text-orange-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm hover:text-orange-400 transition-colors cursor-pointer">suvankarchanda85@gmail.com</p>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <div className="mt-4">
              <a 
                href="https://wa.me/917908238939" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors pulse-glow hover:scale-105 transform duration-200"
              >
                <span>💬</span>
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-primary-700 mt-8 pt-8 fade-in-up ${footerVisible ? 'animate' : ''} stagger-5`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © 2024 Swami Vivekananda Institute of Paramedical & Nursing. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm flex items-center">
              Made with <Heart size={16} className="text-red-500 mx-1 animate-pulse" /> by 
              <a 
                href="https://arionextech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 text-orange-400 hover:text-orange-300 font-medium transition-colors hover:underline"
              >
                ArionexTech Software
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
