"use client"; 
import { FaGoogle, FaInstagram, FaFacebook } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from 'react';
import {motion, useInView, useAnimation} from "framer-motion";

import image1 from '../app/Assets/Images/Gallery (1).png';
import image2 from '../app/Assets/Images/Gallery (2).png';
import image3 from '../app/Assets/Images/Gallery (3).png';
import image4 from '../app/Assets/Images/Gallery (4).png';
import image5 from '../app/Assets/Images/Gallery (5).png';
import image6 from '../app/Assets/Images/Gallery (6).png';
import image7 from '../app/Assets/Images/Gallery (7).png';
import image8 from '../app/Assets/Images/Gallery (8).png';
import image9 from '../app/Assets/Images/Gallery (9).png';

export default function Gallery() {

  const priceListBold = {
    className: "font-bold text-xl",
  };

  const imageFormat = {
    className: "object-fit drop-shadow-md hover:scale-110 duration-500",
  }

  const galleryButtonIcons = {
    size: "2em", 
    className: "object-contain text-zinc-600 scale-100 hover:text-zinc-900 hover:scale-110 duration-500",
  }

  const goldTitles = {
    className: "cursor-default text-3xl lg:text-4xl 2xl:shorter-screen:text-4xl 2xl:taller-screen:text-5xl font-bold bg-gradient-to-r from-dark-gold to-lighter-gold bg-clip-text text-transparent mb-5"
  };

  const [galleryButtonHover, setgalleryButtonHover] = useState(false);

  const ref = useRef(null);
  // useRef keeps track of a value/DOM element without triggering big changes in the app, it is more performant than useState.
  // why not use UseState to keep track of things? Updating useState will trigger a re-render of the entire component, whilst useRef don't cause re-renders.

  const isInView = useInView(ref, {once:true, amount:0.5});
  // useInView is a function from React Intersection Observer library and it checks if 'ref' is on screen, returning true or false
  // why is it not invalid during initial load when ref=useRef(null)?
  // useInView will start working as soon as a DOM element is mounted to ref, such as ref = {ref} div so now ref exists in the DOM
  // when ref = null, useInView is initialized but cannot perform a check yet

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }}, [isInView]);
  // this useEffect listens for changes in isInView => when it becomes true, runs code inside

    return (
      <>
      <motion.div ref = {ref}
        variants={{
          hidden: {opacity: 0},
          visible: {opacity: 1},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, staggerChildren: 0.5,}}
        
        id="gallery-section" className="w-full py-24 lg:py-32 flex justify-evenly items-center bg-mid-gray px-8 xl:px-32">
        <motion.div className="h-full flex flex-col justify-center items-center" 
        variants={{
          hidden: {opacity: 0, x:-50},
          visible: {opacity: 1, x:0},
        }}>
          <h2 {...goldTitles}> OUR GALLERY </h2>
              <div className="grid grid-cols-3 duration-500
              w-[400px] h-[400px] gap-3
              lg:w-[500px] lg:h-[500px] lg:gap-4
              xl:w-[600px] xl:h-[600px] xl:gap-5
              2xl:w-[700px] 2xl:h-[700px] 2xl:gap-7

              ">
                  <img src={image2.src} alt="Gallery Image 2" {...imageFormat} />
                  <img src={image3.src} alt="Gallery Image 3" {...imageFormat} />
                  <img src={image4.src} alt="Gallery Image 4" {...imageFormat} />
                  <img src={image5.src} alt="Gallery Image 5" {...imageFormat} />
                  <img src={image6.src} alt="Gallery Image 6" {...imageFormat} />
                  <img src={image7.src} alt="Gallery Image 7" {...imageFormat} />
                  <img src={image8.src} alt="Gallery Image 8" {...imageFormat} />
                  <img src={image9.src} alt="Gallery Image 9" {...imageFormat} />
                  <img src={image1.src} alt="Gallery Image 1" {...imageFormat} />
              </div>

              <button className='h-14 w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] 
               bg-dark-gold rounded-xl shorter-screen:mt-5 taller-screen:mt-6 text-base xl:text-lg flex flex-row justify-evenly items-center px-24
               duration-500 hover:h-16 hover:bg-lighter-gold'
              onMouseEnter={() => setgalleryButtonHover(true)} onMouseLeave={() => setgalleryButtonHover(false)}>
                {galleryButtonHover?  
                <>
                <a href="https://g.co/kgs/i3gjw9z" target="_blank" rel="noopener noreferrer"><FaGoogle {...galleryButtonIcons}/></a>
                <a href="https://www.facebook.com/HYGforesthill" target="_blank" rel="noopener noreferrer"><FaFacebook {...galleryButtonIcons}/></a>
                <a href="https://www.instagram.com/hygforesthill?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><FaInstagram {...galleryButtonIcons}/></a>
                </> : "View full gallery"
                }</button>

        </motion.div>

        <motion.div className="ml-4 lg:ml-0 flex flex-col justify-center items-center min-w-fit"
        variants={{
          hidden: {opacity: 0, x:50},
          visible: {opacity: 1, x:0},
        }}>
          <h2  {...goldTitles}> OUR SERVICES </h2>
          <div className="cursor-default w-[300px] h-[475px] lg:w-[350px] lg:h-[565px] xl:h-[665px] 2xl:shorter-screen:h-[780px] 2xl:taller-screen:h-[800px] 2xl:w-[500px]
          bg-yellow-50 rounded-3xl flex flex-col pl-8 justify-center duration-500">
          <p {...priceListBold}>Woman's</p>
              <p>Cut</p>
              <p>Colour</p>
              <p>Perm</p>
              <br/>


          <p {...priceListBold}>Men's </p>
              <p>Cut</p>
              <p>Colour</p>
              <p>Perm</p>
              <br/>

          <p {...priceListBold}>Children's</p>
              <p>Cut</p>
              <p>Colour</p>
              <p>Perm</p>
              <br/>
          </div>
        </motion.div>
          
      </motion.div>
      </>
    );
  }