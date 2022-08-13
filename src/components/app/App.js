import React from "react";
import AppHeader from "../app-header/";
import SearchFilter from "../search-filter/";
import ItemStatusFilter from "../item-status-filter/";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

class App extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        label: "Drink Coffee",
        important: false,
        done: false,
      },
      {
        id: 2,
        label: "Learn React",
        important: true,
        done: false,
      },
      {
        id: 3,
        label: "Have a lunch",
        important: false,
        done: false,
      },
    ],
    search: "",
    filter: "",
  };
  maxId = 4;

  onDelete = (id) => {
    const idx = this.state.tasks.findIndex((item) => item.id === id);
    this.setState(({ tasks }) => {
      const newArr = [...tasks.slice(0, idx), ...tasks.slice(idx + 1)];
      return {
        tasks: newArr,
      };
    });
  };

  onToggleProperty = (arr, ind, prop) => {
    const task = { ...arr[ind], [prop]: !arr[ind][prop] };
    return [...arr.slice(0, ind), task, ...arr.slice(ind + 1)];
  };

  onImportant = (id) => {
    const idx = this.state.tasks.findIndex((item) => item.id === id);
    this.setState(({ tasks }) => {
      return {
        tasks: this.onToggleProperty(tasks, idx, "important"),
      };
    });
  };

  onDoneTask = (id) => {
    const idx = this.state.tasks.findIndex((item) => item.id === id);
    this.setState(({ tasks }) => {
      return {
        tasks: this.onToggleProperty(tasks, idx, "done"),
      };
    });
  };

  onSearch = (arr, value) => {
    return value.length === 0
      ? arr
      : arr.filter(
          (item) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
        );
  };

  onFilter = (arr, filter) => {
    switch (filter) {
      case "active":
        return arr.filter((item) => !item.done);
      case "done":
        return arr.filter((item) => item.done);
      default:
        return arr;
    }
  };

  onAddTask = (label) => {
    const task = {
      id: this.maxId++,
      label,
      important: false,
      done: false,
    };
    this.setState(({ tasks }) => {
      return {
        tasks: [...tasks, task],
      };
    });
  };

  onFilterItem = (filter) => {
    this.setState({ filter });
  };

  onSearchItem = (search) => {
    this.setState({ search });
  };

  render() {
    const { tasks, search, filter } = this.state;

    const tasksCount = tasks.length;
    const doneCount = tasks.filter((item) => item.done).length;

    const items = this.onFilter(this.onSearch(tasks, search), filter);

    return (
      <div className="app">
        <AppHeader todos={tasksCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchFilter onSearch={this.onSearchItem} />
          <ItemStatusFilter filter={filter} onFilterItem={this.onFilterItem} />
        </div>
        <TodoList
          data={items}
          deleteItem={this.onDelete}
          importantItem={this.onImportant}
          doneItem={this.onDoneTask}
        />
        <ItemAddForm addTask={this.onAddTask} />
      </div>
    );
  }
}

export default App;
