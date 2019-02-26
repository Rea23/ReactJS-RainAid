import React, { Component } from "react";
import "./FavBtn.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

export class FavBtn extends Component {
  render() {
    return (
      <div id="fav-div">
        <i class="material-icons" title="Favourite" id="fav-btn1">
          favorite
        </i>
        <i class="material-icons" title="Favourite" id="fav-btn2">
          favorite
        </i>
      </div>
    );
  }
}

export default FavBtn;
