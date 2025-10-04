import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "./Pages.css";
import Logo from "../assets/innomatics.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    function routeLogin() {
        navigate("log-in");
    }
  return (
    <>
      <NavBar />
      <div className="home-main">
        <img src={Logo} />
        <h2>
          Welcome to the Innomatics Docs Please{" "}
          <span
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => routeLogin()}
          >
            <em>log-in</em>
          </span>{" "}
          to view the documentations.
        </h2>
      </div>
      <Footer />
    </>
  );
}
