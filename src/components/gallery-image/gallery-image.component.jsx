import React from "react";

import "./gallery-image.styles.scss";

const GalleryImage = ({ path }) => {
   return (
      <div className="gallery-element">
         <img src={path} className="gallery-element__image" alt="gallery element" />
      </div>
   );
};

export default GalleryImage;
