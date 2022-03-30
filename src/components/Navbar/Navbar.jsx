import React from "react";
import "./Navbar.scss";
import { images } from "../../constants";
function Navbar() {
   return (
      <nav className="app__navbar">
         <div className="app__navbar-logo">
            <img src={images.logo} alt="logo" />
         </div>
         <ul className="app__navbar-links">
            {["home", "about", "contact", "skills", "work"].map((item) => (
               <li key={`link-${item}`} className="app__flex p-text">
                  <div />
                  <a href={`#${item}`}>{item}</a>
               </li>
            ))}
         </ul>
      </nav>
   );
}

export default Navbar;
