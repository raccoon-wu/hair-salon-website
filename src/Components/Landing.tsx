import FPDisplay from '../app/Assets/Images/After.png';
import { FaGoogle, FaInstagram, FaFacebook } from "react-icons/fa6";

export default function LandingPage() {

  const landingIcons = {
    size: "1.9em", 
    className: "ml-1 h-full ml-0 mr-0 md:ml-5 md:mr-5",
    style: {
      color: '#FCE295', 
      minWidth: "1.8em",  // Set minimum width to 1.8em
      minHeight: "1.8em"  // Set minimum height to 1.8em
    }
  };

  const landingHeading = {
    className: "text-4xl xl:text-5xl shorter-screen:2xl:text-5xl taller-screen:2xl:text-6xl text-center uppercase mb-3 min-w-fit whitespace-nowrap"
  };

    return (
      <>
      <div className="flex flex-row">

        <div className="flex w-1/2 h-[calc(100vh-5rem)] justify-center items-center">

            <div className="flex flex-col w-1/2 ml-30 justify-center items-center">

                <h1 {...landingHeading}>Your hair,</h1>
                <h1 {...landingHeading}>our passion</h1>
                <p className="text-xl text-center text-white max-w-md mt-2">With over 20 years of experience, our salon offers expert, personalized haircare at an affordable price. Enjoy top-quality service every time, where luxury meets your budget.</p>

                    <div className='flex flex-row justify-evenly items-center h-10 w-full lg:w-4/5 xl:w-3/5 mt-7'>
                    {/* {...xyz }is a spread operator. It's useful for copying components like:
                    const obj1 = { a: 1, b: 2 };
                    const obj2 = { ...obj1, c: 3 };
                    console.log(obj2); // { a: 1, b: 2, c: 3 }
                    
                    Or it's useful for updating parts of objects without mutating the original like:
                    const [user, setUser] = useState({ name: 'John', age: 25 });

                    // Only update the age without mutating the entire object
                    setUser((prevUser) => ({ ...prevUser, age: 26 }));

                    // Now user is { name: 'John', age: 26 }
                    
                    */}
                        <FaGoogle {...landingIcons}/>
                        <FaFacebook {...landingIcons}/>
                        <FaInstagram {...landingIcons}/>
                    </div>
            </div>

        </div>
        {/* 
        Screen sizes tailwind reference: 
        sm: 640px
        md: 768px
        lg: 1024px
        xl: 1280px
        2xl: 1536px
         */}
            <div className="w-1/2 h-[calc(100vh-5rem)] overflow-hidden">
              <img src={FPDisplay.src} className='h-full w-full object-cover object-left'/>
                {/* <img src={FPDisplay.src} className='absolute h-full scale-[1.5] right-0 top-[50px] translate-x-[250px] xl:translate-x-[100px] 2xl:-translate-x-[100px] object-cover'/> */}
            </div>
      </div>
      </>
    );
  }