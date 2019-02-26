import React, { Component } from "react";
import "./Rate.css";

export class Rate extends Component {
  constructor(props) {
    super(props);
    let rates = this.props.rates.map(review => review.rate);

    this.state = {
      rates: rates
    };
  }
  Calculate = () => {
    const sumRates = this.state.rates.reduce((sum, curr) => sum + curr);
    let result =+ (sumRates / this.state.rates.length).toFixed(2);
    return result;
  }
  render() {
    return (
      <div>
        <p>
          <b>Current rate: {this.Calculate()} out of reviews.</b>
        </p>

        <div class="rate-div">
          <button title="Very bad" class="rate-btns" id="rate-btn1">
            1
          </button>
          <button title="Bad" class="rate-btns" id="rate-btn2">
            2
          </button>
          <button title="Average" class="rate-btns" id="rate-btn3">
            3
          </button>
          <button title="Good" class="rate-btns" id="rate-btn4">
            4
          </button>
          <button title="Excellent" class="rate-btns" id="rate-btn5">
            5
          </button>
        </div>
      </div>
    );
  }
}

export default Rate;
