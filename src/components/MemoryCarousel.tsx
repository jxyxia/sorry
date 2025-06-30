import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface MemoryItem {
  id: number;
  image: string;
  caption: string;
  date: string;
  milestone: string;
}

interface MemoryCarouselProps {
  memories?: MemoryItem[];
  autoPlay?: boolean;
  interval?: number;
}

const MemoryCarousel = ({
  memories = [
    {
      id: 1,
      image: "/images/img1.jpg",
      caption: "Our beautiful moments together",
      date: "Forever in my heart",
      milestone: "Special Memory",
    },
    {
      id: 2,
      image: "/images/img2.jpg",
      caption: "Every smile you share lights up my world",
      date: "Always cherished",
      milestone: "Precious Moment",
    },
    {
      id: 3,
      image: "/images/img3.jpg",
      caption: "Adventures we've shared, memories we've made",
      date: "Unforgettable",
      milestone: "Journey Together",
    },
    {
      id: 4,
      image: "/images/img4.jpg",
      caption: "In your eyes, I found my home",
      date: "Eternal love",
      milestone: "Heart Connection",
    },
    {
      id: 5,
      image: "/images/img5.jpg",
      caption: "Together we create magic in every moment",
      date: "Our story continues",
      milestone: "Love Story",
    },
  ],
  autoPlay = true,
  interval = 5000,
}: MemoryCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % memories.length);
      }, interval);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isAutoPlaying, interval, memories.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? memories.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % memories.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 bg-gradient-to-b from-[#FFF8DC]/30 to-[#E6E6FA]/30 rounded-xl">
      <h2 className="text-center font-['Dancing_Script'] text-4xl md:text-5xl text-[#8B4B8C] mb-8">
        Our Memory Lane
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex justify-center items-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-[#FFB6C1]/30 shadow-lg transform rotate-[-2deg] mb-8">
              <CardContent className="p-0 relative">
                <div className="relative pt-[75%] overflow-hidden rounded-t-lg bg-gradient-to-br from-[#FFB6C1]/10 to-[#E6E6FA]/10">
                  <img
                    src={memories[currentIndex].image}
                    alt={memories[currentIndex].caption}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6 bg-white/90">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#FF7F7F] font-semibold">
                      {memories[currentIndex].milestone}
                    </span>
                    <span className="text-[#6B6B6B] text-sm">
                      {memories[currentIndex].date}
                    </span>
                  </div>
                  <p className="font-['Allura'] text-2xl text-[#8B4B8C] mt-2">
                    {memories[currentIndex].caption}
                  </p>
                </div>
                <div className="absolute -top-2 -right-2 bg-[#FFD700] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md transform rotate-[12deg]">
                  <span className="font-bold">{currentIndex + 1}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-[#FFB6C1] text-[#8B4B8C] rounded-full shadow-md z-10"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-[#FFB6C1] text-[#8B4B8C] rounded-full shadow-md z-10"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {memories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#FFD700] w-6" : "bg-[#FFB6C1]/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play toggle */}
      <div className="flex justify-center mt-6">
        <Button
          variant="outline"
          size="sm"
          className={`text-sm border-[#FFB6C1] ${isAutoPlaying ? "bg-[#FFB6C1]/20" : "bg-white/80"}`}
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        >
          {isAutoPlaying ? "Pause Slideshow" : "Play Slideshow"}
        </Button>
      </div>
    </div>
  );
};

export default MemoryCarousel;
