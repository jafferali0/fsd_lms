import React, { useState } from "react";
import CardCarousel from "./CardCarousel";

export default function CardScroller({ data }) {
  // console.log(data);
  const [scroll, setScroll] = useState(0);
  const [scrolldelay, setScrollDelay] = useState(0);
  // setInterval(() => {
  //   setScrollDelay(3000);
  //   console.log(scroll);
  //   if (scroll < (data.length - 2) * 188) {
  //     setScroll(scroll + 408);
  //   } else {
  //     setScroll(0);
  //   }
  // }, 2300);
  return (
    <>
      <div className="card-scroller">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            minHeight: "100%",
            transform: `translateY(-${scroll}px)`,
            transition: "2s ease",
          }}
        >
          {data.map((ele) => {
            return (
              <div className="card" style={{ minHeight: "180px" }}>
                <div className="content">
                  <div>
                    <b>Topic/Title:</b> {ele.title}
                  </div>
                  <div>
                    <b>Module:</b> {ele.module}
                  </div>
                  <div>
                    <b>Comment:</b>{" "}
                    <p title={ele.comment} className="card-comment-para">
                      {ele.comment.slice(0, 100) + "..."}
                    </p>
                  </div>
                </div>
                <button className="file-btn">{ele.file} 📂</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
