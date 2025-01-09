import { RiScissorsFill } from "react-icons/ri";
import { FaGoogle, FaInstagram, FaFacebook } from "react-icons/fa6";
import { useState } from "react";

export default function NavBarMobile() {
    const landingIcons = {
        className: "text-2xl sm-phone:text-3xl md-phone:text-4xl min-h cursor-pointer rounded-2xl duration-300",
        style: {
          color: '#FCE295', 
        },
      };

    const [discoverClicked, setDiscoverClicked] = useState(false);
    const handleDiscoverClick = () => {
        setDiscoverClicked(true);

        setTimeout(() => {
            setDiscoverClicked(false);
        }, 500);
    }

    return (
        <>
            <div className="flex flex-col w-screen h-screen bg-[url('../app/Assets/webp_Images/Mobile_bg.webp')] bg-cover bg-center justify-center items-center">
                <div className="flex flex-row justify-center items-center px-2">
                    <h2 className="text-white text-2xl sm-phone:text-3xl md-phone:text-5xl">HAIR YOU GO</h2>
                    <RiScissorsFill className="text-white ml-1" size="2.2em" style = {{transform: 'rotate(90deg)' }}/>  
                </div>

                <div className="w-52 sm-phone:w-60 my-0.5 md-phone:w-80 md-phone:my-1 h-0.5 bg-white"></div>
                <h3 className="text-base sm-phone:text-xl md-phone:text-3xl text-white mt-1">YOUR HAIR, OUR PASSION</h3>
                <div className="flex flex-row mt-5 w-4/5 px-6 justify-evenly">
                    <a href="https://g.co/kgs/i3gjw9z" target="_blank" rel="noopener noreferrer">
                        <FaGoogle {...landingIcons} />
                    </a>

                    <a href="https://www.facebook.com/HYGforesthill" target="_blank" rel="noopener noreferrer">
                        <FaFacebook {...landingIcons} />
                    </a>

                    <a href="https://www.instagram.com/hygforesthill?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                        <FaInstagram {...landingIcons} />
                    </a>
                </div>

                <div className={` absolute bottom-10 flex justify-center items-center rounded-full bg-gradient-to-r from-warm-gold to-lighter-gold
                 md-phone:h-16 md-phone:w-52 ${discoverClicked ? 'animate-scale' : ''}`}
                        onClick={() => {
                        handleDiscoverClick();
                        const element = document.getElementById("m-about-section");
                        if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        }}}>
                    <p className={`text-sm md-phone:text-lg cursor-pointer font-JostM px-6 py-3`}
                    >Discover More...</p>
                </div>
            </div>
        </>
    );
}

// 'sm-phone': '320px',
// 'md-phone': '480px',
// sm: '640px'
