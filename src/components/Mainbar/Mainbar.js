import React, { Component } from "react";
import "./Mainbar.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Rate } from "../Rate/Rate";
import { FavBtn } from "../FavBtn/FavBtn";

export class Mainbar extends Component {
  render() {
    return (
      <div>
          Mainbar
          <Rate />
          <FavBtn />
      </div>
    );
  }
}

export default Mainbar;