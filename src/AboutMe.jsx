import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiExpress, SiMysql, SiAdobephotoshop } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import Pic from "./assets/img/profilePic.jpg";
import Logo from "./assets/img/logo.svg";

function AboutMe() {
  return (
    <>
      <div id="aboutme">
        <div className="flex rounded-full row-end-2 justify-center">
          <img
            className="rounded-full max-w-xs dark:opacity-75"
            src={Pic}></img>
        </div>
        <div className="flex">
          <span className="text-purple dark:text-grey dark:opacity-70 w-3/5 text-lg p-4 md:text-xl md:p-20 lg:text-3xl text-center">
            <p className="opacity-100 text-pink dark:text-green decoration-gold dark:decoration-purple underline">
              Hello - Bonjour{" "}
            </p>{" "}
            I’m{" "}
            <u className="text-pink dark:text-green opacity-100 decoration-gold dark:decoration-purple underline">
              Michael
            </u>
            , a passionate web developer from Ireland, currently living in
            France, with experience in{" "}
            <u className="dark:text-green text-pink opacity-100 decoration-gold dark:decoration-purple underline">
              JavaScript, React, CSS and more
            </u>
            . I love building interactive and user-friendly web applications and
            I love a colourful palette, just like my personality. You’ll find my
            CV back up above me - but keep scrolling to see some of my projects
            and designs!
          </span>
          <div className="absolute w-56 -z-10 md:h-56 blur-xl bg-gradient-radial from-green via-gold to-pink dark:from-green dark:via-dark  dark:to-purple rounded-full translate-y-48 ml-80 -translate-x-48 "></div>

          <div className="absolute w-12 -z-10  h-12 blur-sm bg-gradient-radial from-darkpink via-gold to-grey dark:from-green dark:via-purple  dark:to-purple rounded-full -translate-y-48 translate-x-4 "></div>
          <div className="absolute w-72 -z-10  h-72 blur-3xl bg-gradient-radial from-orange via-gold  to-grey dark:from-purple dark:via-dark  dark:to-purple rounded-full -translate-y-48 animate-pulse-slow "></div>
          <img
            className="absolute -z-10 w-12 ml-38 -translate-y-18"
            src={Logo}></img>
          <div className=" sm:w-1/3 grid grid-cols-2 lg:grid-cols-3 gap-4 text-pink dark:text-green animate-pulse m-8">
            <AiFillHtml5 size={75} />
            <DiCss3 size={75} />
            <FaFigma size={75} />
            <FaNodeJs size={75} />
            <FaReact size={75} />
            <ImGithub size={75} />
            <SiAdobephotoshop size={75} />
            <SiExpress size={75} />
            <TbBrandJavascript size={75} />
            <SiMysql size={75} />
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutMe;
