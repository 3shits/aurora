"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Merchandise = () => {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        const newPos = prev + 0.5;
        // Reset position for infinite loop (card width + gap = 336px)
        if (newPos > 336) return 0;
        return newPos;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const merchandiseItems = [
    {
      id: 1,
      name: "Hogwarts Wand",
      image: "/merch-wand.jpg",
      price: "150 Galleons",
    },
    {
      id: 2,
      name: "House Robes",
      image: "/merch-robes.jpg",
      price: "300 Galleons",
    },
    {
      id: 3,
      name: "Golden Snitch",
      image: "/merch-snitch.jpg",
      price: "200 Galleons",
    },
    {
      id: 4,
      name: "Sorting Hat Replica",
      image: "/merch-hat.jpg",
      price: "250 Galleons",
    },
    {
      id: 5,
      name: "Potion Bottles Set",
      image: "/merch-potions.jpg",
      price: "180 Galleons",
    },
    {
      id: 6,
      name: "Marauder's Map",
      image: "/merch-map.jpg",
      price: "120 Galleons",
    },
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-40 h-40 border border-gold/20 rounded-full transition-all duration-1000 ${
              mounted ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              transitionDelay: `${i * 100}ms`,
              animation: mounted
                ? `float ${5 + i}s ease-in-out infinite`
                : "none",
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4 font-serif">
            Magical Merchandise
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Take home a piece of magic with our exclusive collection of
            enchanted artifacts and memorabilia
          </p>
        </div>

        {/* Auto-Scroll Container */}
        <div className="relative mb-12">
          {/* Scroll Container */}
          <div className="relative overflow-hidden py-8">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 via-slate-900/50 to-transparent z-10 pointer-events-none" />

            {/* Infinite scrolling items */}
            <div
              className="flex gap-6"
              style={{
                transform: `translateX(${-position}px)`,
              }}
            >
              {/* Triple the items for seamless infinite scroll */}
              {[
                ...merchandiseItems,
                ...merchandiseItems,
                ...merchandiseItems,
              ].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className={`flex-shrink-0 w-64 md:w-80 group transition-all duration-700 ${
                    mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                  style={{
                    transitionDelay: `${(index % 6) * 100}ms`,
                  }}
                >
                  <div className="relative overflow-hidden rounded-xl border-2 border-gold/30 bg-slate-800/50 backdrop-blur-sm transition-all duration-500 hover:border-gold hover:shadow-2xl hover:shadow-gold/40 transform hover:scale-105 hover:-rotate-1">
                    {/* Image container with placeholder */}
                    <div className="relative h-64 md:h-80 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center overflow-hidden">
                      {/* Placeholder icon/text */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-gold/30 p-8">
                        <div className="text-6xl mb-4">✨</div>
                        <p className="text-center font-serif text-lg">
                          {item.name}
                        </p>
                      </div>

                      {/* Shimmer effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    {/* Item details */}
                    <div className="p-4 bg-slate-900/70">
                      <h3 className="text-xl font-bold text-gold mb-2 group-hover:text-yellow-300 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        Authentic magical artifact
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gold">
                          {item.price}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                          <span className="text-gold group-hover:text-black text-xl">
                            →
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-gold/30 group-hover:border-gold transition-colors duration-300" />
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-gold/30 group-hover:border-gold transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link href="/merchandise">
            <button className="group relative bg-gradient-to-r from-gold to-yellow-600 hover:from-yellow-600 hover:to-gold text-black font-bold text-lg py-4 px-12 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gold/50 transform hover:-translate-y-1 hover:scale-105 overflow-hidden">
              {/* Sparkle effect on button */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center gap-3">
                Explore All Merchandise
                <span className="group-hover:rotate-12 transition-transform duration-300">
                  🛒
                </span>
              </span>
            </button>
          </Link>
          <p className="text-gray-400 text-sm mt-4">
            Limited edition items • Free owl post shipping on orders over 500
            Galleons
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Merchandise;
