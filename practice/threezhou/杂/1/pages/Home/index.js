import React, { Component } from "react";
import { MyRoute } from "../../Routes";
import LeftNav from "../../components/LeftNav";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <LeftNav list={this.props.route} />
        <MyRoute route={this.props.route} />
      </div>
    );
  }
}

export default Home;
