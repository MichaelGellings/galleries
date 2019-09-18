import React from "react";
import Filter from "./Filter";
import { categories } from "../api/categories";

export default function FiltersList(props) {
  return (
    <div className="filters-list">
      {categories.map(category => {
        return (
          <Filter
            key={category.id}
            category={category}
            onFilterChange={props.onFilterChange}
            selectedFilters={props.selectedFilters}
          />
        );
      })}
    </div>
  );
}
