import React, { useState } from "react";

import { SLIDER_IMAGES } from "../../data/slider.data";

const SliderContext = React.createContext();

function SliderContextProvider(props) {
   const [count, setCount] = useState(1);

   const toggleImageRight = () => {
      Object.keys(SLIDER_IMAGES).length !== count
         ? setCount(prevCount => prevCount + 1)
         : setCount(1);
   };

   const toggleImageLeft = () => {
      count <= 1
         ? setCount(Object.keys(SLIDER_IMAGES).length)
         : setCount(prevCount => prevCount - 1);
   };

   return (
      <SliderContext.Provider value={{ count, toggleImageRight, toggleImageLeft }}>
         {props.children}
      </SliderContext.Provider>
   );
}

export { SliderContextProvider, SliderContext };
