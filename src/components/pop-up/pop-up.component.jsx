import React, { useContext, useState, useEffect } from "react";

import { GalleryContext } from "../../context/gallery-context/gallery-context";
import PopUpImage from "../pop-up-image/pop-up-image.component";

import "./pop-up.styles.scss";

const PopUp = ({ projects }) => {
   const { active, toggleActive } = useContext(GalleryContext);

   const [allImage, setAllImage] = useState(null);
   const [count, setCount] = useState(1);
   const [singleImage, setSingleImage] = useState(null);

   useEffect(() => {
      projects && active && setAllImage(Object.values(projects.images));
   }, [projects, active]);

   useEffect(() => {
      allImage && active && setSingleImage(allImage[count]);
   }, [allImage, count, active]);

   useEffect(() => {
      if (!active) {
         setCount(1);
         setSingleImage(null);
         setAllImage(null);
      }
   }, [active, singleImage]);

   const increment = () => {
      allImage.length - 1 !== count ? setCount((prevCount) => prevCount + 1) : setCount(1);
      allImage && setSingleImage(allImage[count]);
   };

   const decrement = () => {
      count <= 1 ? setCount(allImage.length - 1) : setCount((prevCount) => prevCount - 1);
      allImage && setSingleImage(allImage[count]);
   };

   return (
      <div className={`pop-up ${active}`}>
         <div className={`pop-up__background ${active}`} onClick={toggleActive}></div>
         <div className="pop-up__wrapper">
            <div className="pop-up__close-button">
               <div className="pop-up__close" onClick={toggleActive}>
                  &#10006;
               </div>
            </div>
            <div className="pop-up__image">
               <PopUpImage path={`/images/gallery-images/${singleImage}`} />
            </div>
            <div className="pop-up__buttons">
               <div className="pop-up__left" onClick={decrement}>
                  &#10094;&#10094;
               </div>
               <div className="pop-up__right" onClick={increment}>
                  &#10095;&#10095;
               </div>
            </div>
            <div className="pop-up__description">
               <p>{projects && projects.description}</p>
            </div>
         </div>
      </div>
   );
};

export default PopUp;
