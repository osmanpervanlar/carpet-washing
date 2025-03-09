import React from 'react';
 import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // React Icons kütüphanesini yükleyin: npm install react-icons

 const Footer = () => {
  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
  element.scrollIntoView({ behavior: 'smooth' });
  }
  };

  return (
  <footer className="bg-gray-800 text-white py-12">
  <div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div>
  <h3 className="text-lg font-semibold mb-6">İletişim</h3>
  <p className="mb-2">Adres: Kızılpınar Mah. Malkoçlar Cad. No:6 Çerkezköy, Tekirdağ, Türkiye</p>
  <p className="mb-2">Telefon: 0 (534) 737 59 87</p>
  <p className="mb-4">E-posta: info@haliyikama.com</p>
  <div className="rounded-lg overflow-hidden">
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.8853703684968!2d27.96790657557179!3d41.267831703403324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b5274d537137a1%3A0x6bd22b05c7d91c07!2sYAYLA%20HALI%20YIKAMA%20FABR%C4%B0KAS%C4%B0!5e0!3m2!1str!2str!4v1741476127393!5m2!1str!2str"
  width="100%"
  height="250"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  ></iframe>
  </div>
  </div>
  <div>
  <h3 className="text-lg font-semibold mb-6">Hızlı Bağlantılar</h3>
  <ul className="space-y-3">
  <li><a href="#services" onClick={() => scrollToSection('services')} className="hover:text-gray-300">Hizmetler</a></li>
  <li><a href="#aboutUs" onClick={() => scrollToSection('aboutUs')} className="hover:text-gray-300">Hakkımızda</a></li>
  <li><a href="#contact" onClick={() => scrollToSection('contact')} className="hover:text-gray-300">İletişim</a></li>
  </ul>
  </div>
  <div>
  <h3 className="text-lg font-semibold mb-6">Sosyal Medya</h3>
  <div className="flex space-x-4">
  <a href="https://www.facebook.com/YAYLAHALI.YKM/" className="hover:text-gray-300"><FaFacebook size={24} /></a>
  <a href="https://www.facebook.com/YAYLAHALI.YKM/" className="hover:text-gray-300"><FaTwitter size={24} /></a>
  <a href="https://www.facebook.com/YAYLAHALI.YKM/" className="hover:text-gray-300"><FaInstagram size={24} /></a>
  </div>
  </div>
  </div>
  <hr className="my-8 border-gray-700" />
  <div className="text-center">
  <p>© {new Date().getFullYear()} Halı Yıkama Fabrikası. Tüm hakları saklıdır.</p>
  </div>
  </div>
  </footer>
  );
 };

 export default Footer;