import { IoIosArrowDropdown } from "react-icons/io";

function Landing() {
  return (
    <div className="px-5 lg:py-12 text-4xl md:leading-loose md:px-17 lg:px-24">
      <span className="text-grey  md:text-6xl tracking-wide opacity-75">
        Creative wannabe <br></br>
        <span className=" text-pink underline decoration-green">
          UI/UX Designer
        </span>{" "}
        <br></br>
        and{" "}
        <span className="text-purple underline decoration-green">
          Full Stack Developer
        </span>
      </span>
      <section className="flex justify-start lg:justify-center xl:justify-normal gap-16 py-9 md:py-20 text-sm md:text-lg font-bold">
        <div className="flex gap-10 sm:flex-row">
          <button className=" hover:ring-2  hover:ease-in-out hover:ring-green ring-offset-1 opacity-75 overflow-hidden p-5 rounded-2xl bg-gradient-to-t from-pink to-purple">
            Check out My Work
          </button>
          <button className="opacity-75 hover:transition-all hover:opacity-1 hover:ring-2 overflow-hidden rounded-2xl p-6 bg-gradient-to-t from-green to-purple hover:from-pink hover:to-purple">
            Download My CV
          </button>
        </div>
      </section>
      <div className="flex justify-center p-12">
        <IoIosArrowDropdown
          size={50}
          className="animate-pulse animate-bounce text-grey opacity-60 ring-grey"
        />
      </div>
    </div>
  );
}

export default Landing;
