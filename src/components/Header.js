import React from "react";
import FiltersList from "./FiltersList";

export default function Header(props) {
  return (
    <div className="header-all">
      <div>
        <h1>Art Around the Square</h1>
        <p style={{ color: "#bbb" }}>
          Galleries in the Willy-Millowitsch-Platz neighborhood, Cologne,
          Germany
        </p>
      </div>
      <FiltersList
        onFilterChange={props.onFilterChange}
        selectedFilters={props.selectedFilters}
      />
    </div>
  );
}
