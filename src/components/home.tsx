import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import LoveGallery from "./LoveGallery";
import MemoryCarousel from "./MemoryCarousel";
import AnimationProvider from "./AnimationProvider";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

const Home = () => {
  return (
    <AnimationProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#FFB6C1] via-[#F8BBD9] to-[#E6E6FA] overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Personal Apology Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Dancing_Script'] text-4xl md:text-5xl lg:text-6xl text-[#8B4B8C] mb-6">
              From My Heart to Yours
            </h2>
            <p className="font-['Montserrat'] text-[#6B6B6B] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              My dearest love, I write these words with a heavy heart and
              sincere regret for the pain I've caused. The moment I saw the hurt
              in your eyes, I knew I had made a terrible mistake. You deserve
              nothing but love, respect, and honesty—all of which I failed to
              give you in that moment.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <Card className="overflow-hidden border-none shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="font-['Montserrat'] text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-6">
                    I know words alone cannot undo what happened, but I hope
                    they can be the beginning of healing. I take full
                    responsibility for my actions and the hurt they caused. I've
                    spent every moment since then reflecting on how I can be
                    better for you, how I can rebuild your trust, and how I can
                    ensure this never happens again.
                  </p>
                  <p className="font-['Montserrat'] text-[#6B6B6B] text-base md:text-lg leading-relaxed">
                    You are the light of my life, the person who makes every day
                    brighter just by being in it. The thought of losing you is
                    unbearable, and I promise to work tirelessly to make things
                    right.
                  </p>
                  <div className="mt-8 text-right">
                    <p className="font-['Dancing_Script'] text-2xl text-[#8B4B8C]">
                      With all my love,
                    </p>
                    <p className="font-['Dancing_Script'] text-2xl text-[#8B4B8C]">
                      Jayesh
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 h-80 md:h-96"
            >
              <div className="w-full h-full rounded-xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/images/20250329_184048.jpg"
                  alt="Us together"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why I Love You Gallery */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFF8DC]/50">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <h2 className="font-['Dancing_Script'] text-4xl md:text-5xl lg:text-6xl text-[#8B4B8C] mb-6">
              Why I Love You
            </h2>
            <p className="font-['Montserrat'] text-[#6B6B6B] text-lg">
              Click on each heart to discover the countless reasons why you mean
              the world to me.
            </p>
          </motion.div>

          <LoveGallery />
        </section>

        {/* Memory Lane Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#F8F6F0] to-[#E6E6FA]/70">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <h2 className="font-['Dancing_Script'] text-4xl md:text-5xl lg:text-6xl text-[#8B4B8C] mb-6">
              Our Beautiful Journey
            </h2>
            <p className="font-['Montserrat'] text-[#6B6B6B] text-lg">
              Every moment with you has been a treasure. Let's revisit some of
              our most precious memories together.
            </p>
          </motion.div>

          <MemoryCarousel />
        </section>

        {/* Promise & Commitment Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Dancing_Script'] text-4xl md:text-5xl lg:text-6xl text-[#8B4B8C] mb-6">
              My Promises To You
            </h2>
            <p className="font-['Montserrat'] text-[#6B6B6B] text-lg max-w-3xl mx-auto">
              These are not just words, but commitments I make to you with all
              my heart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Communication",
                content:
                  "I promise to always communicate openly and honestly, sharing my thoughts and feelings with you.",
              },
              {
                title: "Respect",
                content:
                  "I promise to always treat you with the utmost respect, valuing your opinions and feelings.",
              },
              {
                title: "Support",
                content:
                  "I promise to be your biggest supporter, encouraging you in all your dreams and aspirations.",
              },
              {
                title: "Patience",
                content:
                  "I promise to be patient and understanding, even during our most challenging moments.",
              },
              {
                title: "Growth",
                content:
                  "I promise to continuously work on myself, growing to be the partner you deserve.",
              },
              {
                title: "Love",
                content:
                  "I promise to love you more deeply with each passing day, cherishing every moment we share.",
              },
            ].map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </div>
                      <h3 className="font-['Dancing_Script'] text-2xl text-[#8B4B8C]">
                        {promise.title}
                      </h3>
                    </div>
                    <p className="font-['Montserrat'] text-[#6B6B6B] flex-grow">
                      {promise.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Forgiveness Request Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F8BBD9]/30 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto text-[#8B4B8C]"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h2 className="font-['Dancing_Script'] text-4xl md:text-5xl lg:text-6xl text-[#8B4B8C] mb-6">
              Will You Forgive Me?
            </h2>
            <p className="font-['Montserrat'] text-[#6B6B6B] text-lg mb-10">
              I know I've hurt you, and for that I am truly sorry. I don't
              expect immediate forgiveness, but I hope you'll give me the chance
              to make things right. I love you more than words can express, and
              I promise to spend every day showing you just how much you mean to
              me.
            </p>
            <Separator className="max-w-xs mx-auto mb-10 bg-[#FFD700]/50 h-0.5" />
            <Button className="bg-[#FF7F7F] hover:bg-[#FF7F7F]/80 text-white rounded-full px-8 py-6 text-lg font-['Montserrat'] shadow-md hover:shadow-lg transition-all duration-300">
              I Love You
            </Button>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 text-center bg-[#8B4B8C]/10">
          <p className="font-['Montserrat'] text-[#6B6B6B] text-sm">
            Made with ❤️ for you | {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </AnimationProvider>
  );
};

export default Home;
