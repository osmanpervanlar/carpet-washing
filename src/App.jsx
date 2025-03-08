import React from 'react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;