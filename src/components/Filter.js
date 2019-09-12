import React from "react";

export default function Filter(props) {
  return (
    <div className={"filter " + props.category.id}>
      {props.category.name_DE}
    </div>
  );
}
