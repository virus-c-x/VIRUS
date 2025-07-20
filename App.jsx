import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import Home from '@/pages/Home';
import Pricing from '@/pages/Pricing';
import Packages from '@/pages/Packages';
import Contact from '@/pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Helmet>
          <title>Othmane - Professional Digital Services</title>
          <meta name="description" content="Professional digital services with guaranteed trust, speed, security, and quality. Explore our pricing, packages, and get in touch." />
        </Helmet>
        
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Toaster />
      </div>
    </Router>
  );
}

export default App;