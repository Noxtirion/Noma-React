import React from "react";

import Menu from "../menu/menu.component";
import BurgerButton from "../burger-button/burger-button.component";

import { ReactComponent as Logo } from "../../assets/logo-image/logo.svg";

import "./header.styles.scss";

const Header = () => (
   <header className="header">
      <Logo className="header__logo" />
      <Menu />
      <BurgerButton />
   </header>
);

export default Header;
