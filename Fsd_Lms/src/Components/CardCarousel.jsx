import React, { useContext } from "react";
import "./Components.css";
import { dashScrollContext } from "../Contexts/DashboardScroll";

export default function CardCarousel({ data }) {
  const { scroll } = useContext(dashScrollContext);
  console.log(scroll);
  return (
    <>
      <div className="card-carousel">
        <div
          style={{
            display: "flex",
            gap: "8px",
            transform: `translateX(${scroll}px)`,
            transition: "2s ease",
          }}
        >
          {data.map(() => {
            return (
              <div className="card">
                <div className="content">
                  <div>
                    <b>Topic/Title:</b> Async Await
                  </div>
                  <div>
                    <b>Module:</b> JavaScript
                  </div>
                  <div>
                    <b>Comment:</b>{" "}
                    <p className="card-comment-para">
                      In JavaScript, async functions return promises. Use await
                      to pause until a promise resolves, making asynchronou...
                    </p>
                  </div>
                </div>
                <button className="file-btn">File 📂</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
