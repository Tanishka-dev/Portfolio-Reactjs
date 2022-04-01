import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
function SocialMedia() {
   return (
      <div className="app__social">
         <div>
            <BsTwitter />
         </div>
         <div>
            <BsInstagram />
         </div>
         <div>
            <BsLinkedin />
         </div>
         <div>
            <SiGmail />
         </div>
      </div>
   );
}

export default SocialMedia;
