"use client";
import { FaGoogle, FaInstagram, FaFacebook } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import { servicesList } from '../Asset_scripts/ServicesListData';

import images from '../Asset_scripts/GalleryImages'

export default function Gallery() {

  const priceListBold = {
    className: "font-bold text-xl",
  };

  const imageFormat = {
    className: "object-fit drop-shadow-md hover:scale-110 duration-500",
  }

  const galleryButtonIcons = {
    size: "2em",
    className: "object-contain scale-100 text-near-white hover:text-lighter-gold hover:scale-110 duration-500",
  }

  const [galleryButtonHover, setgalleryButtonHover] = useState(false);

  const ref = useRef(null);
  // useRef keeps track of a value/DOM element without triggering big changes in the app, it is more performant than useState.
  // why not use UseState to keep track of things? Updating useState will trigger a re-render of the entire component, whilst useRef don't cause re-renders.

  const isInView = useInView(ref, { once: true, amount: 0.3 });
  // useInView is a function from React Intersection Observer library and it checks if 'ref' is on screen, returning true or false
  // why is it not invalid during initial load when ref=useRef(null)?
  // useInView will start working as soon as a DOM element is mounted to ref, such as ref = {ref} div so now ref exists in the DOM
  // when ref = null, useInView is initialized but cannot perform a check yet

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  // this useEffect listens for changes in isInView => when it becomes true, runs code inside

  return (
    <>
      <motion.div ref={ref}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, staggerChildren: 0.5, }}

        id="gallery-section" className="w-full py-24 lg:py-32 flex justify-evenly items-center bg-mid-gray px-8 xl:px-32">
        <motion.div className="h-full flex flex-col justify-center items-center"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <h2 className="cursor-default text-3xl lg:text-4xl 2xl:shorter-screen:text-4xl 2xl:taller-screen:text-5xl font-bold bg-gradient-to-r from-dark-gold to-lighter-gold bg-clip-text text-transparent mb-5"> OUR GALLERY </h2>
          <div className="grid grid-cols-3 duration-500
              w-[400px] h-[400px] gap-3
              lg:w-[500px] lg:h-[500px] lg:gap-4
              xl:w-[600px] xl:h-[600px] xl:gap-5
              2xl:w-[700px] 2xl:h-[700px] 2xl:gap-7

              ">
            {images.section_general.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} {...imageFormat} />
            ))}
          </div>

          <button className='h-14 w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] 
               bg-zinc-400 rounded-xl shorter-screen:mt-5 taller-screen:mt-6 text-base xl:text-lg flex flex-row justify-evenly items-center px-24
               duration-500 hover:h-16 hover:bg-zinc-500'
            onMouseEnter={() => setgalleryButtonHover(true)} onMouseLeave={() => setgalleryButtonHover(false)}>
            {galleryButtonHover ?
              <>
                <a href="https://g.co/kgs/i3gjw9z" target="_blank" rel="noopener noreferrer"><FaGoogle {...galleryButtonIcons} /></a>
                <a href="https://www.facebook.com/HYGforesthill" target="_blank" rel="noopener noreferrer"><FaFacebook {...galleryButtonIcons} /></a>
                <a href="https://www.instagram.com/hygforesthill?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><FaInstagram {...galleryButtonIcons} /></a>
              </> : "View full gallery"
            }</button>

        </motion.div>

        <motion.div className="ml-4 lg:ml-0 flex flex-col justify-center items-center min-w-fit"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <h2 className="cursor-default text-3xl lg:text-4xl 2xl:shorter-screen:text-4xl 2xl:taller-screen:text-5xl font-bold bg-gradient-to-r from-dark-gold to-lighter-gold bg-clip-text text-transparent"> OUR SERVICES </h2>
          <p className="text-zinc-400 mb-5"> *Contact or visit us in-store for a free quote! </p>
          <div className="cursor-default w-[300px] h-[500px] lg:w-[350px] lg:h-[565px] xl:h-[685px] 2xl:shorter-screen:h-[780px] 2xl:taller-screen:h-[800px] 2xl:w-[500px]
          bg-yellow-50 rounded-3xl flex flex-col pl-5 xl:pl-8 justify-center duration-500 pt-2 lg:py-4">
            
            {servicesList.map((service: { sectionName: string; sectionContent: { serviceName: string }[] }) => (
                        <div className='pl-2 pb-3 lg:pb-4' key={service.sectionName}>
                            <p className='font-bold my-1 xl:mt-4 xl:mb-1 text-sm xl:text-base'>{service.sectionName}</p>
                            {service.sectionContent.map((content: { serviceName: string }) => (
                                <p className='lg:py-0.5 text-sm xl:text-base' key={content.serviceName}>{content.serviceName}</p>
                            ))}
                        </div>
                    ))}
          </div>

        </motion.div>

      </motion.div>
      
    </>
  );
}