import React, { useContext } from "react";

import { SliderContext } from "../../context/slider-context/slider-context";

import "./slider-swap.styles.scss";

const SliderSwap = ({ slider }) => {
   const { toggleImageRight, toggleImageLeft } = useContext(SliderContext);

   return (
      <div className={`slider-swap ${slider}`}>
         <div className="slider-swap__right" onClick={toggleImageLeft}>
            &#10094;&#10094;
         </div>
         <div className="slider-swap__left" onClick={toggleImageRight}>
            &#10095;&#10095;
         </div>
      </div>
   );
};

export default SliderSwap;
