import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Ready to Transform Your Guest Communication?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Schedule a demo to see how Lead Butler can help your hospitality business deliver exceptional service through AI-powered communication.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Schedule a Demo</h3>
                  <p className="text-slate-600">
                    Book a personalized demonstration to see Lead Butler in action with your specific use cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-md border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Book Your Demo</h3>
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/ToOQ56DV5zVWOtXiotmd" 
              style={{ width: '100%', border: 'none', overflow: 'hidden', height: '1200px' }} 
              scrolling="no" 
              id="ToOQ56DV5zVWOtXiotmd_1747438057150"
            />
            <br />
            <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;