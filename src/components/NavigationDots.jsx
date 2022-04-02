import React from "react";

function NavigationDots({ active }) {
   return (
      <div className="app__navigation">
         {["home", "about", "work", "skills", "contact"].map((item, index) => (
            <a
               className="app__navigation-dot"
               href={`#${item}`}
               key={item + index}
               style={active === item ? { backgroundColor: "#313BAC" } : {}}
            />
         ))}
      </div>
   );
}

export default NavigationDots;
