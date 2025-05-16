import React from 'react';
import { MessageSquare, Clock, Hotel, BarChart4, MessagesSquare, CheckCircle2 } from 'lucide-react';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-100 group hover:border-blue-100">
      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Instant Responses",
      description: "Our AI chatbot provides immediate responses to guest inquiries, ensuring no question goes unanswered."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Round-the-clock service means your guests get help whenever they need it, no matter the time zone."
    },
    {
      icon: <Hotel className="w-6 h-6" />,
      title: "Hospitality Expertise",
      description: "Trained specifically for hotels, Airbnbs, and hostels to handle industry-specific questions and requests."
    },
    {
      icon: <BarChart4 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Track common questions, peak inquiry times, and guest satisfaction to continuously improve your service."
    },
    {
      icon: <MessagesSquare className="w-6 h-6" />,
      title: "Multilingual Support",
      description: "Communicate with international guests in their preferred language, removing communication barriers."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Easy Integration",
      description: "Simple setup process that integrates seamlessly with your existing website and booking systems."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Powerful AI Chatbot for Hospitality
          </h2>
          <p className="text-lg text-slate-600">
            Lead Butler's intelligent chatbot handles the most common guest inquiries, freeing up your staff to focus on providing exceptional in-person experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;