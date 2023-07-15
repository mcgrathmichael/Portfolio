import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Intro from "./assets/img/intro.png";
import quiz from "./assets/img/quizgame.png";
import LIDL from "./assets/img/LIDL.jpg";

function Designs() {
  return (
    <div className=" " id="Designs">
      <h1 className="dark:text-grey text-pink decoration-gold dark:decoration-pink underline text-2xl md:text-6xl p-20 flex justify-center">
        DESIGNS
      </h1>
      <h2 className="md:hidden dark:text-grey text-purple decoration-gold dark:decoration-pink underline text-md md:text-3xl p-2 text-center">
        Some designs I created during my free time and others for projects I
        worked on - I hope it gives you a glimpse into what I'm capable of
      </h2>
      {/* <div className="absolute w-56 -z-10  h-56 blur-3xl bg-gradient-radial from-green via-dark  to-purple rounded-full translate-y-48 ml-96  "></div> */}

      <div className="absolute w-16  -z-10 lg:w-36 lg:h-36 h-16 blur-2xl bg-gradient-radial dark:from-pink dark:via-purple  dark:to-dark from- via-grey to-gold rounded-full -translate-y-48 -translate-x-48 "></div>
      <div className="absolute w-56 right-0  -z-10  h-56 blur-xl bg-gradient-radial dark:from-green dark:via-dark  dark:to-purple rounded-full float-right "></div>

      <div className="absolute w-80 -z-10  h-80 blur-3xl bg-gradient-radial dark:from-pink dark:via-purple  dark:to-grey from-orange via-white to-gold rounded-full translate-y-48 "></div>

      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        dynamicHeight={true}
        useKeyboardArrows
        transitionTime={1000}
        preventMovementUntilSwipeScrollTolerance={100}
        className="lg:p-24  mx-auto md:max-w-full sm:max-w-md">
        <div className="md:p-4 ">
          <div className="flex flex-col sm:flex-row ">
            <div className="sm:w-1/2">
              <img className="p-4 rounded-3xl" src={Intro} alt="Quiz Image" />
            </div>
            <div className="sm:w-1/2">
              <p className="dark:text-grey text-purple dark:opacity-70 md:text-2xl lg:text-3xl sm:text-xl">
                The idea was to create a minimalistic but bold magazine/blog
                website. After choosing the name Intro, I used simple elements
                and strong images to create a contrast in order to best show the
                contents of the website.
                <br />
                I love adding compositional elements that draw the eye and in
                this case it was a small group of lines that go down the length
                of the page. I also used various carousels and clickables in
                order to provide a function for the user to peruse the contents.
                <br />
                The call to action 'Make it your fashion diary' was a lightbulb
                moment, it was directed to employ the user to engage directly
                with the website, an invitation to be a part of it.
                <br />
                Although the navbar is filled with lots of items, the hierarchy
                is always clear. It was a very fun personal project, set by
                myself and for myself, and was used to show off a much more
                restraind approach to what I may normally want to do, but I
                needed to show my versatility.
              </p>
            </div>
          </div>
        </div>

        <div className="md:p-4">
          <div className="flex  flex-col md:max-h-full sm:flex-row">
            <div className="">
              <img src={LIDL} className="p-2 rounded-3xl" alt="MM1 Image" />
            </div>
            <div className="sm:w-1/2">
              <p className="dark:text-grey text-purple dark:opacity-70 md:text-2xl lg:text-3xl sm:text-sm p-3">
                This was another challange - this time using an already existing
                brand - LIDL. With their somewhat difficult colour palette - I
                decided to not shy away from it. I believe it matches the
                clothing style of LIDL, they do not shy away from their
                branding, in fact they very heavily lean into it, and that's
                probably why it's so popular. <br />I created a heavy border,
                used images I found online, focussed on the streetwear of it
                all, and provided an attractive navigation bar on the top for
                clarity. I think it turned out pretty wall, the focus is there,
                the layout is cohesive and it draws the eye everywhere it needs
                to. With some carousels and maybe video, I dare say it could
                rival Gucci.
              </p>
            </div>
          </div>
        </div>

        <div className="md:p-4 justify-end">
          <div className="flex flex-col md:max-h-full sm:flex-row">
            <div className=" md:w-1/2">
              <img src={quiz} className="p-2  rounded-3xl" alt="MM1 Image" />
            </div>
            <div className="sm:w-1/2">
              <p className="dark:text-grey text-purple dark:opacity-70 md:text-2xl lg:text-3xl sm:text-sm p-3">
                This was my first time using Figma, we went with a space theme,
                and I launched myself directly into creativity mode. I chose a
                colourful palette, and used elements that hark back to the 90s.
                A floating module made with mediocore 3D elements like you might
                find in a spaceship. Using colours that already have a meaning
                to us - green for correct, red for wrong, I went ahead and only
                used them where they were necessary to not take away from the
                meaning in the context of the game. <br />
                We arrive immediately on the Start page with only one option, it
                is clear, immediate, and provides a simply experience for the
                user. You cannot miss that giant Start button. I used empty
                space and simple shapes to balance the colourful interface.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Designs;
