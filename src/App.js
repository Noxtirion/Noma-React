import React from "react";
import Header from "./components/header/header.component.jsx";
import Slider from "./components/slider/slider.component.jsx";

import { SliderContextProvider } from "./context/slider-context/slider-context.jsx";

import "./App.css";

function App() {
   return (
      <div className="App">
         <Header />
         <SliderContextProvider>
            <Slider />
         </SliderContextProvider>
      </div>
   );
}

export default App;
