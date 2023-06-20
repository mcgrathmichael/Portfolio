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
          <img className="rounded-full max-w-xs " src={Pic}></img>
        </div>
        <div className="flex">
          <span className="text-grey opacity-70 w-3/5 text-xs p-4 md:text-2xl md:p-20 lg:text-3xl">
            Helloo, bonjour, I’m Michael, a passionate web developer with
            experience in JavaScript, React, CSS and more. I love building
            interactive and user-friendly web applications and I love a
            colourful palette, just like my personality.
            <br></br>
            <br></br>
            This website I’ve created is is to present myself to future
            employers, so let me tell you a bit about me.
            <br></br>
            Working for over ten years in customer service I’ve managed to find
            myself a good work ethic. Spending years on a phone, talking to
            customers by email or face to face has helped me cultivate a good
            intuition with both customers and colleagues alike - I enjoy working
            in a team or on my own; I love helping others.
            <br></br>
            <br></br>
            But everyone needs a change now and then - and although I’ve lived
            in 3 countries I have not yet had such a drastic change in my work
            and frankly I’m in need of one. <br></br>
            Originally from Ireland, I’m living in France for 6 years or so - a
            move I chose after I decided I wanted to learn a language and I knew
            immersion was the only real way to do so, and I am clearly committed
            to the goal hein! - Oui oui baguette.<br></br>
            <br></br>I studied Animation in school after it became apparent I’d
            never stop drawing or painting or just having an interest in design.
            I’ve recently picked up Figma and I’m really enjoying it.<br></br>
            <br></br>
            You’ll find my CV back up above me - but keep scrolling to see some
            of my projects!
          </span>
          <div className="absolute w-56 -z-10  h-56 blur-xl bg-gradient-radial from-green via-dark  to-purple rounded-full translate-y-48 ml-96 -translate-x-48 "></div>

          <div className="absolute w-12 -z-10  h-12 blur-sm bg-gradient-radial from-green via-purple  to-purple rounded-full -translate-y-48 translate-x-4 "></div>
          <div className="absolute w-72 -z-10  h-72 blur-3xl bg-gradient-radial from-purple via-green  to-purple rounded-full -translate-y-48 "></div>
          <img
            className="absolute -z-10 w-12 ml-12 -translate-y-12"
            src={Logo}></img>
          <div className=" sm:w-1/3 grid grid-cols-2 lg:grid-cols-3 gap-4  text-green animate-pulse">
            <AiFillHtml5 size={80} />
            <DiCss3 size={80} />
            <FaFigma size={80} />
            <FaNodeJs size={80} />
            <FaReact size={80} />
            <ImGithub size={80} />
            <SiAdobephotoshop size={80} />
            <SiExpress size={80} />
            <TbBrandJavascript size={80} />
            <SiMysql size={80} />
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutMe;
