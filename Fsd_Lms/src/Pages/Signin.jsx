import React from "react";
import { useNavigate } from "react-router-dom";
import Inno from "../assets/innomatics.png";

export default function Signin() {
  const navigate = useNavigate();
  return (
    <>
      <div className="login-page">
        <form className="login-form">
          <img src={Inno} className="login-logo" />
          <label>
            <strong>Email</strong>
          </label>
          <input type="email" />
          <label>
            <strong>Enter Same Email</strong>
          </label>
          <input type="email" />
          <label>
            <strong>Password</strong>
          </label>
          <input type="string" />
          <label>
            <strong>Enter Same Password</strong>
          </label>
          <input type="string" />
          <button>Sign-In</button>
          <p>
            Already have account, then please{" "}
            <span className="link" onClick={() => navigate("/log-in")}>
              Log In
            </span>{" "}
          </p>
        </form>
      </div>
    </>
  );
}
