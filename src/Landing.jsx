import React from "react";

function Landing() {
  return (
    <div className="px-5 text-4xl md:leading-loose md:px-28 lg:ml-24">
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
      <section className="flex justify-start  gap-16 py-9 text-sm">
        <button className="opacity-75 overflow-hidden px-8 py-5 rounded-2xl bg-pink">
          Get to Know Me
        </button>
        <button className="opacity-75 overflow-hidden px-8 py-5 rounded-2xl bg-pink">
          Download My CV{" "}
        </button>
      </section>
    </div>
  );
}

export default Landing;
