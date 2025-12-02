"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import SectionHeader from "../Molecules/SectionHeader";
import { usePathname } from "next/navigation";
import {
  ArrowDownLeft,        // Crypto → Cash
  Gift,                 // Gift Cards → Cash
  Send,                 // Send by Phone Number
  ArrowUpRight,         // Withdraw Anytime
  TrendingUp,           // Best Rates
  // or alternatives below if you want even better fits
} from "lucide-react";

interface PriorityItem {
  key: string;
  title: string;
  description: string;
  image: string;
  color: string;
  icon: React.ReactNode;
}

const priorities: PriorityItem[] = [
  {
    key: "Crypto to Cash",
    title: "Crypto → Cash in Minutes",
    description: "Sell Bitcoin, USDT, BNB & more instantly and get paid straight to your bank or mobile money.",
    image: "/assets/images/crypto-to-cash.jpg",
    color: "#ff5e00",
    icon: <ArrowDownLeft className="w-8 h-8 text-gray-500" />,           // Money coming IN
    // Alternative: <Bitcoin className="w-8 h-8" />
  },
  {
    key: "Gift Cards to Cash",
    title: "Gift Cards → Real Money",
    description: "Turn Amazon, iTunes, Steam, Google Play & other gift cards into cash at best rates.",
    image: "/assets/images/giftcard-cash.jpg",
    color: "#ff8c00",
    icon: <Gift className="w-8 h-8 text-gray-500"/>,                    // Perfect match
    // Alternative: <CreditCard className="w-8 h-8" />
  },
  {
    key: "Phone Number Transfers",
    title: "Send Crypto by Phone Number",
    description: "No wallet address needed. Just type a phone number and send crypto instantly.",
    image: "/assets/images/phone-transfer.jpg",
    color: "#ff4500",
    icon: <Send className="w-8 h-8 text-gray-500" />,                    // Best possible icon
    // Alternative: <Smartphone className="w-8 h-8" />
  },
  {
    key: "Instant Withdrawal",
    title: "Withdraw Anytime, 24/7",
    description: "Cash out to bank or mobile money in seconds — even at midnight.",
    image: "/assets/images/withdraw.jpg",
    color: "#ff6b00",
    icon: <ArrowUpRight className="w-8 h-8 text-gray-500" />,            // Money going OUT fast
    // Alternative: <Banknote className="w-8 h-8" /> or <Clock className="w-8 h-8" />
  },
  {
    key: "Best Rates Guaranteed",
    title: "Highest Rates in the Market",
    description: "We beat 95% of exchangers. Get more naira or cedis every time.",
    image: "/assets/images/best-rate.jpg",
    color: "#ff3b00",
    icon: <TrendingUp className="w-8 h-8 text-gray-500" />,              // Perfect for "best rates"
    // Alternative: <DollarSign className="w-8 h-8" /> or <Award className="w-8 h-8" />
  },
];

