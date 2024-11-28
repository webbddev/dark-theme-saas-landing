'use client';

import Image from 'next/image';
import appScreen from '../assets/images/app-screen.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ['start end', 'end end'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
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
            // width={1000}
            // height={500}
            className='mx-auto mt-14 mb-20'
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
};
