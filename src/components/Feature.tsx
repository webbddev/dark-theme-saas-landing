'use client';

import { useEffect, useRef } from 'react';
import { PiLeafLight } from 'react-icons/pi';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

type FeatureProps = {
  title: string;
  description: string;
};

const Feature = ({ title, description }: FeatureProps) => {
  // Motion values for tracking mouse position relative to component
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  
  // Create radial gradient mask that follows mouse movement
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  
  // Reference to border element for position calculations
  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update mask position based on mouse coordinates relative to component bounds
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };

    // Setup and cleanup mouse movement tracking
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  });

  return (
    // Feature card container with hover effect border
    <div className='relative border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1'>
      {/* Animated border mask that follows mouse position */}
      <motion.div
        className='absolute inset-0 border-4 border-purple-400 rounded-xl'
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      />
      {/* Feature icon */}
      <div className='inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg'>
        <PiLeafLight className='h-10 w-10' />
      </div>
      {/* Feature content */}
      <h3 className='mt-6 font-bold'>{title}</h3>
      <p className='mt-2 text-white/70'>{description}</p>
    </div>
  );
};

export default Feature;
