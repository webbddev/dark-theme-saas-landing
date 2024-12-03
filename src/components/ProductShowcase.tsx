'use client';

import Image from 'next/image';
import appScreen from '../assets/images/app-screen.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Component that displays a product interface with scroll-based animations
export const ProductShowcase = () => {
  // Reference to track the image element for scroll animations
  const appImage = useRef<HTMLImageElement>(null);

  // Track scroll progress relative to the image element
  // Animation starts when image top reaches viewport bottom
  // Animation ends when image bottom reaches viewport bottom
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ['start end', 'end end'],
  });

  // Transform scroll progress into rotation degrees (15° to 0°)
  const rotateX = useTransform(scrollYProgress, [0, 1], [35, 0]);
  // Transform scroll progress into opacity values (20%/0.2 to 100%/1)
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    // Main container with gradient background
    <div className='bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24'>
      <div className='container py-24 sm:py-32'>
        <h2 className='text-center text-5xl sm:text-6xl font-bold tracking-tighter'>
          Intuitive Interface
        </h2>
        <div className='max-w-xl mx-auto'>
          <p className='text-center mt-5 text-xl text-white/70'>
            Our team of skilled professionals specializes in crafting stunning
            visuals that tell your story. From corporate videos to captivating
            photoshoots, we&apos;ll bring your ideas to life. Let us help you
            make a lasting impression.
          </p>
        </div>
        {/* Animated container for product image */}
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: '800px',
          }}
        >
          <Image
            src={appScreen}
            alt='App Screenshot'
            className='mx-auto mt-14 mb-20'
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
};
