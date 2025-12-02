"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const WA_LINK = "https://wa.me/XXXXXXXXXX?text=Hi%20Jericho%20%F0%9F%94%A5";

type FAQItem = { q: string; a: string };

const FAQS: FAQItem[] = [
  {
    q: "What is Jericho?",
    a: "Jericho is the fastest way to move money on WhatsApp: send/receive crypto by phone number, buy gift cards instantly, and cash out to mobile money or bank — all in one chat.",
  },
  {
    q: "How do I start using Jericho?",
    a: "Just tap the orange button below → WhatsApp opens → you’re in. No apps, no sign-up, no wallet setup. Everything happens inside your chat.",
  },
  {
    q: "Which coins and gift cards do you support?",
    a: "USDT, USDC, BTC, ETH + Amazon, Steam, Netflix, Google Play, iTunes, and more. New cards added weekly based on user demand.",
  },
  {
    q: "How fast are payouts?",
    a: "Most withdrawals hit your mobile money or bank in under 60 seconds. Avalanche L1 makes it lightning fast.",
  },
  {
    q: "What are the fees?",
    a: "You always see the exact amount you’ll receive before confirming. Typical fee: 1–3% depending on direction and region — way lower than most exchanges.",
  },
  {
    q: "Is it safe?",
    a: "Non-custodial where possible, end-to-end encrypted chats, and we never store your private keys. Large transactions may require quick KYC for compliance.",
  },
  {
    q: "Help! Something went wrong",
    a: "Just type “support” in the chat — our AI assistant fixes 90% of issues instantly. Human help is available 24/7 if needed.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="relative px-6 py-24 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Got Questions? <span className="text-orange-400">We’ve Got Answers</span>
          </h3>
          <p className="text-lg text-gray-600">
            Everything you need to know about sending money the Jericho way
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-5">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            const fromLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ x: fromLeft ? -80 : 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className={`bg-white rounded-2xl shadow-lg border ${
                    isOpen ? "border-orange-400 shadow-orange-100" : "border-gray-200"
                  } overflow-hidden transition-all duration-300`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 rounded-2xl"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                    <div
                      className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? "bg-orange-300 text-white rotate-45" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-gray-700 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button – Desktop */}
        <div className="hidden lg:block text-center mt-12">
          <a
            href={WA_LINK}
            className="inline-flex items-center gap-3 bg-orange-300 hover:bg-orange-400 text-white font-bold text-lg py-5 px-10 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 3.5a11.9 11.9 0 0 0-16.9 0 11.9 11.9 0 0 0 0 16.9L3 21l.6-3.6A11.9 11.9 0 1 0 20.5 3.5z" />
            </svg>
            Start Using Jericho Right Now
          </a>
        </div>

        {/* Floating WhatsApp Button – Mobile Only */}
        <div className="lg:hidden fixed bottom-6 left-6 z-50">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-orange-400 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-orange-600 hover:shadow-orange-500/50"
            aria-label="Chat with Jericho on WhatsApp"
          >
            {/* WhatsApp Icon */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-md">
              <path d="M20.5 3.5a11.9 11.9 0 0 0-16.9 0 11.9 11.9 0 0 0 0 16.9L3 21l.6-3.6A11.9 11.9 0 1 0 20.5 3.5z" />
              <path fill="#fff" d="M9.4 14.6c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4l3.3-3.3c.6-.6.6-1.6 0-2.2l-1.1-1.1c-.6-.6-1.6-.6-2.2 0l-.8.8c-.3.3-.8.3-1.1 0l-2.2-2.2c-.6-.6-.6-1.6 0-2.2l1.1-1.1c.6-.6 1.6-.6 2.2 0l.8.8c.3.3.8.3 1.1 0l3.3-3.3c.6-.6.6-1.6 0-2.2l-1.1-1.1c-.6-.6-1.6-.6-2.2 0l-3.3 3.3c-.6.6-.6 1.6 0 2.2l1.1 1.1c.3.3.3.8 0 1.1l-.8.8c-.3.3-.3.8 0 1.1l2.2 2.2z" />
            </svg>

            {/* Slow Pulse Ring */}
            <span className="slow-pulse absolute inset-0 rounded-full bg-orange-300"></span>
          </a>
        </div>
      </div>
    </section>
  );
}