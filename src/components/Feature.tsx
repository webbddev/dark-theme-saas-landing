'use client';

import { useEffect, useRef } from 'react';
import { PiLeafLight } from 'react-icons/pi';

const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const updateMousePosition = (e: MouseEvent) => {};
  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  });

  return (
    <div className='relative border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1'>
      <div
        className='absolute inset-0 border-2 border-purple-400 rounded-xl'
        style={{
          WebkitMaskImage:
            'radial-gradient(100px 100px at 0px 0px, black, transparent)',
          maskImage:
            'radial-gradient(100px 100px at 0px 0px, black, transparent)',
        }}
        ref={border}
      />
      <div className='inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg'>
        <PiLeafLight className='h-10 w-10' />
      </div>
      <h3 className='mt-6 font-bold'>{title}</h3>
      <p className='mt-2 text-white/70'>{description}</p>
    </div>
  );
};

export default Feature;
