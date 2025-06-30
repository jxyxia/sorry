import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimationContextType {
  heartsEnabled: boolean;
  petalsEnabled: boolean;
  sparklesEnabled: boolean;
  toggleHearts: () => void;
  togglePetals: () => void;
  toggleSparkles: () => void;
  animationDensity: number;
  setAnimationDensity: (density: number) => void;
  animationSpeed: number;
  setAnimationSpeed: (speed: number) => void;
}

const defaultContext: AnimationContextType = {
  heartsEnabled: true,
  petalsEnabled: true,
  sparklesEnabled: true,
  toggleHearts: () => {},
  togglePetals: () => {},
  toggleSparkles: () => {},
  animationDensity: 0.5,
  setAnimationDensity: () => {},
  animationSpeed: 1,
  setAnimationSpeed: () => {},
};

const AnimationContext = createContext<AnimationContextType>(defaultContext);

export const useAnimations = () => useContext(AnimationContext);

interface AnimationProviderProps {
  children: ReactNode;
}

const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const [heartsEnabled, setHeartsEnabled] = useState(true);
  const [petalsEnabled, setPetalsEnabled] = useState(true);
  const [sparklesEnabled, setSparklesEnabled] = useState(true);
  const [animationDensity, setAnimationDensity] = useState(0.5);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [windowSize, setWindowSize] = useState({
    width: 1200,
    height: 800,
  });
  const [mounted, setMounted] = useState(false);

  // Update window size on resize and handle mounting
  useEffect(() => {
    setMounted(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle functions
  const toggleHearts = () => setHeartsEnabled((prev) => !prev);
  const togglePetals = () => setPetalsEnabled((prev) => !prev);
  const toggleSparkles = () => setSparklesEnabled((prev) => !prev);

  // Generate hearts based on density
  const heartCount = Math.floor(20 * animationDensity);
  const petalCount = Math.floor(15 * animationDensity);
  const sparkleCount = Math.floor(25 * animationDensity);

  return (
    <AnimationContext.Provider
      value={{
        heartsEnabled,
        petalsEnabled,
        sparklesEnabled,
        toggleHearts,
        togglePetals,
        toggleSparkles,
        animationDensity,
        setAnimationDensity,
        animationSpeed,
        setAnimationSpeed,
      }}
    >
      <div className="animation-container relative w-full h-full overflow-hidden">
        {/* Hearts Animation */}
        {heartsEnabled && mounted && (
          <div className="hearts-container absolute inset-0 pointer-events-none z-10">
            <AnimatePresence>
              {Array.from({ length: heartCount }).map((_, index) => {
                const size = Math.random() * 20 + 10;
                const xPos = Math.random() * windowSize.width;
                const duration = (Math.random() * 5 + 5) / animationSpeed;
                const delay = Math.random() * 10;
                const opacity = Math.random() * 0.5 + 0.3;

                return (
                  <motion.div
                    key={`heart-${index}`}
                    className="absolute"
                    initial={{
                      y: windowSize.height + 20,
                      x: xPos,
                      opacity: 0,
                    }}
                    animate={{
                      y: -100,
                      x: xPos + (Math.random() * 100 - 50),
                      opacity: opacity,
                      rotate: Math.random() * 360,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: duration,
                      delay: delay,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    style={{ width: size, height: size }}
                  >
                    <div
                      className="heart-shape w-full h-full bg-pink-300 opacity-70"
                      style={{
                        clipPath:
                          "path('M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z')",
                      }}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Rose Petals Animation */}
        {petalsEnabled && mounted && (
          <div className="petals-container absolute inset-0 pointer-events-none z-20">
            <AnimatePresence>
              {Array.from({ length: petalCount }).map((_, index) => {
                const size = Math.random() * 25 + 15;
                const xPos = Math.random() * windowSize.width;
                const duration = (Math.random() * 8 + 10) / animationSpeed;
                const delay = Math.random() * 15;
                const rotate = Math.random() * 360;
                const swayAmount = 150;

                return (
                  <motion.div
                    key={`petal-${index}`}
                    className="absolute"
                    initial={{
                      y: -50,
                      x: xPos,
                      opacity: 0,
                      rotate: rotate,
                    }}
                    animate={{
                      y: windowSize.height + 50,
                      x: xPos + (Math.random() * swayAmount - swayAmount / 2),
                      opacity: 0.8,
                      rotate: rotate + Math.random() * 180,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: duration,
                      delay: delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div
                      className="petal-shape"
                      style={{
                        width: size,
                        height: size * 1.2,
                        backgroundColor: `rgba(${212 + Math.random() * 43}, ${165 + Math.random() * 30}, ${165 + Math.random() * 30}, 0.7)`,
                        borderRadius: "100% 0 100% 0",
                        transform: "rotate(45deg)",
                      }}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Sparkle Effects */}
        {sparklesEnabled && mounted && (
          <div className="sparkles-container absolute inset-0 pointer-events-none z-30">
            <AnimatePresence>
              {Array.from({ length: sparkleCount }).map((_, index) => {
                const size = Math.random() * 6 + 2;
                const xPos = Math.random() * windowSize.width;
                const yPos = Math.random() * windowSize.height;
                const duration = (Math.random() * 2 + 1) / animationSpeed;
                const delay = Math.random() * 5;

                return (
                  <motion.div
                    key={`sparkle-${index}`}
                    className="absolute rounded-full bg-yellow-200"
                    style={{
                      width: size,
                      height: size,
                      left: xPos,
                      top: yPos,
                      boxShadow: "0 0 5px 2px rgba(255, 215, 0, 0.7)",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={[
                      { opacity: 0.8, scale: 1 },
                      { opacity: 0, scale: 0 },
                    ]}
                    transition={{
                      duration: duration,
                      delay: delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {children}
      </div>
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
