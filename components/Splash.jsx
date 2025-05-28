import React from 'react';
import { BookOpen } from 'lucide-react';

const Splash = ({ isDarkMode }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-600 to-purple-600'}`}>
      <div className="text-center animate-pulse">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
            <BookOpen className="w-16 h-16 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">UniAssist Hub</h1>
        <p className="text-xl text-blue-100">Your Academic Success Partner</p>
        <div className="mt-8">
          <div className="w-16 h-1 bg-white mx-auto rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Splash;