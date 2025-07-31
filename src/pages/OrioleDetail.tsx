// src/pages/OrioleDetail.tsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Oriole } from '../types/Orioles';
import data from '../data/data_orioles';

const OrioleDetail: React.FC = () => {
  const { urlslug } = useParams();
  const bird: Oriole | undefined = data.find(b => b.urlslug === urlslug);

  if (!bird) {
    return ( 
      <div className="container mt-5">
        <Navigate to="/notfound" replace />
      </div>  

    );
  }

  return (
    <div className="container-fluid mx-4 mt-4 mb-5">
      <h1 className="text-primary fw-bold mb-3">{bird.bird_name}</h1>
      <img
        src={`/assets/images/${bird.picture_01}`}
        alt={bird.bird_name}
        className="img-fluid rounded mb-4"
        style={{ maxWidth: '1000px' }}
      />

      <p>
        <i className="mx-2 fa-solid fa-microscope"></i> 
        <strong>Scientific Name:</strong> 
        <span className="text-success fst-italic mx-2">{bird.scientific_name}</span>
      </p>
      <p>
        <i className="mx-2 fa-solid fa-up-down"></i> 
        <strong>Length:</strong> 
        <span className='mx-2'>{bird.length_cm} cm</span>
      </p>
      <p>
        <i className="mx-2 fa-solid fa-weight-hanging"></i> 
        <strong>Weight:</strong> 
        <span className='mx-2'>{bird.weight_gram} grams</span>
      </p>
      <p>          
        <a href={bird.wiki} target="_blank" rel="noopener noreferrer" className='text-decoration-none' >
          <i className="mx-2 fa-brands fa-wikipedia-w"></i> 
          <span className='mx-2 fw-bold'>Wikipedia ... </span>
        </a> 
        <i className="fa-solid fa-arrow-up-right-from-square px-3"></i>
      </p>
      <p style={{ whiteSpace: 'pre-line' }} className="fs-4">{bird.synopsis}</p>

      <h4 className="mt-5 fw-bold text-primary ">Bird Range</h4>
      <img
        src={`/assets/images/${bird.range_picture}`}
        alt="Bird Range"
        className="img-fluid rounded mb-4"
        style={{ maxWidth: '430px' }}
      />

      <br />
      <Link to="/" className="btn btn-outline-primary">        
        <i className="mx-2 fa-solid fa-home"></i> 
        <strong>Back to Home</strong> 
      </Link>
      <br />

      <h3 className="mt-4 fw-bold text-primary text-center">Image Gallery</h3>
      <div id="carouselExample" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner rounded">
          {[bird.picture_02, bird.picture_03, bird.picture_01].map((pic, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <img
                src={`/assets/images/${pic}`}
                className="d-block w-100 rounded"
                alt={`${bird.bird_name} ${index + 1}`}
                style={{ width: 'auto', height: 'auto' }} 
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{bird.bird_name}</h5>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Link to="/" className="btn btn-outline-primary">        
        <i className="mx-2 fa-solid fa-home"></i> 
        <strong>Back to Home</strong> 
      </Link>
      <br />
    </div>
  );
};

export default OrioleDetail;