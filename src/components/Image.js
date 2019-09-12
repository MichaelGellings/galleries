import React from "react";

export default function Image(props) {
  return (
    <img
      src={props.imgSrc}
      alt="Hier sollte ein Bild erscheinen"
      className="image"
    />
  );
}
