"use client";
import React, { useState } from 'react';
import FPDisplay from '../app/Assets/Images/After.png';
import { FaGoogle, FaInstagram, FaFacebook } from "react-icons/fa6";
import { easeIn, motion } from 'framer-motion';

export default function LandingPage() {

  const landingIcons = {
    size: "2em",
    className: "ml-1 h-full max-h-16 ml-0 mr-0 md:ml-5 md:mr-5 cursor-pointer rounded-2xl hover:bg-zinc-700 hover:w-20 hover:h-16 hover:p-3 duration-300",
    style: {
      color: '#FCE295',
      minWidth: "1.8em",  // Set minimum width to 1.8em
      minHeight: "1.8em"  // Set minimum height to 1.8em
    }
  };

  const landingHeading = {
    className: "cursor-default text-4xl xl:text-5xl text-center uppercase mb-3 min-w-fit whitespace-nowrap duration-500",
  };

  const landingHeadingVariant = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delayChildren: 1.3, // Delay before starting the animation
          staggerChildren: 1, // Stagger children after the delay
          duration: 2,
        }
      }
  }

  const bodyMotion = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y:0,
      transition: {
        duration: 0.6, // Duration of the fade-in for each child
        ease: "easeInOut",
        type: 'spring',
        bounce:0.4,
        
      },
    },
  }

  const iconMotion = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // Duration of the fade-in for each child
        ease: "easeInOut",
        type: 'spring',
        bounce:0.4,
      },
    },
  }

  return (
    <>
      <div id='about-section' className="flex flex-row w-full h-full overflow-x-hidden">

        <div className="flex w-1/2 h-screen min-h-[600px] justify-center items-center">

          <motion.div
            variants={landingHeadingVariant}
            initial="hidden"
            animate="show"
            className="flex flex-col w-1/2 ml-30 justify-center items-center">

            <motion.div variants={bodyMotion}>
                <motion.h1 className={landingHeading.className}>
                  Your hair,
                </motion.h1>

                <motion.h1 className={landingHeading.className}>
                  our passion
                </motion.h1>

                <motion.p className="cursor-default text-base lg:text-xl text-center text-white max-w-md mt-2 duration-500">
                  With over 20 years of experience, our salon offers expert, personalized haircare at an affordable price. Enjoy top-quality service every time, where luxury meets your budget.
                </motion.p>
            </motion.div>

            <motion.div variants={iconMotion} className='flex flex-row justify-evenly items-center h-10 w-full xl:w-3/5 mt-7'>

              <a href="https://g.co/kgs/i3gjw9z" target="_blank" rel="noopener noreferrer">
                <FaGoogle {...landingIcons} />
              </a>

              <a href="https://www.facebook.com/HYGforesthill" target="_blank" rel="noopener noreferrer">
                <FaFacebook {...landingIcons} />
              </a>

              <a href="https://www.instagram.com/hygforesthill?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <FaInstagram {...landingIcons} />
              </a>
            </motion.div>

          </motion.div>

        </div>
        {/* 
        Screen sizes tailwind reference: 
        sm: 640px
        md: 768px
        lg: 1024px
        xl: 1280px
        2xl: 1536px
         */}
        <motion.div variants={{
            hidden: { opacity: 0, x:50},
            show: { opacity: 1,
              x:0,
              transition: {
                delay:3.2,
                duration:0.5,
                ease: "easeOut",
              },
            },
          }} 
          initial="hidden"
          animate="show"
          className="w-1/2 h-full">
          <img src={FPDisplay.src} className='h-screen min-h-[600px] w-auto object-cover object-left' />
        </motion.div>
      </div>
    </>
  );
}


{/* {...xyz }is a spread operator. It's useful for copying components like:
        const obj1 = { a: 1, b: 2 };
        const obj2 = { ...obj1, c: 3 };
        console.log(obj2); // { a: 1, b: 2, c: 3 }
        
        Or it's useful for updating parts of objects without mutating the original like:
        const [user, setUser] = useState({ name: 'John', age: 25 });

        // Only update the age without mutating the entire object
        setUser((prevUser) => ({ ...prevUser, age: 26 }));

        // Now user is { name: 'John', age: 26 }
        
        */}