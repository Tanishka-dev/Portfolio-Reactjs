import { React, useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Contact.scss";

function Contact() {

   return (
      <>
         <h2 className="head-text">Let's Connect!!</h2>
         <div className="app__footer-cards">
            <div className="app__footer-card">
               <img src={images.email} />
               <a href="mailto:tanishakayadav2110@gmail.com" className="p-text">
                  Email
               </a>
            </div>
            
            <div className="app__footer-card">
            
               <img src={images.twitter} />
               <a href="https://twitter.com/tanishka__yadav" className="p-text">
               Twitter
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.linkedln} />
               <a
                  href="https://www.linkedin.com/in/tanishkayadav/"
                  className="p-text"
               >
                  Linkedln
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.github} />
               <a href="https://github.com/Tanishka-dev" className="p-text">
                 GitHub
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.medium} />
               <a href="https://medium.com/@tanishka_yadav" className="p-text">
                  Medium
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.topmate} />
               <a href="https://topmate.io/tanishkayadav" className="p-text">
                  Topmate Mentorship
               </a>
            </div>
         </div>
      </>
   );
}
export default AppWrap(
   MotionWrap(Contact, "app__footer"),
   "contact",
   "app__whitebg"
);
