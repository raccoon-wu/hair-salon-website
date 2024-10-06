import { RiScissorsFill } from "react-icons/ri";

export default function NavBarMobile() {
    return (
        <>
            <div className="flex flex-col w-screen h-screen bg-black justify-center items-center">
                <div className="flex flex-row justify-center items-center px-2">
                    <h2 className="text-white text-3xl sm-phone:text-4xl md-phone:text-5xl sm:text-7xl">HAIR YOU GO</h2>
                    {/* <RiScissorsFill className="text-white ml-1" size="3.5em" style = {{transform: 'rotate(90deg)' }}/>   */}
                </div>
                
            </div>
        </>
    );
}

// 'sm-phone': '320px',
// 'md-phone': '480px',
// sm: '640px'
