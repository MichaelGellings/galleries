import React from "react";

export default function Filter(props) {
  // const [filter, setFilter] = React.useState("abc");
  return (
    <div
      className={"filter " + props.category.id}
      value={props.category.id}
      onClick={() =>
        props.onFilterChange(props.category.id, props.category.name_DE)
      }
    >
      {props.category.name_DE}
    </div>
  );
}
