import React from "react";

import Contact from "../contact/contact.component";
import Copyrights from "../copyrights/copyrights.component";

import "./footer.styles.scss";

const Footer = () => {
   return (
      <footer className="footer">
         <Contact />
         <Copyrights />
      </footer>
   );
};

export default Footer;
