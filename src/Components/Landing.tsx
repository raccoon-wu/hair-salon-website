import FPDisplay from '../app/Assets/Images/After.png';

export default function LandingPage() {
    return (
      <>
      <div className="flex flex-row">
        <div className="flex w-1/2 h-[calc(100vh-5rem)] justify-center items-center">
            <div className="flex flex-col w-1/2 ml-30 justify-center items-center">
                <h1 className="text-5xl text-center uppercase mb-3">Your hair,</h1>
                <h1 className="text-5xl text-center uppercase mb-7">our passion</h1>
                <p className="text-center text-white max-w-md">With over 20 years of experience, our salon offers expert, personalized haircare at an affordable price. Enjoy top-quality service every time, where luxury meets your budget.</p>
                <div className='h-10 w-full bg-cyan-400 mt-8'></div>
            </div>
        </div>
            <div className="absolute flex w-full h-[calc(100vh-5rem)] overflow-hidden">
                <img src={FPDisplay.src} className='absolute h-full scale-[1.5] right-0 top-[50px] -translate-x-1/4 object-cover'/>
            </div>
      </div>
      </>
    );
  }