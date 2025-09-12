import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Monitor, Cable, Server, Cloud, CheckCircle } from 'lucide-react';

const ServicesSection = ({ content }) => {
  const icons = [Monitor, Cable, Server, Cloud];

  return (
    <section id="services" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {content.services.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {content.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {content.services.items.map((service, index) => {
            const IconComponent = icons[index];
            const gradients = [
              'from-blue-500 to-cyan-500',
              'from-green-500 to-emerald-500', 
              'from-orange-500 to-red-500',
              'from-purple-500 to-pink-500'
            ];
            
            return (
              <Card 
                key={service.id} 
                className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <div>
                    <CardTitle className="text-white text-xl mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Badge variant="outline" className="border-blue-500/50 text-blue-400 px-4 py-2">
              Custom Solutions Available
            </Badge>
            <Badge variant="outline" className="border-green-500/50 text-green-400 px-4 py-2">
              24/7 Support Included
            </Badge>
            <Badge variant="outline" className="border-purple-500/50 text-purple-400 px-4 py-2">
              Enterprise Ready
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;