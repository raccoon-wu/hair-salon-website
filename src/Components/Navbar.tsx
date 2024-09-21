import "../app/globals.css";
import { RiScissorsFill } from "react-icons/ri";

export default function Navbar() {

  const iconStyling = ``;

    return (
      <>
      <div className="flex h-20 bg-nav-dark-gray items-center">
          <div className=" ml-10 flex flex-row h-full mt-4
                          w-1/3 xl:w-1/4 min-w-fit">
              <h2 className="text-4xl font-bold pt-5 bg-gradient-to-r from-dark-gold to-lighter-gold bg-clip-text text-transparent"> HAIR YOU GO </h2>
              <RiScissorsFill size="2.3em" className="ml-1 h-full text-lighter-gold" style = {{transform: 'rotate(90deg)' }}/>
          </div>
          <div className=" m-10 xl:m-20
                          w-2/3 xl:w-3/4 ">
              <ul className="flex flex-row justify-end space-x-10 md:space-x-20 lg:space-x-30 xl:space-x-36 pt-5 text-zinc-300 text-xl">
                <li>About</li>
                <li>Gallery</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
          </div>
      </div>
      <div className="self-center h-1.5 w-[calc(100vw-6rem)] ml-10 mr-10 bg-dark-gold"></div>
      </>
    );
  }
