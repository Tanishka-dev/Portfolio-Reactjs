import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
function SocialMedia() {
   return (
      <div className="app__social">
         <div>
            <a href="https://twitter.com/tanishka__yadav">
               <BsTwitter />
            </a>
         </div>
         <div>
            <a href="https://instagram.com/sayittanishka?utm_medium=copy_link">
               <BsInstagram />
            </a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/tanishkayadav/">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="mailto:tanishakayadav2110@gmail.com">
               <SiGmail />
            </a>
         </div>
      </div>
   );
}

export default SocialMedia;
