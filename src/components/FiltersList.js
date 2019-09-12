import React from "react";
import Filter from "./Filter";
import { categories } from "../api/categories";

export default function FiltersList() {
  return (
    <div className="filters-list">
      {categories.map(category => {
        return <Filter key={category.id} category={category} />;
      })}
    </div>
  );
}
