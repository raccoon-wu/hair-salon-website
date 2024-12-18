import { RiScissorsFill } from "react-icons/ri";
import { FaGoogle, FaInstagram, FaFacebook, FaBars } from "react-icons/fa6";
import mobile_bg from "../app/Assets/Images/Mobile_bg.png";

export default function NavBarMobile() {
    const landingIcons = {
        className: "text-2xl md-phone:text-4xl min-h cursor-pointer rounded-2xl duration-300",
        style: {
          color: '#FCE295', 
        },
      };
    
    return (
        <>
            <div className="flex flex-col w-screen h-screen bg-[url('../app/Assets/Images/Mobile_bg.png')] bg-cover bg-center justify-center items-center">
                <div className="flex flex-row justify-center items-center px-2">
                    <h2 className="text-white text-3xl sm-phone:text-3xl md-phone:text-5xl">HAIR YOU GO</h2>
                    <RiScissorsFill className="text-white ml-1" size="2.2em" style = {{transform: 'rotate(90deg)' }}/>  
                </div>
                {/* <p className="text-white text-lg">Your hair, our passion</p> */}
                <div className="w-60 my-0.5 md-phone:w-80 md-phone:my-1 h-0.5 bg-white"></div>
                <h3 className="sm-phone:text-xl md-phone:text-3xl text-white">YOUR HAIR, OUR PASSION</h3>
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
                <FaBars className="text-lighter-gold absolute top-6 left-6 md-phone:top-8 md-phone:left-8 text-3xl"/>
                <div className="font-JostM w-40 h-10 md-phone:h-12 md-phone:w-44 mb-1 md-phone:mb-2 bg-gradient-to-r from-warm-gold to-lighter-gold rounded-3xl absolute bottom-10 flex justify-center items-center">
                    <p className="sm-phone:text-sm md-phone:text-lg">Discover More...</p>
                </div>
            </div>
        </>
    );
}

// 'sm-phone': '320px',
// 'md-phone': '480px',
// sm: '640px'
