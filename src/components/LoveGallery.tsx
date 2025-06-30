import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface LoveReason {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface LoveGalleryProps {
  reasons?: LoveReason[];
}

const defaultReasons: LoveReason[] = [
  {
    id: 1,
    title: "Your Smile",
    description:
      "The way your smile lights up the room and makes my heart skip a beat every single time.",
    icon: "😊",
    color: "bg-gradient-to-br from-pink-200 to-pink-300",
  },
  {
    id: 2,
    title: "Your Kindness",
    description:
      "How you always put others first and show compassion in everything you do.",
    icon: "💖",
    color: "bg-gradient-to-br from-purple-200 to-purple-300",
  },
  {
    id: 3,
    title: "Your Strength",
    description:
      "The incredible resilience you show when facing challenges, inspiring me every day.",
    icon: "💪",
    color: "bg-gradient-to-br from-blue-200 to-blue-300",
  },
  {
    id: 4,
    title: "Your Laughter",
    description:
      "The sound of your laughter is my favorite melody in the whole world.",
    icon: "😂",
    color: "bg-gradient-to-br from-yellow-200 to-yellow-300",
  },
  {
    id: 5,
    title: "Your Support",
    description:
      "How you always believe in me, even when I don't believe in myself.",
    icon: "🙌",
    color: "bg-gradient-to-br from-green-200 to-green-300",
  },
  {
    id: 6,
    title: "Your Intelligence",
    description:
      "Your brilliant mind and the way you see the world in such a unique perspective.",
    icon: "🧠",
    color: "bg-gradient-to-br from-indigo-200 to-indigo-300",
  },
];

const LoveGallery: React.FC<LoveGalleryProps> = ({
  reasons = defaultReasons,
}) => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    if (flippedCards.includes(id)) {
      setFlippedCards(flippedCards.filter((cardId) => cardId !== id));
    } else {
      setFlippedCards([...flippedCards, id]);
    }
  };

  const isFlipped = (id: number) => flippedCards.includes(id);

  return (
    <div className="bg-gradient-to-br from-[#FFF8DC] to-[#E6E6FA] p-8 rounded-xl shadow-lg">
      <div className="text-center mb-10">
        <motion.h2
          className="font-['Dancing_Script'] text-4xl md:text-5xl text-[#8B4B8C] mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why I Love You
        </motion.h2>
        <motion.p
          className="text-[#6B6B6B] font-['Montserrat'] max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Click on each heart to discover the countless reasons why you mean the
          world to me
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason) => (
          <motion.div
            key={reason.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: reason.id * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            style={{ perspective: "1000px" }}
          >
            <div
              className={`relative w-full h-64 cursor-pointer transition-transform duration-700 ${isFlipped(reason.id) ? "[transform:rotateY(180deg)]" : ""}`}
              style={{ transformStyle: "preserve-3d" }}
              onClick={() => toggleCard(reason.id)}
            >
              {/* Front of card */}
              <div
                className={`absolute w-full h-full rounded-2xl ${reason.color} shadow-lg flex flex-col items-center justify-center p-6 border-2 border-white/30`}
                style={{ backfaceVisibility: "hidden" }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {reason.icon}
                </motion.div>
                <h3 className="font-['Dancing_Script'] text-2xl text-[#8B4B8C] font-bold">
                  {reason.title}
                </h3>
                <div className="absolute bottom-4 right-4">
                  <Heart className="h-6 w-6 text-[#FF7F7F] animate-pulse" />
                </div>
              </div>

              {/* Back of card */}
              <div
                className="absolute w-full h-full rounded-2xl bg-white/90 shadow-lg flex flex-col items-center justify-center p-6 border-2 border-[#FFB6C1]/50"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <p className="font-['Montserrat'] text-[#6B6B6B] text-center leading-relaxed">
                  {reason.description}
                </p>
                <motion.div
                  className="absolute bottom-4 right-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Heart className="h-6 w-6 text-[#FF7F7F] fill-[#FF7F7F]" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LoveGallery;
