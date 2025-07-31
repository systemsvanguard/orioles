// src/components/QuoteOfTheDay.tsx
import React, { useState } from 'react';
import quotes from '../data/bird_quotes';

const QuoteOfTheDay: React.FC = () => {
  const [index, setIndex] = useState<number>(() => Math.floor(Math.random() * quotes.length));

  const handleClick = () => {
    let newIndex = Math.floor(Math.random() * quotes.length);
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * quotes.length);
    }
    setIndex(newIndex);
  };

  const { source, quotation } = quotes[index];
  // const { id, source, quotation } = quotes[index];

  return (
    <div className="mb-4 p-3 rounded">
      <h5 className="text-secondary">Bird Quote of the Day</h5>
      <blockquote className="blockquote">
        <p className="mb-0 text-primary">"{quotation}" 
          <span className="text-muted fst-italic"> ~ {source}</span>  
        </p>
        {/* <footer className="blockquote-footer fst-italic">{source}</footer> */}
      </blockquote>
      <button className="btn btn-primary mt-2" onClick={handleClick}>
        <i className="me-1 fa-solid fa-repeat"></i> New Quote ...
      </button>
    </div>
  );
};

export default QuoteOfTheDay;