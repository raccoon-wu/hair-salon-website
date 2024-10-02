"use client"; // Add this line to allow the use of useState since client components handle interactivity (hooks, state management, effects)
// By default, next.js treats everything as a server component

import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import React, { useEffect, useRef, useState } from 'react';
import {motion, useInView, useAnimation} from "framer-motion";

export default function Reviews() {

  const googleReviews: {stars: number; review: string; reviewer: string;}[] = [
    { stars:5,
      review:"Amazing experience, the team were extremely accomodating, friendly, experienced and I couldn’t be happier with the result.",
      reviewer:"Mona Zhao",
    },
    { stars:5,
      review:"Showed a photo of what I wanted and got exactly that. Great hairdressers to talk to as well!",
      reviewer:"Oliver To",
    },
    { stars:5,
      review:"Mina did a great job with my hair. She understood what I required and worked well with my curls. She stayed past closing hours to get my hair done. Highly recommend for their excellent customer service and expertise!",
      reviewer:"Prema Balasupramaniam",
    },
    { stars:5,
      review:"I have been going to Mina weekly for wonderful blow wave and also have my colour . Excellent hairdresser",
      reviewer:"Diane",
    },
  ];

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

  const reviewComponents = {
    variants: {
      hidden: { opacity: 0, y:20,  },
      visible: { opacity: 1, y:0, },
    },
    transition: { duration: 0.3 },
  };

    return (
      <>
        <motion.div 
        ref = {ref}
        variants={{
          hidden: {opacity: 0},
          visible: {opacity: 1},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, staggerChildren: 0.7,}}

        className="flex h-52 lg:h-48 flex-col w-full bg-[url('../app/Assets/Images/Comments.png')] bg-cover bg-center justify-center items-center m-0 duration-500">
            <motion.div variants={reviewComponents.variants} transition={reviewComponents.transition}
              className="flex flex-row hover:scale-125 duration-500 my-2">
              {starsCount()}
            </motion.div>

              <motion.p variants={reviewComponents.variants} transition={reviewComponents.transition} 
              className="z-10 text-base lg:text-xl w-3/5 m-2 text-center hover:scale-110 cursor-default duration-500">'{currentReview.review}'</motion.p>
              
              <motion.p variants={reviewComponents.variants} transition={reviewComponents.transition}
              className="z-10 text-base lg:text-xl font-bold text-center hover:scale-110 cursor-default duration-500">- {currentReview.reviewer}</motion.p>
              
              <motion.div variants={reviewComponents.variants} transition={reviewComponents.transition}
              className="z-0 flex flex-row absolute justify-between w-full">
                <MdOutlineKeyboardArrowLeft size="2.5em" className="ml-5 cursor-pointer hover:scale-150 hover:bg-dark-gold rounded-full duration-500" onClick={previousReview}/>
                <MdOutlineKeyboardArrowRight size="2.5em" className="mr-5 cursor-pointer hover:scale-150 hover:bg-dark-gold rounded-full duration-500" onClick={nextReview}/>
              </motion.div>
            </motion.div>
      </>
    );
  }