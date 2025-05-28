import React from "react";

const Footer = () => (
  <footer className="py-8 text-center bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400">
    <div className="container mx-auto px-4">
      <p>&copy; {new Date().getFullYear()} UniAssist Hub. All rights reserved.</p>
      <p className="mt-2">
        <a
          href="mailto:support@uniassisthub.com"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@uniassisthub.com
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
