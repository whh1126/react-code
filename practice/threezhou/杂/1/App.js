import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { route, MyRoute } from "./Routes";
class App extends Component {
  render() {
    return (
      <Router>
        <MyRoute route={route} />
      </Router>
    );
  }
}

export default App;
