import Dynamic from "./assets/img/DynamicBadge.svg";
import Functional from "./assets/img/FunctionalBadge.svg";
import Innovative from "./assets/img/InnovativeBadge.svg";

function Badges() {
  return (
    <>
      <h1 className="flex my-20 dark:text-grey dark:opacity-70 text-gold dark:decoration-green decoration-purple underline text-3xl justify-center">
        Key words:
      </h1>
      <div className=" flex flex-col items-center mt-20">
        <div className="relative">
          <img
            src={Dynamic}
            alt="Dynamic Badge"
            className="brightness-125 hue-rotate-30 dark:filter-none w-24 md:w-40 mx-auto mb-4"
          />
          <h1 className="absolute p-4 left-1/2 transform -translate-x-1/2 -mt-8 dark:text-green text-purple text-xl md:text-3xl  font-bold">
            Dynamic
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <img
              src={Functional}
              alt="Functional Badge"
              className="brightness-125 hue-rotate-30 dark:filter-none w-24 md:w-40 mx-8"
            />
            <h1 className="absolute p-8 left-1/2 transform -translate-x-1/2 -mt-8 dark:text-green text-purple text-xl md:text-3xl font-bold">
              Functional
            </h1>
          </div>
          {/* <div className="-z-10 bg-gradient-to-t brightness-200 dark:from-grey dark:to-green from-gold to-sky scale-150 absolute text-9xl blur-2xl  m-3 ">
            ⬢
          </div> */}
          <div className="relative">
            <img
              src={Innovative}
              alt="Innovative Badge"
              className="brightness-125 hue-rotate-30 dark:filter-none w-24 md:w-40 mx-8"
            />
            <h1 className="absolute  p-8 left-1/2 transform -translate-x-1/2 -mt-8 text-purple dark:text-green text-xl md:text-3xl font-bold">
              Innovative
            </h1>
          </div>
        </div>
        <div className=" w-16 h-80 blur-xl brightness-150 from-orange  via-yellow to-green bg-gradient-radial dark:from-green dark:via-dark dark:to-purple rounded-full rotate-90 -my-32 -z-10"></div>
      </div>
    </>
  );
}

export default Badges;
