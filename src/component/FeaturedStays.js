import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Navigation } from "swiper";
import Rectangle16 from "../assets/Rectangle-16.png";
import Rectangle17 from "../assets/Rectangle-17.png";
import Rectangle19 from "../assets/Rectangle-19.png";

export default function FeaturedStays() {
  return (
    <div className="featured_main">
      <div className="featured-area">
        <span className="text-heading">Featured Stays</span>
        <br />
        <span className="text-desc">
          Beachfront villas to high rise apartments and penthouses,
          <br /> experience your next stay with Stella.
        </span>

        <Swiper
          spaceBetween={-20}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="price-div">
              <span className="price">From AED 2,549 / night</span>
            </div>
            <img className="img" src={Rectangle16} />
            <span className="img-desc">
              Spectacular 4 BDR Palm Villa | Beach <br />| Private Pool
            </span>
            <br />
            <span className="guest">
              Dubai <span className="dot">.</span> 4 guests
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <div className="price-div">
              <span className="price">From AED 514 / night</span>
            </div>
            <img className="img" src={Rectangle17} />
            <span className="img-desc">
              Wonderful 2BDR | Dubai JBR | Beach <br />| Netflix
            </span>
            <br />
            <span className="guest">
              Dubai <span className="dot">.</span> 4 guests
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <div className="price-div">
              <span className="price">From AED 363 / night</span>
            </div>
            <img className="img" src={Rectangle19} />
            <span className="img-desc">
              Radiant 1BDR | Dubai JBR | Beach <br />| Netflix
            </span>
            <br />
            <span className="guest">
              Dubai <span className="dot">.</span> 4 guests
            </span>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
