import "../src/assets/fonts/font_embeded.scss";
import "./index.scss";
import Header from "./component/Header";
import Heroslider from "./component/heroslider";
import Addbooking from "./component/AddBoooking";
import FeaturedStays from "./component/FeaturedStays";
import StoreDetail from "./component/StoreDetail";
import FourSection from "./component/FourSection";
import Contact from "./component/contact";

function App() {
  return (
    <>
      <section className="main">
        <Header />
        <Heroslider />
        <Addbooking />
        <FeaturedStays />
        <StoreDetail />
        <FourSection />
        <Contact />
      </section>
    </>
  );
}

export default App;
