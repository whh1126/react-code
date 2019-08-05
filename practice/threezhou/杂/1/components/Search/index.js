import React, { Component } from "react";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.search(this.state.value)}>
          搜索
        </button>
      </div>
    );
  }
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
}

export default Search;
