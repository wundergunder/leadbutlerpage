import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

const CaseStudy = ({ 
  title, 
  company, 
  results, 
  image 
}: { 
  title: string; 
  company: string; 
  results: { metric: string; value: string }[];
  image: string;
}) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 overflow-hidden">
    <img src={image} alt={company} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-blue-600 font-medium mb-4">{company}</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {results.map((result, index) => (
          <div key={index}>
            <p className="text-sm text-slate-600">{result.metric}</p>
            <p className="text-lg font-semibold text-slate-800">{result.value}</p>
          </div>
        ))}
      </div>
      <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
        Read full case study <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
  const studies = [
    {
      title: "Reducing Staff Workload by 60%",
      company: "Oceanview Resort",
      results: [
        { metric: "Response Time", value: "< 1 min" },
        { metric: "Guest Satisfaction", value: "+35%" },
        { metric: "Staff Hours Saved", value: "120/mo" },
        { metric: "Inquiry Resolution", value: "95%" }
      ],
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
    },
    {
      title: "Streamlining Multi-Property Management",
      company: "Urban Stays",
      results: [
        { metric: "Properties Managed", value: "25+" },
        { metric: "Automation Rate", value: "92%" },
        { metric: "Cost Savings", value: "$3,000/mo" },
        { metric: "Review Score", value: "4.9/5" }
      ],
      image: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg"
    },
    {
      title: "24/7 Guest Support Success",
      company: "Boutique Hostels",
      results: [
        { metric: "Languages", value: "12+" },
        { metric: "Response Rate", value: "99%" },
        { metric: "Guest Queries", value: "500+/day" },
        { metric: "Resolution Time", value: "2 mins" }
      ],
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center mb-8">
          <FileText className="w-6 h-6 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-slate-800">Case Studies</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <CaseStudy key={index} {...study} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;