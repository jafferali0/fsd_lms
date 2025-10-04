import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "./Pages.css";
import CardCarousel from "../Components/CardCarousel";
import { dashScrollContext } from "../Contexts/DashboardScroll";
import ApiCall from "../ApiCall";
import CardScroller from "../Components/CardScroller";

export default function Dashboard() {
  const DashScrollContext = useContext(dashScrollContext);
  const [impCards, setImpCards] = useState([]);
  const [scrollCards, setScrollCards] = useState([]);
  useEffect(() => {
    async function get() {
      const res = await ApiCall("/data", "get");
      setImpCards(res);
      const scrll = await ApiCall("/recentUploads", "get");
      setScrollCards(scrll);
    }
    get();
  }, []);
  const end = 408 * (impCards.length - 1);

  function scrollCarosel(action) {
    // if (DashScrollContext.scroll == 0) {
    //   DashScrollContext.setScroll(0);
    // } else if (
    //   action == "+" &&
    //   DashScrollContext.scroll >= end * -1 &&
    //   DashScrollContext.scroll != 0
    // ) {
    //   DashScrollContext.setScroll(DashScrollContext.scroll + 408);
    // } else if (action == "-" && DashScrollContext.scroll >= end * -1) {
    //   DashScrollContext.setScroll(DashScrollContext.scroll - 408);
    // }
    console.log(DashScrollContext.scroll, "ccccc");
    if (
      action == "+" &&
      DashScrollContext.scroll >= end * -1 &&
      DashScrollContext.scroll != 0
    ) {
      DashScrollContext.setScroll(DashScrollContext.scroll + 408);
    } else if (action == "-" && DashScrollContext.scroll > end * -1) {
      console.log(DashScrollContext.scroll, end);
      DashScrollContext.setScroll(DashScrollContext.scroll - 408);
    } else if (
      action == "-" &&
      DashScrollContext.scroll == 0 &&
      DashScrollContext.scroll > end * -1
    ) {
      DashScrollContext.setScroll(DashScrollContext.scroll - 408);
    }
  }

  return (
    <>
      <NavBar />
      <div className="dashboard-body">
        <div className="dash-search">
          <div className="search-bar">
            <input title="globalSearch" type="string" />
            <button className="search-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="blue"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-search search-icon"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
          <div className="imp-topics">
            <span>Important Topics...</span>
            <div>
              <button
                className="carsolen-nav-btn"
                onClick={() => scrollCarosel("+")}
              >
                👈
              </button>{" "}
              <button
                className="carsolen-nav-btn"
                onClick={() => scrollCarosel("-")}
              >
                👉
              </button>
            </div>
          </div>
          <CardCarousel data={impCards} />
        </div>

        <div className="uploads-scroll">
          <div className="title">Recent Uploads</div>
          <div className="scrolling-content">
            <CardScroller data={scrollCards} />
          </div>
          <button className="new-upload">New Upload +</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