export default function Priorities() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  // const blockPositions = useRef([]);
  const activeIndexRef = useRef(0);
  const blockPositions = useRef<{ top: number; height: number }[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const pathname = usePathname();
  const isHome = pathname === "/";

  // Precompute block positions
  useEffect(() => {
    const updateBlockPositions = () => {
      blockPositions.current = blockRefs.current.map(ref => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const scrollTop = window.scrollY || window.pageYOffset;
          return { top: rect.top + scrollTop, height: rect.height };
        }
        return { top: 0, height: 0 };
      });
    };
    updateBlockPositions();
    window.addEventListener("resize", updateBlockPositions);
    return () => window.removeEventListener("resize", updateBlockPositions);
  }, []);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;

    const scrollMiddle = window.scrollY + window.innerHeight / 2;
    let closest = 0;
    let minDist = Infinity;

    blockPositions.current.forEach((pos, index) => {
      const blockCenter = pos.top + pos.height / 2;
      const dist = Math.abs(blockCenter - scrollMiddle);

      if (dist < minDist) {
        minDist = dist;
        closest = index;
      }
    });

    if (closest !== activeIndexRef.current) {
      activeIndexRef.current = closest;
      setActiveIndex(closest);
    }

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const sectionTop = sectionRect.top + window.scrollY;
    const activeBlock = blockPositions.current[closest];

    if (dotRef.current && progressRef.current && activeBlock) {
      const dotPosition = activeBlock.top + activeBlock.height / 10 - sectionTop;
      dotRef.current.style.transform = `translateY(${dotPosition}px)`;
      progressRef.current.style.height = `${Math.max(0, dotPosition)}px`;
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    // defer the initial sync call to avoid cascading renders / setState inside effect
    requestAnimationFrame(() => handleScroll());
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  const handleBlockClick = (index: number) => {
    const block = blockRefs.current[index];
    if (block) {
      block.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center px-4 md:px-10 gap-8 pb-[5%] relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50"
    >
      <header className="text-center space-y-4 max-w-4xl mx-auto">
        <h2 className="text-4xl text-gray-900 pt-[4rem] font-bold mb-8">All you need in one place</h2>
      </header>
      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16 relative w-full max-w-7xl">
        {/* Left Circular Image */}
        <motion.div
          initial={{ x: -220, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:top-0 lg:w-auto hidden lg:flex justify-center relative lg:sticky lg:top-[19%] z-10"
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[70vh] lg:h-[70vh] rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50">
            {priorities.map((item, index) => (
              <Image
                key={item.key}
                src={item.image}
                alt={item.title}
                loading="lazy"
                width={480}
                height={480}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                  index === activeIndex
                    ? "opacity-100 scale-100 rotate-0 z-10"
                    : "opacity-0 scale-110 rotate-3 z-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>
        {/* Center Progress Line */}
        <div className="relative justify-center min-h-full flex-shrink-0 hidden lg:flex">
          <div className="w-2 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 absolute rounded-full h-full" />
          <div
            ref={progressRef}
            className="w-1.5 will-change-transform bg-gradient-to-b from-orange-300 to-yellow-400 absolute rounded-full transition-transform ease-out"
          />
          <div
            ref={dotRef}
            className="absolute will-change-transform w-6 h-6 rounded-full -left-2.5 transition-transform ease-out border-4 border-white shadow-xl z-30"
            style={{
              backgroundColor: priorities[activeIndex].color,
              boxShadow: `0 0 30px ${priorities[activeIndex].color}60, 0 4px 20px rgba(0,0,0,0.1)`
            }}
          >
            <div className="absolute inset-1 rounded-full bg-white/30 animate-ping" />
          </div>
        </div>

      
      

        {/* Right Content Blocks */}
        <div className="flex flex-col w-full md:pt-[3%] sm:max-w-xl lg:max-w-2xl space-y-12 mb-[10px] md:mb-0">
          {priorities.map((item, index) => (
            <div
              key={item.key}
              ref={(el) => {
                blockRefs.current[index] = el;
              }}
              onClick={() => handleBlockClick(index)}
              className={`priority-block will-change-transform min-h-[55vh] md:h-[60vh] lg:min-h-[70vh] flex flex-col justify-center space-y-6 p-4 sm:p-6 lg:p-8 rounded-3xl cursor-pointer group transition-transform duration-300 ${
                index === activeIndex
                  ? "bg-white/80 backdrop-blur-md shadow-2xl transform scale-105 border border-white/50"
                  : "hover:bg-white/40 lg:blur-[5px] hover:blur-none hover:backdrop-blur-sm hover:shadow-lg hover:scale-102"
              }`}
              style={{
                background: index === activeIndex 
                  ? `linear-gradient(135deg, rgba(255,255,255,0.95), ${item.color}10)`
                  : undefined
              }}
            >
              {/* Header */}
              <div className="flex relative flex-col">
                {/* Mobile Image - Only shown on small screens */}
                <div className="flex lg:hidden justify-center mb-4 relative">
                  <div className="relative w-full h-52 sm:w-full sm:h-64 md:w-full md:h-72 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white/60">
                    {/* {priorities.map((imageItem, imageIndex) => ( */}
                    <Image
                      key={item.key}
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      width={256}
                      height={210}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                        index === activeIndex
                          // ? "opacity-100 scale-100 rotate-0 z-10"
                          // : "opacity-0 scale-110 rotate-2 z-0"
                      }`}
                    />
                    {/* ))} */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none" />
                    {/* Mobile indicator dot */}
                    <div 
                      className="absolute bottom-3 right-3 w-3 h-3 rounded-full border-2 border-white shadow-lg transition-all duration-500"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>

                {/* Icon and Counter Section */}
                <div className="hidden lg:flex items-center gap-3 sm:gap-4 mb-1.5">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-full p-2 sm:p-[1%] flex items-center justify-center transition-all duration-300 ${
                      index === activeIndex ? 'scale-110 shadow-lg' : 'group-hover:scale-105'
                    }`}
                    style={{ 
                      backgroundColor: `${item.color}20`,
                      border: `2px solid ${item.color}50`
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      {String(index + 1).padStart(2, "0")} / {priorities.length.toString().padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 pb-[10px] sm:space-y-7">
                <h2
                  className={`text-2xl sm:text-3xl font-bold transition-all duration-500 leading-tight ${
                    index === activeIndex 
                      ? "text-gray-900 transform translate-x-1 sm:translate-x-2" 
                      : "text-gray-700 group-hover:text-gray-800"
                  }`}
                >
                  {item.title}
                </h2>
                
                <p
                  className={`text-sm sm:text-base mb-[6px] leading-relaxed transition-all duration-500 ${
                    index === activeIndex 
                      ? "text-gray-800 transform translate-x-1 sm:translate-x-2" 
                      : "text-gray-600 group-hover:text-gray-700"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:hidden sticky bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-30">
          {priorities.map((item, index) => (
            <button
              key={item.key}
              onClick={() => handleBlockClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'scale-125' : 'scale-95 opacity-20'
              }`}
              style={{ backgroundColor: item.color }}
              aria-label={`Go to ${item.title}`}
            />
          ))}
        </div>
      </section>
      {/* Mobile Progress Indicator unchanged */}

    </div>
  );
}
