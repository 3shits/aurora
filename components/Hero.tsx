// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// const Hero = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <section
//       className="text-center magical-glow relative h-screen w-full overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(/hero-castle.jpg)` }}
//     >
//       <div className="absolute inset-0" />
//       <div className="absolute inset-0 shimmer pointer-events-none" />

//       <div
//         className="relative z-10 w-full flex flex-col"
//         style={{
//           height: "100dvh",
//           padding: "clamp(0.4rem, 1.5vh, 2rem) clamp(0.75rem, 2.5vw, 4rem)",
//         }}
//       >
//         {/* ── TOP BAR ── */}
//         <div
//           className="flex flex-row justify-between items-center flex-shrink-0"
//           style={{ height: "12%" }}
//         >
//           <img
//             src="/iemlogo.webp"
//             style={{ height: "90%", width: "auto", maxHeight: "7.5rem" }}
//             className="brightness-150 object-contain"
//             alt="IEM Logo"
//           />
//           <img
//             src="/uem.webp"
//             style={{ height: "100%", width: "auto", maxHeight: "7.5rem" }}
//             className="brightness-150 object-contain"
//             alt="UEM Logo"
//           />
//         </div>

//         <div
//           className="flex flex-col items-center text-center flex-1"
//           style={{
//             minHeight: 0,
//             justifyContent: "center",
//             gap: "clamp(0.6rem, 2.2vh, 2.2rem)",
//           }}
//         >
//           <div
//             className={`flex flex-col items-center transition-all duration-1000 ${
//               mounted
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 -translate-y-10"
//             }`}
//             style={{ flexShrink: 0, width: "min(92vw, 46vh)" }}
//           >
//             <img
//               style={{ width: "100%", height: "auto" }}
//               className="hover:scale-105 transition-transform duration-1000"
//               src="/auroraLogo.png"
//               alt="Aurora Logo"
//             />

//             {/* Stylized 2026 */}
//             <div
//               style={{
//                 marginTop: "clamp(0.1rem, 0.5vh, 0.5rem)",
//                 position: "relative",
//               }}
//             >
//               <span
//                 aria-hidden="true"
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   fontSize: "min(6.5vw, 4.5vh)",
//                   fontFamily: "Cinzel, serif",
//                   fontWeight: 900,
//                   letterSpacing: "0.25em",
//                   color: "rgba(251,191,36,0.25)",
//                   filter: "blur(10px)",
//                   userSelect: "none",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 2026
//               </span>
//               <span
//                 style={{
//                   fontSize: "min(6.5vw, 4.5vh)",
//                   fontFamily: "Cinzel, serif",
//                   fontWeight: 900,
//                   letterSpacing: "0.25em",
//                   background:
//                     "linear-gradient(135deg, #fef3c7 0%, #fbbf24 40%, #f59e0b 70%, #d97706 100%)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                   position: "relative",
//                   display: "block",
//                   textAlign: "center",
//                 }}
//               >
//                 2026
//               </span>
//             </div>
//           </div>

//           {/* ── TAGLINE ── */}
//           <div
//             className={`relative transition-all duration-1000 delay-200 ${
//               mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//             }`}
//             style={{ padding: "0 clamp(1rem, 4vw, 6rem)" }}
//           >
//             <p
//               style={{
//                 fontSize: "min(2.8vw, 3vh)",
//                 lineHeight: 1.25,
//                 textShadow:
//                   "0 0 40px rgba(251,191,36,0.25), 0 2px 12px rgba(0,0,0,0.8)",
//                 letterSpacing: "0.04em",
//               }}
//               className="font-[Cinzel] font-bold bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent"
//             >
//               Join us for a magical gathering
//             </p>
//             <p
//               style={{
//                 fontSize: "min(2vw, 2.2vh)",
//                 lineHeight: 1.3,
//                 letterSpacing: "0.08em",
//                 textShadow:
//                   "0 0 30px rgba(251,191,36,0.2), 0 2px 10px rgba(0,0,0,0.8)",
//                 marginTop: "clamp(0.1rem, 0.4vh, 0.4rem)",
//               }}
//               className="font-[Cinzel] text-amber-200/80"
//             >
//               of witches &amp; wizards
//             </p>

