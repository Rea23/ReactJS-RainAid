import React, { Component } from "react";
import "./Details.css";
import { Link } from "react-router-dom";
import { Rate } from "../Rate/Rate";
import { FavBtn } from "../FavBtn/FavBtn";

export class Details extends Component {
  constructor(props) {
    super(props);
    let product = this.props.obj;
    this.state = {
      choosed: this.props.obj
    };
  console.log(product);
}
  render() {
    return (
      <div class="content">
  <div class="content-header">
    <Link to="/" id="back-link">Back</Link>
    <h1>name</h1>
    <div id="info-div">
        <h3 id="product-price">{this.state.choosed.price}</h3>
      <FavBtn id="product-fav" />
    </div>
  </div>
  <div class="main-content">
    <div class="img-div">
      <img
        id="img"
        src="../../assets/images/{{ product.picture }}"
        alt="image name"
      />
    </div>
    <p>description</p>
  </div>
  {/* <Rate /> */}
  <br />
  <br />
  <div>
    <h2>Reviews</h2>
    <div class="reviews-div">
      <div class="reviews">
        <div class="comm-rate-btns" id="rate-btn1">1</div>
        <div class="comm-rate-btns" id="rate-btn2">2</div>
        <div class="comm-rate-btns" id="rate-btn3">3</div>
        <div class="comm-rate-btns" id="rate-btn4">4</div>
        <div class="comm-rate-btns" id="rate-btn5">5</div>
        <p>
          <b>username:</b>
          comment
        </p>
      </div>
    </div>
  </div>
  <br />
  <br />
</div>

    );
  }
}

export default Details;