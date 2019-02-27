import React, { Component } from "react";
import "./Details.css";
import { Link } from "react-router-dom";
import { Rate } from "../Rate/Rate";
import { FavBtn } from "../FavBtn/FavBtn";

export class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choosed: this.props.obj
    };
  }
  render() {
    return (
      <div class="content">
        <div class="content-header">
          <Link to="/" id="back-link">
            Back
          </Link>
          <h1>{this.state.choosed.name}</h1>
          <div id="info-div">
            <h3 id="product-price">${this.state.choosed.price}</h3>
            <FavBtn id="product-fav" />
          </div>
        </div>
        <div class="main-content">
          <div class="img-div">
            <img
              id="img"
              src={require("../../assets/images/" + this.state.choosed.picture)}
              alt={this.state.choosed.name}
            />
          </div>
          <p>{this.state.choosed.description}</p>
        </div>
        {/* <Rate /> */}
        <br />
        <br />
        <div>
          <h2>Reviews</h2>
          <div class="reviews-div">
            {this.state.choosed.reviews.map(Review => {
              return (
                  <p class="comment-div">
                    <b>{Review.username} ({Review.rate}) &nbsp;</b>
                    {Review.comment} 
                    <br />
                  </p>
              );
            })}
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Details;
