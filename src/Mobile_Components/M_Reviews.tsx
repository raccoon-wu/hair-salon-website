import { div, img } from 'framer-motion/client';
import { googleReviews } from '../Asset_scripts/GoogleReviews';
import React, { useRef, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Import core Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import "../app/globals.css";

export default function M_Reviews() {
    const [reviewIndex, setReviewIndex] = useState(0);
    const currentReview = googleReviews[reviewIndex];

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

    return (
        <>
            <div className="bg-near-white w-screen h-full flex flex-col justify-center items-center pt-8 py-3">
                <h3>see our reviews</h3>

                <div className="text-sm w-40 h-10 bg-slate-900 rounded-3xl my-2 flex justify-center items-center">
                    <p className="text-white">Find us on Google</p>
                </div>

                <div className='w-4/5 flex flex-col justify-center items-center text-center text-sm'>
                    <div className='div flex flex-row mt-1'>{starsCount()}</div>
                    <Swiper
                        pagination={{
                            el: '.swiper-custom-numbers',
                            type: 'fraction',
                          }}
                        loop={true}
                        modules={[Pagination, Navigation]} className="flex flex-col items-center justify-center">
                        {googleReviews.map((reviews) => (
                            <SwiperSlide className='h-full'>
                                <div className='h-[140px] flex flex-col justify-center items-center'>
                                    <p className='w-full'>{reviews.review}</p>
                                    <p className='font-bold mt-1'> - {reviews.reviewer}</p>
                                </div>
                            </SwiperSlide>
                        ))}                        
                    </Swiper>
                    <div className='swiper-custom-numbers mb-4'></div>
                </div>
            </div>
        </>
    );
}
