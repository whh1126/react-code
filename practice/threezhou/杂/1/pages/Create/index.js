import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Search from "../../components/Search";
import { searchAction, getDataInit } from "./action";
class Create extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { list, value, search } = this.props;
    return (
      <div>
        Create: <Search search={search} />
        <hr />
        {list.map(item => {
          if (item.title.indexOf(value) >= 0) {
            return (
              <div key={item.id}>
                <Link to={`/create/detail/${item.id}`}>
                  <div>
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div>{item.title}</div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
const mapState = state => ({
  ...state.createReducer
});
const mapDispatch = dispatch => ({
  search(value) {
    dispatch(searchAction(value));
  },
  getData() {
    dispatch(getDataInit);
  }
});

export default connect(
  mapState,
  mapDispatch
)(Create);
