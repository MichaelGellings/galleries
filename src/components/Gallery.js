import React from "react";
import Image from "./Image";
import Name from "./Name";
import Description from "./Description";
import Categories from "./Categories";

export default function Gallery(props) {
  return (
    <div className="gallery">
      <Image imgSrc={props.gallery.imgSrc} />
      <div className="info">
        {/* {props.gallery.name} */}
        <Name name={props.gallery.name} />
        <Categories categories={props.gallery.categories} />
        <Description description={props.gallery.description} />
      </div>
    </div>
  );
}
