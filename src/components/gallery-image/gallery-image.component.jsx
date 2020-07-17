import React from "react";

import "./gallery-image.styles.scss";

const GalleryImage = ({ path, description, galleryKeys, toggle }) => {
   return (
      <div className="gallery-element" onClick={toggle}>
         <img
            src={path}
            className={`gallery-element__image ${galleryKeys}`}
            alt="gallery element"
         />
         <div className="gallery-element__description">
            <p>{description}</p>
         </div>
      </div>
   );
};

export default GalleryImage;
