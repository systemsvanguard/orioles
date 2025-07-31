// src/components/SiteHeader.tsx
import React from 'react';

const SiteHeader: React.FC = () => {
  return (
    <header className="bg-light py-3 border-bottom mb-4">
      <div className="container text-center">
        <h1 className="display-5 fw-bold text-primary">Welcome to the &#8219;Beautiful Orioles&#8217; App</h1>
        <p className="lead">Explore the beauty of nine fascinating oriole birds</p>
      </div>
    </header>
  );
};

export default SiteHeader;
