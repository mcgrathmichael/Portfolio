import Dynamic from "./assets/img/DynamicBadge.svg";
import Functional from "./assets/img/FunctionalBadge.svg";
import Innovative from "./assets/img/InnovativeBadge.svg";

function Badges() {
  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <div className="relative">
          <img
            src={Dynamic}
            alt="Dynamic Badge"
            className="w-24 md:w-40 mx-auto mb-4"
          />
          <span className="absolute p-4 left-1/2 transform -translate-x-1/2 -mt-8 text-green text-xl md:text-3xl  font-bold">
            Dynamic
          </span>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <img
              src={Functional}
              alt="Functional Badge"
              className="w-24 md:w-40 mx-8"
            />
            <span className="absolute p-8 left-1/2 transform -translate-x-1/2 -mt-8 text-green text-xl md:text-3xl font-bold">
              Functional
            </span>
          </div>
          <div className="-z-10 bg-gradient-to-t from-grey to-green  scale-150 absolute text-9xl blur-2xl  m-3 ">
            ⬢
          </div>
          <div className="relative">
            <img
              src={Innovative}
              alt="Innovative Badge"
              className=" w-24 md:w-40 mx-8"
            />
            <span className="absolute p-8 left-1/2 transform -translate-x-1/2 -mt-8 text-green text-xl md:text-3xl font-bold">
              Innovative
            </span>
          </div>
        </div>
        <div className=" w-16 h-48 blur-xl bg-gradient-radial from-green via-dark to-purple rounded-full rotate-90 -my-10 -z-10"></div>
      </div>
    </>
  );
}

export default Badges;
