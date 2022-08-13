import React from "react";
import TodoListItem from "../todo-list-item";

const TodoList = ({ data, deleteItem, importantItem, doneItem }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDelete={() => deleteItem(id)}
          onImportant={() => importantItem(id)}
          onDoneItem={() => doneItem(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
