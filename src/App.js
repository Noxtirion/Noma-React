import React from "react";
import Header from "./components/header/header.component.jsx";
import Slider from "./components/slider/slider.component.jsx";
import About from "./components/about/about.component.jsx";
import Offer from "./components/offer/offer.component.jsx";
import Gallery from "./components/gallery/gallery.component.jsx";
import Footer from "./components/footer/footer.component.jsx";

import { SliderContextProvider } from "./context/slider-context/slider-context.jsx";
import { MenuContextProvider } from "./context/menu-context/menu-context";

import "./App.css";

function App() {
   return (
      <div className="App">
         <MenuContextProvider>
            <Header />
         </MenuContextProvider>

         <SliderContextProvider>
            <Slider />
         </SliderContextProvider>
         <About />
         <Offer />
         <Gallery />
         <Footer />
      </div>
   );
}

export default App;
