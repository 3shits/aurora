"use client";

import { useEffect, useState } from "react";

const Guests = () => {
  const [mounted, setMounted] = useState(false);
  const [activeGuest, setActiveGuest] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const guests = [
    {
      name: "Dr. Hermione Granger",
      title: "Chief Guest",
      designation: "Head of Magical Law Enforcement",
      achievement: "Order of Merlin, First Class",
      image: "/guest1.jpg",
      quote: "Magic is not just about power, but about using it wisely.",
    },
    {
      name: "Prof. Sirius Black",
      title: "Guest of Honor",
      designation: "Defense Against Dark Arts Expert",
      achievement: "Auror Hall of Fame Inductee",
      image: "/guest2.jpg",
      quote: "The ones who love us never truly leave us.",
    },
    {
      name: "Dr. Luna Lovegood",
      title: "Keynote Speaker",
      designation: "Magizoologist & Researcher",
      achievement: "Discovery of 5 New Magical Creatures",
      image: "/guest3.jpg",
      quote: "Things we lose have a way of coming back to us in the end.",
    },
    {
      name: "Prof. Neville Longbottom",
      title: "Special Guest",
      designation: "Herbology & Potion Master",
      achievement: "Slayer of Nagini, Hero of Hogwarts",
      image: "/guest4.jpg",
      quote:
        "It takes great courage to stand up to your enemies, but even more to stand up to your friends.",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden py-16 md:py-24 bg-gradient-to-b from-gray-900 via-indigo-950/30 to-gray-900">
      {/* Animated constellation background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Magical aurora effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="aurora"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-1000 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-text">
              Distinguished Guests
            </span>
          </h2>

          {/* Decorative stars */}
          <div
            className={`flex items-center justify-center gap-4 mt-6 transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <span className="text-purple-400 text-3xl animate-pulse-slow">
              ⭐
            </span>
            <div className="h-px w-20 md:w-32 bg-gradient-to-l from-transparent via-purple-400 to-transparent"></div>
          </div>

          <p
            className={`mt-6 text-gray-300 text-base md:text-lg max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Honoring the legendary wizards gracing Aurora with their presence
          </p>
        </div>

        {/* Main Featured Guest - Large Card */}
        <div
          className={`mb-12 md:mb-16 transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 animate-gradient"></div>

            <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-500/30">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-80 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 z-10"></div>
                  <img
                    src={guests[activeGuest].image}
                    alt={guests[activeGuest].name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Magical overlay particles */}
                  <div className="absolute inset-0 z-20">
                    <div className="sparkle-effect"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  {/* Title Badge */}
                  <div className="inline-block mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/50 rounded-full text-purple-300 text-sm font-semibold backdrop-blur-sm">
                      {guests[activeGuest].title}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {guests[activeGuest].name}
                  </h3>

                  {/* Designation */}
                  <p className="text-lg md:text-xl text-purple-300 mb-2">
                    {guests[activeGuest].designation}
                  </p>

                  {/* Achievement */}
                  <p className="text-sm md:text-base text-gray-400 mb-6 flex items-center gap-2">
                    <span className="text-yellow-500">🏆</span>
                    {guests[activeGuest].achievement}
                  </p>

                  {/* Quote */}
                  <div className="relative">
                    <div className="absolute -left-2 -top-2 text-5xl text-purple-500/30 font-serif">
                      "
                    </div>
                    <p className="text-gray-300 italic text-base md:text-lg pl-6 pr-6 relative">
                      {guests[activeGuest].quote}
                    </p>
                    <div className="absolute -right-2 -bottom-2 text-5xl text-purple-500/30 font-serif">
                      "
                    </div>
                  </div>

                  {/* Decorative wand */}
                  <div className="mt-8 h-1 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guest Navigation Cards - 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
          {guests.map((guest, index) => (
            <div
              key={index}
              onClick={() => setActiveGuest(index)}
              className={`cursor-pointer transition-all duration-700 delay-${
                (index + 5) * 100
              } ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <div
                className={`relative group overflow-hidden rounded-2xl transition-all duration-500 ${
                  activeGuest === index
                    ? "ring-4 ring-purple-500 scale-105 shadow-2xl shadow-purple-500/50"
                    : "hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
                }`}
              >
                {/* Card Background */}
                <div className="relative h-72 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-purple-500/20">
                  {/* Image with overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={guest.image}
                      alt={guest.name}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-purple-600/40 border border-purple-500/50 rounded-full text-purple-200 text-xs font-semibold backdrop-blur-sm">
                        {guest.title}
                      </span>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300 line-clamp-1">
                      {guest.name}
                    </h4>
                    <p className="text-sm text-gray-300 mb-1 line-clamp-1">
                      {guest.designation}
                    </p>
                    <p className="text-xs text-gray-400 flex items-center gap-1 line-clamp-1">
                      <span className="text-yellow-500">🏆</span>
                      <span className="truncate">{guest.achievement}</span>
                    </p>
                  </div>

                  {/* Hover effect indicator */}
                  {activeGuest === index && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-purple-500 rounded-full p-2 animate-pulse-slow">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes gradient-text {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradient-text 4s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Stars animation - Continuous infinite loop */
        .stars,
        .stars2,
        .stars3 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 200%;
        }

        .stars {
          background: transparent
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23fff' opacity='0.3'/%3E%3C/svg%3E")
            repeat;
          animation: stars 50s linear infinite;
        }

        .stars2 {
          background: transparent
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Ccircle cx='15' cy='15' r='1.5' fill='%23fff' opacity='0.5'/%3E%3C/svg%3E")
            repeat;
          animation: stars 100s linear infinite;
        }

        .stars3 {
          background: transparent
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23fff' opacity='0.7'/%3E%3C/svg%3E")
            repeat;
          animation: stars 150s linear infinite;
        }

        @keyframes stars {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        /* Aurora effect */
        .aurora {
          background: linear-gradient(
            60deg,
            rgba(147, 51, 234, 0.1),
            rgba(236, 72, 153, 0.1),
            rgba(147, 51, 234, 0.1)
          );
          background-size: 200% 200%;
          animation: aurora 15s ease infinite;
          height: 100%;
          width: 100%;
        }

        @keyframes aurora {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Sparkle effect */
        .sparkle-effect {
          background-image:
            radial-gradient(
              circle at 20% 30%,
              rgba(255, 255, 255, 0.3) 1px,
              transparent 1px
            ),
            radial-gradient(
              circle at 60% 70%,
              rgba(255, 255, 255, 0.2) 1px,
              transparent 1px
            ),
            radial-gradient(
              circle at 80% 40%,
              rgba(255, 255, 255, 0.4) 1px,
              transparent 1px
            );
          background-size: 100% 100%;
          animation: sparkle 3s ease-in-out infinite;
          height: 100%;
          width: 100%;
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
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
        .delay-800 {
          transition-delay: 800ms;
        }

        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
      `}</style>
    </section>
  );
};

export default Guests;
