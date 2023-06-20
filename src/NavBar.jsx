import Logo from "./assets/img/logo.svg";
import { Link } from "react-scroll";
// import ScrollElement from "react-scroll/modules/mixins/scroll-element";

function NavBar() {
  return (
    <>
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div className="hidden md:flex items-center text-2xl space-x-1">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-purple cursor-pointer text-grey rounded transition duration-300 py-2 px-7">
                  {" "}
                  Home{" "}
                </Link>
                <Link
                  activeClass="active"
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-purple cursor-pointer text-grey rounded transition duration-300 py-2 px-7">
                  About Me
                </Link>
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
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-purple cursor-pointer text-grey rounded transition duration-300 py-2 px-7">
                {" "}
                Projects
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-purple cursor-pointer text-grey rounded transition duration-300 py-2 px-7">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
