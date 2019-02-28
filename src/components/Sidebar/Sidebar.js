import React, { Component } from "react";
import "./Sidebar.css";
import Products from "../../assets/products.json";

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.favorites
    };
  }
  render() {
    return (
      <div class="sidebar">
        <h2 id="header-fav">Favourites</h2>
        {this.state.products.map((Product, index) => {
          return (
            <div id="product-div">
              <img
                id="img"
                src={require("../../assets/images/" + Product.picture)}
                alt={Product.name}
              />
              <div id="product-info">
                <a>
                  <b>{Product.name}</b>
                </a>
                <p>${Product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
