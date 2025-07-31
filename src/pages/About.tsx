// src/pages/About.tsx
import React from 'react';
import aboutImage from '/assets/images/site_about.webp';

const About: React.FC = () => {
  return (
    <div className="container-fluid mx-4 mb-5">
      <h1 className="text-primary fw-bold mb-3">About Orioles</h1>
      <img src={aboutImage} alt="About Orioles" className="img-fluid rounded mb-3" width="640" />
      <p className="my-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in nunc vel justo gravida tempor.</p>
      <p className="my-1">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
      <p className="my-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at arcu nec metus vestibulum tempor.</p>
      <p className="my-1">Donec gravida, nibh vel suscipit faucibus, erat lorem vulputate augue, vel faucibus arcu nisl ut elit.</p>
    </div>
  );
};

export default About;