import React, { Component } from "react";
class Detail extends Component {
  state = {};
  render() {
    return <div>Detail
    <hr/>{this.props.match.params.id}</div>;
  }
}

export default Detail;
