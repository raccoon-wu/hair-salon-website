"use client"; 
import { FaArrowRight } from "react-icons/fa6";
import React, { useEffect, useRef } from 'react';
import {motion, useInView, useAnimation} from "framer-motion";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from "@vis.gl/react-google-maps"

export default function Footer() {
  const salonPosition = { lat: -37.83516, lng:145.16608}
  const footerText = {
    className: "lg:text-base text-white my-2",
  };

  const footerTitle = {
    className: "text- lg:text-2xl"
  }

  const ref = useRef(null);
  const isInView = useInView(ref, {once:true, amount:0.5 } as any);
  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView]);

    return (
      <>
      <div ref={ref} id="contact-section" className="self-center h-1.5 w-[calc(100vw-6rem)] ml-10 mr-10 bg-dark-gold"></div>
        <motion.div 
        variants={{
          hidden: {opacity: 0},
          visible: {opacity: 1},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, staggerChildren: 1,}}
        className="h-[400px] flex flex-row justify-evenly items-center my-0 lg:my-4">
            {/* <motion.div variants={{
          hidden: {opacity: 0, y:10},
          visible: {opacity: 1, y:0},
        }}>
              <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
                <div className="h-[200px] w-[200px] xl:h-[300px] xl:w-[300px] border-4 border-yellow-50">
                  <Map defaultZoom={15} defaultCenter={salonPosition} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
                    <AdvancedMarker position={salonPosition}></AdvancedMarker>
                  </Map>
                </div>
              </APIProvider>
            </motion.div> */}
            <motion.div variants={{
          hidden: {opacity: 0, y:10},
          visible: {opacity: 1, y:0},
        }} className="cursor-default">
              <h1 {...footerTitle}>OPENING HOURS:</h1>
              <p {...footerText}>Monday</p>
              <p {...footerText}>CLOSED</p>

              <br/>

              <p {...footerText}>Tuesday - Saturday</p>
              <p {...footerText}>9.00am - 5.30pm</p>

              <br/>
              
              <p {...footerText}>Sunday</p>
              <p {...footerText}>9.00am - 5.00pm</p>
            </motion.div>
            <motion.div variants={{
          hidden: {opacity: 0, y:10},
          visible: {opacity: 1, y:0},
        }} className="cursor-default">
              <h1 {...footerTitle}>CONTACT US:</h1>
              <p {...footerText}>Phone: (03) 9877 3322</p>

              <br/>

              <h1 {...footerTitle}>ADDRESS:</h1>
              <p {...footerText}>40 Mahoneys Rd, Forest Hill VIC 3131</p>
              <div className=" mt-4 w-full h-12 rounded-2xl bg-zinc-700 drop-shadow-lg text-lighter-gold justify-center items-center cursor-pointer
              hover:scale-110 duration-500">
                <a className='h-full w-full flex flex-row justify-center items-center' href="https://g.co/kgs/i3gjw9z" target="_blank" rel="noopener noreferrer"><p className="mr-1">Find us on Google</p><FaArrowRight /> </a></div>
            </motion.div>
        </motion.div>
      </>
    );
  }