import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "../components/homepage";
import Profile from "../components/profile";
import Search from "../components/search";

export default class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/search" element={<Profile />} />
            <Route exact path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
