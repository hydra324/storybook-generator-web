import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Add this line for custom styles

const Carousel = ({ images, onSelectImage }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
        <div key={index} className="carousel-item" onClick={() => onSelectImage(imageUrl)}>
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
