import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./slider.styles.scss";

const Slider = () => (
   <div className="slider">
      <div className="slider__background"></div>
      <div className="slider__background">
         <div className="slider__wrapper">
            <header className="slider__header">
               <h1 className="slider__title">NOMA ARCHITEKCI</h1>
               <p className="slider__text">pracownia projektowa</p>
            </header>
            <CustomButton>KONTAKT</CustomButton>
         </div>
      </div>
      <div className="slider__background"></div>
      <div className="slider__background"></div>
      <div className="slider__background"></div>
      <div className="slider__background-bottom slider__background-bottom--light"></div>
      <div className="slider__background-bottom slider__background-bottom--dark"></div>
   </div>
);

export default Slider;
