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
          <span className="text-grey opacity-70 w-3/5 p-4 md:text-2xl md:p-20 lg:text-3xl">
            Hi, I’m Michael, a passionate web developer with experience in
            JavaScript, React, and CSS. I love building interactive and
            user-friendly web applications. I like a colourful palette, just
            like my personality. Originally from Ireland, I’m living in France
            for 6 years or so.
          </span>
          {/* <svg
          viewBox="0 0 746 838"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet">
          <path
            d="M404.849 694.397C426.863 709.776 456.137 709.775 478.151 694.397L723.135 523.262C746.452 506.974 756.221 477.252 747.116 450.306L654.581 176.484C645.793 150.479 621.4 132.974 593.95 132.974H289.05C261.6 132.974 237.207 150.479 228.419 176.484L135.884 450.306C126.779 477.252 136.548 506.974 159.865 523.262L404.849 694.397Z"
            fill="green"
            fillOpacity="0.50"
          />
          <filter
            id="filter0_f_7_351"
            x="0.510925"
            y="0.973999"
            width="881.978"
            height="836.957"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feflood result="BackgroundImageFix" />
            <feblend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <fegaussianblur
              stdDeviation={66}
              result="effect1_foregroundBlur_7_351"
            />
          </filter>
        </svg> */}

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
