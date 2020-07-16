import React, { useContext } from "react";

import { GalleryContext } from "../../context/gallery-context/gallery-context";

import "./pop-up.styles.scss";

const PopUp = () => {
   const { active, toggleActive } = useContext(GalleryContext);

   return <div className={`pop-up ${active}`} onClick={toggleActive}></div>;
};

export default PopUp;
