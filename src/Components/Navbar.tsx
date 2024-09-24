import "../app/globals.css";
import { RiScissorsFill } from "react-icons/ri";

export default function Navbar() {

    return (
      <>
      <div className="flex shorter-screen:h-20 taller-screen:h-24 bg-nav-dark-gray items-center">
          <div className=" ml-10 flex flex-row h-full
                          w-1/3 xl:w-1/4 min-w-fit items-center">
              <h2 className="shorter-screen:text-4xl taller-screen:text-5xl font-bold mt-5 bg-gradient-to-r from-dark-gold to-lighter-gold bg-clip-text text-transparent"> HAIR YOU GO </h2>
              <RiScissorsFill size="2.3em" className="ml-1 h-full text-lighter-gold mt-5 taller-screen:ml-2" style = {{transform: 'rotate(90deg)' }}/>
          </div>
          <div className=" m-10 xl:m-20
                          w-2/3 xl:w-3/4 ">
              <ul className="flex flex-row justify-end space-x-10 md:space-x-20 lg:space-x-30 xl:space-x-36 pt-5 text-zinc-300 shorter-screen:text-xl taller-screen:text-2xl">
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Gallery & Services</li>
                <li className="cursor-pointer">Contact</li>
              </ul>
          </div>
      </div>
      <div className="self-center h-1.5 w-[calc(100vw-6rem)] ml-10 mr-10 bg-dark-gold"></div>
      </>
    );
  }
