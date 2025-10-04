import React, { useState } from "react";
import "./Components.css";
import Inno from "../assets/innomatics.png";
import ProfileImg from "../assets/react.svg";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [navpages, setNavPage] = useState([
    { id: 1, name: "Home", endPt: "Home", active: true },
    { id: 2, name: "Html 5", endPt: "Html-5", active: false },
    { id: 3, name: "CSS 3", endPt: "CSS-3", active: false },
    { id: 4, name: "Bootstrap 5", endPt: "Bootstrap-5", active: false },
    { id: 5, name: "JavaScript", endPt: "JavaScript", active: false },
    { id: 6, name: "React Js", endPt: "React-Js", active: false },
    { id: 7, name: "Node Js", endPt: "Node-Js", active: false },
    { id: 8, name: "Express Js", endPt: "Express-Js", active: false },
    { id: 9, name: "Mongo Db", endPt: "Mongo-Db", active: false },
  ]);

  const navigate = useNavigate();

  function tableView(id) {
    let page = "";
    let temp = [...navpages];
    temp = temp.map((ele) => {
      if (ele.id == id) {
        page = ele.endPt;
        return { ...ele, active: true };
      } else {
        return { ...ele, active: false };
      }
    });
    console.log(temp);
    
    setNavPage(temp);
    if (id !== 1) {
      navigate("/table/" + page);
    } else {
      navigate("/dashboard");
    }

    // console.log("table called")
  }

  return (
    <>
      <div className="Nav-Bar">
        <img width={"15%"} height={"90%"} className="nav-logo" src={Inno} />
        <div className="nav-p2">
          <ul>
            {navpages.map((ele) => (
              <li
                onClick={() => {
                  tableView(ele.id);
                }}
                style={{
                  color: ele.active && "blue",
                  textDecoration: ele.active && "underline",
                }}
              >
                {ele.name}
              </li>
            ))}
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
