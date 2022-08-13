import React from "react";
import "./search-filter.css";

export default class SearchFilter extends React.Component {
  state = {
    value: "",
  };

  onChangeHandler = ({ target }) => {
    const item = target.value;
    this.setState({ value: item });
    this.props.onSearch(item);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search"
        value={this.state.value}
        onChange={this.onChangeHandler}
      />
    );
  }
}
