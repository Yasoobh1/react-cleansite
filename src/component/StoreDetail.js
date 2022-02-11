import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Navigation } from "swiper";
import face from "../assets/face.png";
import location from "../assets/location.png";
import wifi from "../assets/wifi.png";
import calendar from "../assets/calendar.png";
import mobile from "../assets/mobile.png";
import google from "../assets/image-google.png";
import iphone from "../assets/image-iphone.png";

export default function StoreDetail() {
  return (
    <div className="store_main">
      <div className="store-cont">
        <div className="store-area">
          <span className="text-heading">
            Duis aute irure dolor in <br /> reprehenderit in voluptate
          </span>
          <br />
          <br />
          <span className="text-desc">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui{" "}
            <br /> officia deserunt mollit anim id est laborum.
          </span>
          <br />
          <br />

          <div className="detail">
            <img src={face} />
            <span className="detail-desc">
              Sagittis vitae et leo duis ut diam quam nulla.
            </span>
          </div>

          <div className="detail">
            <img src={wifi} />
            <span className="detail-desc">
              Faucibus pulvinar elementum integer enim neque volutpat ac
              tincidunt vitae.
            </span>
          </div>

          <div className="detail">
            <img src={location} />
            <span className="detail-desc">
              Viverra adipiscing at in tellus integer feugiat scelerisque
              varius.
            </span>
          </div>

          <div className="detail">
            <img src={calendar} />
            <span className="detail-desc">Elementum curabitur vitae nunc.</span>
          </div>
          <div className="button-section">
            <span>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
            </span>
            <div className="logo-sec">
              <div>
                <img className="img" src={iphone} />
                <img className="img2" src={google} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="mobile" src={mobile} />
    </div>
  );
}
