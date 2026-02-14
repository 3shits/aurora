"use client";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black/40 backdrop-blur-sm border-t border-gold/20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Us Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4">
                Contact Us
              </h3>
              <div className="h-px w-20 bg-gold/50 mb-6"></div>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-3 text-gray-300 hover:text-gold transition-colors duration-300">
                <span className="text-gold mt-1">📧</span>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:aurora@iem.edu"
                    className="text-base md:text-lg"
                  >
                    iemiete2022@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 text-gray-300 hover:text-gold transition-colors duration-300">
                <span className="text-gold mt-1">📞</span>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+917318698164" className="text-base md:text-lg">
                    +91 7318698164
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 text-gray-300">
                <span className="text-gold mt-1">📍</span>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-base md:text-lg">
                    IEM Gurukul Campus
                    <br />
                    Kolkata, West Bengal
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-3">Follow Us</p>
              <a
                href="https://www.instagram.com/iemietestudentsforum?igsh=NWVmc3Q5dXB3YzB5"
                className="w-10 h-10 border border-gold/30 rounded flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-all duration-300"
              >
                <span className="text-xl">📷</span>
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4">
                Find Us
              </h3>
              <div className="h-px w-20 bg-gold/50 mb-6"></div>
            </div>

            <div className="relative h-64 md:h-80 border-2 border-gold/20 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1225697363902!2d88.4312934752682!3d22.57451863290014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751153ddb371%3A0x816e6fee5a5aac55!2sIEM%20Gurukul%20Building!5e0!3m2!1sen!2sin!4v1771089036642!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              ></iframe>

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/iemlogo.webp"
                alt="IEM Logo"
                className="w-12 h-10 brightness-150 opacity-80"
              />
              <div className="h-8 w-px bg-gold/30"></div>
              <img
                src="/uem.webp"
                alt="UEM Logo"
                className="w-14 h-12 brightness-150 opacity-80"
              />
              <div className="h-8 w-px bg-gold/30"></div>
              <img
                src="/ieteLogo.png"
                alt="IETE Logo"
                className="w-16 h-auto brightness-150 opacity-80"
              />
              <div className="h-8 w-px bg-gold/30"></div>
              <img
                src="/sponsor.png"
                alt="Algozenith"
                className="w-16 h-auto brightness-150 opacity-80"
              />
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                &copy; 2026 Aurora - IETE IEM. All rights reserved.
              </p>
              <p className="text-gold/60 text-xs mt-1">
                Organized by IETE Students&apos; Chapter, IEM
              </p>
            </div>
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
