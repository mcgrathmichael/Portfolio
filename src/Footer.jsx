import { ImGithub } from "react-icons/im";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <div>
      <div className=" animate-pulse flex justify-evenly m-10 pb-10">
        <a href="https://www.linkedin.com/in/michael-mc-grath/">
          <FiLinkedin size={60} />
        </a>
        <a href="https://github.com/mcgrathmichael/">
          <ImGithub size={60} />
        </a>
      </div>
    </div>
  );
}
export default Footer;
