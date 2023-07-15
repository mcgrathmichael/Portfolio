import React, { useEffect, useState } from "react";

const ScrollingIcon = () => {
  const [isPositionFixed, setIsPositionFixed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("fixedElement");
      const isPositionFixed = element.style.position === "fixed";

      if (window.scrollY > 100 || !isPositionFixed) {
        setIsPositionFixed(true);
      }

      if (window.scrollY < 100 && !isPositionFixed) {
        setIsPositionFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="fixedElement"
      className={` transition-transform p-5 z-10 duration-500 ${
        isPositionFixed
          ? "fixed right-3"
          : "absolute md:py-6 sm:top-20 sm:right-0 mx-20 md:mx-2"
      }`}>
      <div className="switch">
        <input
          onClick={handleDarkModeToggle}
          defaultChecked
          type="checkbox"
          className="switch__input"
          id="Switch"
        />
        <label className="switch__label" htmlFor="Switch">
          <span className="switch__indicator"></span>
          <span className="switch__decoration"></span>
        </label>
      </div>
    </div>
  );
};

export default ScrollingIcon;
