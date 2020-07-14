import React, { useContext } from "react";

import CustomButton from "../custom-button/custom-button.component";
import SliderSwap from "../slider-swap/slider-swap.component";

import { SLIDER_IMAGES } from "../../data/slider.data";

import { SliderContext } from "../../context/slider-context/slider-context";

import "./slider.styles.scss";

const Slider = () => {
   const { count } = useContext(SliderContext);

   // let [singleImage] = Object.values(SLIDER_IMAGES).filter(item => item.id === count);

   return (
      <div className="slider">
         <div className="slider__background"></div>
         <div className="slider__background">
            <div className="slider__wrapper">
               <header className="slider__header">
                  <h1 className="slider__title">NOMA ARCHITEKCI</h1>
                  <p className="slider__text">pracownia projektowa</p>
               </header>
               <CustomButton slider="slide">KONTAKT</CustomButton>
               <SliderSwap slider="slide" />
            </div>
         </div>
         <div className="slider__background"></div>
         <div className="slider__background"></div>
         <div
            className={`slider__background slider__background--image slider__background--image-${count}`}
         >
            {/* <img
               src={require(`../../assets/gallery-images/${singleImage.image}`)}
               className="slider__image"
               alt="slide"
            /> */}
         </div>
         <div className="slider__background-bottom slider__background-bottom--light"></div>
         <div className="slider__background-bottom slider__background-bottom--dark"></div>
      </div>
   );
};

export default Slider;
