import { useEffect } from "react";
import { RiScissorsFill } from "react-icons/ri";

export default function Loading() {

    return (
        <>
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <RiScissorsFill className="text-near-white text-3xl animate-slowSpin"/>
            <p className="mt-2 text-near-white text-2xl">Loading...</p>
        </div>
        
        </>
    );
}