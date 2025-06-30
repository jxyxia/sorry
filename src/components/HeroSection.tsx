import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundGradient?: string;
}

const HeroSection = ({
  title = "I'm Sorry, My Love",
  subtitle = "From the bottom of my heart",
  backgroundGradient = "bg-gradient-to-b from-pink-100 via-purple-100 to-pink-50",
}: HeroSectionProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className={`relative min-h-[700px] w-full overflow-hidden ${backgroundGradient} bg-background`}
    >
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=20')] opacity-10 bg-repeat mix-blend-soft-light"></div>

      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && (
          <>
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`heart-${i}`}
                className="absolute text-pink-300"
                initial={{
                  x: Math.random() * 100 + (i % 2 === 0 ? -50 : 50),
                  y: 700 + Math.random() * 100,
                  opacity: 0.3 + Math.random() * 0.7,
                  scale: 0.5 + Math.random() * 1.5,
                }}
                animate={{
                  y: -100,
                  rotate: [-10, 10, -10],
                }}
                transition={{
                  duration: 10 + Math.random() * 15,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "linear",
                }}
              >
                <Heart
                  size={i % 3 === 0 ? 24 : i % 3 === 1 ? 16 : 20}
                  fill="currentColor"
                />
              </motion.div>
            ))}
          </>
        )}
      </div>

      {/* Falling rose petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && (
          <>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`petal-${i}`}
                className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-pink-300 to-pink-200"
                style={{
                  clipPath: "ellipse(50% 100% at 50% 0%)",
                  transform: "rotate(45deg)",
                }}
                initial={{
                  x:
                    Math.random() *
                    (typeof window !== "undefined" ? window.innerWidth : 1200),
                  y: -20,
                  opacity: 0.6 + Math.random() * 0.4,
                  scale: 0.8 + Math.random() * 1.2,
                }}
                animate={{
                  y:
                    (typeof window !== "undefined" ? window.innerHeight : 800) +
                    50,
                  x: (i % 2 === 0 ? "+=" : "-=") + Math.random() * 200,
                  rotate: [45, 90, 135, 180, 225],
                }}
                transition={{
                  duration: 8 + Math.random() * 10,
                  repeat: Infinity,
                  delay: i * 1.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1
            className="mb-6 font-serif text-5xl font-bold text-rose-800 md:text-7xl"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            {title}
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-700 md:text-2xl">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center mt-8 space-x-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 127, 127, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 text-white transition-colors rounded-full bg-gradient-to-r from-pink-400 to-coral-400 hover:from-pink-500 hover:to-coral-500"
            >
              Read My Apology
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto text-white"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
