import Navbar from "@/Components/Navbar";
import LandingPage from "@/Components/Landing";
import Footer from "@/Components/Footer";
import "./globals.css";
import {Roboto} from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <LandingPage></LandingPage>
    <Footer></Footer>
    </>
  );
}
