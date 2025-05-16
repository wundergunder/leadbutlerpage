import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import CaseStudies from './pages/CaseStudies';
import Affiliate from './pages/Affiliate';
import FAQs from './pages/FAQs';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    document.title = 'Lead Butler - AI Chatbot for Hospitality';

    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
    };

    // Set initial page based on hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const getPage = () => {
    switch (currentPage) {
      case 'case-studies':
        return <CaseStudies />;
      case 'affiliate':
        return <Affiliate />;
      case 'faqs':
        return <FAQs />;
      case 'terms':
        return <Terms />;
      case 'privacy':
        return <Privacy />;
      default:
        return (
          <>
            <Hero />
            <Services />
            <Benefits />
            <UseCases />
            <Pricing />
            <Testimonials />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {getPage()}
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;