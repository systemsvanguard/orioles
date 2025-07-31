// src/components/SiteFooter.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-primary text-white text-center py-3 mt-2">
      <div className="container text-white">
          <p>	&copy; 2024 - {new Date().getFullYear()} <span className="fw-bold">Beautiful Orioles</span> | All rights reserved. <br />
            A coding practice portfolio site by <a href="https://ryanhunter.ca/" className="text-decoration-none text-white">Ryan Hunter</a> | GitHub handle <a href="https://github.com/systemsvanguard" className="text-decoration-none fw-bold fst-italic text-white">SystemsVanguard</a>.
            <br />
            Built using React, Typescript, Bootstrap v5, FontAwesome Icons, Google Fonts, CSS, & and lots of love 
            <span style={{ color: '#ff0000'}}>&#9829; </span>  &#9825; .
          </p>
          <small>
            <Link className="text-decoration-none mx-2 text-white" to="/">Home</Link> |  
            <Link className="text-decoration-none mx-2 text-white" to="/about">About</Link>  |  
            <Link className="text-decoration-none mx-2 text-white" to="/resources">Resources</Link>  |                  
            <Link className="text-decoration-none mx-2 text-white" to="/contacts">Contact</Link>              
          </small>
          <br />

      </div>
    </footer>
  );
};

export default SiteFooter;
