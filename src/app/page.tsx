"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion"
import { Black_Ops_One, Righteous, Audiowide } from 'next/font/google'

const inter = Audiowide({ subsets: ['latin'], weight: ['400'] })

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
      className=""
    >
      <div className='flex items-center  h-screen'>

        <div className={inter.className + ' self-end pb-10'}>
          <h1 className='text-black  text-7xl w-1/2 ml-20'>Accelerating <span style={{ color: '#F84A27' }}>Ethiopia</span></h1>
        </div>


        {/* <Image src='/lionmajestic.png' width={1500} height={100} alt='lion' /> */}
        <motion.img
          src={'/lionmajestic.png'}
          alt="lion"
          style={{ transformStyle: "preserve-3d", }}
          animate={{
            y: ["-10px", "10px", "-10px"],
            transition: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}

        />


      </div>
    </main>
  );
}

export default Home