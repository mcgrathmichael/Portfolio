import AboutMe from "./AboutMe";
import "./App.css";
import Landing from "./Landing";
import NavBar from "./NavBar";
import Badges from "./Badges";
import Projects from "./Projects";
import ContactForm from "./Contact";
import Footer from "./Footer";
import Burger from "./Burger";
import Designs from "./Designs";
// import Lines from "./assets/img/Line Trails.svg";
import Line1 from "./assets/img/Vector 2.svg";
import Lines2 from "./assets/img/Vector 3.svg";
// import Lines3 from "./assets/img/Vector 4.svg";
import Glowy from "./assets/img/glowy.svg";
import ScrollingIcon from "./light_dark";
// import Scrolls from "./dinogame";

function App() {
  return (
    <>
      <div>
        <img
          className="absolute dark:opacity-30 saturate-200 dark:filter-none brightness-200 blur-sm sepia -z-10"
          src={Glowy}></img>
        <ScrollingIcon />

        <Burger />
        <NavBar />

        <div className="flex justify-center">
          <img className="absolute  -z-10" src={Line1}></img>
        </div>

        <Landing />
        <AboutMe />
        <div className=" flex justify-center">
          <img className="absolute  -z-10 " src={Lines2}></img>
        </div>
        <Badges />
        {/* <div className=" flex justify-center">
          <img className=" absolute  " src={Lines3}></img>
        </div> */}
        <Projects />
        <div className="flex   justify-center">
          <img className="absolute  -z-10 rotate-180" src={Lines2}></img>
        </div>

        <Designs />
        <div className="flex justify-center">
          <img className="absolute -z-10 " src={Line1}></img>
        </div>
        <div>
          <img
            className="absolute opacity-20 right-0 -z-10 sepia dark:filter-none brightness-200 saturate-200"
            src={Glowy}></img>
        </div>
        <ContactForm />
        <div className="flex justify-center">
          <div className="w-1/2 h-16 my-24 absolute blur-xl bg-gradient-radial from-orange via-gold to-darkpink brightness-110 dark:from-green dark:via-dark dark:to-purple rounded-full -z-10"></div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
