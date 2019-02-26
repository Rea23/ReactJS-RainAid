import React, { Component } from "react";
import "./Mainbar.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Rate } from "../Rate/Rate";
import { FavBtn } from "../FavBtn/FavBtn";

export class Mainbar extends Component {
  render() {
    return (
      <div id="mainbar-div">
        <div id="search-div">
          <input id="search-input" type="text" placeholder="Search..." />
        </div>
        <div id="product-list">
          <div class="product">
            <div id="img-div">
              <img
                id="img"
                src="../../../assets/images/{{ product.picture }}"
                alt="image name"
              />
            </div>
            <div id="second-col">
              <h2 id="product-header">
                <a>name </a>
              </h2>
              <p id="product-price">
                <b>price</b>
              </p>
              <FavBtn id="product-fav" />
            </div>
            <p id="product-description">description</p>
            <Rate id="product-reviews" />
          </div>
        </div>
      </div>
    );
  }
}

export default Mainbar;
