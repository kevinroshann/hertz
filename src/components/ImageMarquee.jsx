import React from 'react';
import './ImageMarquee.css'; // We'll update this CSS file

const ImageMarquee = () => {
  const images = [
    '/img/cittic logo.png',
    '/img/curiefy.png',
    '/img/evolve.png',
    '/img/Fablab (1).png',
    '/img/mitochondria.png',
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="marquee-image" />
        ))}
        {/* Duplicate the images for seamless looping */}
        {images.map((image, index) => (
          <img key={`dup-${index}`} src={image} alt={`Image ${index + 1}`} className="marquee-image" />
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;