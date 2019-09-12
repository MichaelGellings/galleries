import React from "react";

export default function Filter(props) {
  return <div className={"filter " + props.category}>{props.category}</div>;
}
