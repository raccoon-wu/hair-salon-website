import { div, img } from 'framer-motion/client';
import { googleReviews } from '../Asset_scripts/GoogleReviews';
import React, { useRef, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function M_Reviews() {
    const [reviewIndex, setReviewIndex] = useState(0);
    const currentReview = googleReviews[reviewIndex];

    // Fade in and out animation
    const [animState, setAnimState] = useState('');
    const [animating, setAnimating] = useState(false);

    // Function to iterate through the reviews with modulo operator
    const nextReview = () => {
              setAnimState('animate-slideRight');
              setTimeout(() => {
                setReviewIndex((prevIndex) => (prevIndex + 1) % googleReviews.length); // Update review index
                setAnimState('');
              }, 300)

        }

    const previousReview = () => {
              setAnimState('animate-slideLeft');
              setTimeout(() => {
                setReviewIndex((prevIndex) => (prevIndex - 1 + googleReviews.length) % googleReviews.length); // Update review index
                setAnimState('');
              }, 300)

        }

    // Function to display stars if they are 4 or 5 stars
    const starsCount = () => {
        let count = googleReviews[reviewIndex].stars;
        if (count === 5) {
            return (
                <>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </>
            );
        } else if (count === 4) {
            return (
                <>
                    <FaStar /><FaStar /><FaStar /><FaStar />
                </>
            );
        } else return null;
    };

    const containerRef = useRef<HTMLDivElement>(null);
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX = e.touches[0].clientX; // obtains the X coordinate of the first touch
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX = e.changedTouches[0].clientX; // first touch changed during current event
        handleSwipe();
    };

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

                <div
                    ref={containerRef}
                    onTouchStart={handleTouchStart} // Attach touch start event handler
                    onTouchEnd={handleTouchEnd} // Attach touch end event handler
                    className='w-4/5 flex flex-col justify-center items-center text-center text-sm'
                >
                    <div className='div flex flex-row mt-3 mb-1'>{starsCount()}</div>
                    <div className={`flex flex-col justify-center items-center ${animState}`}>
                        <p className='w-4/5 my-1 duration-300'>{currentReview.review}</p>
                        <p className='w-3/5 font-bold my-1 duration-300'>- {currentReview.reviewer}</p>
                    </div>
                    <div className='absolute w-screen flex flex-col justify-between'>
                        <MdOutlineKeyboardArrowLeft size="2em" className="absolute left-2" onClick={previousReview} />
                        <MdOutlineKeyboardArrowRight size="2em" className="absolute right-2" onClick={nextReview} />
                    </div>
                </div>
            </div>
        </>
    );
}
