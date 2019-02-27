import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Mainbar } from "./components/Mainbar/Mainbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Details } from "./components/Details/Details";
import Products from "./assets/products.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productObj: 1
    };
  }
  ShowDetails(id) {
    let product =  Products.find(prod => {
      return prod.id == id;
    }); 
    this.setState({productObj: product});
  };
  render() {
    return (
      <Router>
      <div id="site">
        <Header />
        <main id="main-site">
          <div class="router-main">
            <Route exact path="/" render={(props) => <Mainbar {...props} fun={this.ShowDetails.bind(this)} />} />
            <Route path="/details/:id" render={(props) => <Details {...props} obj={this.state.productObj} />} />
          </div>
        <Sidebar class="sidebar" />
        </main>
        <footer>Made by Rea Sunara - 2019</footer>
      </div>
      </Router>
    );
  }
}

export default App;
