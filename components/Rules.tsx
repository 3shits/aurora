"use client";

import { useEffect, useState } from "react";

const Rules = () => {
  const [mounted, setMounted] = useState(false);
  const [activeRule, setActiveRule] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const rules = [
    {
      title: "Registration & Participation",
      icon: "📜",
      description:
        "All participants must register before the event begins. Each wizard may participate in multiple events but must follow the designated schedule.",
      color: "gryffindor",
    },
    {
      title: "Code of Conduct",
      icon: "⚡",
      description:
        "Maintain respect and sportsmanship throughout all events. Any form of cheating, plagiarism, or unfair means will result in immediate disqualification.",
      color: "ravenclaw",
    },
    {
      title: "Team Formation",
      icon: "🏆",
      description:
        "Teams must be formed according to event requirements. Solo events require individual participation, while team events need the specified number of members.",
      color: "slytherin",
    },
    {
      title: "Submission Guidelines",
      icon: "📝",
      description:
        "All submissions must be made before the deadline. Late submissions will not be accepted. Ensure all work is original and properly documented.",
      color: "hufflepuff",
    },
    {
      title: "Judging Criteria",
      icon: "⭐",
      description:
        "Projects will be judged on creativity, technical implementation, presentation, and overall impact. Judges' decisions are final and binding.",
      color: "gryffindor",
    },
    {
      title: "Event Etiquette",
      icon: "🎭",
      description:
        "Arrive on time for all events. Respect the venue, equipment, and fellow participants. Mobile phones must be on silent during presentations.",
      color: "ravenclaw",
    },
  ];

  type ColorClasses = {
    bg: string;
    border: string;
    glow: string;
    hover: string;
  };

  const getColorClasses = (color: string): ColorClasses => {
    const colors: Record<string, ColorClasses> = {
      gryffindor: {
        bg: "bg-red-900/20",
        border: "border-red-500/50",
        glow: "shadow-red-500/20",
        hover: "hover:border-red-500 hover:shadow-red-500/40",
      },
      slytherin: {
        bg: "bg-green-900/20",
        border: "border-green-500/50",
        glow: "shadow-green-500/20",
        hover: "hover:border-green-500 hover:shadow-green-500/40",
      },
      ravenclaw: {
        bg: "bg-blue-900/20",
        border: "border-blue-500/50",
        glow: "shadow-blue-500/20",
        hover: "hover:border-blue-500 hover:shadow-blue-500/40",
      },
      hufflepuff: {
        bg: "bg-yellow-900/20",
        border: "border-yellow-500/50",
        glow: "shadow-yellow-500/20",
        hover: "hover:border-yellow-500 hover:shadow-yellow-500/40",
      },
    };
    return colors[color] || colors.ravenclaw;
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url(/eventbg.jpg)" }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

      {/* Shimmer effect */}

      {/* Floating magical elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-4 font-serif">
            Rules & Regulations
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Follow these sacred guidelines to ensure fair play and magical
            experiences for all participants
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rules.map((rule, index) => {
            const colorClasses = getColorClasses(rule.color);
            const isActive = activeRule === index;

            return (
              <div
                key={index}
                className={`relative group transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                onMouseEnter={() => setActiveRule(index)}
                onMouseLeave={() => setActiveRule(null)}
              >
                {/* Card */}
                <div
                  className={`relative h-full rounded-xl border-2 ${colorClasses.border} ${colorClasses.bg} backdrop-blur-sm p-6 transition-all duration-300 ${colorClasses.hover} ${
                    isActive ? "scale-105 shadow-2xl" : "shadow-lg"
                  } ${colorClasses.glow}`}
                >
                  {/* Icon */}
                  <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {rule.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gold mb-3 font-serif">
                    {rule.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {rule.description}
                  </p>

                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/30 rounded-tl-xl transition-all duration-300 group-hover:border-gold/60" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/30 rounded-br-xl transition-all duration-300 group-hover:border-gold/60" />

                  {/* Glow effect on hover */}
                  <div
                    className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                      rule.color === "gryffindor"
                        ? "bg-gradient-to-br from-red-500/10 to-transparent"
                        : rule.color === "slytherin"
                          ? "bg-gradient-to-br from-green-500/10 to-transparent"
                          : rule.color === "ravenclaw"
                            ? "bg-gradient-to-br from-blue-500/10 to-transparent"
                            : "bg-gradient-to-br from-yellow-500/10 to-transparent"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-900/60 backdrop-blur-sm border border-gold/30 rounded-lg px-8 py-4">
            <p className="text-gold font-serif text-lg mb-2">
              ⚡ Important Notice ⚡
            </p>
            <p className="text-gray-300 text-sm max-w-2xl">
              Violation of any rules may result in disqualification. All
              participants are expected to uphold the magical standards of fair
              play and integrity.
            </p>
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

export default Rules;
