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
  const [galleryButtonHover, setgalleryButtonHover] = useState(false);

    return (
      <>
      <div className="w-full shorter-screen:h-[950px] taller-screen:h-[1150px] flex justify-evenly items-center bg-mid-gray px-20">
        
        <div className="h-full flex flex-col justify-center items-center">
          <h2 className="shorter-screen:text-4xl taller-screen:text-5xl font-bold bg-gradient-to-r from-dark-gold to-lighter-gold bg-clip-text text-transparent mb-5"> OUR GALLERY </h2>
              <div className="grid grid-cols-3
              shorter-screen:w-[650px] shorter-screen:gap-5 shorter-screen:h-[650px] taller-screen:gap-7">
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

              <button className='h-14 shorter-screen:w-[650px] taller-screen:w-[800px] bg-lighter-gold rounded-xl shorter-screen:mt-5 taller-screen:mt-6 text-lg flex flex-row justify-evenly items-center px-24'
              onMouseEnter={() => setgalleryButtonHover(true)} onMouseLeave={() => setgalleryButtonHover(false)}>
                {galleryButtonHover?  
                <>
                <a href="https://g.co/kgs/i3gjw9z" target="_blank" rel="noopener noreferrer"><FaGoogle {...galleryButtonIcons}/></a>
                <a href="https://www.facebook.com/HYGforesthill" target="_blank" rel="noopener noreferrer"><FaFacebook {...galleryButtonIcons}/></a>
                <a href="https://www.instagram.com/hygforesthill?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><FaInstagram {...galleryButtonIcons}/></a>
                </> : "View full gallery"
                }</button>

        </div>

        <div className=" w-[400px] h-full flex flex-col justify-center items-center">
          <h2 className="shorter-screen:text-4xl taller-screen:text-5xl font-bold bg-gradient-to-r from-dark-gold to-lighter-gold bg-clip-text text-transparent mb-5"> OUR SERVICES </h2>
          <div className=" w-full shorter-screen:h-[730px] taller-screen:h-[890px] bg-yellow-50 rounded-3xl flex flex-col pl-8 justify-center">
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