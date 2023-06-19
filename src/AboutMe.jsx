import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiExpress, SiMysql, SiAdobephotoshop } from "react-icons/si";
import { ImGithub } from "react-icons/im";

function AboutMe() {
  return (
    <>
      <div>
        <div className="flex">
          <span
            id="about"
            className="text-grey opacity-70 w-3/5 p-4 md:text-2xl md:p-20 lg:text-3xl">
            Hi, I’m Michael, a passionate web developer with experience in
            JavaScript, React, and CSS. I love building interactive and
            user-friendly web applications. I like a colourful palette, just
            like my personality. Originally from Ireland, I’m living in France
            for 6 years or so.
          </span>

          <div className="w-1/3 grid grid-cols-2 lg:grid-cols-3 gap-4 text-green animate-pulse">
            <AiFillHtml5
              className="hover:brightness-125 duration-100 ease-in hover:scale-110"
              size={50}
            />
            <DiCss3 size={50} />
            <FaFigma size={50} />
            <FaNodeJs size={50} />
            <FaReact size={50} />
            <ImGithub size={50} />
            <SiAdobephotoshop size={50} />
            <SiExpress size={50} />
            <TbBrandJavascript size={50} />
            {/* <div></div> */}
            <SiMysql size={50} />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutMe;
