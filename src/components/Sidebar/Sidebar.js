import React, { Component } from "react";
import "./Sidebar.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <div class="sidebar">
  <h2 id="header-fav">Favourites</h2>
  <div
    id="product-div">
    <img
      id="img"
      src="../../../assets/images/{{ product.picture }}"
      alt="image name"
    />
    <div id="product-info">
      <a><b>name</b></a>
      <p>price</p>
    </div>
  </div>
</div>
    );
  }
}

export default Sidebar;