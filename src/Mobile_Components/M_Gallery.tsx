"use client";
import images from '../Asset_scripts/GalleryImages';
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './MSwiper.css'
type ImageSections = keyof typeof images;
// type = defining new type alias (creating new name for existing type/types, can be multiple existant types)
// ImageSections = name of defined type alias
// keyof = takes keys from object and create a union type. (e.g. if you have an object type with keys a, b, and c, keyof would produce the type "a" | "b" | "c")
// typeof = determines the type of existing variables (e.g. const obj = { a: 1, b: 2 } would give typeof obj = { a: number; b: number; })



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function M_Gallery() {

    const [imageIndex, setImageIndex] = useState(0);
    const [selection, setSelection] = useState<ImageSections>('section_colour');
    const totalImages: number = images[selection].length;

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    const buttonBright = {
        className: 'px-4 py-0.5 mx-0.5 h-full bg-button-light text-button-text-light rounded-3xl text-sm animate-scale duration-500 cursor-pointer ',
    };

    const buttonDim = {
        className: 'px-4 py-0.5 mx-0.5 h-full bg-button-dark text-button-text-dark rounded-3xl text-sm cursor-pointer ',
    };

    return (
        
        <>
        <div id="m-gallery-section" className="my-8 w-screen flex flex-col justify-center items-center z-0">
        <h3 className="text-white">view our gallery</h3>
            <div className='my-1 flex flex-row justify-between items-center'>
                <p className={selection === 'section_general' ? buttonBright.className : buttonDim.className}
                onClick={() => {setSelection('section_general'); setImageIndex(0);}}>
                    General
                </p>

                <p className={selection === 'section_cut' ? buttonBright.className : buttonDim.className}
                onClick={() => {setSelection('section_cut'); setImageIndex(0);}}>
                    Cuts
                </p>

                <p className={selection === 'section_colour' ? buttonBright.className : buttonDim.className}
                onClick={() => {setSelection('section_colour'); setImageIndex(0);}}>
                    Colours                
                </p>

                <p className={selection === 'section_perm' ? buttonBright.className : buttonDim.className}
                onClick={() => {setSelection('section_perm'); setImageIndex(0);}}>
                    Perms
                </p>
            </div>

            <Swiper 
                style={{
                    '--swiper-navigation-color': '#fff',
                    "--swiper-navigation-size": "20px",                    
                }}
                className='mt-2'
                loop={true}
                pagination={{
                    el: '.swiper-custom-pagination',
                    dynamicBullets: true,
                    }}
                modules={[Pagination, Navigation]}
                navigation={true}
                >

                {images[selection].map((index) => (
                    <SwiperSlide className='w-4/5 flex justify-center items-center z-10'>
                        <img className='px-16' src={index.src}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='mt-3 w-screen flex justify-center items-center transform-none'>
                <div className='swiper-custom-pagination'></div>
            </div>
        </div>
        </>
    )
}