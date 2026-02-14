"use client";

import { useEffect, useState } from "react";

const Faculty = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const facultyMembers = [
    {
      name: "Prof. Dr. Satyajit Chakrabarti",
      position: "Chief Patron",
      image: "/prof1.jpg",
    },
    {
      name: "Prof. Banani Chakraborty",
      position: "President IEM-UEM",
      image: "/prof3.jpg",
    },
    {
      name: "Prof. Dr. Moutushi Singh",
      position: "Convener",
      image: "/prof2.jpg",
    },
    {
      name: "Dr. Susovan Jana",
      position: "Faculty Coordinator",
      image: "/prof4.jpg",
    },
    {
      name: "Dr. Avipsita Chatterjee",
      position: "Faculty Coordinator",
      image: "/prof5.jpg",
    },
    {
      name: "Dr. Koushik Dutta",
      position: "Faculty Coordinator",
      image: "/prof6.jpeg",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden py-16 md:py-24 ">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-1000 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold">
              Faculty Council
            </span>
          </h2>

          {/* Decorative divider */}
          <div
            className={`flex items-center justify-center gap-4 mt-6 transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <span className="text-gold text-sm md:text-base tracking-[0.3em] uppercase">
              Meet the distinguished wizards guiding our magical journey
            </span>
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-gold to-transparent"></div>
          </div>
        </div>

        {/* First Row - 3 Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-12">
          {facultyMembers.slice(0, 3).map((member, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 delay-${
                (index + 1) * 100
              } ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <div className="relative faculty-card backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/60 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-3">
                {/* Dark overlay gradient background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 via-black/20 to-black/30"></div>

                {/* Magical glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold/40 group-hover:border-gold transition-colors duration-300"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold/40 group-hover:border-gold transition-colors duration-300"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold/40 group-hover:border-gold transition-colors duration-300"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold/40 group-hover:border-gold transition-colors duration-300"></div>

                <div className="relative z-10">
                  {/* Image Container with magical frame */}
                  <div className="relative mb-6 mx-auto w-48 h-48 md:w-52 md:h-52">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/30 to-yellow-600/30 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gold/40 group-hover:border-gold transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                      {/* Overlay shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg md:text-xl lg:text-xl font-bold text-center mb-2 text-gray-100 group-hover:text-gold transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis px-2">
                    {member.name}
                  </h3>

                  {/* Position */}
                  <p className="text-sm md:text-base text-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis px-2">
                    {member.position}
                  </p>

                  {/* Magical wand divider */}
                  <div className="mt-4 flex justify-center">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent group-hover:via-gold transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 3 Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {facultyMembers.slice(3, 6).map((member, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 delay-${
                (index + 4) * 100
              } ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <div className="relative faculty-card backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/60 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-3">
                {/* Dark overlay gradient background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/30 via-black/20 to-black/10"></div>

                {/* Magical glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold/40 group-hover:border-gold transition-colors duration-300"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold/40 group-hover:border-gold transition-colors duration-300"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold/40 group-hover:border-gold transition-colors duration-300"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold/40 group-hover:border-gold transition-colors duration-300"></div>

                <div className="relative z-10">
                  {/* Image Container with magical frame */}
                  <div className="relative mb-6 mx-auto w-48 h-48 md:w-52 md:h-52">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/30 to-yellow-600/30 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gold/40 group-hover:border-gold transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                      {/* Overlay shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg md:text-xl lg:text-xl font-bold text-center mb-2 text-gray-100 group-hover:text-gold transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis px-2">
                    {member.name}
                  </h3>

                  {/* Position */}
                  <p className="text-sm md:text-base text-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis px-2">
                    {member.position}
                  </p>

                  {/* Magical wand divider */}
                  <div className="mt-4 flex justify-center">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent group-hover:via-gold transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer-text {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-shimmer-text {
          background-size: 200% auto;
          animation: shimmer-text 3s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .magical-particles {
          background-image:
            radial-gradient(
              2px 2px at 20px 30px,
              rgba(255, 215, 0, 0.3),
              transparent
            ),
            radial-gradient(
              2px 2px at 60px 70px,
              rgba(255, 215, 0, 0.2),
              transparent
            ),
            radial-gradient(
              1px 1px at 50px 50px,
              rgba(255, 215, 0, 0.4),
              transparent
            ),
            radial-gradient(
              2px 2px at 130px 80px,
              rgba(255, 215, 0, 0.3),
              transparent
            ),
            radial-gradient(
              1px 1px at 140px 60px,
              rgba(255, 215, 0, 0.2),
              transparent
            );
          background-size: 200px 200px;
          background-repeat: repeat;
          animation: particles 20s linear infinite;
        }

        @keyframes particles {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-200px);
          }
        }

        .delay-100 {
          transition-delay: 100ms;
        }
        .delay-200 {
          transition-delay: 200ms;
        }
        .delay-300 {
          transition-delay: 300ms;
        }
        .delay-400 {
          transition-delay: 400ms;
        }
        .delay-500 {
          transition-delay: 500ms;
        }
        .delay-600 {
          transition-delay: 600ms;
        }
        .delay-700 {
          transition-delay: 700ms;
        }
      `}</style>
    </section>
  );
};

export default Faculty;
