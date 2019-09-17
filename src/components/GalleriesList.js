import React from "react";
import Gallery from "./Gallery";
import { galleries } from "../api/galleries";

export default function GalleriesList({ selectedFilter }) {
  // destructuring for props.selectedFilter
  console.log(selectedFilter);
  const filteredGalleries = galleries.filter(gallery => {
    return gallery.categories[0].id === selectedFilter;
  });
  return (
    <div className="galleries-list">
      {filteredGalleries.map(gallery => {
        return <Gallery key={gallery.name} gallery={gallery} />;
      })}
    </div>
  );
}
