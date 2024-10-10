import { googleReviews } from '../Asset_scripts/GoogleReviews';
import React, { useRef, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function M_Reviews() {
    const [reviewIndex, setReviewIndex] = useState(0);
    const currentReview = googleReviews[reviewIndex];

    // Fade in and out animation
    const [animState, setAnimState] = useState('');
    const triggerFadeOut = (callback: () => void) => {
            setAnimState('animate-fadeOut'); // Apply fade-out class
            setTimeout(() => {
                callback(); // Change review after fade-out
                setAnimState('animate-fadeIn'); // Apply fade-in class
            }, 300); // Timeout matches the fade-out duration
        }

    //Function to iterate through the reviews with modulo operator
  const nextReview = () => {
    //% is modulo operator and it ensures the index wraps around back to the start when it reaches the end
    triggerFadeOut(() => {
        setReviewIndex((prevIndex) => (prevIndex + 1) % googleReviews.length); // Update review index
    });
  }

  const previousReview = () => {
    triggerFadeOut(() => {
        setReviewIndex((prevIndex) => (prevIndex - 1 + googleReviews.length) % googleReviews.length); // Update review index
    });
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

    const containerRef = useRef<HTMLDivElement>(null);
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        //React.TouchEvent<HTMLDivElement> is a type that specifies a touch event that occurs on a HTML <div> element
        touchStartX = e.touches[0].clientX; //obtains the X coordinate of the first touch (if there's multiple touches, use first touch detected)
    }

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX = e.changedTouches[0].clientX; //first touch changed during current event, in touchEnd event this would be the first touch that just ended
        handleSwipe();
    }

    const handleSwipe = () => {
        if (touchEndX < touchStartX - 50) {
            // Swipe left
            nextReview();
          } else if (touchEndX > touchStartX + 50) {
            // Swipe right
            previousReview();
          }
        };
        
    return (
        <>
        <div className="bg-near-white w-screen h-full flex flex-col justify-center items-center py-8">
            <h3>see our reviews</h3>

                <div className="text-sm w-40 h-10 bg-slate-900 rounded-3xl my-2 flex justify-center items-center">
                    <p className="text-white">Find us on Google</p>
                </div>

            <div ref={containerRef} 
            onTouchStart={handleTouchStart} // Attach touch start event handler
            onTouchEnd={handleTouchEnd} // Attach touch end event handler
            className='w-4/5 flex flex-col justify-center items-center text-center text-sm'>
                    <div className='div flex flex-row mt-3 mb-1'>{starsCount()}</div>
                        <div className={`${animState}`}>
                            <p className='my-1 duration-300'>{currentReview.review}</p>
                            <p className='font-bold my-1 duration-300'>- {currentReview.reviewer}</p>
                        </div>
                        <div className='absolute w-screen flex flex-col justify-between'>
                            <MdOutlineKeyboardArrowLeft size="2em" className="absolute left-2" onClick={previousReview}/>
                            <MdOutlineKeyboardArrowRight size="2em" className="absolute right-2" onClick={nextReview}/>
                        </div>
            </div>

        </div>
        
        </>
    )
}