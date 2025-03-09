import React, { useRef } from 'react';

const ABOUT_IMAGE = '/images/carpet_wash_machine.jpg';

const AboutUs = () => {
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'scale(1.05)';
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'scale(1)';
    }
  };

  return (
    <div id="aboutUs" className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          ref={imageRef}
          src={ABOUT_IMAGE}
          alt="Halı Yıkama Makinesi"
          className="w-full h-full object-cover transition-transform duration-300"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-left text-blue-800 border-b border-blue-200 pb-2">
            Profesyonel Halı Bakım ve Temizlik Hizmetleri
          </h3>
        </div>
        <h2 className="text-3xl font-bold text-left mb-8 text-gray-800">
          Her Adımda Mükemmel Temizlik Garantisi
        </h2>
        <p className="text-lg text-gray-700 mb-8">
        "Evinizin ve iş yerinizin temizliği, sağlığınız ve konforunuz için büyük önem taşır. 
        Biz, yaşam alanlarınızı ilk günkü canlılığına kavuşturmak için en son teknolojileri ve doğal temizlik yöntemlerini bir araya 
        getiriyoruz. Halılarınızdan koltuklarınıza, perdelerinizden yataklarınıza, yorgan ve battaniyelerinize kadar ev tekstili 
        ürünlerinizi, dokusuna zarar vermeden derinlemesine temizliyoruz. 
        İşte sunduğumuz ayrıcalıklı hizmetler:"
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <span className="text-blue-600 mr-2">&#8250;</span>
            <span className="text-gray-700">Halı Yıkama</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-600 mr-2">&#8250;</span>
            <span className="text-gray-700">Koltuk Yıkama</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-600 mr-2">&#8250;</span>
            <span className="text-gray-700">Perde Yıkama</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-600 mr-2">&#8250;</span>
            <span className="text-gray-700">Yatak Yıkama</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-600 mr-2">&#8250;</span>
            <span className="text-gray-700">Yorgan ve Battaniye Yıkama</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-600 mr-2">&#8250;</span>
            <span className="text-gray-700">Evde Yıkama</span>
          </li>
        </ul>
        <div className="text-left">
          <a
            href="tel:05347375987"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
          >
            Hemen Arayın &#8594;
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;