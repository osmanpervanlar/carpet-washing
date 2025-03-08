import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-1">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center mb-8">Bize Ulaşın</h2>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Adınız" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
            />
            <input 
              type="email" 
              placeholder="E-posta Adresiniz" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
            />
            <textarea 
              placeholder="Mesajınız" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
            <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;