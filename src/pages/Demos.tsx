import React from 'react';
import { Hotel, ArrowRight } from 'lucide-react';

const DemoCard = ({ name, description, image }: { name: string; description: string; image: string }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{name}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <a 
        href={`#${name.toLowerCase().replace(/\s+/g, '-')}`}
        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
      >
        View Demo <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  </div>
);

const Demos: React.FC = () => {
  const demos = [
    {
      name: "MIZATA",
      description: "Experience how Lead Butler could enhance guest communication at MIZATA BY ANTIRESORT, a luxury eco-resort focused on sustainable hospitality.",
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center mb-8">
          <Hotel className="w-6 h-6 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-slate-800">Demo Properties</h1>
        </div>
        <p className="text-lg text-slate-600 mb-12 max-w-3xl">
          Explore how Lead Butler's AI-powered chatbot could transform guest communication at these properties. Experience real-world applications of our technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <DemoCard key={index} {...demo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demos;