import Animation from "../components/Animation";
import "../style/home.scss";
import { PiCookieLight } from "react-icons/pi";

const Home = () => {
  return (
    <div className="home-container flex bw">
      <div className="aside flex col">
        <h1>
          Collaboration <span>fuels</span> growth <br /> your{" "}
          <span>skills</span> can <span>shape</span> the future
        </h1>
        <div className="btns flex">
          <button>Let's Find</button>
          <button>About Us</button>
        </div>
      </div>
      <div className="right-animation flex">
        <Animation />
      </div>
      <div className="cookie flex col">
        <div className="icon flex">
          <PiCookieLight />
        </div>
        <div className="text">
          <p>
            We use cookies to personalize your experience, analyze site
            performance, and enhance usability. By continuing to browse, you
            agree to our use of cookies.{" "}
          </p>
          <div className="btns flex">
            <button>ACCEPT ALL</button>
            <button>Privacy policy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
