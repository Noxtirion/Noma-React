import React from "react";

import "./pop-up-image.styles.scss";

const PopUpImage = ({ path }) => {
   return (
      <div className="pop-up-image">
         <img src={path} className="pop-up-image__element" alt="pop up element" />
      </div>
   );
};

export default PopUpImage;
