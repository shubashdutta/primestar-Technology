import React, { useState, useEffect } from 'react';
import "./Mainhomepage.css"
import Page from './Downhomepage';
const ImageSlideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
        src: './digital.png',
        text: 'What  We Do?',
        p:
          'We assist businesses in navigating complex challenges and unlocking their full potential.',
          
      },
    { src: './digital-data.png',
    text: 'About PrimeStar',
    p:
      'We provide training, consulting, coaching and technical services.',
     },
    { src: './ai-help.png',
     text: 'Our Capabilities?',
    p: 'Putting Our Expertise to Work Improving lives through research, technical assistance and data science', },
    // Add more objects with 'src' and 'text' properties for each image
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change the time interval (in milliseconds) to switch images

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
    <div className="fullscreen-image">
    <img src={images[currentImage].src} alt={`Image ${currentImage + 1}`} />
    <div className="image-caption">
      <h1>{images[currentImage].text}</h1>
      <p className="paragraph-split" style={{ marginBottom: '0px' }}>
          {images[currentImage].p.split(' ').slice(0, images[currentImage].p.split(' ').length / 2).join(' ')}
        </p>
        <p className="paragraph-split" style={{ marginTop: '0px' }}>
          {images[currentImage].p.split(' ').slice(images[currentImage].p.split(' ').length / 2).join(' ')}
        </p>
    </div>
  </div>
    <Page/>
    </div>
  );
};

export default ImageSlideshow;
