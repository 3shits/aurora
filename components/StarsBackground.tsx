"use client";

const StarsBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
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

      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default StarsBackground;