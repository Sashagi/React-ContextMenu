import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "yellow",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {""}
          {title}
          <button
            onClick={this.props.deleteItem.bind(this, id)}
            style={getStyle}
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
const getStyle = {
  float: "right",
};
export default TodoItem;