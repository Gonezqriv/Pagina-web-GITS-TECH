import React from 'react';
import { Monitor, Phone, Mail, Instagram } from 'lucide-react';

const Footer = ({ content, contactInfo }) => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">{content.footer.company}</span>
            </div>
            <p className="text-gray-400">
              {content.footer.tagline}
            </p>
            <p className="text-sm text-gray-500">
              Providing innovative IT solutions for modern businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Home
              </a>
              <a href="#services" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Services
              </a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">@{contactInfo.instagram}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {content.footer.company}. {content.footer.rights}
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <button 
              className="text-gray-400 hover:text-white transition-colors duration-200"
              onClick={() => window.open(`tel:${contactInfo.phone}`, '_self')}
            >
              <Phone className="w-5 h-5" />
            </button>
            <button 
              className="text-gray-400 hover:text-white transition-colors duration-200"
              onClick={() => window.open(`mailto:${contactInfo.email}`, '_self')}
            >
              <Mail className="w-5 h-5" />
            </button>
            <button 
              className="text-gray-400 hover:text-white transition-colors duration-200"
              onClick={() => window.open(`https://instagram.com/${contactInfo.instagram}`, '_blank')}
            >
              <Instagram className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;