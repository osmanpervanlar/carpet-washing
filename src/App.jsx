import React from 'react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default App;