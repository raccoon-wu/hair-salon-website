"use client";
import images from '../Asset_scripts/GalleryImages';
import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

type ImageSections = keyof typeof images;
// type = defining new type alias (creating new name for existing type/types, can be multiple existant types)
// ImageSections = name of defined type alias
// keyof = takes keys from object and create a union type. (e.g. if you have an object type with keys a, b, and c, keyof would produce the type "a" | "b" | "c")
// typeof = determines the type of existing variables (e.g. const obj = { a: 1, b: 2 } would give typeof obj = { a: number; b: number; })

export default function M_Gallery() {

    const [imageIndex, setImageIndex] = useState(0);
    const [selection, setSelection] = useState<ImageSections>('section_colour');
    const totalImages: number = images[selection].length;

    const nextImage = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    const prevImage = () => {
        setImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages)
    };

    const prevImageIndex = (imageIndex - 1 + totalImages) % totalImages;
    const nextImageIndex = (imageIndex + 1) % totalImages;
    
    const buttonBright = {
        className: 'px-4 py-0.5 mx-0.5 h-full bg-button-light text-button-text-light rounded-3xl text-sm',
    };

    const buttonDim = {
        className: 'px-4 py-0.5 mx-0.5 h-full bg-button-dark text-button-text-dark rounded-3xl text-sm',
    };

    return (
        
        <>
        <div className="my-8 w-screen flex flex-col justify-center items-center">
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
            <div className='w-full flex flex-row items-center m-4'>              
                <div className='w-1/5 mx-1 h-52 overflow-hidden relative'>
                    <img className='py-6 absolute h-full object-cover object-right opacity-25' src={images[selection][prevImageIndex].src}/>
                </div>
                <div className='w-3/5 mx-1 h-52 flex place-content-center'>
                    <img className='rounded-md h-full object-cover' src={images[selection][imageIndex].src}/>
                </div>
                <div className='w-1/5 mx-1 h-52 overflow-hidden relative'>
                    <img className='py-6 absolute h-full object-cover object-left opacity-25' src={images[selection][nextImageIndex].src}/>
                </div>                       
                    <MdOutlineKeyboardArrowLeft size="2em" className="absolute text-white left-2" onClick={prevImage}/>
                    <MdOutlineKeyboardArrowRight size="2em" className="absolute text-white right-2" onClick={nextImage}/>
            </div>
            <div className='w-screen flex justify-center items-center'>
                    <p className='text-sm text-button-text-dark'>{imageIndex + 1}/{totalImages}</p>  
            </div>

        </div>
        </>
    )
}