"use client"; 
import React, { useState } from "react";
import { FaGoogle, FaInstagram, FaFacebook } from "react-icons/fa6";

import image1 from '../app/Assets/Images/Gallery (1).png';
import image2 from '../app/Assets/Images/Gallery (2).png';
import image3 from '../app/Assets/Images/Gallery (3).png';
import image4 from '../app/Assets/Images/Gallery (4).png';
import image5 from '../app/Assets/Images/Gallery (5).png';
import image6 from '../app/Assets/Images/Gallery (6).png';
import image7 from '../app/Assets/Images/Gallery (7).png';
import image8 from '../app/Assets/Images/Gallery (8).png';
import image9 from '../app/Assets/Images/Gallery (9).png';

export default function Gallery() {
  const priceListBold = {
    className: "font-bold text-xl",
  };

  const imageFormat = {
    className: "object-fit drop-shadow-md",
  }

  const galleryButtonIcons = {
    size: "1.5em", 
  }

  const goldTitles = {
    className: "text-3xl lg:text-4xl 2xl:shorter-screen:text-4xl 2xl:taller-screen:text-5xl font-bold bg-gradient-to-r from-dark-gold to-lighter-gold bg-clip-text text-transparent mb-5"
  };

  const [galleryButtonHover, setgalleryButtonHover] = useState(false);

    return (
      <>
      <div className="w-full py-16 lg:py-24 flex justify-evenly items-center bg-mid-gray px-5 xl:px-20">
        
        <div className="h-full flex flex-col justify-center items-center">
          <h2 {...goldTitles}> OUR GALLERY </h2>
              <div className="grid grid-cols-3
              w-[400px] h-[400px] gap-3
              lg:w-[500px] lg:h-[500px] lg:gap-4
              xl:w-[600px] xl:h-[600px] xl:gap-5
              2xl:w-[800px] 2xl:h-[800px] 2xl:gap-7

              ">
                  <img src={image2.src} alt="Gallery Image 2" {...imageFormat} />
                  <img src={image3.src} alt="Gallery Image 3" {...imageFormat} />
                  <img src={image4.src} alt="Gallery Image 4" {...imageFormat} />
                  <img src={image5.src} alt="Gallery Image 5" {...imageFormat} />
                  <img src={image6.src} alt="Gallery Image 6" {...imageFormat} />
                  <img src={image7.src} alt="Gallery Image 7" {...imageFormat} />
                  <img src={image8.src} alt="Gallery Image 8" {...imageFormat} />
                  <img src={image9.src} alt="Gallery Image 9" {...imageFormat} />
                  <img src={image1.src} alt="Gallery Image 1" {...imageFormat} />
              </div>

              <button className='h-12 w-[400px] lg:w-[500px] xl:w-[600px] 2xl:shorter-screen:w-[650px] 2xl:taller-screen:w-[800px] 
               bg-lighter-gold rounded-xl shorter-screen:mt-5 taller-screen:mt-6 text-base xl:text-lg flex flex-row justify-evenly items-center px-24'
              onMouseEnter={() => setgalleryButtonHover(true)} onMouseLeave={() => setgalleryButtonHover(false)}>
                {galleryButtonHover?  
                <>
                <a href="https://g.co/kgs/i3gjw9z" target="_blank" rel="noopener noreferrer"><FaGoogle {...galleryButtonIcons}/></a>
                <a href="https://www.facebook.com/HYGforesthill" target="_blank" rel="noopener noreferrer"><FaFacebook {...galleryButtonIcons}/></a>
                <a href="https://www.instagram.com/hygforesthill?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><FaInstagram {...galleryButtonIcons}/></a>
                </> : "View full gallery"
                }</button>

        </div>

        <div className="ml-4 lg:ml-0 flex flex-col justify-center items-center min-w-fit">
          <h2  {...goldTitles}> OUR SERVICES </h2>
          <div className=" w-[300px] h-[475px] lg:w-[350px] lg:h-[565px] xl:h-[665px] 2xl:shorter-screen:h-[860px] 2xl:taller-screen:h-[890px] 2xl:w-[500px]
          bg-yellow-50 rounded-3xl flex flex-col pl-8 justify-center">
          <p {...priceListBold}>Woman's</p>
              <p>Cut</p>
              <p>Colour</p>
              <p>Perm</p>
              <br/>


          <p {...priceListBold}>Men's </p>
              <p>Cut</p>
              <p>Colour</p>
              <p>Perm</p>
              <br/>

          <p {...priceListBold}>Children's</p>
              <p>Cut</p>
              <p>Colour</p>
              <p>Perm</p>
              <br/>
          </div>
        </div>
          
      </div>
      </>
    );
  }