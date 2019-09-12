import React from "react";
import Gallery from "./Gallery";
import { galleries } from "../api/galleries";

export default function GalleriesList() {
  return (
    <div className="galleries-list">
      {galleries.map(gallery => {
        return <Gallery key={gallery.name} gallery={gallery} />;
      })}
    </div>
  );
}
