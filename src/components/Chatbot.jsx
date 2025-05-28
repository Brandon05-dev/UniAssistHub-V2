import React from 'react';
import { Send, X } from 'lucide-react';

const Chatbot = ({ chatMessages, newMessage, setNewMessage, handleChatSubmit, isDarkMode, onClose }) => {
  return (
    <div className={`fixed bottom-24 right-6 w-80 max-h-[80vh] flex flex-col ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-xl border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} z-50`}>
      <div className={`flex items-center justify-between p-4 ${isDarkMode ? 'bg-blue-700' : 'bg-blue-600'} text-white rounded-t-lg`}>
        <h3 className="font-semibold">UniAssist Bot</h3>
        <button onClick={onClose} className="p-1 rounded-full hover:bg-blue-500">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`p-3 rounded-xl max-w-[75%] ${
                msg.isBot
                  ? `${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} text-left`
                  : 'bg-blue-500 text-white text-right'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleChatSubmit} className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} flex items-center`}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className={`flex-1 px-4 py-2 rounded-full border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        <button
          type="submit"
          className="ml-3 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default Chatbot;