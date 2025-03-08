import React from 'react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <p>Adres: Örnek Mah. Örnek Sok. No: 123</p>
            <p>Telefon: 0 (XXX) XXX XX XX</p>
            <p>E-posta: info@haliyikama.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li><a href="#services" onClick={() => scrollToSection('services')} className="text-left">Hizmetler</a></li>
              <li><a href="#aboutUs" onClick={() => scrollToSection('aboutUs')} className="text-left">Hakkımızda</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')} className="text-left">İletişim</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Sosyal Medya</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Facebook</a>
              <a href="#" className="hover:text-gray-300">Twitter</a>
              <a href="#" className="hover:text-gray-300">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Halı Yıkama Fabrikası. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;