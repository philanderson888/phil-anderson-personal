import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Archive } from './pages/Archive.tsx';
import { Contact } from './pages/Contact';
import { CharityWork } from './pages/CharityWork';
import { Links } from './pages/Links';
import { MoreLinks } from './pages/MoreLinks';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-warm-50">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<Portfolio />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/archive/:id" element={<Archive />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/charity-work" element={<CharityWork />} />
            <Route path="/links" element={<Links />} />
            <Route path="/more-links" element={<MoreLinks />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App