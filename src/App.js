import React from "react";
import Header from "./components/header/header.component.jsx";
import Slider from "./components/slider/slider.component.jsx";
import About from "./components/about/about.component.jsx";
import Offer from "./components/offer/offer.component.jsx";
import Gallery from "./components/gallery/gallery.component.jsx";
import Footer from "./components/footer/footer.component.jsx";
import ButtonUp from "./components/button-up/button-up.component.jsx";

import { SliderContextProvider } from "./context/slider-context/slider-context.jsx";
import { MenuContextProvider } from "./context/menu-context/menu-context";
import { GalleryContextProvider } from "./context/gallery-context/gallery-context";

import { useInView } from "react-intersection-observer";

import "./App.css";

function App() {
   const [ref, inView, entry] = useInView({
      threshold: 0,
      rootMargin: "30px"
   });

   const checkView = entry !== undefined && !inView;

   return (
      <div className="App">
         <div className="top" ref={ref}></div>
         <MenuContextProvider>
            <Header />
         </MenuContextProvider>
         <SliderContextProvider>
            <Slider />
         </SliderContextProvider>
         <About />
         <Offer />
         <GalleryContextProvider>
            <Gallery />
         </GalleryContextProvider>
         <Footer />
         <ButtonUp appear={checkView ? "appear" : ""} />
      </div>
   );
}

export default App;
