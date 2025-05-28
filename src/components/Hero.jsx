// 📁 src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaIdCard, FaGraduationCap, FaFileUpload, FaLaptopCode, FaBookOpen, FaBook} from "react-icons/fa";

const services = [
  { name: "Assignments", icon: FaFileAlt },
  { name: "CV Writing", icon: FaIdCard },
  { name: "SODEL", icon: FaGraduationCap },
  { name: "Reports", icon: FaFileUpload },
  { name: "Website Development", icon: FaLaptopCode },
  { name: "Past Papers", icon: FaBookOpen },
  { name: "Novels", icon: FaBook },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 bg-gradient-to-br from-blue-100 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-white">
          Empowering Kenyan Students
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Get academic help, order services, and track progress – all in one place.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {services.map(({ name, icon: Icon }, i) => (
            <motion.div
              key={name}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/70 dark:bg-gray-700 shadow-lg backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <Icon className="text-4xl text-blue-600 mb-2" />
              <p className="font-semibold text-gray-800 dark:text-white">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
