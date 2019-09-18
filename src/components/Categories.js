import React from "react";
import Filter from "./Filter";

export default function Categories(props) {
  return (
    <div className="filters-list categories">
      {props.categories.map(category => {
        return (
          <Filter key={category.id} category={category} colorLabel={true} />
        );
      })}
    </div>
  );
}
