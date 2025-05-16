import React from 'react';
import { Facebook, Instagram, Linkedin, MessageSquare, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8 pb-8 border-b border-slate-700">
          <div className="md:w-1/3">
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-3 font-semibold text-xl">Lead Butler</span>
            </div>
            <p className="text-slate-300 mb-6">
              AI-powered guest communication for hotels, Airbnbs, and hostels. Answer 95% of inquiries automatically.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/LeadButlerTeam" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                {['AI Chatbot', 'Guest Communication', 'Analytics Dashboard', 'Multilingual Support'].map((item) => (
                  <li key={item}>
                    <a href="#services" className="text-slate-300 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                {['Case Studies', 'Affiliate', 'FAQs'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                      onClick={() => window.location.hash = item.toLowerCase().replace(/\s+/g, '-')}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#privacy" 
                    onClick={() => window.location.hash = 'privacy'}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="#terms" 
                    onClick={() => window.location.hash = 'terms'}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lead Butler LLC. All rights reserved.
          </p>
          <div className="flex items-center">
            <span className="text-slate-400 mr-2">Powered by</span>
            <div className="flex items-center text-blue-500">
              <MessageSquare className="w-4 h-4 mr-1" />
              <span>Lead Butler AI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;