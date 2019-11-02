import React from "react";
import Image from "./Image";
// import Rating from "./Rating";
import Name from "./Name";
import Description from "./Description";
import Categories from "./Categories";

export default function Gallery(props) {
  return (
    <div className="gallery">
      <div className="info">
        <Image imgSrc={props.gallery.imgSrc} />
        {/* <Rating rating={props.gallery.rating} /> */}
      </div>
      <div className="info">
        {/* {props.gallery.name} */}
        <Name name={props.gallery.name} />
        <Categories categories={props.gallery.categories} />
        <Description description={props.gallery.description} />
      </div>
    </div>
  );
}
