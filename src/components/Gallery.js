import React from "react";
import Image from "./Image";
import Name from "./Name";
import Description from "./Description";
import Categories from "./Categories";
import Filter from "./Filter";

export default function Gallery() {
  return (
    <div className="gallery">
      <Image />
      <div className="info">
        <Name />
        <Categories>
          <Filter />
          <Filter />
        </Categories>
        <Description />
      </div>
    </div>
  );
}
