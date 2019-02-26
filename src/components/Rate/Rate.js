import React, { Component } from "react";
import "./Rate.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

export class Rate extends Component {
  render() {
    return (
      <div>
        <p>
          <b>Current rate: out of reviews.</b>
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
