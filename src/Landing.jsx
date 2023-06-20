import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-scroll";
import CV from "./assets/img/MichaelMcGrathCV.pdf";

function Landing() {
  return (
    <div
      id="home"
      className="px-5 lg:py-12 text-4xl lg:text-7xl md:leading-loose md:px-17 lg:px-24">
      <h1 className="text-grey   tracking-wide opacity-75">Creative wannabe</h1>{" "}
      <h1 className=" text-pink underline decoration-green">UI/UX Designer</h1>
      <h1 className="text-grey opacity-75">and</h1>
      <h1 className="text-purple underline decoration-green">
        Full Stack Developer
      </h1>
      <section className="flex justify-start lg:justify-center xl:justify-normal gap-16 py-9 md:py-20 text-sm md:text-lg font-bold">
        <div className="flex gap-10 sm:flex-row ">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <button className=" hover:ring-2 text-dark hover:ease-in-out hover:ring-green ring-offset-1 opacity-75 overflow-hidden p-6 rounded-2xl bg-gradient-to-t from-pink to-purple">
              Check out My Work
            </button>
          </Link>
          <a href={CV} download="Michael McGrath CV">
            <button
              type="button"
              className="opacity-75 text-dark hover:transition-all hover:opacity-1 hover:ring-2 overflow-hidden rounded-2xl p-6 bg-gradient-to-t from-green to-purple hover:from-pink hover:to-purple">
              Download My CV
            </button>
          </a>
        </div>
      </section>
      <div className="flex justify-center p-12">
        <IoIosArrowDropdown
          size={50}
          className="animate-bounce text-grey opacity-60 ring-grey"
        />
      </div>
    </div>
  );
}

export default Landing;
