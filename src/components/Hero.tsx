import React from 'react';
import { MessageCircle, Clock, Hotel, Home } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
              AI-Powered Guest Communication
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Your 24/7 Virtual <span className="text-blue-600">Concierge</span> Service
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Lead Butler's AI chatbot answers 95% of all guest inquiries for hotels, Airbnbs, and hostels, saving time and improving satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
                Schedule a Demo
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:border-blue-300 hover:bg-slate-50 transition-all">
                Explore Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-teal-100 rounded-full opacity-70 blur-xl"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl z-10 transform transition-all">
                <img 
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Hotel reception with digital chatbot assistant" 
                  className="w-full h-auto rounded-lg mb-6"
                />
                <div className="flex justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-slate-800">Response Rate</p>
                      <p className="text-lg font-bold text-blue-600">95%</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-slate-800">Availability</p>
                      <p className="text-lg font-bold text-teal-600">24/7</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <Hotel className="w-3 h-3 mr-1" /> Hotels
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                    <Home className="w-3 h-3 mr-1" /> Airbnbs
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                    <Home className="w-3 h-3 mr-1" /> Hostels
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;