import React, { useState } from 'react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Halı Yıkama',
      description: 'Her Türlü Halı İçin Derinlemesine Temizlik !',
      image: '/images/rug-washing4.jpg',
      details: `"Profesyonel halı yıkama hizmetimizle, halılarınızı derinlemesine temizleyerek ilk günkü canlılığına ve hijyenine kavuşturuyoruz. Uzman ekibimiz, son teknoloji ekipmanlar ve çevre dostu ürünlerle halılarınızı temizler. Ücretsiz servisimizle halılarınızı adresinizden alıp temizledikten sonra tekrar adresinize teslim ediyoruz."`,
      color: 'bg-blue-100',
      headerColor: 'bg-blue-500',
      backgroundImage: '/images/carpet_washing_bg.jpg',
    },
    {
      title: 'Koltuk Yıkama',
      description: 'Koltuklarınızı İlk Günkü Gibi Temizliyoruz !',
      image: '/images/armchair-washing2.jpg',
      details: `"Profesyonel ekibimiz, koltuklarınızın dokusuna zarar vermeden, derinlemesine bir temizlik sunar. Güler yüzlü ve saygılı personelimiz, en son teknoloji ekipmanlar ve çevre dostu temizlik ürünleri kullanarak koltuklarınızı ilk günkü ferahlığına kavuşturur."`,
      color: 'bg-green-100',
      headerColor: 'bg-green-500',
      backgroundImage: '/images/seat_washing_bg.jpg',
    },
    {
      title: 'Perde Yıkama',
      description: 'Perdelerinize Zarar Vermeden Temizlik Sağlıyoruz !',
      image: '/images/curtain-washing.jpg',
      details: `"Her perde cinsine özel yıkama teknikleriyle perdelerinizi özenle temizliyoruz. Ücretsiz servisimizle perdelerinizi evinizden alıyor, temizleyip ütüledikten sonra tekrar yerine takıyoruz. En geç 3 gün içinde perdeleriniz tertemiz bir şekilde size teslim edilir. Her türlü perde temizliği ve montajında yaşanan sorunlara karşı garantili hizmet sunuyoruz. Son teknoloji ekipmanlarımızla perdelerinizi gönül rahatlığıyla bize teslim edebilirsiniz."`,
      color: 'bg-yellow-100',
      headerColor: 'bg-yellow-500',
      backgroundImage: '/images/curtain-washing.jpg',
    },
    {
      title: 'Stor Perde Yıkama',
      description: 'Stor Perdelerinizde Leke ve Kirden Eser Kalmasın !',
      image: '/images/rolling_blind.jpg',
      details: `"Stor perdeleriniz, özel ekipman ve deterjanlarla derinlemesine temizlenir. Leke ve kirlerden arındırılarak ilk günkü görünümüne kavuşturulur."`,
      color: 'bg-indigo-100',
      headerColor: 'bg-indigo-500',
      backgroundImage: '/images/rolling_blind.jpg',
    },
    {
      title: 'Yorgan ve Battaniye Yıkama',
      description: 'Yorgan ve Battaniyelerinizde Kaliteli ve Garantili Hizmet !',
      image: '/images/blanket-washing.jpg',
      details: `"Yorgan ve battaniyeleriniz, özel deterjanlar ve yüksek sıcaklıkta yıkama teknikleri ile derinlemesine temizlenir. Alerjenlerden ve mikroplardan arındırılarak hijyenik bir şekilde teslim edilir."`,
      color: 'bg-pink-100',
      headerColor: 'bg-pink-500',
      backgroundImage: '/images/blanket-washing.jpg',
    },
    {
      title: 'Yatak Yıkama',
      description: 'Hijyenik Uykunun Anahtarı: Profesyonel Yatak Yıkama Hizmeti !',
      image: '/images/bed_washing.jpg',
      details: `"Yataklarınız, özel anti-alerjik deterjanlar ve yüksek vakumlu yıkama teknikleri ile derinlemesine temizlenir. Toz akarları, lekeler ve kötü kokular yok edilir, hijyenik bir uyku ortamı sağlanır. Yataklarınız ilk günkü temizliğine kavuşurken, siz de sağlıklı ve huzurlu bir uyku deneyimi yaşarsınız."`,
      color: 'bg-pink-100',
      headerColor: 'bg-pink-500',
      backgroundImage: '/images/bed_washing.jpg',
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
            {selectedService.title === 'Stor Perde Yıkama' && (
              <h3 className="text-white text-2xl font-bold mb-4">
                Stor Perdeleriniz İlk Günkü Gibi Tertemiz!
              </h3>
            )}
            {selectedService.title === 'Yorgan ve Battaniye Yıkama' && (
              <h3 className="text-white text-2xl font-bold mb-4">
                Yorgan ve Battaniyelerinizde Kaliteli ve Garantili Hizmet!
              </h3>
            )}
            {selectedService.title === 'Yatak Yıkama' && (
              <h3 className="text-white text-2xl font-bold mb-4">
                Yataklarınızda Hijyen ve Ferahlık: Profesyonel Yatak Yıkama Hizmeti!
              </h3>
            )}
            <p className="text-red-800 text-xl font-semibold italic mb-4">
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