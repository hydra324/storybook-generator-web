import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Add this line for custom styles

import checkmarkimage from './assets/check_circle.svg';

const Carousel = ({ images, onSelectImage, selectedImage }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: true, // Show arrows
  };

  return (
    <Slider {...settings} className="carousel-container">
      {images.map((imageUrl, index) => (
        <div key={index} className="carousel-item" onClick={() => onSelectImage(index)}>
          <img src={imageUrl} alt={`${index + 1}`} />
          {index === selectedImage && <img src={checkmarkimage} alt='selected' className='carousel-check'/>}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
