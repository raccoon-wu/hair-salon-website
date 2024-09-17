import "../app/globals.css";

export default function Navbar() {
    return (
      <>
      <div className="flex h-20 bg-nav-dark-gray items-center">
          <div className="bg-blue-50 ml-7 
                          w-1/3 xl:w-1/4 ">
              <p className="text-3xl font-bold bg-gradient-to-r from-dark-gold to-lighter-gold bg-clip-text text-transparent"> HAIR YOU GO </p>
          </div>
          <div className="bg-yellow-950 m-10 
                          w-2/3 xl:w-3/4 ">
              <ul className="flex flex-row justify-end space-x-10 md:space-x-20 lg:space-x-30 xl:space-x-40 text-zinc-100">
                <li>About</li>
                <li>Gallery</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
          </div>
      </div>
      </>
    );
  }
