import React from "react";

import Iframe from "react-iframe";

import "./contact.styles.scss";

import SectionHeader from "../section-header/section-header.component";

import { ReactComponent as Address } from "../../assets/contact-icons/address.svg";
import { ReactComponent as Phone } from "../../assets/contact-icons/phone.svg";
import { ReactComponent as Mail } from "../../assets/contact-icons/mail.svg";
import { ReactComponent as Single } from "../../assets/contact-icons/single-document.svg";
import { ReactComponent as Double } from "../../assets/contact-icons/double-documents.svg";

const Contact = () => {
   return (
      <section className="contact">
         <SectionHeader name="contact">
            <h2>KONTAKT</h2>
         </SectionHeader>
         <div className="contact__wrapper">
            <div className="contact__text">
               <div className="contact__wrapper-info">
                  <h3>Kinga Nowak-Mazur Noma Architekci</h3>

                  <div className="contact__address contact__info">
                     <Address className="contact__icon" />
                     <p> ul. Borkowska 29 E / 3 Kraków 30-438</p>
                  </div>
                  <div className="contact__email contact__info">
                     <Mail className="contact__icon" />
                     <p>
                        <a href="mailto: nomaarchitekci@interia.pl">nomaarchitekci@interia.pl</a>
                     </p>
                  </div>
                  <div className="contact__phone contact__info">
                     <Phone className="contact__icon" />
                     <p>+48 608 046 483, +48 606 179 659</p>
                  </div>
                  <div className="contact__data contact__info">
                     <Double className="contact__icon" />
                     <p>
                        <span>NIP:</span> 549-197-03-18 <span>REGON:</span> 121456404{" "}
                     </p>
                  </div>
                  <div className="contact__data contact__info">
                     <Single className="contact__icon" />
                     <p>
                        <span>KONTO MBANK:</span> 55 1140 2004 0000 3202 7234 9570
                     </p>
                  </div>
               </div>
            </div>
            <div className="contact__frame">
               <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1282.2294106606853!2d19.901386826812207!3d50.00275489860842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165ce3e163f9e7%3A0x3e6660cb22bc55ee!2sBorkowska+29E%2C+30-438+Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1552648230656"
                  className="contact__map"
               />
            </div>
         </div>
      </section>
   );
};

export default Contact;
