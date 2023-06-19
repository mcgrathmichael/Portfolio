import { slide as Menu } from "react-burger-menu";
import "./Burger.css";
function Burger() {
  return (
    <div className="md:hidden">
      <Menu className="fixed inline-block bg-grey ">
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    </div>
  );
}
export default Burger;
