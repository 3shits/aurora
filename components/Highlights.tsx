"use client";
const Highlights = () => {
  return (
    <section className="rounded-2xl mx10 p-12 md:p-16 parchment-bg relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url(/eventbg.jpg)" }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 shimmer-subtle pointer-events-none" />

      {/* Flowing magical lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,100 Q 150,50 300,100 T 600,100"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-draw"
        />
        <path
          d="M 100,200 Q 250,150 400,200 T 700,200"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-draw"
          style={{ animationDelay: "0.5s" }}
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <h2 className="text-4xl font-bold text-gold mb-12 text-center font-serif relative z-10 animate-fade-in opacity-0">
        What to Expect
      </h2>

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        <div
          className="flex gap-4 group animate-slide-up opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            🎭
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gold mb-2 group-hover:text-yellow-300 transition-colors">
              Live Entertainment
            </h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
              Experience magical performances including the Weird Sisters
              concert, Celestina Warbeck show, and interactive theatre
              performances of famous wizarding tales.
            </p>
            {/* Decorative underline that appears on hover */}
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-gold to-transparent transition-all duration-500 mt-2" />
          </div>
        </div>

        <div
          className="flex gap-4 group animate-slide-up opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            🍖
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gold mb-2 group-hover:text-yellow-300 transition-colors">
              Magical Cuisine
            </h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
              Savor dishes from the Hogwarts kitchen including Butterbeer,
              Pumpkin Pasties, Treacle Tart, and more enchanted delicacies
              throughout the event.
            </p>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-gold to-transparent transition-all duration-500 mt-2" />
          </div>
        </div>

        <div
          className="flex gap-4 group animate-slide-up opacity-0"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            🏰
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gold mb-2 group-hover:text-yellow-300 transition-colors">
              Castle Tours
            </h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
              Explore the halls of Hogwarts with guided tours of restricted
              areas including the Room of Requirement, Astronomy Tower, and the
              Chamber of Secrets.
            </p>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-gold to-transparent transition-all duration-500 mt-2" />
          </div>
        </div>

        <div
          className="flex gap-4 group animate-slide-up opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            🎁
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gold mb-2 group-hover:text-yellow-300 transition-colors">
              Magical Marketplace
            </h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
              Shop for wands, robes, potion ingredients, and rare magical
              artifacts at Diagon Alley pop-up shops set up throughout the
              grounds.
            </p>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-gold to-transparent transition-all duration-500 mt-2" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes draw {
          0% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer-subtle {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-draw {
          animation: draw 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .shimmer-subtle {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(218, 165, 32, 0.08) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer-subtle 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Highlights;
