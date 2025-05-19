import React from 'react';
import { Check, MessageSquare, Globe, Phone, Cog } from 'lucide-react';

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features,
  icon: Icon,
  recommended = false 
}: { 
  name: string;
  price: number;
  description: string;
  features: string[];
  icon: React.ElementType;
  recommended?: boolean;
}) => (
  <div className={`bg-white rounded-xl p-8 border ${recommended ? 'border-blue-200 shadow-lg' : 'border-slate-100 shadow-md'}`}>
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-2xl font-bold text-slate-800">{name}</h3>
      <div className={`p-2 rounded-lg ${recommended ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600'}`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
    <div className="mb-6">
      <div className="flex items-baseline">
        <span className="text-4xl font-bold text-slate-800">${price}</span>
        <span className="text-slate-600 ml-2">/month/seat</span>
      </div>
    </div>
    <p className="text-slate-600 mb-6">{description}</p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
          <span className="text-slate-600">{feature}</span>
        </li>
      ))}
    </ul>
    <a
      href="#contact"
      className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-colors ${
        recommended 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
      }`}
    >
      Get Started
    </a>
  </div>
);

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: 49,
      description: "Perfect for small properties getting started with AI communication",
      features: [
        "24/7 AI guest messaging",
        "All languages supported",
        "Website chat integration"
      ],
      icon: MessageSquare
    },
    {
      name: "Pro",
      price: 99,
      description: "Enhanced features for growing properties",
      features: [
        "All Starter features",
        "Facebook Messenger integration",
        "Instagram DM integration",
        "WhatsApp integration",
        "Advanced analytics"
      ],
      icon: Globe,
      recommended: true
    },
    {
      name: "Premium",
      price: 199,
      description: "Complete solution for enterprise properties",
      features: [
        "All Pro features",
        "Custom PMS/CRM integrations",
        "Mobile app access",
        "Priority support"
      ],
      icon: Cog
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-lg text-slate-600">
            Select the perfect plan for your property's needs. All plans include our core AI technology and 24/7 support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PricingTier key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;