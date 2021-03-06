import React, { useContext } from "react";

import CustomButton from "../custom-button/custom-button.component";
import SliderSwap from "../slider-swap/slider-swap.component";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { Link } from "react-scroll";

import { SLIDER_DESCRIPTION } from "../../data/slider.data";

import { SliderContext } from "../../context/slider-context/slider-context";

import "./slider.styles.scss";

const Slider = () => {
   const { count } = useContext(SliderContext);

   let [projectDescription] = Object.values(SLIDER_DESCRIPTION).filter(item => item.id === count);

   return (
      <section className="slider" id="top">
         <div className="slider__wrapper">
            <header className="slider__header">
               <h1 className="slider__title">NOMA ARCHITEKCI</h1>
               <p className="slider__text">pracownia projektowa</p>
            </header>
            <Link className="slider__option" to="contact" smooth={true} offset={-70}>
               <CustomButton slider="slide">KONTAKT</CustomButton>
            </Link>
            <SliderSwap slider="slide" />
         </div>
         <div className="slider__background slider__background--city">
            <img
               src={require("../../assets/building-image/city.png")}
               className="slider__city-image"
               alt="city background"
            />
         </div>
         <div className="slider__background"></div>
         <div className="slider__background"></div>
         <div className="slider__background"></div>
         <div className="slider__background"></div>
         <SwitchTransition>
            <CSSTransition
               key={count}
               addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
               classNames="slider__background--image"
            >
               <div
                  className={`slider__background slider__background--image slider__background--image-${count}`}
               ></div>
            </CSSTransition>
         </SwitchTransition>
         <div className="slider__background-bottom slider__background-bottom--light"></div>
         <div className="slider__background-bottom slider__background-bottom--dark">
            <div className="slider__description">{projectDescription.description}</div>
         </div>
      </section>
   );
};

export default Slider;
