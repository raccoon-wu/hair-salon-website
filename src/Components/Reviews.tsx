"use client"; // Add this line to allow the use of useState since client components handle interactivity (hooks, state management, effects)
// By default, next.js treats everything as a server component

import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import React, { useState } from 'react';
import ReviewBackground from '../app/Assets/Images/Comments.png';

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
        <div className="flex h-52 lg:h-48 flex-col w-full bg-[url('../app/Assets/Images/Comments.png')] bg-cover justify-center items-center m-0">
            <div className="flex flex-row">
              {starsCount()}
            </div>
            <p className="text-base lg:text-xl w-3/5 m-2 text-center">'{currentReview.review}'</p>
            <p className="text-base lg:text-xl font-bold text-center">- {currentReview.reviewer}</p>
              <div className="flex flex-row absolute justify-between w-full">
                <MdOutlineKeyboardArrowLeft size="2.5em" className="ml-5 cursor-pointer" onClick={previousReview}/>
                <MdOutlineKeyboardArrowRight size="2.5em" className="mr-5 cursor-pointer" onClick={nextReview}/>
              </div>
            </div>
      </>
    );
  }