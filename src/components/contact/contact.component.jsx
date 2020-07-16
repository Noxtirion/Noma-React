import React from "react";

import "./contact.styles.scss";

import SectionHeader from "../section-header/section-header.component";

const Contact = () => {
   return (
      <section className="contact">
         <SectionHeader name="contact">
            <h2>KONTAKT</h2>
         </SectionHeader>
         <div className="contact__wrapper">
            <div className="contact__text">
               <h3>Kinga Nowak-Mazur Noma Architekci</h3>
               <ul className="contact__list">
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
               </ul>
            </div>
            <div className="contact__map">MAPA</div>
         </div>
      </section>
   );
};

export default Contact;
