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
import Affiliate from './pages/Affiliate';
import FAQs from './pages/FAQs';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Mizata from './pages/Mizata';
import Sendero from './pages/Sendero';
import Esencia from './pages/Esencia';
import Vik from './pages/Vik';
import Alma from './pages/Alma';
import Santuario from './pages/Santuario';
import Demos from './pages/Demos';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    document.title = 'Lead Butler - AI Chatbot for Hospitality';

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const getPage = () => {
    switch (currentPage) {
      case 'affiliate':
        return <Affiliate />;
      case 'faqs':
        return <FAQs />;
      case 'terms':
        return <Terms />;
      case 'privacy':
        return <Privacy />;
      case 'mizata':
        return <Mizata />;
      case 'sendero':
        return <Sendero />;
      case 'esencia':
        return <Esencia />;
      case 'vik':
        return <Vik />;
      case 'alma':
        return <Alma />;
      case 'santuario':
        return <Santuario />;
      case 'demos':
        return <Demos />;
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
    </div>
  );
}

export default App;