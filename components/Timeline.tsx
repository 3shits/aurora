"use client";

import { useEffect, useRef, useState } from "react";

const Timeline = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const dayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observers = dayRefs.current.map((dayRef, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveDay((prev) => Math.max(prev, index + 1));
            } else if (entry.boundingClientRect.top > 0) {
              // Scrolling up - hide days above
              setActiveDay((prev) => Math.min(prev, index));
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: "-100px 0px -100px 0px",
        },
      );

      if (dayRef) {
        observer.observe(dayRef);
      }

      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const days = [
    {
      day: "DAY 1",
      date: "Feb 23",
      events: [
        {
          title: "Alohamorous",
          description: "Magical Documentaries",
          color: "gryffindor",
        },
      ],
    },
    {
      day: "DAY 2",
      date: "Feb 24",
      events: [
        {
          title: "Codium Maxima",
          description: "Wands Ready !!",
          color: "slytherin",
        },
      ],
    },
    {
      day: "DAY 3",
      date: "Feb 25",
      events: [
        {
          title: "Riddicuelus Live",
          description: "Liquid Luck for the Soul",
          color: "ravenclaw",
        },
      ],
    },
    {
      day: "DAY 4",
      date: "Feb 26",
      events: [
        {
          title: "Quizzard",
          description: "Seek the Golden Snitch",
          color: "ravenclaw",
        },
      ],
    },
    {
      day: "DAY 5",
      date: "Feb 27",
      events: [
        {
          title: "Hackasta",
          description: "Bold Ideas for Wizards",
          color: "ravenclaw",
        },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(/eventsbg.jpg)` }}
    >
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url(/eventbg.jpg)" }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

      {/* Shimmer effect - same as Hero */}
      <div className="absolute inset-0 shimmer pointer-events-none" />

      {/* Floating magical elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <img
          src="/magical-sparkles.svg"
          alt=""
          className={`absolute top-10 right-20 w-32 transition-all duration-1000 ${
            mounted ? "opacity-20 scale-100" : "opacity-0 scale-0"
          }`}
          style={{ animation: "pulse 4s ease-in-out infinite" }}
        />
        <img
          src="/magical-sparkles.svg"
          alt=""
          className={`absolute bottom-20 left-20 w-40 transition-all duration-1000 ${
            mounted ? "opacity-15 scale-100" : "opacity-0 scale-0"
          }`}
          style={{
            animation: "pulse 5s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-gold mb-16 text-center font-serif">
          Event Schedule
        </h2>

        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Timeline line container */}
            <div className="absolute left-4 sm:left-8 md:left-20 top-0 bottom-0 w-0.5 bg-slate-700/50">
              {/* Animated flowing line */}
              <div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-gold to-transparent transition-all duration-1000 ease-out"
                style={{
                  height: `${(activeDay / days.length) * 100}%`,
                  boxShadow:
                    "0 0 20px rgba(212, 175, 55, 0.6), 0 0 40px rgba(212, 175, 55, 0.3)",
                }}
              >
                {/* Glowing tip */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gold rounded-full shadow-lg shadow-gold/80 animate-pulse" />
              </div>
            </div>

            <div className="space-y-12 pl-12 sm:pl-16 md:pl-32">
              {days.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  ref={(el) => {
                    dayRefs.current[dayIndex] = el;
                  }}
                  className="relative"
                >
                  <div
                    className={`magical-border rounded-lg p-4 sm:p-6 magical-glow bg-slate-800/30 transition-all duration-700 ${
                      dayIndex < activeDay
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    {/* Day badge with connecting line - VERTICAL LAYOUT */}
                    <div className="absolute -left-12 sm:-left-16 md:-left-32 top-2 flex flex-col items-center">
                      {/* Timeline dot */}
                      <div className="relative flex-shrink-0">
                        <div
                          className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-4 flex items-center justify-center transition-all duration-700 ${
                            dayIndex < activeDay
                              ? "border-gold bg-gold scale-100 shadow-lg shadow-gold/60"
                              : "border-slate-600 bg-slate-800 scale-75 opacity-50"
                          }`}
                        >
                          {dayIndex < activeDay && (
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-ping" />
                          )}
                        </div>
                        {/* Connecting horizontal line */}
                        <div
                          className={`absolute top-1/2 -right-2 sm:-right-3 md:-right-4 w-2 sm:w-3 md:w-4 h-0.5 transition-all duration-700 ${
                            dayIndex < activeDay
                              ? "bg-gold opacity-100"
                              : "bg-slate-600 opacity-30"
                          }`}
                        />
                      </div>

                      {/* Day label - BELOW THE DOT */}
                      <div
                        className={`mt-2 text-center transition-all duration-700 ${
                          dayIndex < activeDay ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div className="text-sm sm:text-base md:text-lg font-bold text-gold whitespace-nowrap">
                          {day.day}
                        </div>
                        <div className="text-xs text-gray-400 whitespace-nowrap">
                          {day.date}
                        </div>
                      </div>
                    </div>

                    {/* Events */}
                    <div className="space-y-3 sm:space-y-4 w-full">
                      {day.events.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className={`p-3 sm:p-4 rounded-lg bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl border border-slate-700/30 ${
                            dayIndex < activeDay
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-4"
                          }`}
                          style={{
                            transitionDelay:
                              dayIndex < activeDay
                                ? `${eventIndex * 100 + 200}ms`
                                : "0ms",
                          }}
                        >
                          <h4 className="text-base sm:text-lg md:text-xl font-bold text-gold mb-1">
                            {event.title}
                          </h4>

                          <p className="text-gray-300 text-sm sm:text-base">
                            {event.description}
                          </p>

                          {/* Color accent bar with glow */}
                          <div className="relative mt-3 w-16 sm:w-20 h-1 rounded-full overflow-hidden bg-slate-700/30">
                            <div
                              className={`absolute inset-0 bg-${event.color} rounded-full ${
                                dayIndex < activeDay ? "animate-shimmer" : ""
                              }`}
                              style={{
                                boxShadow:
                                  dayIndex < activeDay
                                    ? `0 0 10px var(--${event.color})`
                                    : "none",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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

        .animate-shimmer::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shimmer 2s infinite;
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(218, 165, 32, 0.1) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer-wave 8s ease-in-out infinite;
        }

        @keyframes shimmer-wave {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
