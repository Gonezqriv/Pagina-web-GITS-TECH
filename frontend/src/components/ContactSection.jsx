import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Phone, Mail, Instagram, ExternalLink } from 'lucide-react';

const ContactSection = ({ content, contactInfo }) => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {content.contact.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {content.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Phone */}
          <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{content.contact.phone}</h3>
              <p className="text-gray-400 mb-4">Call us directly</p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white"
                onClick={() => window.open(`tel:${contactInfo.phone}`, '_self')}
              >
                {contactInfo.phone}
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{content.contact.email}</h3>
              <p className="text-gray-400 mb-4">Send us a message</p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-green-600 hover:border-green-600 hover:text-white"
                onClick={() => window.open(`mailto:${contactInfo.email}`, '_self')}
              >
                {contactInfo.email}
              </Button>
            </CardContent>
          </Card>

          {/* Instagram */}
          <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{content.contact.social}</h3>
              <p className="text-gray-400 mb-4">Follow our updates</p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white"
                onClick={() => window.open(`https://instagram.com/${contactInfo.instagram}`, '_blank')}
              >
                @{contactInfo.instagram}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's discuss how we can help transform your IT infrastructure with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg transition-all duration-300"
                onClick={() => window.open(`tel:${contactInfo.phone}`, '_self')}
              >
                Call Now
                <Phone className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-lg transition-all duration-300"
                onClick={() => window.open(`mailto:${contactInfo.email}`, '_self')}
              >
                Send Email
                <Mail className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;