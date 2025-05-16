import React from 'react';
import { CalendarCheck, MapPin, Utensils, CreditCard, Wifi, Clock } from 'lucide-react';

interface UseCaseProps {
  icon: React.ReactNode;
  title: string;
  questions: string[];
  iconBg: string;
}

const UseCaseCard: React.FC<UseCaseProps> = ({ icon, title, questions, iconBg }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 group">
      <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-3">{title}</h3>
      <ul className="space-y-2">
        {questions.map((question, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
            <span className="text-slate-600">{question}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: <CalendarCheck className="w-6 h-6 text-blue-600" />,
      title: "Booking & Reservations",
      questions: [
        "What is your check-in/check-out time?",
        "Do you have availability next weekend?",
        "Can I request an early check-in?",
        "How do I modify my reservation?"
      ],
      iconBg: "bg-blue-100"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Location & Directions",
      questions: [
        "What's the address of the property?",
        "How do I get to the hotel from the airport?",
        "Is parking available? How much does it cost?",
        "What attractions are nearby?"
      ],
      iconBg: "bg-red-100"
    },
    {
      icon: <Utensils className="w-6 h-6 text-amber-600" />,
      title: "Amenities & Services",
      questions: [
        "Do you have room service?",
        "Is breakfast included?",
        "Is there a gym or swimming pool?",
        "Do you offer laundry services?"
      ],
      iconBg: "bg-amber-100"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-green-600" />,
      title: "Payments & Policies",
      questions: [
        "What payment methods do you accept?",
        "What is your cancellation policy?",
        "Is there a security deposit?",
        "Are there any additional fees?"
      ],
      iconBg: "bg-green-100"
    },
    {
      icon: <Wifi className="w-6 h-6 text-purple-600" />,
      title: "Technology & Connectivity",
      questions: [
        "Is WiFi available? Is it free?",
        "What's the WiFi password?",
        "Are there smart TVs in the rooms?",
        "Do you have charging stations?"
      ],
      iconBg: "bg-purple-100"
    },
    {
      icon: <Clock className="w-6 h-6 text-teal-600" />,
      title: "Special Requests",
      questions: [
        "Can I request a late checkout?",
        "Do you accommodate dietary restrictions?",
        "Can you arrange airport transportation?",
        "Are pets allowed?"
      ],
      iconBg: "bg-teal-100"
    }
  ];

  return (
    <section id="use-cases" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            Common Scenarios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Questions Our AI Can Answer
          </h2>
          <p className="text-lg text-slate-600">
            Lead Butler's AI chatbot is trained to handle these common categories of inquiries, freeing up your staff from repetitive questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard 
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              questions={useCase.questions}
              iconBg={useCase.iconBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;