"use client"
import React from 'react';
import Button from '../ui/button';

const Hero = () => {
  return (
    <section className="pt-7 lg:pt-16 px-[1rem] lg:px-[4rem] h-full lg:h-dvh bg-white text-gray-900 items-center overflow-hidden" data-name="hero" data-file="components/Hero.js">
        <div className="block justify-center lg:mx-auto text-gray-900">
          <div className="mx-auto flex justify-center align-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>WhatsApp Crypto Trading Made Simple</span>
            </div>
          </div>
          <div className='flex flex-col mt-3 lg:flex-row'>
            <div className="text-center lg:text-left mb-16">
              {/* <div className="lg:absolute hero-badge lg:top-25 lg:right-[40%] lg:transform md:translate-x-0 md:translate-y-0 px-4 py-2 bg-[#fddcc1]/900 text-emerald-800 rounded-full flex items-center gap-2 text-sm mb-6">
                <div className="icon-sparkles text-lg"></div>
                <span>WhatsApp Crypto Trading Made Simple</span>
              </div> */}
              
              <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold mb-6 text-(--text-primary) leading-tight">
                Turn your Chats into {""}
                <span className="text-orange-400">Cashouts</span>
              </h1>
              
              <p className="text-xl md:text-xl text-[var(--text-secondary)] mb-10 max-w-3xl leading-relaxed">
                Buy and Sell Crypto with Jericho AI Agent on WhatsApp. From crypto to cash in seconds. Just text. Its that easy
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                <a href="https://wa.me/13025016052" className="btn-primary bg-orange-100 text-gray-900 inline-flex items-center gap-2">
                  <div className="icon-message-circle text-xl"></div>
                  Get Started on WhatsApp
                </a>
                <a href="#features" className="btn-outline inline-block">
                  Learn More
                </a>
              </div>
              
              
            </div>

            <div className="relative max-w-5xl lg:mx-auto">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#fddcc1] rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#fddcc1] rounded-full blur-3xl opacity-50"></div>
              
              <div className="relative floating-animation">
                <img 
                  src="https://image.similarpng.com/file/similarpng/original-picture/2022/02/Hand-holding-smartphone-with-whatsapp-app-in-screen-on-transparent-background-PNG.png" 
                  alt="Azza App Interface"
                  className="lg:w-full w-[100dvw] h-auto max-w-4xl right-0 rounded-2xl"
                />
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#fddcc1] rounded-full flex items-center justify-center">
                    <div className="icon-trending-up text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">Transaction Speed</p>
                    <p className="font-bold text-lg">Under 60 secs</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -left-6 bg-white rounded-2xl shadow-xl p-4 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#fddcc1] rounded-full flex items-center justify-center">
                    <div className="icon-star text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">User Rating</p>
                    <p className="font-bold text-lg">4.9/5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
  );
};

export default Hero;