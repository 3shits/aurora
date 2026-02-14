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
        <div className="flex flex-row justify-between items-center mb-2 md:mb-1">
          <img
            src="/iemlogo.webp"
            className="w-14 h-12 md:w-14 md:h-12 lg:w-20 lg:h-16 brightness-150"
            alt="IEM Logo"
          />
          <img
            src="/uem.webp"
            className="w-16 h-14 md:w-16 md:h-14 lg:w-24 lg:h-20 brightness-150"
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
            className={`mt-2 md:mt-1 text-sm md:text-base lg:text-lg text-gray-400 transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Join us for a magical gathering of witches and wizards
          </p>

          <div
            className={`flex items-center justify-center gap-3 mt-2 md:mt-1 transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold"></div>
            <img
              src="/ieteLogo.png"
              alt="IETE Logo"
              className="w-20 md:w-16 lg:w-20 brightness-150"
            />
            <img
              src="/sponsor.png"
              alt="AlogoZenith"
              className="mt-4 w-20 md:w-16 lg:w-20 brightness-200"
            />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold"></div>
          </div>

          <div
            className={`flex flex-wrap justify-center gap-2 md:gap-3 text-xs md:text-sm lg:text-base mt-3 md:mt-1 transition-all duration-1000 delay-500 ${
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
            className={`mt-4 md:mt-3 transition-all duration-1000 delay-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link href="https://forms.gle/xcv78MA3arhuQNDy8">
              <button className="group relative px-10 py-3 rounded-lg bg-white/5 backdrop-blur-md border border-amber-300/30 text-sm md:text-base lg:text-lg transition-all duration-500 hover:bg-white/10 hover:border-amber-200 hover:shadow-[0_0_30px_rgba(255,200,120,0.35)] ">
                {/* Soft glow sweep */}
                <span
                  className="
        absolute inset-0 rounded-lg
        opacity-0 group-hover:opacity-100
        transition duration-700
        bg-gradient-to-r from-transparent via-amber-300/10 to-transparent
      "
                ></span>

                {/* Magical Text */}
                <span
                  className="
        relative z-10
        font-[Cinzel]
        font-extrabold
        tracking-widest
        bg-gradient-to-r from-amber-200 to-amber-400
        bg-clip-text text-transparent
        group-hover:brightness-125
        transition duration-500
      "
                >
                  Register Now
                </span>
              </button>
            </Link>
          </div>

          {/* Scroll Down Indicator */}
          <div
            className={`mt-2 md:mt-2 flex flex-col items-center gap-1 transition-all duration-1000 delay-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-red-600/60 text-sm tracking-widest uppercase animate-scroll-bounce mb-2">
              Scroll to Explore
            </span>

            <div className="flex flex-col gap-1">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-red-600/70 animate-arrow-bounce "></div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-red-600/60 animate-arrow-bounce-delayed "></div>
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
