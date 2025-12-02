// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Twitter, Github, MessageCircle, Globe, Zap, Shield, ArrowRight, } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-[1rem] lg:px-[4rem] py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white">Jericho</h3>
            </div>
            <p className="text-gray-300 max-w-xs leading-relaxed">
              Send crypto, buy gift cards, and cash out to mobile money — all inside WhatsApp.
              <br />
              <span className="font-bold text-orange-400">Powered by Avalanche L1 + x402</span>
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm hover:bg-orange-400 transition-all duration-300 flex items-center justify-center group border border-white/20">
                <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm hover:bg-orange-400 transition-all duration-300 flex items-center justify-center group border border-white/20">
                <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer"
                 className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm hover:bg-orange-400 transition-all duration-300 flex items-center justify-center group border border-white/20">
                <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <Link href="/" className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm hover:bg-orange-400 transition-all duration-300 flex items-center justify-center group border border-white/20">
                <Globe className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-bold text-white mb-5">Product</h4>
            <ul className="space-y-3">
              {['Send Money', 'Buy Gift Cards', 'Crypto to Fiat', 'WhatsApp Bot'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group font-medium">
                    <ArrowRight className="w-4 h-4 mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Press Kit'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group font-medium">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Security */}
          <div>
            <h4 className="text-lg font-bold text-white mb-5 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-orange-400" />
              Legal & Security
            </h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">Terms of Service</Link></li>
              <li><Link href="/security" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">Security</Link></li>
              <li><Link href="/license" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">Open Source Licenses</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">© {currentYear} Jericho Technologies Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-8 mt-4 md:mt-0">
            <span className="flex items-center font-bold text-orange-400">
              <Zap className="w-4 h-4 mr-1" />
              Powered by Avalanche L1
            </span>
            <span className="text-gray-500">Built for Avalanche x402 Hackathon 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;