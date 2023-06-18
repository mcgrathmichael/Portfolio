import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Quiz from "./assets/img/quiz.png";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

function Projects() {
  return (
    <div className="">
      <div className="">
        <Swiper
          spaceBetween={0}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="flex-row">
          <SwiperSlide className="">
            <div className="text-grey flex">
              My first project in HTML Javascript and CSS - I’m definitely still
              proud of it. It was a Quiz game made with 3 others. It was a nice
              break from the Kahoot’s game we were used to playing in bootcamp.
              I used figma for the design and it was my first time using it.
              Super intuitive. I can’t believe how much I’ve learned since then!
              You can give it a go here: Quiz Time! an Odyssey Adventure
              <img className="w-1/2" src={Quiz} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>{" "}
    </div>
  );
}

export default Projects;
