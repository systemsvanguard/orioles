// src/components/SiteNavbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const SiteNavbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand navLogo" to="/">Orioles</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/"><i className="me-1 fa-solid fa-home"></i> Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"><i className="me-1 fa-solid fa-info"></i> About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact"><i className="me-1 fa-solid fa-phone"></i> Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resources"><i className="me-1 fa-solid fa-book"></i> Resources</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SiteNavbar;