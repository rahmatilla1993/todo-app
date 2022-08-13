import React from "react";
import "./item-add-form.css";

export default class ItemAddForm extends React.Component {
  state = {
    value: "",
  };

  onChangeHandler = ({ target }) => {
    this.setState({ value: target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form
        action=""
        className="item-add-form d-flex"
        onSubmit={this.onSubmitHandler}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Add a task..."
          onChange={this.onChangeHandler}
          value={this.state.value}
        />
        <button type="submit" className="btn btn-info">
          Add
        </button>
      </form>
    );
  }
}
