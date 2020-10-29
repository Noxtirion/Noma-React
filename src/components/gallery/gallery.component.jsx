import React, { useContext, useState } from "react";

import SectionHeader from "../section-header/section-header.component";

import GalleryImage from "../gallery-image/gallery-image.component";
import PopUp from "../../components/pop-up/pop-up.component";

import { GalleryContext } from "../../context/gallery-context/gallery-context";

import { GALLERY_IMAGES } from "./gallery.data";

import "./gallery.styles.scss";

const Gallery = () => {
   const { toggleActive } = useContext(GalleryContext);
   const [imageData, setImageData] = useState(null);

   const galleryImages = Object.values(GALLERY_IMAGES);
   const galleryImagesKeys = Object.keys(GALLERY_IMAGES);

   const picture = galleryImages.map(item => {
      return (
         <GalleryImage
            key={item.id}
            path={`/images/gallery-images/${item.images.wizytowka}`}
            description={item.description}
            galleryKeys={galleryImagesKeys[item.id]}
            toggle={toggleActive}
         />
      );
   });

   const handleSingleProject = e => {
      const singleProjectKey = galleryImagesKeys.find(item => {
         return e.target.classList[1] === item;
      });

      setImageData(GALLERY_IMAGES[singleProjectKey]);
   };

   return (
      <section className="gallery">
         <SectionHeader name="gallery">
            <h2>PROJEKTY I REALIZACJE</h2>
         </SectionHeader>
         <div className="gallery__images" onClick={handleSingleProject}>
            {picture}
         </div>
         { imageData && <PopUp projects={imageData} />}
      </section>
   );
};

export default Gallery;
