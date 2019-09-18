import React from "react";
import styled from "styled-components";

const FilterItem = styled.div`
  padding: 0.5em;
  margin: 1em 1em 0 0;
  color: white;
  border-radius: 0.5em;
  background: ${props => {
    switch (props.value) {
      case "photo":
        if (props.selected || props.colorLabel) return "#880";
      case "painting":
        if (props.selected || props.colorLabel) return "#480";
      case "drawing":
        if (props.selected || props.colorLabel) return "#084";
      case "print":
        if (props.selected || props.colorLabel) return "#484";
      case "media":
        if (props.selected || props.colorLabel) return "#088";
      case "sculpture":
        if (props.selected || props.colorLabel) return "#4b8";
      case "experimental":
        if (props.selected || props.colorLabel) return "#8b8";
      default:
        return "#666";
    }
  }};
`;

export default function Filter({
  category,
  onFilterChange,
  selectedFilters,
  colorLabel
}) {
  // const [filter, setFilter] = React.useState("abc");
  return (
    <FilterItem
      value={category.id}
      onClick={() => onFilterChange(category.id, category.name_DE)}
      selected={selectedFilters && selectedFilters.includes(category.id)}
      colorLabel={colorLabel}
    >
      {category.name_DE}
    </FilterItem>
  );
}
