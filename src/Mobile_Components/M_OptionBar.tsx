import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function optionBars () {

    const screenFactor = 400;
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);

    const overlayButton = {
        className: "bg-gradient-to-r from-warm-gold to-lighter-gold h-12 w-36 md-phone:h-16 md-phone:w-48 md-phone:text-lg rounded-full m-1.5 animate-popIn font-JostM text-sm cursor-pointer ",
    };

    // Event that listens for user scroll and updates the useState
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };    

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Boolean to track whether or not the user has scrolled past the first section, updated whenever useState scrollPosition is updated
    const isScrolled = scrollPosition >= window.innerHeight - screenFactor;

    const getBarsPosition = () => {

        //Variables to store classnames
        let barsClassname = '';
        let overlayClassname = '';

        if (isScrolled) {
            if (showOverlay) {
                // overlayed bottom state
                barsClassname = ' fixed bottom-12 rounded-full bg-zinc-600 h-12 w-12 md-phone:h-16 md-phone:w-16 left-6 md-phone:left-8 z-50 animate-scale ';
                overlayClassname = 'fixed bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col';
            }   else {
                // neutral bottom state
                barsClassname = ' fixed bottom-12 rounded-full bg-zinc-600 h-12 w-12 md-phone:h-16 md-phone:w-16 z-50 left-6 md-phone:left-8 animate-popIn ';
                overlayClassname = '';
            }
        }   else {
            if (showOverlay) {
                // overlayed top state
                barsClassname = ' fixed top-6 md-phone:top-8 z-50 left-6 md-phone:left-8 bg-zinc-600 animate-scale h-12 w-12 md-phone:h-16 md-phone:w-16 rounded-full z-50 transition-colors duration-200 ';
                overlayClassname = 'fixed top-4 left-1/2 transform -translate-x-1/2 flex flex-col ';
            }   else {
                // neutral top state
                barsClassname = ' absolute top-6 md-phone:top-8 z-50 left-6  md-phone:h-16 md-phone:w-16 md-phone:left-8 animate-scale ';
                overlayClassname = '';
            }
        }
        return { barsClassname, overlayClassname };
    }

    const { barsClassname, overlayClassname } = getBarsPosition();
    
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
            <div className={` ${barsClassname} cursor-pointer flex justify-center items-center`}>
                <FaBars className='text-lighter-gold text-3xl md-phone:text-4xl'
                onClick={handleBarClick}/>
            </div>
            {showOverlay && 
            (<>
                <div className="fixed top-0 left-0 bg-black bg-opacity-90
                h-screen w-screen py-4 z-40 "
                onClick={closeOverlay}>
                    <div className={` ${overlayClassname} flex flex-col `}>
                        <button {...overlayButton} 
                        onClick={() => {
                            const element = document.getElementById("m-about-section");
                            if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }}}
                        >About</button>

                        <button {...overlayButton}
                        onClick={() => {
                            const element = document.getElementById("m-gallery-section");
                            if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }}}
                        >Gallery</button>

                        <button {...overlayButton}
                        onClick={() => {
                            const element = document.getElementById("m-service-section");
                            if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }}}
                        >Services</button>

                        <button {...overlayButton}
                        onClick={() => {
                            const element = document.getElementById("m-contact-section");
                            if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }}}
                        >Contact</button>
                    </div>
                </div>

            </>)
            }
        </>

    );
}
