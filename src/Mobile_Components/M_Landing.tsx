import { RiScissorsFill } from "react-icons/ri";
import { FaGoogle, FaInstagram, FaFacebook, FaBars } from "react-icons/fa6";
import mobile_bg from "../app/Assets/Images/Mobile_bg.png";

export default function NavBarMobile() {
    const landingIcons = {
        size: "2em",
        className: "ml-1 h-full max-h-16 ml-0 mr-0 md:ml-5 md:mr-5 cursor-pointer rounded-2xl duration-300",
        style: {
          color: '#FCE295',
          minWidth: "1.8em",  // Set minimum width to 1.8em
          minHeight: "1.8em"  // Set minimum height to 1.8em
        }
      };
    
    return (
        <>
            <div className="flex flex-col w-screen h-screen bg-[url('../app/Assets/Images/Mobile_bg.png')] bg-cover bg-center justify-center items-center">
                <div className="flex flex-row justify-center items-center px-2">
                    <h2 className="text-white text-3xl sm-phone:text-4xl md-phone:text-5xl">HAIR YOU GO</h2>
                    <RiScissorsFill className="text-white ml-1" size="2.2em" style = {{transform: 'rotate(90deg)' }}/>  
                </div>
                {/* <p className="text-white text-lg">Your hair, our passion</p> */}
                <div className="w-64 h-0.5 bg-white"></div>
                <h1 className="mt-2 text-2xl text-white font-JostL">YOUR HAIR, OUR PASSION</h1>
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
                <FaBars className="text-lighter-gold absolute top-8 left-8 text-3xl"/>
                <div className="font-JostM w-40 h-10 bg-gradient-to-r from-warm-gold to-lighter-gold rounded-3xl absolute bottom-12 flex justify-center items-center">
                    <p>Discover More...</p>
                </div>
            </div>
        </>
    );
}

// 'sm-phone': '320px',
// 'md-phone': '480px',
// sm: '640px'
