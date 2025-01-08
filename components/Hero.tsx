"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  { title: "First-class digital solutions to accelerate your business growth" },
  { title: "Innovative AI technologies for next-generation enterprises" },
  { title: "Transforming businesses with cutting-edge digital strategies" },
  { title: "Empowering your digital journey with expert consulting" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden min-h-[20vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-24 relative z-10">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-syne text-foreground"
            >
              {slides[currentSlide].title}
            </motion.h1>
          </AnimatePresence>
          <Button
            variant="outline"
            size="lg"
            className="group font-syne bg-background text-foreground hover:bg-primary hover:text-primary-foreground"
          >
            Contact our team
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-primary/20"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <motion.div
        className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-contain bg-no-repeat bg-right-bottom opacity-20"
        style={{
          backgroundImage: "url('/placeholder.svg?height=300&width=300')",
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      />
    </section>
  );
}
