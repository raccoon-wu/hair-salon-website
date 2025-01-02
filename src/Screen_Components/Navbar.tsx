"use client"; 
import "../app/globals.css";
import { RiScissorsFill } from "react-icons/ri";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {

  const [aboutClicked, setAboutClicked] = useState(false);
  const [galleryClicked, setGalleryClicked] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);

  const navButtonStyle = 'cursor-pointer min-w-fit font-xl hover:underline hover:scale-110 hover:text-white decoration-2 underline-offset-8 duration-300';

    return (
      <>
      <div className="flex flex-col overflow-x-hidden fixed z-50">
          <motion.div 
          variants={{
            hidden:  {opacity: 0, y:-20}, 
            show:    {opacity: 1, y:0, transition: {duration: 0.2, type: 'spring', bounce:0.4,}},            
          }}
          initial="hidden"
          animate="show"
          className="flex shorter-screen:h-20 taller-screen:h-24 bg-black items-center">
              <div className=" ml-10 flex flex-row h-full
                              w-1/3 xl:w-1/4 min-w-fit items-center">
                  <h2 className="text-4xl xl:shorter-screen:text-4xl xl:taller-screen:text-5xl font-bold mt-5 bg-gradient-to-r from-dark-gold to-lighter-gold bg-clip-text text-transparent cursor-default"> HAIR YOU GO </h2>
                  <RiScissorsFill size="2.3em" className="ml-1 h-full text-lighter-gold mt-5 taller-screen:ml-2" style = {{transform: 'rotate(90deg)' }}/>
              </div>
              <div className=" m-10 xl:m-20
                              w-2/3 xl:w-3/4 ">
                  <ul className="flex flex-row justify-end space-x-10 md:space-x-20 lg:space-x-30 xl:space-x-36 pt-5 text-zinc-300 
                  text-xl xl:shorter-screen:text-xl xl:taller-screen:text-2xl">

                    <li className={` ${ aboutClicked ? ' animate-scale ' : ' ' } ${navButtonStyle} `} onClick={() => {
                          setAboutClicked(true);
                          setTimeout(() => {
                            setAboutClicked(false);
                          }, 300);
                      const element = document.getElementById('about-section');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }}}> About</li>

                    <li className={` ${ galleryClicked ? ' animate-scale ' : ' ' } ${navButtonStyle} `} onClick={() => {
                          setGalleryClicked(true);
                          setTimeout(() => {
                            setGalleryClicked(false);
                          }, 300);
                      const element = document.getElementById('gallery-section');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }}}>Gallery & Services</li>

                    <li className={` ${ contactClicked ? ' animate-scale ' : ' ' } ${navButtonStyle} `}  onClick={() => {
                          setContactClicked(true);
                          setTimeout(() => {
                            setContactClicked(false);
                          }, 300);
                      const element = document.getElementById('contact-section');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }}}>Contact</li>
                  </ul>
              </div>
          </motion.div>
          <motion.div 
          variants={{
            hidden:  {opacity: 0}, 
            show: {
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.5,
              }
            }                        
          }} 
          initial="hidden"
          animate="show"
          className="self-center h-1.5 w-[calc(100vw-6rem)] ml-10 mr-10 bg-dark-gold"></motion.div>
      </div>
      </>
    );
  }
