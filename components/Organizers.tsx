"use client";

import { useState } from "react";

const Organizers = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const organizers = [
    {
      name: "Sakil",
      role: "Head Organizer",
      house: "Gryffindor",
      image: "/core1.jpg",
      houseColor:
        "sepia(100%) saturate(300%) hue-rotate(330deg) brightness(0.5)", // Red tint
    },
    {
      name: "Shinjini",
      role: "Creative Director",
      house: "Hufflepuff",
      image: "/core2.jpeg",
      houseColor:
        "sepia(100%) saturate(200%) hue-rotate(25deg) brightness(0.5)", // Yellow tint
    },
    {
      name: "Nishit Medimi",
      role: "Operations Head",
      house: "Ravenclaw",
      image: "/core3.jpeg",
      houseColor:
        "sepia(100%) saturate(300%) hue-rotate(180deg) brightness(0.5)", // Blue tint
    },
    {
      name: "Alokparna Mitra",
      role: "Community Manager",
      house: "Slytherin",
      image: "/core4.jpeg",
      houseColor:
        "sepia(100%) saturate(300%) hue-rotate(90deg) brightness(0.5)", // Green tint
    },
    {
      name: "Tejwinder",
      role: "Head Organizer",
      house: "Gryffindor",
      image: "/core5.jpeg",
      houseColor:
        "sepia(100%) saturate(300%) hue-rotate(330deg) brightness(0.5)", // Red tint
    },
    {
      name: "Debarghaya",
      role: "Creative Director",
      house: "Hufflepuff",
      image: "/core6.jpeg",
      houseColor:
        "sepia(100%) saturate(200%) hue-rotate(25deg) brightness(0.5)", // Yellow tint
    },
    {
      name: "Mounik Biswas",
      role: "Operations Head",
      house: "Ravenclaw",
      image: "/core7.jpeg",
      houseColor:
        "sepia(100%) saturate(300%) hue-rotate(180deg) brightness(0.5)", // Blue tint
    },
    {
      name: "Aranya",
      role: "Community Manager",
      house: "Slytherin",
      image: "/core8.jpeg",
      houseColor:
        "sepia(100%) saturate(300%) hue-rotate(90deg) brightness(0.5)", // Green tint
    },
    {
      name: "Dayita Samanta",
      role: "Community Manager",
      house: "Gryffindor",
      image: "/core9.jpeg",
      houseColor:
        "sepia(100%) saturate(300%) hue-rotate(330deg) brightness(0.5)", // Red tint
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden py-24 md:py-32">
      <div className="relative z-10 w-full px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold">
              Core Organizers
            </span>
          </h2>

          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-gold text-sm md:text-base tracking-[0.3em] uppercase">
              The Council
            </span>
            <div className="h-px w-24 md:w-32 bg-gradient-to-l from-transparent to-gold"></div>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-6 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {organizers.map((organizer, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className=" flex-shrink-0 w-[calc(100vw-3rem)] sm:w-[calc(50vw-3rem)] lg:w-[calc(33.333vw-3rem)] xl:w-[calc(25vw-3rem)] max-w-[400px] snap-start"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className="relative h-[500px] md:h-[550px] border border-gold/20 transition-all duration-700 overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 ">
                      <img
                        src={organizer.image}
                        alt={organizer.name}
                        className="w-full h-full object-cover transition-all duration-1000"
                        style={{
                          transform: isActive
                            ? "scale(1.15) rotate(2deg)"
                            : "scale(1)",
                          filter: isActive
                            ? "brightness(1.1)"
                            : organizer.houseColor,
                        }}
                      />

                      <div
                        className="absolute inset-0 bg-black transition-opacity duration-700"
                        style={{
                          opacity: isActive ? 0.3 : 0.6,
                        }}
                      ></div>
                    </div>

                    <div
                      className="absolute top-0 left-0 w-full h-1 bg-gold transition-all duration-700"
                      style={{
                        transform: isActive ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "left",
                      }}
                    ></div>

                    <div
                      className="absolute bottom-0 right-0 w-full h-1 bg-gold transition-all duration-700"
                      style={{
                        transform: isActive ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "right",
                      }}
                    ></div>

                    <div
                      className="absolute top-0 right-0 h-full w-1 bg-gold transition-all duration-700 delay-100"
                      style={{
                        transform: isActive ? "scaleY(1)" : "scaleY(0)",
                        transformOrigin: "top",
                      }}
                    ></div>

                    <div
                      className="absolute bottom-0 left-0 h-full w-1 bg-gold transition-all duration-700 delay-100"
                      style={{
                        transform: isActive ? "scaleY(1)" : "scaleY(0)",
                        transformOrigin: "bottom",
                      }}
                    ></div>

                    <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                      <div
                        className="transition-all duration-700"
                        style={{
                          transform: isActive
                            ? "translateY(0)"
                            : "translateY(20px)",
                          opacity: isActive ? 1 : 0.9,
                        }}
                      >
                        <div className="mb-6">
                          <div
                            className="h-px w-16 bg-gold mb-4 transition-all duration-700"
                            style={{
                              width: isActive ? "80px" : "40px",
                            }}
                          ></div>

                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                            {organizer.name}
                          </h3>

                          <p className="text-base md:text-lg text-gray-300 tracking-wide mb-4">
                            {organizer.role}
                          </p>
                        </div>

                        <div
                          className="overflow-hidden transition-all duration-700"
                          style={{
                            maxHeight: isActive ? "100px" : "0px",
                            opacity: isActive ? 1 : 0,
                          }}
                        >
                          <div className="pt-4 border-t border-gold/30">
                            <p className="text-sm md:text-base italic text-gray-200">
                              {organizer.house}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute top-8 right-8 w-12 h-12 border border-gold/40 transition-all duration-700"
                      style={{
                        transform: isActive
                          ? "rotate(45deg) scale(1.2)"
                          : "rotate(0deg) scale(1)",
                        opacity: isActive ? 1 : 0.4,
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-2 h-2 bg-gold rounded-full transition-all duration-700"
                          style={{
                            transform: isActive ? "scale(1.5)" : "scale(1)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {organizers.map((_, index) => (
              <div
                key={index}
                className="h-1 bg-gold/20 transition-all duration-300"
                style={{
                  width: activeIndex === index ? "40px" : "20px",
                  backgroundColor:
                    activeIndex === index
                      ? "rgb(212, 175, 55)"
                      : "rgba(212, 175, 55, 0.2)",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Organizers;
