"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update window width on mount
    setWindowWidth(window.innerWidth);

    // Update window width when it changes
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main
      style={{ backgroundImage: "url('ea.jpg')" }}
      className="bg-cover bg-no-repeat bg-center flex min-h-screen flex-col items-center justify-between p-6 sm:p-24"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-lg"></div>

      <div className="flex mt-auto self-end items-center text-2xl sm:text-6xl z-10">
        <div className="p-1 ml-4">
          <p className="flex items-center justify-center">
            <Image alt="ET to the Moon!" width={windowWidth >= 640 ? 73 : 26} height={63} src="/ealogo.png" />
            Effective Acceleration
          </p>
          <p
            style={{ width: windowWidth >= 640 ? '700px' : '100%' }}
            className="text-sm sm:text-lg ml-2"
          >
            A transformative movement that is dedicated to the rapid acceleration of the Ethiopian tech landscape by utilizing various resources and spearheading open-source movements
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home