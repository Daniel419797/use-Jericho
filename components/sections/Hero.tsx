"use client"
import React from 'react';
import { motion } from "framer-motion";
import Button from '../ui/button';
import Image from "next/image";

// move variants to top-level (exports allowed here)
export const slideLeft = {
  hidden: { x: -180, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};
export const slideRight = {
  hidden: { x: 400, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const } },
};
export const pop = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 0.5, scale: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const } },
};

const Hero = () => {
  return (
    <section className="pt-7 lg:pt-16 px-[1rem] lg:px-[4rem] h-full lg:h-dvh bg-white text-gray-900 items-center overflow-hidden" data-name="hero" data-file="components/Hero.js">
      <div className="block justify-center lg:mx-auto text-gray-900">
        <div className="mx-auto flex justify-center items-center mb-6">
          <div className="mx-auto inline-flex items-center gap-2 px-3 py-2 bg-[#fddcc1] text-emerald-800 rounded-full text-sm mb-6 w-fit max-w-[20rem]">
            <div className="icon-sparkles text-lg" />
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            <span className="truncate">WhatsApp Crypto Trading Made Simple</span>
          </div>
        </div>

        <div className="flex flex-col mt-3 lg:flex-row">
          <div className="text-center lg:text-left mb-16">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              className="text-center lg:text-left mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:max-w-4xl lg:text-8xl font-bold mb-6 text-[var(--text-primary)] leading-tight">
                Turn your Chats into{" "}
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
            </motion.div>
          </div>

          <div className="relative max-w-5xl lg:mx-auto">
            <motion.div
              variants={pop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl"
            />

            <motion.div
              variants={pop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl"
            />

            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              className="relative floating-animation"
            >
              <Image
                src="https://image.similarpng.com/file/similarpng/original-picture/2022/02/Hand-holding-smartphone-with-whatsapp-app-in-screen-on-transparent-background-PNG.png"
                alt="Jericho WhatsApp Bot"
                width={720}
                height={720}
                sizes="(min-width:1024px) 720px, 100vw"
                className="lg:w-full w-[100dvw] h-auto max-w-4xl rounded-2xl"
                priority
              />
            </motion.div>

            <motion.div
              variants={{ hidden: { x: 100, y: -50, opacity: 0 }, visible: { x: 0, y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Transaction Speed</p>
                  <p className="font-bold text-2xl text-gray-900">Under 60 secs</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={{ hidden: { x: -100, y: 50, opacity: 0 }, visible: { x: 0, y: 0, opacity: 1, transition: { duration: 0.8, delay: 1, ease: [0.34, 1.56, 0.64, 1] } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className="absolute -left-6 bottom-10 bg-white rounded-2xl shadow-xl p-5 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">User Rating</p>
                  <p className="font-bold text-2xl text-gray-900">4.9/5.0</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;