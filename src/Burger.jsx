import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";

import "./Burger.css";
function Burger() {
  return (
    <div className="md:hidden">
      <Menu className="fixed inline-block bg-grey ">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="menu-item">
          Home
        </Link>
        <Link
          activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="menu-item">
          About Me
        </Link>

        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="menu-item">
          Projects
        </Link>

        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="menu-item">
          Contact
        </Link>
      </Menu>
    </div>
  );
}
export default Burger;
