'use client';

import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { TiDelete } from 'react-icons/ti';

const underDev = false;
function UnderDevBar() {
  const [clicked, setClicked] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem('clicked');
    if (!saved) {
      setClicked(false);
    }
  }, []);
  const handleClick = () => {
    setClicked(true);
    localStorage.setItem('clicked', 'true');
  };
  return (
    <>
      {!clicked && underDev && (
        <div className="bg-black">
          <div className="w-full max-w-[1600px] mx-auto  flex justify-between md:justify-around items-center text-[9px] sm:text-[11px] md:text-sm text-white py-3 px-4 gap-4">
            <div className="hidden md:block"></div>
            <p className="text-left md:text-center">
              Note: This website is currently under development, If you find any
              bug please{' '}
              <Link href="/contact" className="hover:underline font-bold">
                contact me
              </Link>{' '}
              and report it or raise an issue on{' '}
              <Link
                target="_blank"
                href="https://github.com/1sma31L/Portfolio/issues"
                className="hover:underline font-bold">
                GitHub
              </Link>
              . Thank you!
            </p>
            <button onClick={handleClick} className="text-sm md:text-lg">
              <TiDelete className="opacity-75 hover:opacity-100 duration-150" />
            </button>
          </div>
          <div className="border-b-2"></div>
        </div>
      )}
    </>
  );
}

export default UnderDevBar;
