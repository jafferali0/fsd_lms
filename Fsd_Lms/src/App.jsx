import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";
import DashboardScroll from "./Contexts/DashboardScroll";

function App() {
  return (
    <>
      <Router>
        <DashboardScroll>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/log-in" element={<Login />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </DashboardScroll>
      </Router>
    </>
  );
}

export default App;
