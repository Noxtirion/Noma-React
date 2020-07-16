import React, { useState, useEffect } from "react";

import { SLIDER_DESCRIPTION } from "../../data/slider.data";

const SliderContext = React.createContext();

function SliderContextProvider(props) {
   const [count, setCount] = useState(1);

   const toggleImageRight = () => {
      Object.keys(SLIDER_DESCRIPTION).length !== count
         ? setCount(prevCount => prevCount + 1)
         : setCount(1);
   };

   const toggleImageLeft = () => {
      count <= 1
         ? setCount(Object.keys(SLIDER_DESCRIPTION).length)
         : setCount(prevCount => prevCount - 1);
   };

   // useEffect(() => {
   //    console.log(count);
   //    setTimeout(() => {
   //       Object.keys(SLIDER_DESCRIPTION).length !== count
   //          ? setCount(prevCount => prevCount + 1)
   //          : setCount(1);
   //    }, 2000);
   // }, [count]);

   return (
      <SliderContext.Provider value={{ count, toggleImageRight, toggleImageLeft }}>
         {props.children}
      </SliderContext.Provider>
   );
}

export { SliderContextProvider, SliderContext };
