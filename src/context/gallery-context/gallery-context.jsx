import React, { useState } from "react";
const GalleryContext = React.createContext();

function GalleryContextProvider(props) {
   const [active, setActive] = useState("");

   const toggleActive = () => {
      setActive(prevActive => (prevActive === "active" ? "" : "active"));
   };

   return (
      <GalleryContext.Provider value={{ active, toggleActive }}>
         {props.children}
      </GalleryContext.Provider>
   );
}

export { GalleryContextProvider, GalleryContext };
