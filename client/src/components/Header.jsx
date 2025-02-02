import { GoLink } from "react-icons/go";
import "../style/header.scss";
import { useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const isLoggedIn = window.localStorage.getItem("_skillink_auth_token");

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
              <li
                className="flex"
                onClick={() =>
                  isLoggedIn ? navigate("/profile") : setShowLogin(true)
                }
              >
                Your Profile
              </li>
              <li
                className="flex"
                onClick={() =>
                  isLoggedIn ? navigate("/profile") : setShowLogin(true)
                }
              >
                Your Skills
              </li>
              <li
                className="flex"
                onClick={() =>
                  isLoggedIn ? navigate("/find-skills") : setShowLogin(true)
                }
              >
                Find Skills
              </li>
              <li className="flex"
              onClick={() =>
                navigate("/latest-news")
              }
              >Latest News</li>
            </ul>
          </div>
        </div>
        {!isLoggedIn && (
          <button onClick={() => setShowLogin(true)}>Login</button>
        )}
        {isLoggedIn && (
          <button onClick={() => window.localStorage.clear()}>Logout</button>
        )}
      </div>
      {showLogin && <Login onClose={onClose} />}
    </div>
  );
};

export default Header;
