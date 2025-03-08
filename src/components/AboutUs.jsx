import React from 'react';

const ABOUT_IMAGE = '/images/carpet_wash_machine.jpg';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Hikayemiz</h2>
      <div className="grid grid-cols-1">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={ABOUT_IMAGE} alt="Halı Yıkama" className="w-full h-96 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Halı Yıkama Fabrikası</h3>
            <p className="text-gray-600">
              Yayla Halı Yıkama Fabrikası olarak, uzun yıllardır müşterilerimize en kaliteli halı yıkama hizmetini sunuyoruz.
              Uzman ekibimiz ve son teknoloji ekipmanlarımızla, halılarınızı ilk günkü gibi temiz ve hijyenik hale getiriyoruz.
              Müşteri memnuniyeti bizim için her zaman önceliklidir. Halılarınızı özenle temizlerken, çevreye duyarlı ve insan sağlığına zararsız ürünler kullanmaya özen gösteriyoruz.
              Amacımız, müşterilerimize güvenilir, hızlı ve kaliteli bir hizmet sunarak, onların memnuniyetini sağlamaktır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;