import helixImage from '../assets/images/helix2.png';
import emojiStarImage from '../assets/images/emojistar.png';
import Image from 'next/image';

export const CallToAction = () => {
  return (
    <div className='bg-black text-white py-[72px] sm:py-24 text-center relative overflow-clip'>
      <div className='container max-w-xl relative mx-auto'>
        <Image
          src={helixImage}
          alt='Helix Image'
          className='absolute top-6 hidden sm:inline left-[calc(100%+36px)]'
        />
        <Image
          src={emojiStarImage}
          alt='Emoji Star Image'
          className='absolute -top-[105px] hidden sm:inline right-[calc(100%+24px)]'
        />
        <h2 className='font-bold text-5xl sm:text-6xl tracking-tighter capitalize'>
          Get Instant Access
        </h2>
        <p className='text-xl text-white/70 mt-5 mx-auto max-w-md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          hic debitis nam explicabo ab architecto.
        </p>
        <form className='flex flex-col sm:flex-row mt-10 gap-2.5 max-w-sm mx-auto'>
          <input
            type='email'
            placeholder='your@email.com'
            className='sm:flex-1 h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF]'
          />
          <button className='bg-white text-black h-12 rounded-lg px-5 font-medium hover:bg-white/90 transition-colors'>
            Get Access
          </button>
        </form>
      </div>
    </div>
  );
};