import React from "react";

import "./custom-button.styles.scss";

const CustomButton = props => (
   <button className={`custom-button ${props.slider}`}>{props.children}</button>
);

export default CustomButton;
