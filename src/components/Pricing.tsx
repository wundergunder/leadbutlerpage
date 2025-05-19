import React, { useState } from 'react';
import { Check, Calculator } from 'lucide-react';

const Pricing: React.FC = () => {
  const [roomCount, setRoomCount] = useState(1);
  const pricePerRoom = 9;
  const totalPrice = roomCount * pricePerRoom;

  const features = [
    "24/7 AI-powered guest communication",
    "Multi-language support",
    "Custom response templates",
    "Analytics dashboard",
    "Booking system integration",
    "Email & chat support",
    "Regular AI model updates",
    "99.9% uptime guarantee"
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Transparent Per-Room Pricing
          </h2>
          <p className="text-lg text-slate-600">
            Scale your guest communication efficiently with our straightforward pricing model.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-800">Calculate Your Price</h3>
                <Calculator className="w-6 h-6 text-blue-600" />
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Number of Rooms
                </label>
                <input
                  type="number"
                  min="1"
                  value={roomCount}
                  onChange={(e) => setRoomCount(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="bg-slate-50 p-6 rounded-lg mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-600">Price per room</span>
                  <span className="font-semibold text-slate-800">${pricePerRoom}/month</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                  <span className="text-lg font-semibold text-slate-800">Total Price</span>
                  <span className="text-2xl font-bold text-blue-600">${totalPrice}/month</span>
                </div>
              </div>

              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Everything You Need</h3>
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;