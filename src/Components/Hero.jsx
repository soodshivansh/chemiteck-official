import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const itemref1 = useRef();

  useEffect(() => {
    // SplitType should be initialized inside useEffect to ensure the DOM is ready
    const text = new SplitType(itemref1.current).words;

    // Animation for itemref1
    gsap.from(text, {
      yPercent: 400,
      duration: 1.5,
      stagger: 0.05,
      ease: 'back.out',
    });

  }, []);

  return (
    <div className="text-white">
      <div className="max-w-[800px] p-5 w-full mx-auto text-center flex flex-col justify-top mt-10 gap-4">
        <h1 ref={itemref1} className="overflow-hidden classitem font-Arvo text-[#090F1D] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold md:py-6">
          Providing Innovative Solutions for Industrial Valves
        </h1>
      <motion.div
      variants={{
        hidden: {opacity: 0},
        visible: {opacity: 1},
      }}
      initial="hidden"
      animate="visible"
      transition={{duration: 1, delay: 1}}
      >
        <h1 className="font-cabin md:text-xl sm:text-l text-base font-bold text-gray-500">
          Chemiteck Engineering Enterprises is your trusted partner for all your manual and automated valve needs. With our extensive range of products and expertise in flow level measurement field instruments, we deliver reliable solutions to meet your industrial requirements.
        </h1>
      </motion.div>
      </div>
    </div>
  );
};

export default Hero;
