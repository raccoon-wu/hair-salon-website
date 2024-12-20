import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function optionBars () {

    const screenFactor = 400;
    const [scrollPosition, setScrollPosition] = useState(0);
    const [transitionNeeded, setTransitionNeeded] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };    

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
        };
    }, []);

    const getBarsPosition = () => {
        if (scrollPosition < window.innerHeight-screenFactor)
        {   
            // setTransitionNeeded(false);
            return 'absolute top-6 md-phone:top-8 ';
        } else if (scrollPosition >= window.innerHeight-screenFactor){
            // setTransitionNeeded(true);
            return `fixed bottom-12 rounded-full bg-zinc-600 h-12 w-12 z-50 `;
        }
    }

    const [barClicked, setBarClicked] = useState(false);
    const handleBarClick = () => {
        setBarClicked(true);

        setTimeout(() => {
            setBarClicked(false);
        }, 500);
    }

    return (
        <>
            <div className={` ${getBarsPosition() } cursor-pointer left-6 md-phone:left-8 flex justify-center items-center
            ${barClicked ? 'animate-scale' : ''}`}
            onClick={handleBarClick}>
                <FaBars className='text-lighter-gold text-3xl'/>
            </div>
            
        </>

    );
}
