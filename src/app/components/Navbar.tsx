

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full bg-orange-200 text-white px-4 py-2 z-50 shadow-lg'>
      <div className="flex justify-center space-x-4">
        <Link href="/" className='hover:bg-pink-500 mx-2 bg-gray-400 text-white px-4 py-2 rounded'>
          Home
        </Link>
        <Link href="/about" className='hover:bg-pink-500 mx-2 bg-gray-400 text-white px-4 py-2 rounded'>
          About
        </Link>
        <Link href="/contact" className='hover:bg-pink-500 mx-2 bg-gray-400 text-white px-4 py-2 rounded'>
          Contact
        </Link>
        <Link href="/blog" className='hover:bg-pink-500 mx-2 bg-gray-400 text-white px-4 py-2 rounded'>
          Blog
        </Link>
        <Link href="/images" className='hover:bg-pink-500 mx-2 bg-gray-400 text-white px-4 py-2 rounded'>
          Images
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

