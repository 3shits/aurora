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
              setActiveDay((prev) => Math.min(prev, index));
            }
          });
        },
        { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" },
      );
      if (dayRef) observer.observe(dayRef);
      return observer;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const days = [
    {
      day: "DAY 1",
      date: "Feb 23",
      events: [
        {
          title: "Alohadocs Day",
          description: "Magical Documentaries",
          color: "gryffindor",
          location: "Godrej Genesis, 15th Floor",
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
          location: "IEM Gurukul Campus, Seminar Hall 3",
        },
      ],
    },
    {
      day: "DAY 3",
      date: "Feb 25",
      events: [
        {
          title: "Riddiculous Live",
          description: "Liquid Luck for the Soul",
          color: "ravenclaw",
          location: "IEM Gurukul Campus, Seminar Hall 3",
        },
      ],
    },
    {
      day: "DAY 4",
      date: "Feb 26",
      events: [
        {
          title: "Mindus Accio",
          description: "Seek the Golden Snitch",
          color: "ravenclaw",
          location: "IEM Gurukul Campus, Seminar Hall 3",
        },
      ],
    },
    {
      day: "DAY 5",
      date: "Feb 27",
      events: [
        {
          title: "Hackastra",
          description: "Bold Ideas for Wizards",
          color: "ravenclaw",
          location: "Godrej Genesis, 15th Floor",
        },
      ],
    },
  ];

  /* Single source of truth for the left gutter width.
     Line sits at half this value so the dot is perfectly centred on it. */
  const GUTTER = "clamp(2.8rem, 7vw, 6rem)";
  const LINE_LEFT = "clamp(1.4rem, 3.5vw, 3rem)";

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden w-full"
      style={{ padding: "clamp(2rem, 5vh, 5rem) 0" }}
    >
      <div className="relative z-10 w-full">
        {/* Title */}
        <h2
          className="text-center font-bold w-full"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 4rem)",
            marginBottom: "clamp(1.5rem, 4vh, 3rem)",
          }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold">
            Event Schedule
          </span>
        </h2>

        {/* Full-width wrapper — only small side padding so cards reach near the edges */}
        <div
          style={{
            width: "100%",
            padding: `0 clamp(0.5rem, 2vw, 2rem)`,
            boxSizing: "border-box",
          }}
        >
          <div className="relative w-full">
            {/* Timeline vertical line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-slate-700/50"
              style={{ left: LINE_LEFT }}
            >
              <div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-gold to-transparent transition-all duration-1000 ease-out"
                style={{
                  height: `${(activeDay / days.length) * 100}%`,
                  boxShadow:
                    "0 0 20px rgba(212,175,55,0.6), 0 0 40px rgba(212,175,55,0.3)",
                }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gold rounded-full shadow-lg shadow-gold/80 animate-pulse" />
              </div>
            </div>

            {/* Days column — paddingLeft = GUTTER so cards start after the timeline */}
            <div
              className="flex flex-col w-full"
              style={{ paddingLeft: GUTTER, gap: "clamp(1rem, 3vh, 2.5rem)" }}
            >
              {days.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  ref={(el) => {
                    dayRefs.current[dayIndex] = el;
                  }}
                  className="relative w-full"
                >
                  <div
                    className={`magical-border rounded-lg bg-slate-800/30 transition-all duration-700 w-full ${
                      dayIndex < activeDay
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                    style={{ padding: "clamp(0.6rem, 2vw, 1.5rem)" }}
                  >
                    {/* Dot + day label */}
                    <div
                      className="absolute top-2 flex flex-col items-center"
                      style={{ left: `calc(${GUTTER} * -1)`, width: GUTTER }}
                    >
                      {/* Dot */}
                      <div className="relative flex-shrink-0">
                        <div
                          className={`rounded-full border-4 flex items-center justify-center transition-all duration-700 ${
                            dayIndex < activeDay
                              ? "border-gold bg-gold scale-100 shadow-lg shadow-gold/60"
                              : "border-slate-600 bg-slate-800 scale-75 opacity-50"
                          }`}
                          style={{
                            width: "clamp(1rem, 2vw, 1.75rem)",
                            height: "clamp(1rem, 2vw, 1.75rem)",
                          }}
                        >
                          {dayIndex < activeDay && (
                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                          )}
                        </div>
                        {/* Horizontal connector to card */}
                        <div
                          className={`absolute top-1/2 h-0.5 transition-all duration-700 ${
                            dayIndex < activeDay
                              ? "bg-gold opacity-100"
                              : "bg-slate-600 opacity-30"
                          }`}
                          style={{
                            right: "clamp(-0.8rem, -1.5vw, -0.5rem)",
                            width: "clamp(0.5rem, 1.5vw, 1rem)",
                          }}
                        />
                      </div>

                      {/* Day label */}
                      <div
                        className={`mt-1 text-center transition-all duration-700 ${
                          dayIndex < activeDay ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div
                          className="font-bold text-gold whitespace-nowrap"
                          style={{ fontSize: "clamp(0.55rem, 1.1vw, 1rem)" }}
                        >
                          {day.day}
                        </div>
                        <div
                          className="text-gray-400 whitespace-nowrap"
                          style={{ fontSize: "clamp(0.5rem, 0.9vw, 0.8rem)" }}
                        >
                          {day.date}
                        </div>
                      </div>
                    </div>

                    {/* Events */}
                    <div className="w-full">
                      {day.events.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className={`rounded-lg bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-500 hover:scale-[1.01] hover:shadow-xl border border-slate-700/30 w-full ${
                            dayIndex < activeDay
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-4"
                          }`}
                          style={{
                            padding: "clamp(0.5rem, 1.5vw, 1.2rem)",
                            transitionDelay:
                              dayIndex < activeDay
                                ? `${eventIndex * 100 + 200}ms`
                                : "0ms",
                          }}
                        >
                          <h4
                            className="font-bold text-gold"
                            style={{
                              fontSize: "clamp(0.85rem, 1.8vw, 1.5rem)",
                              marginBottom: "clamp(0.2rem, 0.5vh, 0.4rem)",
                            }}
                          >
                            {event.title}
                          </h4>
                          <p
                            className="text-gray-300"
                            style={{ fontSize: "clamp(0.7rem, 1.4vw, 1.1rem)" }}
                          >
                            📍 {event.location}
                          </p>
                          <p
                            className="text-gray-400"
                            style={{ fontSize: "clamp(0.7rem, 1.4vw, 1.1rem)" }}
                          >
                            🎩 {event.description}
                          </p>

                          {/* Elder Wand + spell beam */}
                          <div
                            className="relative flex items-center w-full"
                            style={{
                              marginTop: "clamp(0.4rem, 1.5vh, 1rem)",
                              gap: "clamp(0.3rem, 1vw, 0.6rem)",
                            }}
                          >
                            <img
                              src="/elder wand.png"
                              alt="Elder Wand"
                              className={`h-auto object-contain flex-shrink-0 transition-all duration-500 ${
                                dayIndex < activeDay
                                  ? "opacity-100"
                                  : "opacity-0"
                              }`}
                              style={{ width: "clamp(2rem, 7vw, 10rem)" }}
                            />

                            {/* Spell beam */}
                            <div
                              className="relative flex-1 overflow-hidden"
                              style={{ height: "clamp(2px, 0.3vw, 4px)" }}
                            >
                              <div
                                className={`absolute inset-0 bg-gradient-to-r from-gold via-yellow-400 to-transparent transition-all duration-1000 ${
                                  dayIndex < activeDay
                                    ? "opacity-100 scale-x-100"
                                    : "opacity-0 scale-x-0"
                                }`}
                                style={{
                                  transformOrigin: "left",
                                  boxShadow:
                                    dayIndex < activeDay
                                      ? "0 0 10px rgba(212,175,55,0.8), 0 0 20px rgba(212,175,55,0.4)"
                                      : "none",
                                }}
                              />
                              {[1 / 4, 1 / 2, 3 / 4].map((pos, i) => (
                                <div
                                  key={i}
                                  className={`absolute top-1/2 -translate-y-1/2 bg-white rounded-full transition-all duration-300 ${
                                    dayIndex < activeDay
                                      ? "opacity-100 scale-100"
                                      : "opacity-0 scale-0"
                                  }`}
                                  style={{
                                    left: `${pos * 100}%`,
                                    width: "clamp(3px, 0.4vw, 6px)",
                                    height: "clamp(3px, 0.4vw, 6px)",
                                    transitionDelay: `${700 + i * 200}ms`,
                                    boxShadow: "0 0 4px rgba(255,255,255,0.8)",
                                  }}
                                />
                              ))}
                            </div>
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
