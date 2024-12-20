"use client"; 

import { useState, useEffect, use } from 'react';

import Navbar from "@/Screen_Components/Navbar";
import LandingPage from "@/Screen_Components/Landing";
import Footer from "@/Screen_Components/Footer";
import Gallery from "@/Screen_Components/Gallery";
import Reviews from "@/Screen_Components/Reviews";

import M_Landing from "@/Mobile_Components/M_Landing"
import M_About from '@/Mobile_Components/M_About';
import M_Footer from '@/Mobile_Components/M_Footer';
import M_Gallery from '@/Mobile_Components/M_Gallery';
import M_Reviews from '@/Mobile_Components/M_Reviews';
import M_Services from '@/Mobile_Components/M_Services';
import M_OptionBar from '@/Mobile_Components/M_OptionBar';
import "./globals.css";

const useIsMobile = (breakpoint = 768) => {
// creating a custom hook to detect screen size based on the breakpoint with default value of 768 
// (default value is needed otherwise breakpoint will be undefined, leading to issues in window.innerWidth < breakpoint as undefined is not a valid comparison value)

// creating a custom hook instead of putting this into Home(){} is for reusability, when other components needs the resize logic, useIsMobile() can be called instead of writing repetitive code
// custom hooks allows for cleaner code and readability, it's also a good React practice as React's hooks API is built around creating reusable pieces of logic

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // useEffect is used to initiallise and set up the 'resize' event listener (native javascript browser event, part the browser's API) since it cannot be directly added in the main body of a component,
    // as it will trigger on every render. Using useEffect guarantees that this runs ONCE.
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    }

    checkMobile();

    window.addEventListener('resize', checkMobile);
    // EventListener is independent and will run checkMobile every time the window is resized regardless of whether useEffect() is called again

    return () => window.removeEventListener('resize', checkMobile);
    // this is a cleanup function inside useEffect hooks to remove event listener when the component is no longer in use, preventing memory leaks
    // unmounts if the following happens: component is conditionally rendered, navigates to different route, lazy loading/dynamic importing so the component is removed/replaced dynamically
    // if dependency array [breakpoint] were to change, clean up would run and re-run with new value of breakpoint

  }, [breakpoint]);
  return isMobile;
};

export default function Home() {

  const isMobile = useIsMobile();

  return (
    <>
    {isMobile ? (
        <>
        <M_Landing/>
        <M_OptionBar/>
        <M_About/>
        <M_Reviews/>
        <M_Gallery/>
        <M_Services/>
        <M_Footer/>
 
        </>):(
        <>
          <Navbar/>
          <LandingPage/>
          <Reviews/>
          <Gallery/>
          <Footer/>
        </>)}
    </>
  );
}
