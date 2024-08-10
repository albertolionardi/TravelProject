import React, { useState, useEffect } from 'react';
import '../../static/css/slideshow.css';


const Slideshow = ({ images, autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const slideInterval = setInterval(() => {
        nextSlide();
      }, interval);
      return () => clearInterval(slideInterval);
    }
  }, [currentIndex, autoPlay, interval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-container">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <div className="slideshow-image">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slideshow;