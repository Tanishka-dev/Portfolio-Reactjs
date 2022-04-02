import { React, useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Footer.scss";

function Footer() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

   const [loading, setLoading] = useState(false);
   const { name, email, message } = formData;
   const handleChangeInput = (e) => {
      const { name, value } = e.target;

      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = () => {
      setLoading(true);

      const contact = {};
   };
   return (
      <>
         <h2 className="head-text">Take a coffee & chat with me</h2>
         <div className="app__footer-cards">
            <div className="app__footer-card">
               <img src={images.email} />
               <a href="mailto:tanishakayadav2110@gmail.com" className="p-text">
                  tanishakayadav2110@gmail.com
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.mobile} />
               <a href="tel:+91 9815828801" className="p-text">
                  +91 9315828801
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.twitter} />
               <a href="https://twitter.com/tanishka__yadav" className="p-text">
                  tanishka__yadav
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.linkedln} />
               <a
                  href="https://www.linkedin.com/in/tanishkayadav/"
                  className="p-text"
               >
                  tanishkayadav
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.github} />
               <a href="https://github.com/Tanishka-dev" className="p-text">
                  Tanishka-dev
               </a>
            </div>
         </div>
      </>
   );
}
export default AppWrap(
   MotionWrap(Footer, "app__footer"),
   "contact",
   "app__whitebg"
);
