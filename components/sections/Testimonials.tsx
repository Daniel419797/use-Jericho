import React from 'react';
import { Star, Quote, Check } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Maria Okafor",
    role: "Freelancer, Lagos",
    avatar: "/avatars/maria.jpg",
    rating: 5,
    feedback: "Got paid $450 from a US client in 30 seconds straight to my MTN line. Jericho is a lifesaver!",
    verified: true,
  },
  {
    name: "Carlos Mendoza",
    role: "Shop Owner, Bogotá",
    avatar: "/avatars/carlos.jpg",
    rating: 5,
    feedback: "Customers now buy gift cards and pay me in crypto — all inside WhatsApp. Sales jumped 40%!",
    verified: true,
  },
  {
    name: "Aisha Khan",
    role: "Student, Nairobi",
    avatar: "/avatars/aisha.jpg",
    rating: 5,
    feedback: "Sent my brother 5,000 KES using just his phone number. He got it instantly. Crazy fast!",
    verified: true,
  },
  {
    name: "Diego Santos",
    role: "Crypto Trader, São Paulo",
    avatar: "/avatars/diego.jpg",
    rating: 5,
    feedback: "Finally a WhatsApp bot that runs on Avalanche — lightning fast and dirt cheap.",
    verified: true,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-[4rem]">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by Thousands in{' '}
            <span className="text-orange-400">Africa & LatAm</span>
          </h2>
          <p className="text-xl text-gray-600">Real people. Real money. Real fast.</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-orange-400 transition-all duration-400 hover:-translate-y-3"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-orange-100" />

              {/* Avatar + Verified */}
              <div className="flex items-center space-x-4 mb-5">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                      />
                    </div>
                  </div>
                  {t.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-3 border-white">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-300 fill-orange-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed italic">"{t.feedback}"</p>
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="text-center mt-16">
          <p className="text-3xl font-bold text-gray-900">
            <span className="text-orange-400">10,000+</span> payments this month
          </p>
          <p className="text-gray-600 mt-2">
            Powered by Avalanche L1 • Built for x402 Hackathon 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;