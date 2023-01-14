import React from "react";
import { About, Header, Work, Skills, Contact, Testimonial } from "./container";
import { Navbar } from "./components";
import "./App.scss";
function App() {
   return (
      <div className="app">
         
         <Navbar />
         <Header />
         <Contact />
         <About />        
         <Work />
         <Skills />         
      </div>
   );
}

export default App;
