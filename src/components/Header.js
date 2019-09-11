import React from "react";
import FiltersList from "./FiltersList";

export default function Header() {
  return (
    <div className="header-all">
      <div>
        <h1>Galleries around WMP</h1>
      </div>
      <FiltersList />
    </div>
  );
}
