import React from "react";
import Gallery from "./Gallery";
import { galleries } from "../api/galleries";

export default function GalleriesList({ selectedFilters }) {
  // destructuring for props.selectedFilter
  // console.log(selectedFilters);
  function blabla(gallery) {
    return gallery.categories
      .map(category => {
        return selectedFilters.includes(category.id);
      })
      .includes(true);
  }
  const filteredGalleries = galleries.filter(gallery => {
    return blabla(gallery);

    // return selectedFilters.find(filter => {
    //   return gallery.categories.map(category => {
    //     return category.id.includes(filter);
    //   });
    // });

    // return selectedFilters.includes(gallery.categories[0].id);
  });
  return (
    <div className="galleries-list">
      {filteredGalleries.map(gallery => {
        return <Gallery key={gallery.name} gallery={gallery} />;
      })}
    </div>
  );
}
