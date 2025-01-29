/* eslint-disable react/prop-types */
import { GoLink } from "react-icons/go";
import "../style/login.scss";
import { useState } from "react";

const Login = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="login-container flex" onClick={onClose}>
      <div
        className="login-wrapper flex col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="logo flex">
          <GoLink />
        </div>
        <h1>Hi There!</h1>
        <div className="form flex col">
          <div className="input-wrapper flex">
            <input type="text" placeholder="Email Address" />
          </div>
          <div className="input-wrapper flex">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <div
              className="text flex"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </div>
          </div>
          <div className="forgot-text flex">Forgot Password?</div>
          <button
            className="btn-login flex"
            disabled={isLoading}
            style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
          >
            {isLoading ? <div className="loader flex"></div> : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
