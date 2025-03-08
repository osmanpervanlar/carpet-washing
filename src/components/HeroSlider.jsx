import React, { useState, useEffect } from "react";

const HeroSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Halı ve Koltuk Yıkama Hizmetlerinde Lider
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Profesyonel halı yıkama hizmetlerimizle tanışın.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Teklif Al
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;