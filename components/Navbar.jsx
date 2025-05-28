// 📁 src/components/Navbar.jsx
import React from 'react';
import { Menu, X, BookOpen, Sun, Moon } from 'lucide-react';

const Navbar = ({ isDarkMode, setIsDarkMode, isMenuOpen, setIsMenuOpen, scrollToSection, currentSection, allRefs }) => {
  const navItems = [
    { name: 'Home', ref: allRefs.home, key: 'home' },
    { name: 'About Us', ref: allRefs.about, key: 'about' },
    { name: 'Services', ref: allRefs.services, key: 'services' },
    { name: 'Order Now', ref: allRefs.order, key: 'order' },
    { name: 'Track Order', ref: allRefs.track, key: 'track' },
    { name: 'Testimonials', ref: allRefs.testimonials, key: 'testimonials' },
    { name: 'Contact', ref: allRefs.contact, key: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md'} shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">UniAssist Hub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.ref, item.key)}
                className={`transition-colors duration-200 hover:text-blue-600 ${currentSection === item.key ? 'text-blue-600 font-semibold' : ''}`}
              >
                {item.name}
              </button>
            ))}
            
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-700">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.ref, item.key)}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;