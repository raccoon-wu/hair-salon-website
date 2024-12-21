import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function OptionBars() {
  const screenFactor = 400;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hasScrolledPastThreshold, setHasScrolledPastThreshold] = useState(false);
  const [barClicked, setBarClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollPosition(currentScroll);

      // Check if we've scrolled past the threshold
      const threshold = window.innerHeight - screenFactor;
      if (currentScroll >= threshold && !hasScrolledPastThreshold) {
        setHasScrolledPastThreshold(true);
      } else if (currentScroll < threshold && hasScrolledPastThreshold) {
        setHasScrolledPastThreshold(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolledPastThreshold]);

  const getBarsPosition = () => {
    const threshold = window.innerHeight - screenFactor;

    if (scrollPosition < threshold) {
      return "absolute top-6 md-phone:top-8";
    } else {
      return `fixed bottom-12 rounded-full bg-zinc-600 h-12 w-12 z-50 ${
        hasScrolledPastThreshold ? "animate-popIn" : ""
      }`;
    }
  };

  const handleBarClick = () => {
    setBarClicked(true);

    setTimeout(() => {
      setBarClicked(false);
    }, 500);
  };

  return (
    <div
      className={`${getBarsPosition()} cursor-pointer left-6 md-phone:left-8 flex justify-center items-center ${
        barClicked ? "animate-scale" : ""
      }`}
      onClick={handleBarClick}
    >
      <FaBars className="text-lighter-gold text-3xl" />
    </div>
  );
}
