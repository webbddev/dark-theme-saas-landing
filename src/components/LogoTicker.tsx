'use client';

import Image from 'next/image';
// Import company logos
import acmeLogo from '../assets/images/acme.png';
import quantumLogo from '../assets/images/quantum.png';
import echoLogo from '../assets/images/echo.png';
import celestialLogo from '../assets/images/celestial.png';
import pulseLogo from '../assets/images/pulse.png';
import apexLogo from '../assets/images/apex.png';
import { motion } from 'framer-motion';

// Array of logo objects for the ticker
const images = [
  { src: acmeLogo, alt: 'Acme Logo' },
  { src: quantumLogo, alt: 'Quantum Logo' },
  { src: echoLogo, alt: 'Echo Logo' },
  { src: celestialLogo, alt: 'Celestial Logo' },
  { src: pulseLogo, alt: 'Pulse Logo' },
  { src: apexLogo, alt: 'Apex Logo' },
];

export const LogoTicker = () => {
  return (
    <div className='bg-black text-white py-[72px] sm:py-24'>
      <div className='container'>
        <h2 className='text-xl text-center text-white/70'>
          Trusted by the nation&apos;s leading brands
        </h2>
        {/* Container for infinite scroll with gradient overlay */}
        <div className='relative overflow-hidden mt-9'>
          {/* Gradient overlay for smooth edge fading */}
          <div className='absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black z-10' />
          {/* Animated container for infinite scroll effect */}
          <motion.div
            initial={{ translateX: 0 }}
            animate={{ translateX: '-50%' }}
            transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
            className='flex justify-center gap-16 pr-16'
          >
            {/* First set of logos */}
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className='flex-none h-8 w-auto'
              />
            ))}
            {/* Duplicated set of logos for seamless infinite scroll */}
            {images.map(({ src, alt }) => (
              <Image
                key={alt + '-duplicate'}
                src={src}
                alt={alt}
                className='flex-none h-8 w-auto'
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
