import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Navigation } from "swiper";
import img1 from "../assets/four-img-sec-1.png";
import img2 from "../assets/four-img-sec-2.png";
import img3 from "../assets/four-img-sec-3.png";
import img4 from "../assets/four-img-sec-4.png";

export default function FourSection() {
  return (
    <div className="FourSection_main">
      <div className="FourSection-area">
        <div className="img-sec">
          <div className="img-sec-cont">
            <img className="img" src={img1} />
            <div className="text-area">
              <span className="text">Beyond Living</span>
              <div>
                <span className="text-desc">
                  Modern and fresh, our spaces are outfitted with comfort and
                  style, be it for a quick getaway to a long term stay.
                </span>
              </div>
            </div>
          </div>
          <div className="img-sec-cont">
            <img className="img2" src={img2} />
            <div className="text-area">
              <span className="text">Prime Locations</span>
              <div>
                <span className="text-desc">
                  Breathtaking views in convenient and sought after locations, a
                  little something for everyone.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="img-sec2">
          <div className="img-sec-cont">
            <img className="img" src={img3} />
            <div className="text-area">
              <span className="text">Nullam efficitur turpis</span>
              <div>
                <span className="text-desc">
                  Phasellus fermentum tellus vitae ante vehicula posuere.
                  Curabitur metus metus, feugiat non semper lacinia, maximus sit
                  amet ligula. Proin dictum quis ipsum.
                </span>
              </div>
            </div>
          </div>
          <div className="img-sec-cont">
            <img className="img2" src={img4} />
            <div className="text-area">
              <span className="text">A Signature of Excellence</span>
              <div>
                <span className="text-desc">
                  24/7 guest concierge, seamless check-in and immaculate
                  cleanliness, always a flawless stay.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <img className="img" src={img3} /> */}
        {/* <img className="img" src={img4} /> */}
      </div>
    </div>
  );
}
