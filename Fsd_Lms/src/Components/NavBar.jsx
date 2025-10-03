import React from "react";
import "./Components.css";
import Inno from "../assets/innomatics.png";
import ProfileImg from "../assets/react.svg";

export default function NavBar() {
  return (
    <>
      <div className="Nav-Bar">
        <img width={"15%"} height={"90%"} className="nav-logo" src={Inno} />
        <div className="nav-p2">
          <ul>
            <li>Home</li>
            <li>Html 5</li>
            <li>CSS 3</li>
            <li>Bootstrap 5</li>
            <li>JavaScript</li>
            <li>React Js</li>
            <li>Node Js</li>
            <li>Express Js</li>
            <li>Mongo Db</li>
            {/* <li>Others</li> */}
          </ul>
          <button className="profile">
            <img
              height={"100%"}
              width={"100%"}
              src={ProfileImg}
              alt="no image"
            />
          </button>
        </div>
      </div>
    </>
  );
}
