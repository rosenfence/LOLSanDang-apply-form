'use client';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <div className='flex justify-around absolute left-0 bottom-0 h-9 w-full max-w-xl bg-white'>
      <Link href='/'>HOME</Link>
      <Link href='/list'>LIST</Link>
      <Link href='/publish'>WRITE</Link>
    </div>
  );
};

export default Nav;
