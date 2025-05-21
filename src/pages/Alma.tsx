import React, { useEffect } from 'react';
import { Hotel, MessageSquare, Star, ArrowDownRight } from 'lucide-react';

const Alma: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '682d0c342337d92db5a710f8');
    script.async = true;
    
    document.body.appendChild(script);
    
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
              Alma Historica Hotel Demo
            </h1>
            <p className="text-lg text-slate-600">
              Experience how Lead Butler could enhance guest communication at Alma Historica Hotel
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <img 
              src="https://storage.googleapis.com/msgsndr/f3n00M2vZx6xlPD7wdA2/media/682d0bf9e10a08016bd418ee.png"
              alt="Alma Historica Hotel luxury view" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Hotel className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-slate-800">About Alma Historica</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Alma Historica Hotel is a boutique luxury hotel located in the heart of Montevideo's historic Ciudad Vieja. Housed in a beautifully restored 1920s building, the hotel combines historic charm with modern luxury, offering personalized service and an authentic Uruguayan experience to discerning travelers.
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
              Our AI chatbot is ready to assist you! Look for the chat icon in the bottom right corner of this page to start a conversation and experience the future of hotel guest communication firsthand.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 space-y-4">
              <p className="text-blue-800">
                <strong>👋 Test the Chatbot:</strong> Ask about room amenities, local attractions, dining options, or any other questions you might have about Alma Historica Hotel.
              </p>
              <div className="border-t border-blue-100 pt-4">
                <p className="text-blue-800 font-medium mb-2">Our AI responds across multiple channels:</p>
                <ul className="grid grid-cols-2 gap-2 text-blue-700">
                  <li>✉️ Email</li>
                  <li>📱 Text Messages</li>
                  <li>💬 WhatsApp</li>
                  <li>📸 Instagram DMs</li>
                  <li>👥 Facebook Messages</li>
                  <li>💻 Website Chat</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Schedule a Demo</h3>
            <p className="text-slate-600 mb-8">
              Want to learn more about how Lead Butler can transform your guest communication? Schedule a personalized demo with our team.
            </p>
            <a
              href="https://api.leadconnectorhq.com/widget/booking/ToOQ56DV5zVWOtXiotmd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Schedule Your Demo Now
            </a>
          </div>
        </div>
      </div>

      {/* Floating chat indicator */}
      <div className="fixed bottom-28 right-8 bg-blue-600 text-white p-4 rounded-lg shadow-lg animate-bounce">
        <div className="flex items-center gap-2">
          <span className="font-medium">Click here to try the chatbot!</span>
          <ArrowDownRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Alma;