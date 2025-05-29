import React from 'react';
import { MessageCircle } from 'lucide-react';

const OrderNow = ({ orderRef, isDarkMode, handleWhatsAppOrder }) => {
  return (
    <section ref={orderRef} className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 opacity-80 max-w-2xl mx-auto">
          Place your order now and get expert academic assistance tailored to your needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">WhatsApp Order</h3>
            <p className="opacity-80 mb-6">Quick and convenient ordering via WhatsApp</p>
            <button 
              onClick={handleWhatsAppOrder}
              className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-colors duration-200"
            >
              Order via WhatsApp
            </button>
          </div>

          <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💳</span>
            </div>
            <h3 className="text-xl font-bold mb-4">M-Pesa Payment</h3>
            <p className="opacity-80 mb-4">Pay securely using M-Pesa</p>
            <div className="text-lg font-semibold text-blue-600">
              Till Number: 5240571
            </div>
            <p className="text-sm opacity-60 mt-2">Use your order ID as reference</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orderow;
