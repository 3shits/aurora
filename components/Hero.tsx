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
      className="text-center py-5 px-8 magical-glow relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/hero-castle.jpg)` }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 " />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 shimmer pointer-events-none" />

      {/* Hogwarts Crest - faded in background */}

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className=" flex flex-row justify-between">
          <img src="/iemlogo.webp" className="w-24 h-20 opacity-90 " />
          <img src="/uem.webp" className="w-28 h-24 opacity-90" />
        </div>
        {/* Title with fade-in animation */}
        <div className="w-full flex justify-center">
          <img
            className={`w-1/2 h-auto transition-all duration-1000 hover:scale-105 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
            src="/auroraLogo.png"
          />
        </div>

        {/* Subtitle with delayed fade-in */}
        <p
          className={`mb-10 text-lg text-foreground/80 md:text-xl lg:text-2xl font-body text-gray-400 transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Join us for a magical gathering of witches and wizards
        </p>

        {/* Decorative divider */}
        <div
          className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold"></div>
          <img src="/ieteLogo.png" alt="" className="w-28 opacity-60" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold"></div>
        </div>

        {/* Event details with stagger animation */}
        <div
          className={`flex flex-wrap justify-center gap-6 text-sm md:text-base mb-10 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors duration-300 group">
            <span className="group-hover:scale-125 transition-transform duration-300">
              📅
            </span>
            February 23-27, 2026
          </span>
          <span className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors duration-300 group">
            <span className="group-hover:scale-125 transition-transform duration-300">
              📍
            </span>
            IEM , Gurukul Campus
          </span>
          <span className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors duration-300 group">
            <span className="group-hover:scale-125 transition-transform duration-300">
              🎫
            </span>
            Limited Seats Available
          </span>
        </div>

        {/* Register button with delayed entrance */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link href={"https://forms.gle/xcv78MA3arhuQNDy8"}>
            <button className="group relative bg-gradient-to-r from-gold to-yellow-600 hover:from-yellow-600 hover:to-gold text-black font-bold text-lg py-4 px-12 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gold/50 transform hover:-translate-y-1 hover:scale-105 overflow-hidden">
              {/* Sparkle effect on button */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Register Now
              </span>
            </button>
          </Link>
        </div>

        {/* Floating potion bottles at bottom */}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes floatDiagonal {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(15px, -15px);
          }
          50% {
            transform: translate(30px, 0);
          }
          75% {
            transform: translate(15px, 15px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }

        @keyframes flyAcross {
          0% {
            left: -100px;
          }
          100% {
            left: calc(100% + 100px);
          }
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
        .delay-1100 {
          transition-delay: 1100ms;
        }
        .delay-1200 {
          transition-delay: 1200ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;
