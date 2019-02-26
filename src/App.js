import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Mainbar } from "./components/Mainbar/Mainbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Details } from "./components/Details/Details";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <Route path={"/home"} component={Mainbar} />
            <Route path={"/details/:id"} component={Details} />
          </div>
        </Router>
        <Sidebar />
        <footer>Made by Rea Sunara - 2019</footer>
      </div>
    );
  }
}

export default App;
