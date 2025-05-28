import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = ({ testimonialsRef, isDarkMode, testimonials, currentTestimonial, setCurrentTestimonial }) => {
  return (
    <section ref={testimonialsRef} className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">What Students Say</h2>
          <p className="text-xl opacity-80">Hear from our satisfied clients</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} text-center relative`}>
            <div className="text-6xl mb-4">{testimonials[currentTestimonial].image}</div>
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-lg mb-6 italic">"{testimonials[currentTestimonial].text}"</p>
            <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
            <div className="text-sm opacity-70">{testimonials[currentTestimonial].university}</div>
            
            <div className="flex justify-center items-center space-x-4 mt-6">
              <button
                onClick={() => setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;