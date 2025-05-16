import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  quote, author, role, company, rating, image 
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 relative">
      <div className="absolute -top-4 -left-4 bg-blue-600 text-white rounded-full p-2 shadow-lg">
        <Quote className="w-5 h-5" />
      </div>
      <div className="flex space-x-1 mb-4 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} 
          />
        ))}
      </div>
      <p className="text-slate-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <p className="font-semibold text-slate-800">{author}</p>
          <p className="text-sm text-slate-600">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Lead Butler's AI chatbot has reduced our front desk inquiries by 60%, allowing our staff to focus on providing personalized service to guests who need complex assistance.",
      author: "Sarah Johnson",
      role: "General Manager",
      company: "Oceanview Resort",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "The response accuracy is incredible. Our guests love getting immediate answers at any time, and it's significantly improved our guest satisfaction scores.",
      author: "Michael Chen",
      role: "Operations Director",
      company: "City Luxury Hotels",
      rating: 5,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "As an Airbnb host with multiple properties, Lead Butler has been a game changer. I no longer need to answer the same questions over and over, and my reviews have improved.",
      author: "Emma Rodriguez",
      role: "Property Owner",
      company: "Urban Stays",
      rating: 4,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600">
            Hospitality businesses across the industry have transformed their guest communication with Lead Butler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;