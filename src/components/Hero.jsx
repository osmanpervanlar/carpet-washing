// src/components/Hero.jsx
import React from 'react';
import HeroSlider from './HeroSlider';

const Hero = () => {
  const images = [
    '/images/rug-washing1.jpg',
    '/images/curtain-washing.jpg',
    '/images/wash_machine_2.jpg',
    '/images/armchair-washing2.jpg',
    '/images/rug-washing4.jpg',
  ];

  return <HeroSlider images={images} />;
};

export default Hero;