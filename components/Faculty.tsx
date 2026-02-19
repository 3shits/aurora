"use client";

import { useEffect, useState } from "react";

const facultyMembers = [
  {
    name: "Prof. Banani Chakrabarti",
    position: "Chief Patron",
    image: "/prof3.jpg",
  },
  {
    name: "Prof. Satyajit Chakrabarti",
    position: "Patron",
    image: "/prof1.jpg",
  },
  {
    name: "Prof. Dr. Moutushi Singh",
    position: "Convener",
    image: "/prof2.jpeg",
  },
  {
    name: "Dr. Susovan Jana",
    position: "Faculty Coordinator",
    image: "/prof4.jpg",
  },
  {
    name: "Dr. Avipsita Chatterjee",
    position: "Faculty Coordinator",
    image: "/prof5.jpeg",
  },
  {
    name: "Dr. Koushik Dutta",
    position: "Faculty Coordinator",
    image: "/prof6.jpeg",
  },
];

const FacultyCard = ({
  member,
  index,
  mounted,
}: {
  member: (typeof facultyMembers)[0];
  index: number;
  mounted: boolean;
}) => (
  <div
    className={`group transition-all duration-1000 h-full w-full ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
    }`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div
      className="relative backdrop-blur-sm rounded-2xl border border-gold/20 hover:border-gold/60 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-3 h-full"
      style={{ padding: "clamp(1rem, 2.5vw, 2rem)" }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 via-black/20 to-black/30" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Corners */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold/40 group-hover:border-gold transition-colors duration-300" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold/40 group-hover:border-gold transition-colors duration-300" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold/40 group-hover:border-gold transition-colors duration-300" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold/40 group-hover:border-gold transition-colors duration-300" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Photo */}
        <div
          className="relative"
          style={{
            width: "clamp(8rem, 18vw, 20rem)",
            height: "clamp(8rem, 18vw, 20rem)",
            marginBottom: "clamp(0.75rem, 2vw, 1.5rem)",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/30 to-yellow-600/30 blur-xl group-hover:blur-2xl transition-all duration-500" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gold/40 group-hover:border-gold transition-all duration-500 group-hover:scale-105">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>

        <h3
          className="font-bold text-center text-gray-100 group-hover:text-gold transition-colors duration-300"
          style={{
            fontSize: "clamp(0.9rem, 1.6vw, 1.35rem)",
            marginBottom: "clamp(0.15rem, 0.4vw, 0.35rem)",
          }}
        >
          {member.name}
        </h3>

        <p
          className="text-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
          style={{ fontSize: "clamp(0.75rem, 1.2vw, 1.1rem)" }}
        >
          {member.position}
        </p>

        <div
          className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent group-hover:via-gold transition-all duration-500"
          style={{
            width: "clamp(2.5rem, 6vw, 5rem)",
            marginTop: "clamp(0.5rem, 1.5vw, 1rem)",
          }}
        />
      </div>
    </div>
  </div>
);

const Faculty = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ padding: "clamp(2rem, 6vh, 6rem) 0" }}
    >
      <div
        className="relative z-10 w-full"
        style={{ padding: "0 clamp(1rem, 4vw, 4rem)" }}
      >
        {/* Title */}
        <div
          className="text-center"
          style={{ marginBottom: "clamp(2rem, 5vh, 5rem)" }}
        >
          <h2
            className={`font-bold transition-all duration-1000 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold">
              Faculty Council
            </span>
          </h2>
        </div>

        {/* Shared Width Container */}
        <div className="mx-auto w-full max-w-[1200px]">
          {/* Row 1 → 2 Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{
              gap: "clamp(1rem, 3vw, 3rem)",
              marginBottom: "clamp(1rem, 3vw, 3rem)",
            }}
          >
            {facultyMembers.slice(0, 2).map((member, i) => (
              <FacultyCard
                key={member.name}
                member={member}
                index={i}
                mounted={mounted}
              />
            ))}
          </div>

          {/* Row 2 → PERFECTLY CENTERED */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{
              gap: "clamp(1rem, 3vw, 3rem)",
              marginBottom: "clamp(1rem, 3vw, 3rem)",
            }}
          >
            <div className="hidden md:block" />
            <div className="md:col-start-2">
              <FacultyCard
                member={facultyMembers[2]}
                index={2}
                mounted={mounted}
              />
            </div>
            <div className="hidden md:block" />
          </div>

          {/* Row 3 → 3 Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "clamp(1rem, 3vw, 3rem)" }}
          >
            {facultyMembers.slice(3, 6).map((member, i) => (
              <FacultyCard
                key={member.name}
                member={member}
                index={i + 3}
                mounted={mounted}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
