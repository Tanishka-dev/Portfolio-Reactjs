import React from "react";
import { About, Header, Work, Skills, Footer, Testimonial } from "./container";
import { Navbar } from "./components";
import "./App.scss";
function App() {
   return (
      <div className="app">
         <Navbar />
         <Header />
         <About />
         <Work />
         <Skills />
         <Footer />
      </div>
   );
}

export default App;
