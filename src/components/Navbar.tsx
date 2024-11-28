import Image from 'next/image';
import logoImage from '../assets/images/logosaas.png';
import { HiMenu } from 'react-icons/hi';

export const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className='container px-4'>
        <div className='py-4 flex items-center justify-between'>
          <div className='relative'>
            <div className='absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,rgb(252,_214,_255),rgb(41,_216,_255), rgb(255,_253,_128), rgb(248,_154,_191), rgb(252,_214,_255)]'></div>
            <Image
              src={logoImage}
              alt='Saas logo'
              width={48}
              height={48}
              className='relative'
            />
          </div>
          <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
            <HiMenu className='text-white h-6 w-6' />
          </div>
          <nav className='gap-6 items-center hidden sm:flex'>
            <a
              href='#'
              className='text-opacity-60 text-white hover:text-opacity-100 transition'
            >
              About
            </a>
            <a
              href='#'
              className='text-opacity-60 text-white hover:text-opacity-100 transition'
            >
              Features
            </a>
            <a
              href='#'
              className='text-opacity-60 text-white hover:text-opacity-100 transition'
            >
              Updates
            </a>
            <a
              href='#'
              className='text-opacity-60 text-white hover:text-opacity-100 transition'
            >
              Help
            </a>
            <a
              href='#'
              className='text-opacity-60 text-white hover:text-opacity-100 transition'
            >
              Customers
            </a>
            <button className='bg-white py-2 px-4 rounded'>Get for free</button>
          </nav>
        </div>
      </div>
    </div>
  );
};