//             <div
//               className="flex items-center justify-center gap-2"
//               style={{ marginTop: "clamp(0.2rem, 0.5vh, 0.5rem)" }}
//             >
//               <div
//                 style={{
//                   height: "1px",
//                   width: "clamp(2rem, 8vw, 7rem)",
//                   background:
//                     "linear-gradient(to right, transparent, rgba(251,191,36,0.4))",
//                 }}
//               />
//               <div
//                 style={{
//                   width: "4px",
//                   height: "4px",
//                   borderRadius: "50%",
//                   background: "rgba(251,191,36,0.7)",
//                 }}
//               />
//               <div
//                 style={{
//                   height: "1px",
//                   width: "clamp(2rem, 8vw, 7rem)",
//                   background:
//                     "linear-gradient(to left, transparent, rgba(251,191,36,0.4))",
//                 }}
//               />
//             </div>
//           </div>

//           <div
//             style={{ gap: "min(2vw, 1.5vh)" }}
//             className={`flex items-center justify-center w-full transition-all duration-1000 delay-300 ${
//               mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
//             }`}
//           >
//             <div
//               style={{ height: "1px", width: "min(12vw, 8vh)" }}
//               className="bg-gradient-to-r from-transparent to-gold flex-shrink-0"
//             />
//             <img
//               src="/ieteLogo.png"
//               alt="IETE Logo"
//               style={{ width: "min(6vw, 5.5vh)", height: "auto" }}
//               className="brightness-150 flex-shrink-0"
//             />
//             <img
//               src="/sponsor.png"
//               alt="AlogoZenith"
//               style={{
//                 width: "min(6vw, 5.5vh)",
//                 height: "auto",
//                 marginTop: "min(1.5vw, 1vh)",
//               }}
//               className="brightness-200 flex-shrink-0"
//             />
//             <div
//               style={{ height: "1px", width: "min(12vw, 8vh)" }}
//               className="bg-gradient-to-l from-transparent to-gold flex-shrink-0"
//             />
//           </div>

//           <div
//             style={{ fontSize: "min(1.8vw, 2vh)", gap: "min(2vw, 1.5vh)" }}
//             className={`flex flex-wrap justify-center transition-all duration-1000 delay-500 ${
//               mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//             }`}
//           >
//             <span className="text-gray-400 hover:text-gold transition whitespace-nowrap">
//               📅 February 23–27, 2026
//             </span>
//             <span className="text-gray-400 hover:text-gold transition whitespace-nowrap">
//               📍 IEM, Gurukul Campus
//             </span>
//             <span className="text-gray-400 hover:text-gold transition whitespace-nowrap">
//               🎫 Limited Seats Available
//             </span>
//           </div>

//           <div
//             className={`transition-all duration-1000 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//           >
//             <Link href="https://forms.gle/xcv78MA3arhuQNDy8">
//               <button
//                 style={{
//                   padding: "min(1.1vw, 1.4vh) min(2.8vw, 2.2vh)",
//                   fontSize: "min(1.8vw, 2vh)",
//                   borderRadius: "9999px",
//                 }}
//                 className="group relative bg-white/5 backdrop-blur-md border border-amber-300/30 transition-all duration-500 hover:bg-white/10 hover:border-amber-200 hover:shadow-[0_0_30px_rgba(255,200,120,0.35)]"
//               >
//                 <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-amber-300/10 to-transparent" />
//                 <span
//                   style={{ letterSpacing: "clamp(0.08em, 0.25vw, 0.35em)" }}
//                   className="relative z-10 font-[Cinzel] font-extrabold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent group-hover:brightness-125 transition duration-500"
//                 >
//                   Register Now
//                 </span>
//               </button>
//             </Link>
//           </div>

