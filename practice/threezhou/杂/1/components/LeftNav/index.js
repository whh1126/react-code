import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// const LeftNav = props => (

// );
class LeftNav extends Component {
  state = {};
  render() {
    return (
      <ul>
        left:
        {this.props.list.map(item => {
          if (item.navTitle) {
            return (
              <li key={item.path}>
                <NavLink to={item.path}>{item.navTitle}</NavLink>
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

export default LeftNav;
