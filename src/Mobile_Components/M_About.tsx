import { PiHairDryer } from "react-icons/pi";
import { FiThumbsUp, FiScissors } from "react-icons/fi";

export default function M_About() {
    const aboutIcons = {
        // size: "3em",
        className: "text-warm-gold text-4xl md-phone:text-6xl",
        style: {
          color: '#FCE295',
        }
      };

      const aboutDiv = {
        className: "flex flex-row my-4 items-center",
      }

      const aboutText = {
        className: "ml-6 md-phone:ml-10 w-[170px] md-phone:w-[200px]",
      }

    return (
        <>
        <div id="m-about-section" className="flex flex-col h-full justify-center items-center my-10 md-phone:my-20">
            <h3 className="text-white mb-5">WHY CHOOSE US?</h3>
            <div {...aboutDiv}>
                <FiThumbsUp {...aboutIcons}/>
                <div {...aboutText}>
                    <p className=" text-white font-JostM">Experience</p>
                    <p className=" text-white font-JostL">Hairdressers with more than 20 years of experience working with hair</p>
                </div>
            </div>
            <div {...aboutDiv}>
                <PiHairDryer {...aboutIcons}/>
                <div {...aboutText}>
                    <p className=" text-white font-JostM">Quality</p>
                    <p className=" text-white font-JostL">Commitment to friendly, professional service ensures our customers leaves satisfied</p>
                </div>
            </div>
            <div {...aboutDiv}>
                <FiScissors {...aboutIcons}/>
                <div {...aboutText}>
                    <p className=" text-white font-JostM">Affordable</p>
                    <p className=" text-white font-JostL">Discover the best prices in the Forest Hill Chase area</p>
                </div>
            </div>
        </div>
        
        </>
    )
}