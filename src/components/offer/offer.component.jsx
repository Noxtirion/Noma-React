import React from "react";

import SectionHeader from "../section-header/section-header.component";

import "./offer.styles.scss";

const Offer = () => {
   return (
      <section className="offer">
         <div className="offer__wrapper">
            <SectionHeader>
               <h2>OFERTA</h2>
            </SectionHeader>
            <div className="offer__text">
               <p>
                  <span>Główny obszar działania</span> firmy to projektowanie architektoniczne w
                  zakresie obiektów:
               </p>
               <ul>
                  <li>mieszkaniowych jednorodzinnych</li>
                  <li>mieszkaniowych wielorodzinnych</li>
                  <li>usługowych, handlowych oraz użyteczności publicznej</li>
                  <li>produkcyjnych i magazynowych</li>
               </ul>

               <p>
                  <span>Specjalizujemy się</span> w zakresie sporządzania:
               </p>
               <ul>
                  <li>projektów koncepcyjnych</li>
                  <li>projektów budowlanych</li>
                  <li>projektów wykonawczych</li>
                  <li>projektów wnętrz</li>
                  <li>inwentaryzacji architektonicznych</li>
                  <li>sprawujemy nadzory autorskie na budowie</li>
               </ul>
            </div>
         </div>
         <div className="offer__parallax-wrapper">
            <img
               src={require("../../assets/parallax-image/parallax-image.jpg")}
               className="offer__parallax-image"
               alt="parallax background"
            />
         </div>
      </section>
   );
};

export default Offer;
