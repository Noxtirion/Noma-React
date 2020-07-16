import React, { useContext } from "react";

import { GalleryContext } from "../../context/gallery-context/gallery-context";

import PopUp from "../../components/pop-up/pop-up.component";

import "./gallery-image.styles.scss";

const GalleryImage = ({ path, description }) => {
   const { toggleActive } = useContext(GalleryContext);

   return (
      <div className="gallery-element">
         <img
            src={path}
            className="gallery-element__image"
            alt="gallery element"
            onClick={toggleActive}
         />
         <div className="gallery-element__description">
            <p>{description}</p>
         </div>
         <PopUp />
      </div>
   );
};

export default GalleryImage;
