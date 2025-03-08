import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Yayla Halı Yıkama Logo" className="h-20 w-60" />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a
            href="#anasayfa"
            onClick={() => scrollToSection("anasayfa")}
            className="text-gray-800 hover:text-blue-600 transition duration-300 font-medium"
          >
            Anasayfa
          </a>
          <a
            href="#aboutUs"
            onClick={() => scrollToSection("aboutUs")}
            className="text-gray-800 hover:text-blue-600 transition duration-300 font-medium"
          >
            Hakkımızda
          </a>
          <a
            href="#services"
            onClick={() => scrollToSection("services")}
            className="text-gray-800 hover:text-blue-600 transition duration-300 font-medium"
          >
            Hizmetlerimiz
          </a>
          <a
            href="#fiyatListesi"
            onClick={() => scrollToSection("fiyatListesi")}
            className="text-gray-800 hover:text-blue-600 transition duration-300 font-medium"
          >
            Fiyat Listesi
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection("contact")}
            className="text-gray-800 hover:text-blue-600 transition duration-300 font-medium"
          >
            İletişim
          </a>
        </nav>

        <button className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300 font-semibold">
          Hemen Arayın
        </button>
      </div>
    </header>
  );
};

export default Navbar;