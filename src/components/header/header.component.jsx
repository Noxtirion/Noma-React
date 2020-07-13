import React from "react";

import Menu from "../menu/menu.component";
import { ReactComponent as Logo } from "../../assets/logo-image/logo.svg";

import "./header.styles.scss";

const Header = () => (
   <header className="header">
      <Logo className="header__logo" />
      <Menu />
   </header>
);

export default Header;
