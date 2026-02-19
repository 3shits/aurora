"use client";

const Footer = () => {
  return (
    <footer
      className="relative w-full bg-black/40 backdrop-blur-sm border-t border-gold/20"
      style={{ padding: "clamp(2rem, 5vh, 4rem) 0" }}
    >
      <div style={{ width: "100%", padding: "0 clamp(1rem, 4vw, 4rem)" }}>
        {/* Two columns — Contact | Map */}
        <div
          className="flex flex-col md:flex-row md:justify-between"
          style={{ gap: "clamp(2rem, 5vw, 5rem)" }}
        >
          {/* ── LEFT: Contact ── */}
          <div
            className="flex flex-col"
            style={{ gap: "clamp(1rem, 2.5vh, 1.5rem)", flex: "1 1 0" }}
          >
            <div>
              <h3
                className="font-bold text-gold"
                style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                  marginBottom: "clamp(0.5rem, 1vh, 0.75rem)",
                }}
              >
                Contact Us
              </h3>
              <div className="h-px w-16 bg-gold/50" />
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 text-gray-300 hover:text-gold transition-colors duration-300">
              <span className="text-gold mt-1">📧</span>
              <div>
                <p
                  className="text-gray-400"
                  style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.9rem)" }}
                >
                  Email
                </p>
                <a
                  href="mailto:iemiete2022@gmail.com"
                  style={{ fontSize: "clamp(0.8rem, 1.4vw, 1.1rem)" }}
                >
                  iemiete2022@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div>
              <div className="flex gap-3 items-center">
                <span className="text-gold">📞</span>
                <p
                  className="text-gray-400"
                  style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.9rem)" }}
                >
                  Phone
                </p>
              </div>

              <div
                className="ml-7 flex flex-col"
                style={{
                  gap: "clamp(0.15rem, 0.5vh, 0.35rem)",
                  marginTop: "clamp(0.2rem, 0.5vh, 0.4rem)",
                }}
              >
                {["+91 9748052998", "+91 7980485538", "+91 9038513685"].map(
                  (num) => (
                    <a
                      key={num}
                      href={`tel:${num.replace(/\s/g, "")}`}
                      className="text-gray-300 hover:text-gold transition-colors duration-300"
                      style={{ fontSize: "clamp(0.8rem, 1.4vw, 1.1rem)" }}
                    >
                      {num}
                    </a>
                  ),
                )}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 text-gray-300">
              <span className="text-gold mt-1">📍</span>
              <div>
                <p
                  className="text-gray-400"
                  style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.9rem)" }}
                >
                  Location
                </p>
                <p style={{ fontSize: "clamp(0.8rem, 1.4vw, 1.1rem)" }}>
                  IEM Gurukul Campus
                  <br />
                  Kolkata, West Bengal
                </p>
              </div>
            </div>

            {/* Instagram */}
            <div>
              <p
                className="text-gray-400"
                style={{
                  fontSize: "clamp(0.7rem, 1.1vw, 0.9rem)",
                  marginBottom: "clamp(0.3rem, 0.8vh, 0.6rem)",
                }}
              >
                Follow Us
              </p>

              <a
                href="https://www.instagram.com/iemietestudentsforum?igsh=NWVmc3Q5dXB3YzB5"
                className="inline-flex items-center justify-center border border-gold/30 rounded text-gold/60 hover:text-gold hover:border-gold transition-all duration-300"
                style={{
                  width: "clamp(2rem, 3.5vw, 2.8rem)",
                  height: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontSize: "clamp(1rem, 1.6vw, 1.4rem)",
                }}
              >
                📷
              </a>
            </div>

            {/* Refund Policy */}
            <div>
              <p
                className="text-gray-400"
                style={{
                  fontSize: "clamp(0.7rem, 1.1vw, 0.9rem)",
                  marginBottom: "clamp(0.15rem, 0.4vh, 0.3rem)",
                }}
              >
                Refund Policy
              </p>
              <p
                className="text-gray-400"
                style={{
                  fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
                  maxWidth: "38ch",
                  lineHeight: 1.6,
                }}
              >
                Registration fees are non-refundable under any circumstances.
                Please make sure to fill in the form carefully before submitting
                and completing the payment.
              </p>
            </div>
          </div>

          {/* ── RIGHT: Map ── */}
          <div
            className="flex flex-col"
            style={{ gap: "clamp(1rem, 2.5vh, 1.5rem)", flex: "1 1 0" }}
          >
            <div>
              <h3
                className="font-bold text-gold"
                style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                  marginBottom: "clamp(0.5rem, 1vh, 0.75rem)",
                }}
              >
                Find Us
              </h3>
              <div className="h-px w-16 bg-gold/50" />
            </div>

            <div
              className="relative border-2 border-gold/20 rounded-lg overflow-hidden w-full"
              style={{ height: "clamp(12rem, 30vh, 26rem)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1225697363902!2d88.4312934752682!3d22.57451863290014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751153ddb371%3A0x816e6fee5a5aac55!2sIEM%20Gurukul%20Building!5e0!3m2!1sen!2sin!4v1771089036642!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="border-t border-gold/10 flex flex-col md:flex-row md:justify-between md:items-center"
          style={{
            marginTop: "clamp(1.5rem, 4vh, 3rem)",
            paddingTop: "clamp(1rem, 3vh, 2rem)",
            gap: "clamp(1rem, 2vh, 1.5rem)",
          }}
        >
          {/* Logos */}
          <div
            className="flex items-center flex-wrap"
            style={{ gap: "clamp(0.5rem, 1.5vw, 1.2rem)" }}
          >
            {[
              { src: "/iemlogo.webp", alt: "IEM Logo" },
              { src: "/uem.webp", alt: "UEM Logo" },
              { src: "/ieteLogo.png", alt: "IETE Logo" },
              { src: "/sponsor.png", alt: "Algozenith" },
            ].map((logo, i, arr) => (
              <div
                key={logo.alt}
                className="flex items-center"
                style={{ gap: "clamp(0.5rem, 1.5vw, 1.2rem)" }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="brightness-150 opacity-80 object-contain"
                  style={{
                    height: "clamp(1.8rem, 3.5vw, 3rem)",
                    width: "auto",
                  }}
                />
                {i < arr.length - 1 && (
                  <div
                    className="bg-gold/30"
                    style={{
                      width: "1px",
                      height: "clamp(1.5rem, 3vw, 2.5rem)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p
              className="text-gray-400"
              style={{ fontSize: "clamp(0.65rem, 1.1vw, 0.9rem)" }}
            >
              &copy; 2026 Aurora - IETE IEM. All rights reserved.
            </p>
            <p
              className="text-gold/60"
              style={{
                fontSize: "clamp(0.6rem, 0.9vw, 0.8rem)",
                marginTop: "clamp(0.1rem, 0.3vh, 0.25rem)",
              }}
            >
              Organized by IETE Students&apos; Forum, IEM
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .map-iframe {
          filter: grayscale(100%) brightness(0.7);
          transition: filter 0.5s ease;
        }
        .map-iframe:hover {
          filter: grayscale(0%) brightness(1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
