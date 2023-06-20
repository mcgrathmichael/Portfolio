import Quiz from "./assets/img/quiz.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import mm1 from "./assets/img/mm1.png";
import mm2 from "./assets/img/mm2.png";
import mm3 from "./assets/img/mm3.png";

function Projects() {
  return (
    <div id="project">
      <h1 className="text-grey underline text-2xl md:text-6xl p-20 flex justify-center">
        PROJECTS
      </h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        transitionTime={1000}
        className="mx-auto md:max-w-full sm:max-w-md">
        <div className="p-4">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/2">
              <img className="p-4 rounded-3xl" src={Quiz} alt="Quiz Image" />
            </div>
            <div className="sm:w-1/2">
              <p className="text-grey text-lg sm:text-xl">
                My first project in HTML, JavaScript, and CSS - I’m definitely
                still proud of it. It was a Quiz game made with 3 others.
                <br />
                <br />
                It was a nice break from the Kahoots games we were used to
                playing in bootcamp.
                <br />
                <br />I used Figma for the design, and it was my first time
                using it. Super intuitive. I can’t believe how much I’ve learned
                since then!
              </p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-col md:max-h-full sm:flex-row">
            <div className="md:w-1/2">
              <img src={mm1} className="p-2 rounded-3xl" alt="MM1 Image" />

              <img src={mm2} className="p-2 rounded-3xl" alt="MM2 Image" />
              <img src={mm3} className="p-2 rounded-3xl" alt="MM3 Image" />
            </div>
            <div className="sm:w-1/2">
              <p className="text-grey text-lg p-3">
                This was our second project - Memory Mash Up!
                <br />
                <br />
                I worked on it with a group of 4 others using React.js, Express,
                and an API - in our case 2.
                <br />
                This was a real challenge - we had so many functionalities for
                the game to work, from the score, the timer, to the matching of
                the cards! It was a real head-scratcher for us, but we honestly
                knocked it out of the park, in my opinion.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
      {/* <h1 className="text-grey underline text-2xl md:text-6xl p-20 flex justify-center">
        DESIGNS
      </h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        transitionTime={1000}>
        <div>
            <img></img>
        </div>
      </Carousel> */}
    </div>
  );
}

export default Projects;
