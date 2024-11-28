import { FaInstagram, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";

export const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className='py-5 bg-black text-white/60 border-t border-white/20 '>
      <div className='container'>
        <div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
          <div className='text-center'>
            copyright © {getCurrentYear()} Personal Banker, Inc.{' '}
            <br className='block sm:hidden' />
            All rights reserved.
          </div>
          <ul className='flex justify-center gap-2.5'>
            <li>
              <RiTwitterXLine className='h-5 w-5 text-white/60 hover:text-white/90' />
            </li>
            <li>
              <FaInstagram className='h-5 w-5 text-white/60 hover:text-white/90' />
            </li>
            <li>
              <FaTiktok className='h-5 w-5 text-white/60 hover:text-white/90' />
            </li>
            <li>
              <FaYoutube className='h-5 w-5 text-white/60 hover:text-white/90' />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};