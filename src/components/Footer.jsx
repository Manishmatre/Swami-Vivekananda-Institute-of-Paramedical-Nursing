import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SV</span>
              </div>
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
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">Our Courses</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">Admissions</Link></li>
              <li><Link to="/faculty" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">Faculty</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300 text-sm">B.Sc Nursing</span></li>
              <li><span className="text-gray-300 text-sm">GNM (General Nursing)</span></li>
              <li><span className="text-gray-300 text-sm">ANM (Auxiliary Nursing)</span></li>
              <li><span className="text-gray-300 text-sm">Medical Lab Technology</span></li>
              <li><span className="text-gray-300 text-sm">Radiology Technology</span></li>
              <li><span className="text-gray-300 text-sm">Operation Theatre Technology</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  123 Healthcare Avenue,<br />
                  Medical District,<br />
                  City - 123456
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-orange-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-orange-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@svipn.edu.in</p>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <div className="mt-4">
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <span>💬</span>
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © 2024 Swami Vivekananda Institute of Paramedical & Nursing. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm flex items-center">
              Made with <Heart size={16} className="text-red-500 mx-1" /> for Healthcare Education
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
