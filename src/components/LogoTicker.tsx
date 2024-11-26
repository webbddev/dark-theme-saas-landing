import Image from 'next/image';
import acmeLogo from '../assets/images/acme.png';
import quantumLogo from '../assets/images/quantum.png';
import echoLogo from '../assets/images/echo.png';
import celestialLogo from '../assets/images/celestial.png';
import pulseLogo from '../assets/images/pulse.png';
import apexLogo from '../assets/images/apex.png';

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
          Trusted by the nation&apos;s most leading brands
        </h2>
        <div className='overflow-hidden mt-9 before:content[""] after:content[""] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]'>
          {/* below code works well enough and removes the need for the above before/after mess  */}
          {/* <div className='overflow-hidden mt-9 relative'> */}
          {/* Gradient overlay */}
          {/* <div className='absolute inset-0 pointer-events-cursor bg-gradient-to-r from-black via-transparent to-black'></div> */}
          {/* Content  */}
          <div className='flex justify-center gap-16'>
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                // width={100}
                // height={50}
                className='flex-none h-8 w-auto'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
