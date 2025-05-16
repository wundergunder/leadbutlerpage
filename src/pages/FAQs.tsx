import React, { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQAccordion: React.FC<{ faq: FAQItem; isOpen: boolean; toggle: () => void }> = ({ faq, isOpen, toggle }) => (
  <div className="border-b border-slate-200 py-4">
    <button
      className="flex justify-between items-center w-full text-left"
      onClick={toggle}
    >
      <span className="text-lg font-medium text-slate-800">{faq.question}</span>
      {isOpen ? (
        <Minus className="w-5 h-5 text-blue-600" />
      ) : (
        <Plus className="w-5 h-5 text-blue-600" />
      )}
    </button>
    {isOpen && (
      <div className="mt-4 text-slate-600">
        {faq.answer}
      </div>
    )}
  </div>
);

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs: FAQItem[] = [
    {
      category: "General",
      question: "What is Lead Butler?",
      answer: "Lead Butler is an AI-powered chatbot specifically designed for the hospitality industry. It helps hotels, Airbnbs, and hostels automate guest communication by answering common inquiries 24/7, handling up to 95% of guest questions automatically."
    },
    {
      category: "General",
      question: "How accurate is the AI chatbot?",
      answer: "Our AI chatbot achieves a 95% accuracy rate in answering common guest inquiries. It's trained specifically for the hospitality industry and continuously learns from interactions to improve its responses."
    },
    {
      category: "Technical",
      question: "How long does it take to set up?",
      answer: "The basic setup can be completed in less than 30 minutes. Our team will help you customize the chatbot with your specific property information and integrate it with your existing systems."
    },
    {
      category: "Technical",
      question: "Can I customize the chatbot's responses?",
      answer: "Yes, you can fully customize the chatbot's responses to match your brand voice and specific property details. You can also set up custom workflows and response templates."
    },
    {
      category: "Features",
      question: "What languages does it support?",
      answer: "Lead Butler supports multiple languages including English, Spanish, French, German, Italian, Chinese, Japanese, and more. The AI can automatically detect and respond in the guest's preferred language."
    },
    {
      category: "Features",
      question: "Can it integrate with my booking system?",
      answer: "Yes, Lead Butler can integrate with most popular booking systems and property management software. This allows it to access real-time availability and booking information."
    },
    {
      category: "Pricing",
      question: "How is the service priced?",
      answer: "We offer flexible pricing plans based on your property size and needs. Contact us for a customized quote and to schedule a demo of our services."
    },
    {
      category: "Support",
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 technical support, regular updates, and ongoing training. Our team is always available to help you optimize the chatbot's performance and address any concerns."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center mb-8">
          <HelpCircle className="w-6 h-6 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-slate-800">Frequently Asked Questions</h1>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQAccordion
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;