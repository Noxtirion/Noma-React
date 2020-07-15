import React from "react";

import SectionHeader from "../section-header/section-header.component";

import { GALLERY_IMAGES } from "./gallery.data";

import GalleryImage from "../gallery-image/gallery-image.component";

import "./gallery.styles.scss";

const Gallery = () => {
   const galleryImages = Object.values(GALLERY_IMAGES);

   const picture = galleryImages.map(item => {
      return (
         <GalleryImage key={item.id} path={`/images/gallery-images/${item.images.wizytowka}`} />
      );
   });

   return (
      <section className="gallery">
         <SectionHeader>
            <h2>PROJEKTY I REALIZACJE</h2>
         </SectionHeader>
         <div className="gallery__images">{picture}</div>
      </section>
   );
};

export default Gallery;
