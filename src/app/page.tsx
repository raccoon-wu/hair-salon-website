import Navbar from "@/Components/Navbar";
import LandingPage from "@/Components/Landing";
import Footer from "@/Components/Footer";
import Gallery from "@/Components/Gallery";
import Reviews from "@/Components/Reviews";
import Services from "@/Components/Services";

import "./globals.css";

export default function Home() {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <Reviews/>
    <Gallery/>
    <Services/>
    <Footer/>
    </>
  );
}
