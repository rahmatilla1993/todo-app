import React from "react";

import "./todo-list-item.css";

const TodoListItem = ({
  label,
  important,
  done,
  onDelete,
  onImportant,
  onDoneItem,
}) => {
  let style = "todo-list-item";
  style += important ? " important" : "";
  style += done ? " done" : "";

  return (
    <span className={style}>
      <span className="todo-list-item-label" onClick={onDoneItem}>
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-end"
        onClick={onImportant}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-end"
        onClick={onDelete}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
