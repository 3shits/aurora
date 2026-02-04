"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const events = [
    {
      img: "/ron.png",
      title: "Alohamorous",
      description:
        "Where stories come alive and magic is captured one frame at a time.",
      gradient: "from-hufflepuff/20",
      details: [
        { icon: "⏰", text: "Day 1" },
        { icon: "👥", text: "Group Event : Max 4 Participants" },
        { icon: "🏆", text: "Prize: To Be Announced" },
      ],
      delay: "delay-200",
    },
    {
      img: "/harry.png",
      title: "Codium Maxima",
      description:
        "Where code becomes magic and logic casts the winning spell.",
      gradient: "from-gryffindor/20",
      details: [
        { icon: "⏰", text: "Day 2" },
        { icon: "👥", text: "Solo Event" },
        { icon: "🏆", text: "Prize: To Be Announced" },
      ],
      delay: "delay-0",
    },
    {
      img: "/hermione.png",
      title: "Ridicuelus Live",
      description:
        "Where spells meet punchlines and laughter is the strongest magic.",
      gradient: "from-ravenclaw/20",
      details: [
        { icon: "⏰", text: "Day 3" },
        { icon: "👥", text: "Solo Event" },
        { icon: "🏆", text: "Prize: To Be Announced" },
      ],
      delay: "delay-100",
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 mx-10">
      <h2
        className={`text-4xl md:text-5xl font-bold text-gold mb-12 text-center font-serif transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        Featured Events
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className={`group magical-border rounded-xl p-6 bg-gradient-to-br ${event.gradient} to-transparent magical-glow 
              transition-all duration-700 ${event.delay} cursor-pointer
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
              hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/30
            `}
          >
            {/* Icon with bounce animation */}
            <div
              className="absolute mb-4 mt-5 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12"
              style={{ left: "-10%", top: "-25%" }}
            >
              <Image
                alt="dedsc"
                src={`${event.img}`}
                width={100}
                height={100}
              />
            </div>

            {/* Title with shimmer effect */}
            <h3 className="text-2xl font-bold text-gold mb-3 relative overflow-hidden">
              <span className="relative z-10">{event.title}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-4 transition-colors duration-300 group-hover:text-gray-100">
              {event.description}
            </p>

            {/* Details with stagger animation */}
            <div className="space-y-2 text-sm text-gray-400">
              {event.details.map((detail, detailIndex) => (
                <p
                  key={detailIndex}
                  className={`flex items-center gap-2 transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{
                    transitionDelay: `${index * 100 + detailIndex * 100}ms`,
                  }}
                >
                  <span className="inline-block transform transition-transform duration-300 group-hover:scale-125">
                    {detail.icon}
                  </span>
                  <span className="group-hover:text-gray-300 transition-colors duration-300">
                    {detail.text}
                  </span>
                </p>
              ))}
            </div>

            {/* Animated border glow on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .delay-0 {
          transition-delay: 0ms;
        }
        .delay-100 {
          transition-delay: 100ms;
        }
        .delay-200 {
          transition-delay: 200ms;
        }
      `}</style>
    </section>
  );
};

export default Events;
