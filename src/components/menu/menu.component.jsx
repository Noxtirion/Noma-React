import React, { useContext } from "react";

import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

import { MenuContext } from "../../context/menu-context/menu-context";

import "./menu.styles.scss";

const Menu = () => {
   const { open } = useContext(MenuContext);

   return (
      <div className={`menu ${!open ? "open" : ""}`}>
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
