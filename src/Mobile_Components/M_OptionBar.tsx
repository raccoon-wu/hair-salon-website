import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function optionBars () {

    const screenFactor = 400;
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);

    const overlayButton = {
        className: "bg-gradient-to-r from-warm-gold to-lighter-gold h-12 w-36 rounded-full m-1.5 animate-popIn font-JostM text-sm cursor-pointer ",
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };    

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getBarsPosition = () => {
        if (scrollPosition < window.innerHeight-screenFactor)
        {       if(showOverlay === true){
                    return ' bg-zinc-600 h-12 w-12 absolute top-4 md-phone:top-6 rounded-full z-50 left-4 md-phone:left-6 '
                }
                return ' absolute top-6 md-phone:top-8 z-50 left-6 md-phone:left-8';

        } else if (scrollPosition >= window.innerHeight-screenFactor){
                if(showOverlay === true){
                    return ' fixed bottom-12 rounded-full bg-zinc-600 h-12 w-12 left-6 md-phone:left-8 z-50 '
                }
                return ' fixed bottom-12 rounded-full bg-zinc-600 h-12 w-12 z-50 animate-scale left-6 md-phone:left-8 ';

        }
    }

    const [barClicked, setBarClicked] = useState(false);
    
    const handleBarClick = () => {
        setBarClicked(true);
        setShowOverlay(!showOverlay);

        setTimeout(() => {
            setBarClicked(false);
        }, 300);
    }

    const closeOverlay = () => {
        setShowOverlay(false);
    }

    return (
        <>
            <div className={` ${getBarsPosition() } cursor-pointer flex justify-center items-center`}
            >
                <FaBars className='text-lighter-gold text-3xl'
                onClick={handleBarClick}/>
            </div>
            {showOverlay && 
            (<>
                <div className="fixed top-0 left-0 bg-black bg-opacity-90
                h-screen w-screen py-4 z-40 "
                onClick={closeOverlay}>
                    <div className=" fixed bottom-28 left-1/2 transform -translate-x-1/2 bg-red-50 flex flex-col ">
                        <button {...overlayButton}>About</button>
                        <button {...overlayButton}>Gallery</button>
                        <button {...overlayButton}>Services</button>
                        <button {...overlayButton}>Contact</button>
                    </div>
                </div>

            </>)
            }
        </>

    );
}
