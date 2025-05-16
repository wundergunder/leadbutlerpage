import React from 'react';
import { BookOpen } from 'lucide-react';

const BlogPost = ({ title, date, excerpt, image }: { title: string; date: string; excerpt: string; image: string }) => (
  <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <p className="text-sm text-blue-600 mb-2">{date}</p>
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">{excerpt}</p>
      <a href="#" className="text-blue-600 font-medium hover:text-blue-700">Read more →</a>
    </div>
  </article>
);

const Blog: React.FC = () => {
  const posts = [
    {
      title: "How AI is Transforming Hotel Guest Services",
      date: "March 15, 2024",
      excerpt: "Discover how artificial intelligence is revolutionizing the way hotels interact with their guests...",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg"
    },
    {
      title: "5 Ways to Improve Your Airbnb Guest Communication",
      date: "March 10, 2024",
      excerpt: "Learn the best practices for maintaining effective communication with your Airbnb guests...",
      image: "https://images.pexels.com/photos/7147273/pexels-photo-7147273.jpeg"
    },
    {
      title: "The Future of Hospitality: AI Chatbots",
      date: "March 5, 2024",
      excerpt: "Explore how AI chatbots are becoming an essential tool for modern hospitality businesses...",
      image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center mb-8">
          <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-slate-800">Blog</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;