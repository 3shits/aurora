"use client";

import { useState, useRef } from "react";

const Rules = () => {
  const [activeRule, setActiveRule] = useState<number | null>(null);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  const rules = [
    {
      title: "Alohadocs Day",
      description:
        "Groups must submit an India-themed video via Google Form. Duration 1:30–3:00 mins, any language, plus a 2-min explanation. Judging on quality & creativity.",
      requirements: [
        "India-themed video submission",
        "Duration: 1:30-3:00 minutes",
        "2-minute explanation required",
        "Judged on quality & creativity",
      ],
    },
    {
      title: "Codium Maxima",
      description:
        "Participants must code without viewing the screen. Use of visual aids, external help, or devices is prohibited. Judging based on logic, accuracy, and speed.",
      requirements: [
        "Blind coding challenge",
        "No visual aids allowed",
        "No external help or devices",
        "Judged on logic, accuracy & speed",
      ],
    },
    {
      title: "Ridiculous Live",
      description:
        "Participants will have 10 minutes to complete the task. There are no restrictions on content, theme, or approach. Evaluation will be based on overall quality and execution.",
      requirements: [
        "10-minute time limit",
        "No content restrictions",
        "Open theme & approach",
        "Judged on quality & execution",
      ],
    },
    {
      title: "Mindus Accio",
      description:
        "Participants must complete the quiz within the allotted duration. There are no restrictions on topics or question format. Evaluation will be based on accuracy, response time, and overall performance.",
      requirements: [
        "Timed quiz completion",
        "No topic restrictions",
        "Open question format",
        "Judged on accuracy & speed",
      ],
    },
    {
      title: "Hackastra",
      description:
        "Teams must build an open-source prototype on the spot within the allotted time. AI tools are allowed. PPT presentation required. Pre-built solutions are disallowed.",
      requirements: [
        "Build prototype on-site",
        "AI tools permitted",
        "PPT presentation mandatory",
        "No pre-built solutions",
      ],
    },
  ];

  const handleMouseEnter = (index: number) => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    hoverTimerRef.current = setTimeout(() => {
      setActiveRule(index);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    setActiveRule(null);
  };

  return (
    <section className="relative min-h-screen py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold">
              Event Guidelines
            </span>
          </h2>

          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-gold text-sm md:text-base tracking-[0.3em] uppercase">
              Sacred Rules
            </span>
            <div className="h-px w-24 md:w-32 bg-gradient-to-l from-transparent to-gold"></div>
          </div>

          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Follow these sacred guidelines to ensure fair play and magical
            experiences
          </p>
        </div>

        <div className="space-y-6">
          {rules.map((rule, index) => {
            const isActive = activeRule === index;

            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`relative border backdrop-blur-sm rounded-lg transition-all duration-400 ease-out overflow-hidden will-change-[border-color,box-shadow] ${
                    isActive
                      ? "border-gold/40 shadow-2xl shadow-gold/10"
                      : "border-gold/10"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/20"></div>

                  <div
                    className={`absolute top-0 left-0 w-1 bg-gold/60 rounded-l-lg transition-all duration-400 ease-out will-change-[height] ${
                      isActive ? "h-full" : "h-0"
                    }`}
                  ></div>

                  <div
                    className={`absolute bottom-0 right-0 w-1 bg-gold/60 rounded-r-lg transition-all duration-400 ease-out delay-75 will-change-[height] ${
                      isActive ? "h-full" : "h-0"
                    }`}
                  ></div>

                  <div className="relative p-8 md:p-10">
                    <div className="flex items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className={`flex items-center justify-center w-12 h-12 border border-gold/20 rounded transition-all duration-400 ease-out will-change-[transform,border-color] ${
                              isActive
                                ? "rotate-45 scale-110 border-gold/40"
                                : ""
                            }`}
                          >
                            <span
                              className={`text-gold font-bold text-xl transition-transform duration-400 ease-out will-change-transform ${
                                isActive ? "-rotate-45" : ""
                              }`}
                            >
                              {index + 1}
                            </span>
                          </div>

                          <div>
                            <h3
                              className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ease-out ${
                                isActive ? "text-gold" : "text-gray-100"
                              }`}
                            >
                              {rule.title}
                            </h3>
                            <div
                              className={`h-px bg-gold/50 mt-2 rounded-full transition-all duration-400 ease-out will-change-[width] ${
                                isActive ? "w-24" : "w-10"
                              }`}
                            ></div>
                          </div>
                        </div>

                        <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                          {rule.description}
                        </p>

                        <div
                          className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                            isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div
                              className={`grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-gold/10 transition-opacity duration-300 ${
                                isActive ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              {rule.requirements.map((req, reqIndex) => (
                                <div
                                  key={reqIndex}
                                  className="flex items-start gap-3"
                                >
                                  <div className="w-1.5 h-1.5 bg-gold/60 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-400 text-sm md:text-base">
                                    {req}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 rounded-lg transition-opacity duration-400 ease-out pointer-events-none ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
};

export default Rules;
