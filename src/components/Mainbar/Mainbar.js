import React, { Component } from "react";
import "./Mainbar.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Rate } from "../Rate/Rate";
import { FavBtn } from "../FavBtn/FavBtn";
import Products from "../../assets/products.json";
import pic from "../../assets/images/umbrella1.jpg";

export class Mainbar extends Component {
  render() {
    return (
      <div id="mainbar-div">
        <div id="search-div">
          <input id="search-input" type="text" placeholder="Search..." />
        </div>
        <div id="product-list">
          {Products.map(Product => {
            return (
              <div class="product">
                <div id="img-div">
                  <img
                    id="img"
                    src={require("../../assets/images/umbrella1.jpg")}
                    alt="image name"
                  />
                </div>
                <div id="second-col">
                  <h2 id="product-header">
                    <a>{Product.name}</a>
                  </h2>
                  <p id="product-price">
                    <b>${Product.price}</b>
                  </p>
                  <FavBtn id="product-fav" />
                </div>
                <p id="product-description">{Product.description}</p>
                <Rate id="product-reviews" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Mainbar;