//           {/* Scroll Down Indicator */}
//           <div
//             style={{ gap: "min(0.4vw, 0.3vh)" }}
//             className={`flex flex-col items-center transition-all duration-1000 delay-1000 ${
//               mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//             }`}
//           >
//             <span
//               style={{
//                 fontSize: "min(1.4vw, 1.8vh)",
//                 letterSpacing: "clamp(0.05em, 0.2vw, 0.3em)",
//                 marginBottom: "min(0.3vw, 0.35vh)",
//               }}
//               className="text-red-600/60 font-bold uppercase animate-scroll-bounce"
//             >
//               Scroll to Explore
//             </span>
//             <div className="flex flex-col" style={{ gap: "min(0.3vw, 0.3vh)" }}>
//               <div
//                 style={{
//                   borderLeft: "min(1.1vw, 1.3vh) solid transparent",
//                   borderRight: "min(1.1vw, 1.3vh) solid transparent",
//                   borderTop: "min(1.2vw, 1.4vh) solid rgba(220,38,38,0.7)",
//                   width: 0,
//                   height: 0,
//                 }}
//                 className="animate-arrow-bounce"
//               />
//               <div
//                 style={{
//                   borderLeft: "min(1.1vw, 1.3vh) solid transparent",
//                   borderRight: "min(1.1vw, 1.3vh) solid transparent",
//                   borderTop: "min(1.2vw, 1.4vh) solid rgba(220,38,38,0.6)",
//                   width: 0,
//                   height: 0,
//                 }}
//                 className="animate-arrow-bounce-delayed"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll-bounce {
//           0%,
//           100% {
//             transform: translateY(0);
//             opacity: 0;
//           }
//           50% {
//             transform: translateY(6px);
//             opacity: 1;
//           }
//         }
//         @keyframes arrow-bounce {
//           0%,
//           100% {
//             transform: translateY(0);
//             opacity: 0.4;
//           }
//           50% {
//             transform: translateY(4px);
//             opacity: 1;
//           }
//         }
//         @keyframes arrow-bounce-delayed {
//           0%,
//           100% {
//             transform: translateY(0);
//             opacity: 0.3;
//           }
//           50% {
//             transform: translateY(4px);
//             opacity: 0.7;
//           }
//         }
//         .animate-scroll-bounce {
//           animation: scroll-bounce 2s ease-in-out infinite;
//         }
//         .animate-arrow-bounce {
//           animation: arrow-bounce 2s ease-in-out infinite;
//         }
//         .animate-arrow-bounce-delayed {
//           animation: arrow-bounce-delayed 2s ease-in-out 0.3s infinite;
//         }
//         .delay-200 {
//           transition-delay: 200ms;
//         }
//         .delay-300 {
//           transition-delay: 300ms;
//         }
//         .delay-500 {
//           transition-delay: 500ms;
//         }
//         .delay-700 {
//           transition-delay: 700ms;
//         }
//         .delay-1000 {
//           transition-delay: 1000ms;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;
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
      className="text-center magical-glow relative h-screen w-full overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/hero-castle.jpg)` }}
    >
      <div className="absolute inset-0" />
      <div className="absolute inset-0 shimmer pointer-events-none" />

      <div
        className="relative z-10 w-full flex flex-col"
        style={{
          height: "100dvh",
          padding: "clamp(0.5rem, 2vh, 2rem) clamp(0.75rem, 3vw, 4rem)",
        }}
      >
        {/* ── TOP BAR ── */}
        <div
          className="flex flex-row justify-between items-center flex-shrink-0"
          style={{ height: "clamp(3.5rem, 12vh, 7rem)" }}
        >
          <img
            src="/iemlogo.webp"
            style={{ height: "85%", width: "auto", maxHeight: "6rem" }}
            className="brightness-150 object-contain"
            alt="IEM Logo"
          />
          <img
            src="/uem.webp"
            style={{ height: "85%", width: "auto", maxHeight: "6rem" }}
            className="brightness-150 object-contain"
            alt="UEM Logo"
          />
        </div>

        {/* ── CENTER CONTENT ── */}
        <div
          className="flex flex-col items-center text-center flex-1"
          style={{
            minHeight: 0,
            justifyContent: "center",
            gap: "clamp(0.5rem, 2vh, 2rem)",
          }}
        >
          {/* Aurora Logo + 2026 */}
          <div
            className={`flex flex-col items-center transition-all duration-1000 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
            style={{
              flexShrink: 0,
              /* On portrait mobile vw wins (wide logo), on landscape vh wins (tall constraint) */
              width: "clamp(10rem, 80vw, 55vh)",
            }}
          >
            <img
              style={{ width: "100%", height: "auto" }}
              className="hover:scale-105 transition-transform duration-1000"
              src="/auroraLogo.png"
              alt="Aurora Logo"
            />

            {/* 2026 */}
            <div
              style={{
                marginTop: "clamp(0.15rem, 0.6vh, 0.5rem)",
                position: "relative",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  fontSize: "clamp(1rem, 7vw, 4.5vh)",
                  fontFamily: "Cinzel, serif",
                  fontWeight: 900,
                  letterSpacing: "0.25em",
                  color: "rgba(251,191,36,0.25)",
                  filter: "blur(10px)",
                  userSelect: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                2026
              </span>
              <span
                style={{
                  fontSize: "clamp(1rem, 7vw, 4.5vh)",
                  fontFamily: "Cinzel, serif",
                  fontWeight: 900,
                  letterSpacing: "0.25em",
                  background:
                    "linear-gradient(135deg, #fef3c7 0%, #fbbf24 40%, #f59e0b 70%, #d97706 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  position: "relative",
                  display: "block",
                  textAlign: "center",
                }}
              >
                2026
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "clamp(0.3rem, 1vw, 0.8rem)",
                  marginTop: "clamp(0.1rem, 0.4vh, 0.35rem)",
                }}
              >
                <div
                  style={{
                    height: "1px",
                    flex: 1,
                    maxWidth: "clamp(2rem, 8vw, 8rem)",
                    background:
                      "linear-gradient(to right, transparent, rgba(251,191,36,0.5))",
                  }}
                />
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "rgba(251,191,36,0.8)",
                    boxShadow: "0 0 6px rgba(251,191,36,0.8)",
                  }}
                />
                <div
                  style={{
                    height: "1px",
                    flex: 1,
                    maxWidth: "clamp(2rem, 8vw, 8rem)",
                    background:
                      "linear-gradient(to left, transparent, rgba(251,191,36,0.5))",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ── TAGLINE ── */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ padding: "0 clamp(0.5rem, 4vw, 6rem)" }}
          >
            <p
              style={{
                fontSize: "clamp(0.75rem, 3.5vw, 3vh)",
                lineHeight: 1.25,
                letterSpacing: "0.04em",
                textShadow:
                  "0 0 40px rgba(251,191,36,0.25), 0 2px 12px rgba(0,0,0,0.8)",
              }}
              className="font-[Cinzel] font-bold bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent"
            >
              Join us for a magical gathering
            </p>
            <p
              style={{
                fontSize: "clamp(0.65rem, 2.5vw, 2.2vh)",
                lineHeight: 1.3,
                letterSpacing: "0.08em",
                marginTop: "clamp(0.1rem, 0.4vh, 0.4rem)",
                textShadow:
                  "0 0 30px rgba(251,191,36,0.2), 0 2px 10px rgba(0,0,0,0.8)",
              }}
              className="font-[Cinzel] text-amber-200/80"
            >
              of witches &amp; wizards
            </p>
            <div
              className="flex items-center justify-center gap-2"
              style={{ marginTop: "clamp(0.2rem, 0.6vh, 0.5rem)" }}
            >
              <div
                style={{
                  height: "1px",
                  width: "clamp(1.5rem, 6vw, 7rem)",
                  background:
                    "linear-gradient(to right, transparent, rgba(251,191,36,0.4))",
                }}
              />
              <div
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "rgba(251,191,36,0.7)",
                }}
              />
              <div
                style={{
                  height: "1px",
                  width: "clamp(1.5rem, 6vw, 7rem)",
                  background:
                    "linear-gradient(to left, transparent, rgba(251,191,36,0.4))",
                }}
              />
            </div>
          </div>

          {/* Sponsor logos row */}
          <div
            style={{ gap: "clamp(0.5rem, 2vw, 1.5vh)" }}
            className={`flex items-center justify-center w-full transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div
              style={{ height: "1px", width: "clamp(2rem, 10vw, 8vh)" }}
              className="bg-gradient-to-r from-transparent to-gold flex-shrink-0"
            />
            <img
              src="/ieteLogo.png"
              alt="IETE Logo"
              style={{ width: "clamp(1.8rem, 6vw, 5.5vh)", height: "auto" }}
              className="brightness-150 flex-shrink-0"
            />
            <img
              src="/sponsor.png"
              alt="AlogoZenith"
              style={{
                width: "clamp(1.8rem, 6vw, 5.5vh)",
                height: "auto",
                marginTop: "clamp(0.3rem, 1vw, 1vh)",
              }}
              className="brightness-200 flex-shrink-0"
            />
            <div
              style={{ height: "1px", width: "clamp(2rem, 10vw, 8vh)" }}
              className="bg-gradient-to-l from-transparent to-gold flex-shrink-0"
            />
          </div>

          {/* Event info */}
          <div
            style={{
              fontSize: "clamp(0.6rem, 2.2vw, 2vh)",
              gap: "clamp(0.4rem, 2vw, 1.5vh)",
            }}
            className={`flex flex-wrap justify-center transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-gray-400 hover:text-gold transition whitespace-nowrap">
              📅 February 23–27, 2026
            </span>
            <span className="text-gray-400 hover:text-gold transition whitespace-nowrap">
              📍 IEM, Gurukul Campus
            </span>
            <span className="text-gray-400 hover:text-gold transition whitespace-nowrap">
              🎫 Limited Seats Available
            </span>
          </div>

          {/* Register Button */}
          <div
            className={`transition-all duration-1000 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <Link href="https://forms.gle/xcv78MA3arhuQNDy8">
              <button
                style={{
                  padding:
                    "clamp(0.4rem, 1.2vh, 1.2rem) clamp(1rem, 3.5vw, 3.5rem)",
                  fontSize: "clamp(0.65rem, 2vw, 1.8vh)",
                  borderRadius: "9999px",
                }}
                className="group relative bg-white/5 backdrop-blur-md border border-amber-300/30 transition-all duration-500 hover:bg-white/10 hover:border-amber-200 hover:shadow-[0_0_30px_rgba(255,200,120,0.35)]"
              >
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-amber-300/10 to-transparent" />
                <span
                  style={{ letterSpacing: "clamp(0.06em, 0.25vw, 0.35em)" }}
                  className="relative z-10 font-[Cinzel] font-extrabold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent group-hover:brightness-125 transition duration-500"
                >
                  Register Now
                </span>
              </button>
            </Link>
          </div>

          {/* Scroll Down Indicator */}
          <div
            style={{ gap: "clamp(0.15rem, 0.4vw, 0.3vh)" }}
            className={`flex flex-col items-center transition-all duration-1000 delay-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span
              style={{
                fontSize: "clamp(0.5rem, 1.8vw, 1.8vh)",
                letterSpacing: "clamp(0.05em, 0.2vw, 0.3em)",
                marginBottom: "clamp(0.1rem, 0.4vw, 0.35vh)",
              }}
              className="text-red-600/60 font-bold uppercase animate-scroll-bounce"
            >
              Scroll to Explore
            </span>
            <div
              className="flex flex-col"
              style={{ gap: "clamp(0.1rem, 0.3vw, 0.3vh)" }}
            >
              <div
                style={{
                  borderLeft: "clamp(6px, 1.1vw, 1.3vh) solid transparent",
                  borderRight: "clamp(6px, 1.1vw, 1.3vh) solid transparent",
                  borderTop:
                    "clamp(7px, 1.2vw, 1.4vh) solid rgba(220,38,38,0.7)",
                  width: 0,
                  height: 0,
                }}
                className="animate-arrow-bounce"
              />
              <div
                style={{
                  borderLeft: "clamp(6px, 1.1vw, 1.3vh) solid transparent",
                  borderRight: "clamp(6px, 1.1vw, 1.3vh) solid transparent",
                  borderTop:
                    "clamp(7px, 1.2vw, 1.4vh) solid rgba(220,38,38,0.6)",
                  width: 0,
                  height: 0,
                }}
                className="animate-arrow-bounce-delayed"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-bounce {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            transform: translateY(6px);
            opacity: 1;
          }
        }
        @keyframes arrow-bounce {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(4px);
            opacity: 1;
          }
        }
        @keyframes arrow-bounce-delayed {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(4px);
            opacity: 0.7;
          }
        }
        .animate-scroll-bounce {
          animation: scroll-bounce 2s ease-in-out infinite;
        }
        .animate-arrow-bounce {
          animation: arrow-bounce 2s ease-in-out infinite;
        }
        .animate-arrow-bounce-delayed {
          animation: arrow-bounce-delayed 2s ease-in-out 0.3s infinite;
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
      `}</style>
    </section>
  );
};

export default Hero;
