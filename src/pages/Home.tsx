// src/pages/Home.tsx
import React from 'react';
import QuoteOfTheDay from '../components/QuoteOfTheDay';
import data from '../data/data_orioles';
import { Oriole } from '../types/Orioles'; 
import OrioleCard from '../components/OrioleCard';

const Home: React.FC = () => {
  return (
    <div className="container-fluid mt-4">
      <QuoteOfTheDay />
      <h1 className="text-primary fw-bold mb-4">Beautiful Orioles</h1>
      <div className="row">
        {data.map((bird: Oriole) => (
          <div className="col-md-4 mb-4" key={bird.id}>
            <OrioleCard bird={bird} />
          </div>
        ))}
      </div>
      {/* Spacing at the bottom of the site to accomodate for the footer fixed at bottom of site */}
      <br /><br /><br /><br />
    </div>
  );
};

export default Home;