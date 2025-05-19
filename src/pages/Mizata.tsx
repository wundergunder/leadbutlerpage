import React, { useEffect } from 'react';
import { Hotel, MessageSquare, Star } from 'lucide-react';

const Mizata: React.FC = () => {
  useEffect(() => {
    // Create script element for chat widget
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '682b712749bd8268f5cd4212');
    script.async = true;
    
    // Append script to body
    document.body.appendChild(script);
    
    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              MIZATA BY ANTIRESORT Demo
            </h1>
            <p className="text-lg text-slate-600">
              Experience how Lead Butler could enhance guest communication at MIZATA BY ANTIRESORT
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <img 
              src="https://storage.googleapis.com/msgsndr/f3n00M2vZx6xlPD7wdA2/media/682b73e47d0ac009dcba4414.png"
              alt="Luxury resort view" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Hotel className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-slate-800">About MIZATA</h2>
              </div>
              <p className="text-slate-600 mb-6">
                MIZATA BY ANTIRESORT is a luxury eco-resort that redefines hospitality through sustainable practices and exceptional service. Our AI-powered chatbot ensures guests receive instant, accurate responses to their inquiries 24/7.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <MessageSquare className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium text-slate-800">Response to Guests</span>
                  </div>
                  <p className="text-slate-600">Under 10 seconds with 100% response rate</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Star className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium text-slate-800">Guest Satisfaction</span>
                  </div>
                  <p className="text-slate-600">95% positive feedback rate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Try Our AI Chatbot</h3>
            <p className="text-slate-600 mb-6">
              Interact with our AI chatbot below to experience the future of hotel guest communication.
            </p>
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-slate-500 text-center">The chat widget will appear in the bottom right corner</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Schedule a Demo</h3>
            <p className="text-slate-600 mb-6">
              Want to learn more about how Lead Butler can transform your guest communication? Schedule a personalized demo with our team.
            </p>
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/ToOQ56DV5zVWOtXiotmd" 
              style={{ width: '100%', border: 'none', overflow: 'hidden' }} 
              scrolling="no" 
              id="ToOQ56DV5zVWOtXiotmd_1747677948114"
            />
            <br />
            <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mizata;