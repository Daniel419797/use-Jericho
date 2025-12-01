"use client";
import React, { useState } from "react";

const WA_LINK = "https://wa.me/XXXXXXXXXX?text=Hi";

type FAQItem = { q: string; a: string };

const FAQS: FAQItem[] = [
  {
    q: "What is Jericho?",
    a: "Jericho is an all-in-one WhatsApp bot for crypto: convert crypto to cash, sell gift cards, send/receive crypto using phone numbers, and withdraw instantly to bank or mobile money."
  },
  {
    q: "How do I start using Jericho?",
    a: "Tap the green 'Start Using Jericho Now' button to open WhatsApp and send the message. No app downloads or wallets required — everything happens via WhatsApp chat."
  },
  {
    q: "Which cryptocurrencies and gift cards are supported?",
    a: "We support major coins like BTC, USDT and several others, plus popular gift cards (Amazon, iTunes, Steam, Google Play). Supported assets may vary by region."
  },
  {
    q: "How fast are withdrawals?",
    a: "Withdrawals are typically instant or under a few minutes for most banks and mobile money providers. Speed depends on the receiving provider."
  },
  {
    q: "Are there fees or limits?",
    a: "Fees and limits depend on the chosen asset, payout method and regional regulations. Exact rates show up in-chat when you start a transaction so you always know what you'll receive."
  },
  {
    q: "Is Jericho secure and compliant?",
    a: "Jericho uses secure processes and follows basic compliance practices. For large transactions or certain services we may require identity verification (KYC)."
  },
  {
    q: "What if I have an issue or dispute?",
    a: "Open a chat via the WhatsApp button and our automated support will guide you. For escalations, the bot connects you to human support where available."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <section id="faq" className="px-4 lg:px-24 py-12 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4">Frequently asked questions</h3>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-8">
          Answers to common questions about Jericho — quick, secure, and available 24/7 on WhatsApp.
        </p>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-4 py-4 sm:px-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                >
                  <span className="text-left text-sm sm:text-base font-medium text-gray-800">{item.q}</span>
                  <span
                    className={`ml-4 shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg transition-transform ${
                      isOpen ? "rotate-45 bg-emerald-100 text-emerald-600" : "bg-transparent text-gray-400"
                    }`}
                    aria-hidden
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  className={`px-4 sm:px-6 pb-4 transition-[max-height,opacity] duration-300 ease-out ${isOpen ? "opacity-100" : "opacity-0"}`}
                  style={{ maxHeight: isOpen ? 400 : 0 }}
                >
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a
            href={WA_LINK}
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-semibold py-3 px-5 rounded-full shadow-lg hover:shadow-xl transition"
            aria-label="Start Using Jericho Now on WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden>
              <path d="M20.5 3.5a11.9 11.9 0 0 0-16.9 0 11.9 11.9 0 0 0 0 16.9L3 21l.6-3.6A11.9 11.9 0 1 0 20.5 3.5z" />
            </svg>
            Start Using Jericho Now
          </a>
        </div>

        {/* Sticky mobile CTA */}
        <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
          <a
            href={WA_LINK}
            className="w-[92vw] max-w-md inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-medium py-3 px-5 rounded-full shadow-xl"
            aria-label="Start Using Jericho Now on WhatsApp"
          >
            Start Using Jericho Now
          </a>
        </div>
      </div>
    </section>
  );
}