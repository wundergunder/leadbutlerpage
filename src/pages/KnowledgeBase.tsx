import React from 'react';
import { Book, Search, ChevronRight } from 'lucide-react';

const CategoryCard = ({ title, topics }: { title: string; topics: string[] }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 p-6">
    <h3 className="text-xl font-semibold text-slate-800 mb-4">{title}</h3>
    <ul className="space-y-2">
      {topics.map((topic, index) => (
        <li key={index}>
          <a href="#" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors">
            <ChevronRight className="w-4 h-4 mr-2" />
            {topic}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const KnowledgeBase: React.FC = () => {
  const categories = [
    {
      title: "Getting Started",
      topics: [
        "Quick Start Guide",
        "Installation Process",
        "Basic Configuration",
        "Integration with Your Website"
      ]
    },
    {
      title: "Features & Customization",
      topics: [
        "Chatbot Customization",
        "Response Templates",
        "Multilingual Support",
        "Analytics Dashboard"
      ]
    },
    {
      title: "Technical Support",
      topics: [
        "Troubleshooting Guide",
        "API Documentation",
        "System Requirements",
        "Performance Optimization"
      ]
    },
    {
      title: "Best Practices",
      topics: [
        "Guest Communication Tips",
        "Response Management",
        "Data Security",
        "Compliance Guidelines"
      ]
    },
    {
      title: "Integrations",
      topics: [
        "Booking Systems",
        "CRM Integration",
        "Payment Gateways",
        "Channel Managers"
      ]
    },
    {
      title: "Updates & Maintenance",
      topics: [
        "Release Notes",
        "Maintenance Schedule",
        "Backup Procedures",
        "Version History"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center mb-8">
          <Book className="w-6 h-6 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-slate-800">Knowledge Base</h1>
        </div>
        
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search the knowledge base..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;