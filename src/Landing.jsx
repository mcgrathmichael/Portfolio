import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-scroll";
import CV from "./assets/img/MichaelMcGrathCVFR.pdf";
// import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
function Landing() {
  //
  // const [textColor, setTextColor] = useState("red");

  return (
    <div
      id="home"
      className="px-5 lg:py-12 text-4xl md:text-5xl lg:text-7xl  md:px-17 lg:px-24">
      <h1 className="dark:text-grey text-purple tracking-wide dark:opacity-75">
        Creative wannabe
      </h1>{" "}
      <h1 className=" text-orange dark:text-pink underline decoration-gold dark:decoration-green">
        UI/UX Designer
      </h1>
      <h1 className="dark:text-grey text-purple dark:opacity-75">and</h1>
      <h1 className="dark:text-purple text-darkpink underline decoration-gold dark:decoration-green">
        Full Stack Developer
      </h1>{" "}
      <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500"></div>
      <div className="absolute w-12 md:w-28 -z-10 md:28 h-12 blur-md bg-gradient-radial dark:from-pink from-gold via-yellow to-darkpink  dark:via-dark  dark:to-pink rounded-full -translate-y-48 ml-72 m-72 "></div>
      <div className="absolute w-24 h-24 blur-xl bg-gradient-radial dark:from-green dark:via-dark -z-10 dark:to-purple from-gold via-yellow to-gold rounded-full"></div>
      <section className="flex justify-start lg:justify-center xl:justify-normal gap-16 py-9 md:py-20 text-sm md:text-lg font-bold">
        <div className="flex gap-10 sm:flex-row ">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <button className=" hover:ring-2 dark:text-dark text-gold hover-transition-all hover:ease-in-out dark:hover:ring-green  hover:ring-pink ring-offset-1  transition overflow-hidden p-6 rounded-2xl bg-gradient-to-t from-purple ease-in-out to-pink">
              Check out My Work
            </button>
          </Link>
          <a href={CV} download="Michael McGrath CV">
            <button
              type="button"
              className=" text-gold tracking-wide dark:text-dark hover:transition-all  hover:ring-pink hover:ring-2 transition ring-offset-1 dark:hover:ring-green overflow-hidden rounded-2xl p-6 bg-gradient-to-t dark:from-green from-purple ring-2 dark:to-purple to-sky ease-in-out hover:from-purple hover:to-pink">
              Download My CV
            </button>
          </a>
        </div>
      </section>
      <div className="flex justify-center p-12">
        <IoIosArrowDropdown
          size={50}
          className="animate-bounce text-pink dark:text-grey dark:opacity-60 ring-grey"
        />
      </div>
    </div>
  );
}

export default Landing;
