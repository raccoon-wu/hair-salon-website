"use client"; // Add this line to allow the use of useState since client components handle interactivity (hooks, state management, effects)
// By default, next.js treats everything as a server component

import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import React, { useState } from 'react';

export default function Reviews() {

  const googleReviews: {stars: number; review: string; reviewer: string;}[] = [
    { stars:5,
      review:"I would give my life savings to this shop cuz it's too good bro",
      reviewer:"100% Real Person",
    },
    { stars:4,
      review:"I likey cuz of me mummy",
      reviewer:"Leon",
    },
  ];
  
  //Tracks which index to display since only one will display at a time
  const [reviewIndex, setReviewIndex] = useState(0);
  const currentReview = googleReviews[reviewIndex];

    return (
      <>
        <div className="flex h-40 flex-col bg-white justify-center items-center">
            <div className="flex flex-row">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="text-2xl font-bold">'{currentReview.review}'</p>
            <p className="text-3xl font-bold">-{currentReview.reviewer}</p>
              <div className="flex flex-row absolute justify-between w-full">
                <MdOutlineKeyboardArrowLeft size="2.5em" className="ml-5"/>
                <MdOutlineKeyboardArrowRight size="2.5em" className="mr-5 "/>
              </div>
            </div>
      </>
    );
  }