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
      productObj: 0,
      favProducts: Products.filter(prod => {
        return prod.flag == true;
      })
    };
  }
  ShowDetails(id) {
    let product =  Products.find(prod => {
      return prod.id == id;
    }); 
    this.setState({productObj: product});
  };
  FavProductsAdd = () => {
    let list = Products.filter(prod => {
      return prod.id == 1;
    });
    // this.setState({favProducts: this.state.favProducts.push(list)});
    this.setState({favProducts: [...this.state.favProducts, list]});
    console.log(this.state.favProducts);
  }
  render() {
    return (
      <Router>
      <div id="site">
        <Header />
        <main id="main-site">
          <div class="router-main">
            <Route exact path="/" render={(props) => <Mainbar {...props} details={this.ShowDetails.bind(this)} favorites={this.state.favProducts} />} />
            <Route path="/details/:id" render={(props) => <Details {...props} obj={this.state.productObj} />} />
          </div>
        <Sidebar favorites={this.state.favProducts} class="sidebar" />
        <button onClick={() => this.FavProductsAdd()}>add</button>
        </main>
        <footer>Made by Rea Sunara - 2019</footer>
      </div>
      </Router>
    );
  }
}

export default App;
