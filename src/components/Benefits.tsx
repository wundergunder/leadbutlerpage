import React from 'react';
import { Clock, DollarSign, Smile, Shield, BarChart4, ArrowRight } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor: string;
  bgColor: string;
}

const BenefitItem: React.FC<BenefitProps> = ({ icon, title, description, iconColor, bgColor }) => {
  return (
    <div className="flex items-start">
      <div className={`flex-shrink-0 ${bgColor} ${iconColor} p-3 rounded-lg mr-4`}>
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Save Staff Time",
      description: "Free up your team from answering repetitive questions, allowing them to focus on high-value guest interactions.",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Reduce Operational Costs",
      description: "Lower staffing requirements for basic customer service and information requests.",
      iconColor: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Enhance Guest Satisfaction",
      description: "Provide instant answers to guest questions, any time of day or night, improving overall experience.",
      iconColor: "text-amber-600",
      bgColor: "bg-amber-100"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Consistent Information",
      description: "Ensure all guests receive the same accurate information about policies, amenities, and services.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: <BarChart4 className="w-6 h-6" />,
      title: "Data-Driven Insights",
      description: "Gain valuable intelligence about common questions and concerns to improve your offerings.",
      iconColor: "text-teal-600",
      bgColor: "bg-teal-100"
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
              Why Choose Lead Butler
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              The Benefits of AI-Powered Guest Communication
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our chatbot resolves 95% of all common guest inquiries without human intervention, delivering significant advantages to your hospitality business.
            </p>
            
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <BenefitItem 
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  iconColor={benefit.iconColor}
                  bgColor={benefit.bgColor}
                />
              ))}
            </div>
            
            <a href="#contact" className="inline-flex items-center font-medium text-blue-600 mt-8 group">
              Schedule a consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-100 rounded-full opacity-70 blur-xl"></div>
              <img 
                src="https://storage.googleapis.com/msgsndr/f3n00M2vZx6xlPD7wdA2/media/6827940680f93e4807ae89bf.jpeg" 
                alt="Professional customer service representative providing excellent support" 
                className="relative z-10 rounded-xl shadow-lg w-full h-auto object-cover"
              />
              
              <div className="absolute -bottom-8 right-8 bg-white py-4 px-6 rounded-lg shadow-lg z-20 max-w-xs">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-slate-700">Response Rate</p>
                  <span className="text-blue-600 font-bold">95%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <p className="text-sm text-slate-500 mt-2">Answer rate for common inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;