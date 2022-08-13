import React from "react";

class ItemStatusFilter extends React.Component {
  buttons = [
    {
      name: "all",
      label: "All",
    },
    {
      name: "active",
      label: "Active",
    },
    {
      name: "done",
      label: "Done",
    },
  ];

  render() {
    const { filter, onFilterItem } = this.props;
    const elements = this.buttons.map(({ name, label }) => {
      const classname = name === filter ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          key={name}
          type="button"
          className={`btn ${classname}`}
          onClick={() => onFilterItem(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{elements}</div>;
  }
}

export default ItemStatusFilter;
