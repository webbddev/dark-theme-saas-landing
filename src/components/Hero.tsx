'use client';
import Image from 'next/image';
import cursorImage from '../assets/images/cursor.png';
import messageImage from '../assets/images/message.png';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className='bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip'>
      <div className='absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]'></div>
      <div className='container'>
        <div className='flex justify-center mt-8 '>
          <div className='inline-flex relative'>
            <h1 className='capitalize text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex'>
              one shot <br /> at a time
            </h1>
            <motion.div
              className='absolute right-[532px] top-[108px] hidden sm:inline'
              drag
              // dragSnapToOrigin
              dragMomentum={false} // drag and leave
            >
              <Image
                src={cursorImage}
                alt='cursor'
                height={200}
                width={200}
                className='max-w-none'
                draggable={false}
              />
            </motion.div>
            <motion.div
              className='absolute left-[540px] top-[56px] hidden sm:inline'
              drag
              dragSnapToOrigin
            >
              <Image
                src={messageImage}
                alt='message'
                height={200}
                width={200}
                className='max-w-none'
                draggable={false}
              />
            </motion.div>
          </div>
        </div>
        <div className='flex justify-center'>
          <p className='text-xl text-center mt-8 max-w-lg'>
            Turn your ideas into stunning visuals. Our team crafts compelling
            videos that captivate and convert.
          </p>
        </div>
        <div className='flex justify-center mt-8'>
          <button className='bg-white text-black py-3 px-5 rounded-lg font-medium z-10'>
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
