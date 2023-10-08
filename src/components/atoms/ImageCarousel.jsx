import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleChange(index) {
    setCurrentIndex(index);
  }

  const renderSlides = images.map((image, index) => (
    <div key={index}>
      <img src={image.url} alt={image.alt} />
    </div>
  ));

  return (
    <div className="flex justify-center items-center">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        selectedItem={images[currentIndex]}
        onChange={handleChange}
        className="w-full h-4/5 mb-2"
      >
        {renderSlides}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;