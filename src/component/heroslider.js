// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import herosliderImg from "../assets/heroimage.jpg";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Heroslider() {
  return (
    <div className="heroslider">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img src={herosliderImg} alt="heroimage" />
          <div className="text">
            <span>
              Escape <br />
              the ordinary
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={herosliderImg} alt="heroimage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={herosliderImg} alt="heroimage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={herosliderImg} alt="heroimage" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
