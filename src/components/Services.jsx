import React, { useState } from 'react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Halı Yıkama',
      description: 'Her türlü halı için derinlemesine temizlik.',
      image: '/images/rug-washing4.jpg',
      details: `"Profesyonel halı yıkama hizmetimizle, halılarınızı derinlemesine temizleyerek ilk günkü canlılığına ve hijyenine kavuşturuyoruz. Uzman ekibimiz, son teknoloji ekipmanlar ve çevre dostu ürünlerle halılarınızı temizler. Ücretsiz servisimizle halılarınızı adresinizden alıp temizledikten sonra tekrar adresinize teslim ediyoruz."`,
      color: 'bg-blue-100',
      headerColor: 'bg-blue-500',
      backgroundImage: '/images/carpet_washing_bg.jpg',
    },
    {
      title: 'Koltuk Yıkama',
      description: 'Koltuklarınızı ilk günkü gibi temizliyoruz.',
      image: '/images/armchair-washing2.jpg',
      details: `"Profesyonel ekibimiz, koltuklarınızın dokusuna zarar vermeden, derinlemesine bir temizlik sunar. Güler yüzlü ve saygılı personelimiz, en son teknoloji ekipmanlar ve çevre dostu temizlik ürünleri kullanarak koltuklarınızı ilk günkü ferahlığına kavuşturur."`,
      color: 'bg-green-100',
      headerColor: 'bg-green-500',
      backgroundImage: '/images/seat_washing_bg.jpg',
    },
    {
      title: 'Perde Yıkama',
      description: 'Perdelerinize zarar vermeden temizlik sağlıyoruz.',
      image: '/images/curtain-washing.jpg',
      details: `"Her perde cinsine özel yıkama teknikleriyle perdelerinizi özenle temizliyoruz. Ücretsiz servisimizle perdelerinizi evinizden alıyor, temizleyip ütüledikten sonra tekrar yerine takıyoruz. En geç 3 gün içinde perdeleriniz tertemiz bir şekilde size teslim edilir. Her türlü perde temizliği ve montajında yaşanan sorunlara karşı garantili hizmet sunuyoruz. Son teknoloji ekipmanlarımızla perdelerinizi gönül rahatlığıyla bize teslim edebilirsiniz."`,
      color: 'bg-yellow-100',
      headerColor: 'bg-yellow-500',
      backgroundImage: '/images/curtain-washing.jpg',
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div id="services" className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Hizmetlerimiz</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-md cursor-pointer"
            onClick={() => openModal(service)}
          >
            <div className="transition-transform duration-300 ease-in-out hover:scale-110">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-transparent"
          style={{
            backgroundImage: `url(${selectedService.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={`rounded-lg p-8 w-3/4 relative`}>
            {selectedService.title === 'Halı Yıkama' && (
              <h3 className="text-white text-2xl font-bold mb-4">
                Halılarınızın Derinlemesine Temizliği, Sağlığınızın Teminatı!
              </h3>
            )}
            {selectedService.title === 'Koltuk Yıkama' && (
              <h3 className="text-white text-2xl font-bold mb-4">
                Koltuklarınız İlk Günkü Gibi Tertemiz!
              </h3>
            )}
            {selectedService.title === 'Perde Yıkama' && (
              <h3 className="text-white text-2xl font-bold mb-4">
                Temiz Perdeler, Ferah Mekanlar!
              </h3>
            )}
            <p className="text-white text-xl font-semibold italic mb-4">
              {selectedService.details}
            </p>
            <div className="flex justify-center">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={closeModal}
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;