import React from "react";
import FiltersList from "./FiltersList";

export default function Header(props) {
  return (
    <div className="header-all">
      <div>
        <h1>Galleries around WMP</h1>
      </div>
      <FiltersList
        onFilterChange={props.onFilterChange}
        selectedFilters={props.selectedFilters}
      />
    </div>
  );
}
