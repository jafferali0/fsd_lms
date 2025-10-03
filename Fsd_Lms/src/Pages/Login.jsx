import React from "react";
import "./Pages.css";
import Inno from "../assets/innomatics.png";
import Signin from "./Signin";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  function login() {
    navigate("/dashboard");
  }
  return (
    <>
      <div className="login-page">
        <form className="login-form">
          <img src={Inno} className="login-logo" />
          <label>
            <strong>Email / User ID</strong>
          </label>
          <input type="string" autoComplete="false" />
          <label>
            <strong>Password</strong>
          </label>
          <input type="string" autoComplete="false" />
          <button onClick={login}>Log-In</button>
          <p>
            Not have account, No Worries! please{" "}
            <span onClick={() => navigate("/sign-in")} className="link">
              Sign Up
            </span>{" "}
          </p>
        </form>
      </div>
    </>
  );
}
