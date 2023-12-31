import { useState } from "react";
import Logo from "./assets/img/logo.svg";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // grab everything we need
  // const btn = document.querySelector("button.mobile-menu-button");
  // const menu = document.querySelector(".mobile-menu");

  // function Burger() {
  //   setBurger((burger) => !set);
  //   menu.classList.toggle("hidden");
  // }

  return (
    <>
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div className="hidden md:flex items-center text-2xl space-x-1">
                <a
                  href="#"
                  className="hover:text-purple text-grey rounded transition duration-300 py-2 px-7">
                  Home
                </a>
                <a
                  href="#"
                  className="hover:text-purple text-grey rounded transition duration-300 py-2 px-7">
                  About Me
                </a>
              </div>
            </div>
            <div>
              <a href="#" className="flex  items-center py-5 px-7 text-grey">
                <img
                  src={Logo}
                  className="animate-pulse transition-all-300  mr-1"></img>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1 text-2xl">
              <a
                href=""
                className="py-2 px-7 hover:text-purple text-grey rounded transition duration-300">
                Projects
              </a>
              <a
                href=""
                className="py-2 px-7 hover:text-purple text-grey rounded transition duration-300">
                Contact
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsNavOpen((prev) => !prev)}
                className="mobile-menu-button">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="MOBILE-MENU flex md:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>
        {isNavOpen && (
          <div className="showMenuNav">
            {/* <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div> */}
            <a
              href="#"
              className="hover:text-purple text-grey rounded transition duration-300 block py-2 px-4 text-sm">
              Projects
            </a>
            <a
              href="#"
              className="hover:text-purple text-grey rounded transition duration-300 block py-2 px-4 text-sm">
              About Me
            </a>
            <a
              href="#"
              className="hover:text-purple text-grey rounded transition duration-300 block py-2 px-4 text-sm">
              Contact
            </a>
          </div>
        )}
      </section>
    </>
  );
}

export default NavBar;
