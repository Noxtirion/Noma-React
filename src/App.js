import React from "react";
import Header from "./components/header/header.component.jsx";
import Slider from "./components/slider/slider.component.jsx";
import About from "./components/about/about.component.jsx";
import Offer from "./components/offer/offer.component.jsx";
import Gallery from "./components/gallery/gallery.component.jsx";

import { SliderContextProvider } from "./context/slider-context/slider-context.jsx";

import "./App.css";

function App() {
   return (
      <div className="App">
         <Header />
         <SliderContextProvider>
            <Slider />
         </SliderContextProvider>
         <About />
         <Offer />
         <Gallery />
      </div>
   );
}

export default App;
