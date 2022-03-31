import React from "react";
import { About, Header, Work, Skills, Footer, Testimonial } from "./container";
import { Navbar } from "./components";
import "./App.scss";
function App() {
   return (
      <div className="app">
         <Header />
         <About />
         <Work />
         <Skills />
         <Testimonial />
         <Footer />
      </div>
   );
}

export default App;
