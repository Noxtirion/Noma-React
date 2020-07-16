import React, { useContext } from "react";

import { Link } from "react-scroll";

import { MenuContext } from "../../context/menu-context/menu-context";

import "./menu.styles.scss";

const Menu = () => {
   const { open } = useContext(MenuContext);

   return (
      <div className={`menu ${!open ? "open" : ""}`}>
         <Link className="menu__option" to="top" smooth={true}>
            STRONA GŁÓWNA
         </Link>
         <Link className="menu__option" to="about" smooth={true} offset={-70}>
            O NAS
         </Link>
         <Link className="menu__option" to="offer" smooth={true} offset={-70}>
            OFERTA
         </Link>
         <Link className="menu__option" to="gallery" smooth={true} offset={-70}>
            PROJEKTY I REALIZACJE
         </Link>
         <Link className="menu__option" to="contact" smooth={true} offset={-70}>
            KONTAKT
         </Link>
      </div>
   );
};

export default Menu;
