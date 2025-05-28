// 📁 src/components/About.jsx
import React from 'react';
import { Shield, Zap, Heart, Target } from 'lucide-react';

const About = ({ aboutRef, isDarkMode, counters }) => {
  const features = [
    { icon: <Shield className="w-6 h-6" />, title: "100% Original Work", desc: "Plagiarism-free content guaranteed" },
    { icon: <Zap className="w-6 h-6" />, title: "Fast Delivery", desc: "Quick turnaround times without compromising quality" },
    { icon: <Heart className="w-6 h-6" />, title: "24/7 Support", desc: "Round-the-clock customer assistance" },
    { icon: <Target className="w-6 h-6" />, title: "Expert Writers", desc: "Qualified professionals in various fields" }
  ];

  return (
    <section ref={aboutRef} className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About UniAssist Hub</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-80">
            We are a dedicated team of academic professionals committed to helping Kenyan university students 
            achieve their educational goals through quality academic support services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
            <div className="space-y-4">
              {features.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-blue-600 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="opacity-70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center">
            <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="text-3xl font-bold text-blue-600 mb-2">{counters.students.toLocaleString()}+</div>
              <div className="text-sm opacity-70">Students Helped</div>
            </div>
            <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="text-3xl font-bold text-green-600 mb-2">{counters.projects.toLocaleString()}+</div>
              <div className="text-sm opacity-70">Projects Completed</div>
            </div>
            <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="text-3xl font-bold text-purple-600 mb-2">{counters.success}%</div>
              <div className="text-sm opacity-70">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;