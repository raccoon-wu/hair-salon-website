import { PiHairDryer } from "react-icons/pi";
import { FiThumbsUp, FiScissors } from "react-icons/fi";

export default function M_About() {
    const aboutIcons = {
        size: "3em",
        className: "text-warm-gold",
        style: {
          color: '#FCE295',
          minWidth: "1.8em",  // Set minimum width to 1.8em
          minHeight: "1.8em"  // Set minimum height to 1.8em
        }
      };

      const aboutDiv = {
        className: "flex flex-row my-4 items-center",
      }

    return (
        <>
        <div className="flex flex-col h-[500px] justify-center items-center my-4">
            <h3 className="text-white mb-5">WHY CHOOSE US?</h3>
            <div {...aboutDiv}>
                <FiThumbsUp {...aboutIcons}/>
                <div className="ml-10 w-[200px]">
                    <p className="text-rg text-white font-JostM">Experience</p>
                    <p className="text-rg text-white font-JostL">Hairdressers with more than 20 years of experience working with hair</p>
                </div>
            </div>
            <div {...aboutDiv}>
                <PiHairDryer {...aboutIcons}/>
                <div className="ml-10 w-[200px]">
                    <p className="text-rg text-white font-JostM">Quality</p>
                    <p className="text-rg text-white font-JostL">Commitment to friendly, professional service ensures our customers leaves satisfied</p>
                </div>
            </div>
            <div {...aboutDiv}>
                <FiScissors {...aboutIcons}/>
                <div className="ml-10 w-[200px]">
                    <p className="text-rg text-white font-JostM">Affordable</p>
                    <p className="text-rg text-white font-JostL">Discover the best prices in the Forest Hill Chase area</p>
                </div>
            </div>
        </div>
        
        </>
    )
}