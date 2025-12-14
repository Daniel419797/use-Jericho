"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Zap, Gift, Star } from 'lucide-react';

export default function WaitlistSection() {
  const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdP7uMrbCYNmPJRlhVLNcHY6zQl1qGnY1fL3WtjPozEEZSTwg/viewform?usp=publish-editor "; // Replace with your actual Google Form link

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Early Access",
      description: "Be the first to experience VeriTalent when we launch"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Exclusive Perks",
      description: "Get special offers and premium features free for 3 months"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Priority Support",
      description: "Direct line to our team for onboarding assistance"
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-gray-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-400 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            <span>Join 5,000+ Companies Already Waiting</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get Early Access to <br />
            <span className="text-orange-400">Jericho</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Be among the first to revolutionize how you verify talent and issue trusted career credentials
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Hiring?
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Join thousands of companies already on the waitlist. It takes less than 2 minutes.
          </p>
          
          <a
            href={GOOGLE_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-orange-300 hover:bg-orange-400 text-white font-semibold text-lg py-5 px-10 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
          >
            <span>Join the Waitlist</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          <p className="text-sm text-gray-500 mt-6">
            No credit card required • Free for the first 3 months
          </p>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-linear-to-br from-white-400 to-orange-300 border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">5,000+</span> companies waiting
              </p>
            </div>
            
            <div className="h-8 w-px bg-gray-300 hidden sm:block" />
            
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Rated <span className="font-semibold text-gray-900">4.9/5</span> by early testers
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}