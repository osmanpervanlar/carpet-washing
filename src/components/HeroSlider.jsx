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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Yayla Halı Yıkama Fabrikası
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Profesyonel halı yıkama hizmetlerimizle tanışın.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
        >
          Hizmetlerimize Göz Atın
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;