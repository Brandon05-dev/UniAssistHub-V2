import React from 'react';
import { Search } from 'lucide-react';

const TrackOrder = ({
  trackRef,
  isDarkMode,
  orderCode,
  setOrderCode,
  handleOrderTrack,
  adminPassword,
  setAdminPassword,
  handleAdminLogin,
  showAdmin,
  setShowAdmin,
  orders,
  updateOrderStatus
}) => {
  return (
    <section ref={trackRef} className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Track Your Order</h2>
          <p className="text-xl opacity-80">Enter your order code to check the status</p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Enter order code (e.g., UA001)"
              value={orderCode}
              onChange={(e) => setOrderCode(e.target.value)}
              className={`flex-1 px-4 py-3 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <button
              onClick={handleOrderTrack}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Admin Panel Access */}
        <div className="text-center mt-12">
          {!showAdmin ? (
            <div className="max-w-sm mx-auto">
              <input
                type="password"
                placeholder="Admin password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4`}
              />
              <button
                onClick={handleAdminLogin}
                className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Admin Login
              </button>
            </div>
          ) : (
            <div className={`max-w-4xl mx-auto p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Admin Panel</h3>
                <button
                  onClick={() => setShowAdmin(false)}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {orders.map((order) => (
                  <div key={order.id} className={`p-4 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="font-semibold mb-2">{order.id}</div>
                    <div className="text-sm opacity-70 mb-2">{order.client}</div>
                    <div className="text-sm opacity-70 mb-4">{order.service}</div>
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      className={`w-full px-3 py-2 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackOrder;