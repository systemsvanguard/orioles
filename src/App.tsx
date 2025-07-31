// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Shared Components 
import SiteNavbar from './components/SiteNavbar';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
// import Site Pages 
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import OrioleDetail from "./pages/OrioleDetail";
// include the 404 error page last as fallback page, in routing far below
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <SiteNavbar />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:urlslug" element={<OrioleDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />

        {/* add fallback 'Catch All' 404 Not Found route below here.  */}
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </Router>
  );
};

export default App;
