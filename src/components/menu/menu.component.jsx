import React from "react";

import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

import "./menu.styles.scss";

const Menu = () => {
   return (
      <div className="menu">
         <Link className="menu__option" to="/">
            STRONA GŁÓWNA
         </Link>
         <Link className="menu__option" to="/">
            O NAS
         </Link>
         <Link className="menu__option" to="/">
            OFERTA
         </Link>
         <Link className="menu__option" to="/">
            PROJEKTY I REALIZACJE
         </Link>
         <Link className="menu__option" to="/">
            KONTAKT
         </Link>
      </div>
   );
};

export default Menu;
