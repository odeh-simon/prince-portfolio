import React, { useState, useEffect } from "react";
import { testimonials } from "../data/Testimonial";
import TestimonialCard from "./TestimonialCard";
import { motion, AnimatePresence } from "framer-motion";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
    }, 6000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [totalTestimonials]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalTestimonials - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="transition duration-500">
      {/* Mobile view: Auto-Slider with Smooth Transition */}
      <div className="block md:hidden w-full relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <TestimonialCard
              header={testimonials[currentIndex].header}
              body={testimonials[currentIndex].body}
              avatar={testimonials[currentIndex].avatar}
              name={testimonials[currentIndex].name}
              role={testimonials[currentIndex].role}
            />
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between items-center mt-4">
          <button onClick={handlePrev} className="text-[#DE950C] text-sm font-medium">
            Prev
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#DE950C] scale-125' : 'bg-transparent border-[1.2px] border-[#DE950C]'}`}
              />
            ))}
          </div>
          <button onClick={handleNext} className="text-[#DE950C] text-sm font-medium">
            Next
          </button>
        </div>
      </div>

      {/* Tablet & Larger Screens: Grid Layout */}
      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            header={testimonial.header}
            body={testimonial.body}
            avatar={testimonial.avatar}
            name={testimonial.name}
            role={testimonial.role}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
