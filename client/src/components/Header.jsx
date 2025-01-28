import { GoLink } from "react-icons/go";
import "../style/header.scss";
import { useState } from "react";
import Login from "./Login";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false)
  const onClose = () => {
    setShowLogin(false)
  }
  return (
    <div className="header-container flex bw">
      <div className="logo flex">
        <div className="icon flex">
          <GoLink />
        </div>
      </div>
      <div className="navs flex">
        <div className="hamburger-menu flex">
          <div className="bars flex col" onClick={() => setShowMenu(!showMenu)}>
            <div
              className="bar"
             
            ></div>
            <div className="bar"
         
            ></div>
          </div>
          <div
            className="main-menu flex"
            style={{
              transform: showMenu ? "translateY(0%)" : "translateY(-200%)",
            }}
          ></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Login</button>
      </div>
      {
        showLogin && <Login onClose={onClose} />  
      }
    </div>
  );
};

export default Header;
