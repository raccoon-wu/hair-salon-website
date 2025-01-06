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

    const starStyle = { className: 'text-lg md-phone:text-xl', }
    // Function to display stars if they are 4 or 5 stars
    const starsCount = () => {
        let count = googleReviews[reviewIndex].stars;
        const starsDisplayed = [];

        for (let i = 0; i < count; i++) {
            starsDisplayed.push(<FaStar key={i} {...starStyle} />);
        }

        return <>{starsDisplayed}</>
    };

    return (
        <>
            <div id="m-review-section" className="bg-near-white w-screen h-full flex flex-col justify-center items-center py-10 md-phone:py-20 ">
                <h3 className='mb-0'>see our reviews</h3>
                <Swiper
                        pagination={{
                            el: '.swiper-custom-numbers',
                            type: 'fraction',
                          }}
                        loop={true}
                        modules={[Pagination, Navigation]} 
                        navigation={true}
                        style={{
                            '--swiper-navigation-size': '20px',
                            '--swiper-navigation-color': 'black',
                        }}>

                        {googleReviews.map((reviews) => (
                                <SwiperSlide className='h-full w-screen flex justify-center items-center my-2 '>
                                            
                                            <div className='h-[250px] flex flex-col justify-center items-center'>
                                                <div className='flex flex-row my-1 md-phone:my-2 justify-center align-middle'>{starsCount()}</div>
                                                <p className='w-4/5 my-1 md-phone:my-2  px-2 text-center'>{reviews.review}</p>
                                                <p className='w-4/5 font-bold my-1 md-phone:my-2  px-2 text-center'> - {reviews.reviewer}</p>                                                            
                                            </div>
                                            
                                </SwiperSlide>
                            ))}
                </Swiper>          
                <div className='w-screen flex justify-center items-center'>
                    <div className=' swiper-custom-numbers font-JostR text-lg text-center'></div>
                </div>              
                    
                    {/* <div className='h-[100px] w-[100px] bg-yellow-800'></div> */}

                <div className="w-40 h-10 md-phone:text-lg md-phone:h-16 md-phone:w-52 bg-slate-900 rounded-full mt-2 flex justify-center items-center">
                    <a href="https://g.co/kgs/i3gjw9z">
                        <p className="text-white sm-phone:text-sm md-phone:text-lg">Find us on Google</p>
                    </a>
                </div>
            </div>

        </>
    );
}
