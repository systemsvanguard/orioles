// src/components/OrioleCard.tsx
import React from 'react';
import type { Oriole } from '../types/Orioles.ts'; 
import { Link } from 'react-router-dom';

interface Props {
  bird: Oriole;
}

const OrioleCard: React.FC<Props> = ({ bird }) => {
  return (
    <div className="card h-100">
      <img
        src={`/assets/images/${bird.picture_01}`}
        alt={bird.bird_name}
        className="card-img-top rounded"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/${bird.urlslug}`} className="text-decoration-none text-primary fw-bold">
            {bird.bird_name}
          </Link>
        </h5>
        <p className="card-text">
          {bird.synopsis.length > 50 ? bird.synopsis.slice(0, 135) + ' … ' : bird.synopsis}
        </p>
      </div>
      <div className="card-footer bg-transparent">
        <Link to={`/${bird.urlslug}`} className="btn btn-primary">
            <i className="fa-solid fa-dove me-2"></i>   
            {bird.bird_name} ... 
        </Link>
      </div>
    </div>
  );
};

export default OrioleCard;