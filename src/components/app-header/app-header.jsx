import React from "react";
import "./app-header.css";

const AppHeader = ({ todos, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>
        {todos} tadan {done} ta vazifa bajarildi
      </h2>
    </div>
  );
};

export default AppHeader;
