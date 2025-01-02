"use client"; // Add this line to allow the use of useState since client components handle interactivity (hooks, state management, effects)
// By default, next.js treats everything as a server component

import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import React, { useEffect, useRef, useState } from 'react';
import {motion, useInView, useAnimation} from "framer-motion";
import { googleReviews } from '../Asset_scripts/GoogleReviews';

export default function Reviews() {

  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.5,
  } as any);

  
  const mainControls = useAnimation();

  useEffect(()=> {
    if (isInView){
      mainControls.start("visible");
    }
  }, [isInView]);

    //Tracks which index to display since only one will display at a time
  const [reviewIndex, setReviewIndex] = useState(0);
  const currentReview = googleReviews[reviewIndex];

    //Function to iterate through the reviews with modulo operator
  const nextReview = () => {
    //% is modulo operator and it ensures the index wraps around back to the start when it reaches the end
    setReviewIndex((prevIndex) => (prevIndex + 1) % googleReviews.length);
  }

  const previousReview = () => {
    setReviewIndex((prevIndex) => (prevIndex - 1 + googleReviews.length) % googleReviews.length);
  }

    //Function to display stars if they are 4 or 5 stars
  const starsCount = () => {
    let count: number = googleReviews[reviewIndex].stars;
    if (count === 5){ 
      return (      
        <>             
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </> )
      } else if (count === 4){ 
        return (      
        <>             
         <FaStar /><FaStar /><FaStar /><FaStar />
        </> )
      } else return null;
  }

    return (
      <>
        <motion.div 
        ref = {ref}
        variants={{
          hidden: {opacity: 0, },
          visible: {opacity: 1, },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, staggerChildren: 0.5,}}

        className="flex h-52 lg:h-48 flex-col w-full bg-[url('../app/Assets/Images/Comments.png')] bg-cover bg-center justify-center items-center m-0 duration-500">
              <motion.div
                  variants={{
                    hidden: { opacity:0, y: 15, },
                    visible: { opacity:1, y: 0, }
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.4 }}
        className="flex h-full w-full flex-col justify-center items-center">

                <div className="flex flex-row my-2">
                  {starsCount()}
                </div>

                <p className="z-10 text-base lg:text-xl w-3/5 m-2 text-center cursor-default">'{currentReview.review}'</p>
                
                <p className="z-10 text-base lg:text-xl font-bold text-center cursor-default">- {currentReview.reviewer}</p>
                
                <div
                className="z-0 flex flex-row absolute justify-between w-full">
                  <MdOutlineKeyboardArrowLeft size="2.5em" className="ml-5 cursor-pointer hover:scale-150 hover:bg-dark-gold rounded-full duration-500" onClick={previousReview}/>
                  <MdOutlineKeyboardArrowRight size="2.5em" className="mr-5 cursor-pointer hover:scale-150 hover:bg-dark-gold rounded-full duration-500" onClick={nextReview}/>
                </div>
              </motion.div>
            </motion.div>
      </>
    );
  }