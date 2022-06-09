import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Homepage from "../components/homepage";
import Profile from "../components/profile";
import Search from "../components/search";
import Footer from "../container/Footer";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default class AppRoutes extends Component {
  render() {
    //hola
    const GlobalStyled = createGlobalStyle`
    body{
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
    }
    `;
    return (
      <div>
        <GlobalStyled />
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/" element={<Homepage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}
