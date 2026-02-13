"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="text-center magical-glow relative h-screen w-full overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/hero-castle.jpg)` }}
    >
      {/* Background layers */}
      <div className="absolute inset-0" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 shimmer pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-8 lg:px-12 py-6 h-full flex flex-col">
        {/* TOP CONTENT */}
        <div className="flex flex-row justify-between items-center mb-2 md:mb-3">
          <img
            src="/iemlogo.webp"
            className="w-14 h-12 md:w-28 md:h-24 lg:w-20 lg:h-16 brightness-150"
            alt="IEM Logo"
          />
          <img
            src="/uem.webp"
            className="w-16 h-14 md:w-28 md:h-20 lg:w-24 lg:h-20 brightness-150"
            alt="UEM Logo"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center justify-center text-center flex-1">
          <img
            className={`w-4/5 md:w-3/5 lg:w-1/2 h-auto max-w-2xl transition-all duration-1000 hover:scale-105 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
            src="/auroraLogo.png"
            alt="Aurora Logo"
          />

          <p
            className={`mt-2 md:mt-3 text-sm md:text-base lg:text-lg text-gray-400 transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Join us for a magical gathering of witches and wizards
          </p>

          <div
            className={`flex items-center justify-center gap-3 mt-2 md:mt-3 transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold"></div>
            <img
              src="/ieteLogo.png"
              alt="IETE Logo"
              className="w-16 md:w-20 lg:w-24 brightness-150"
            />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold"></div>
          </div>

          <div
            className={`flex flex-wrap justify-center gap-2 md:gap-3 text-xs md:text-sm lg:text-base mt-3 md:mt-4 transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-gray-400 hover:text-gold transition">
              📅 February 23–27, 2026
            </span>
            <span className="text-gray-400 hover:text-gold transition">
              📍 IEM, Gurukul Campus
            </span>
            <span className="text-gray-400 hover:text-gold transition">
              🎫 Limited Seats Available
            </span>
          </div>

          <div
            className={`mt-4 md:mt-5 transition-all duration-1000 delay-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link href="https://forms.gle/xcv78MA3arhuQNDy8">
              <button className="group relative bg-gradient-to-r from-gold to-yellow-600 hover:from-yellow-600 hover:to-gold text-black font-bold text-sm md:text-base lg:text-lg py-3 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gold/40 transform hover:-translate-y-1 hover:scale-105 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                  Register Now
                </span>
              </button>
            </Link>
          </div>

          {/* Scroll Down Indicator */}
          <div
            className={`mt-8 md:mt-8 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-gold/60 text-xs tracking-widest uppercase">
              Scroll to Explore
            </span>

            <div className="flex flex-col gap-1">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gold/40 animate-arrow-bounce"></div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gold/30 animate-arrow-bounce-delayed"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scroll-bounce {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            transform: translateY(8px);
            opacity: 1;
          }
        }

        @keyframes arrow-bounce {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(4px);
            opacity: 1;
          }
        }

        @keyframes arrow-bounce-delayed {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(4px);
            opacity: 0.7;
          }
        }

        .animate-scroll-bounce {
          animation: scroll-bounce 2s ease-in-out infinite;
        }

        .animate-arrow-bounce {
          animation: arrow-bounce 2s ease-in-out infinite;
        }

        .animate-arrow-bounce-delayed {
          animation: arrow-bounce-delayed 2s ease-in-out 0.3s infinite;
        }

        .delay-200 {
          transition-delay: 200ms;
        }
        .delay-300 {
          transition-delay: 300ms;
        }
        .delay-500 {
          transition-delay: 500ms;
        }
        .delay-700 {
          transition-delay: 700ms;
        }
        .delay-1000 {
          transition-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;
