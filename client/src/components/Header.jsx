import { GoLink } from "react-icons/go";
import "../style/header.scss";
import { useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const onClose = () => {
    setShowLogin(false);
  };
  return (
    <div className="header-container flex bw">
      <div className="logo flex">
        <div className="icon flex" onClick={() => navigate("/")}>
          <GoLink />
        </div>
      </div>
      <div className="navs flex">
        <div className="hamburger-menu flex">
          <div className="bars flex col" onClick={() => setShowMenu(!showMenu)}>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div
            className="main-menu flex"
            style={{
              transform: showMenu ? "translateY(0%)" : "translateY(-200%)",
            }}
          >
            <ul className="flex col">
              <li className="flex">Your Profile</li>
              <li className="flex">Your Skills</li>
              <li className="flex">Find Skills</li>
              <li className="flex">Latest News</li>
            </ul>
          </div>
        </div>
        <button onClick={() => setShowLogin(true)}>Login</button>
      </div>
      {showLogin && <Login onClose={onClose} />}
    </div>
  );
};

export default Header;
