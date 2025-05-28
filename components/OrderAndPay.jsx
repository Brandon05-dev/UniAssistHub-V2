import React from "react";

const OrderAndPay = ({ orderRef, isDarkMode, handleWhatsAppOrder }) => (
  <section ref={orderRef} className="py-16 px-4 bg-white dark:bg-gray-900">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">Order & Pay</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Ready to get started? Place your order and pay securely. We accept M-Pesa and all major payment methods.
      </p>
      <button
        onClick={handleWhatsAppOrder}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition"
      >
        Order via WhatsApp
      </button>
    </div>
  </section>
);

export default OrderAndPay;
