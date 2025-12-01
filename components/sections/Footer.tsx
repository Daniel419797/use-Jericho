import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-800 text-white text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Jericho. All rights reserved.</p>
        <div className="mt-4">
          <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;