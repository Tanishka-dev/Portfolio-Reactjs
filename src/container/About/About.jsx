import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
function About() {
   const abouts = [
      {
         title: "Web Development",
         description: "I am a good developer.",
         imageUrl: images.about01,
      },
      {
         title: "Front-end Development",
         description: "I am a good developer.",
         imageUrl: images.about02,
      },
      {
         title: "Java Development",
         description: "I am a good developer.",
         imageUrl: images.about03,
      },
      {
         title: "Java Development",
         description: "I am a good developer.",
         imageUrl: images.about04,
      },
   ];
   return (
      <>
         <h2 className="head-text">
            I Know that
            <span> Good Design </span>
            means
            <span> Good Business</span>
         </h2>
         <div className="app__profiles">
            {abouts.map((about, index) => (
               <motion.div
                  className="app__profile-item"
                  key={about.title + index}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, type: "tween" }}
               >
                  <img src={about.imageUrl} alt={about.title}></img>
                  <h2 className="bold-text" style={{ marginTop: 20 }}>
                     {about.title}
                  </h2>
                  <p className="p-text" style={{ marginTop: 10 }}>
                     {about.description}
                  </p>
               </motion.div>
            ))}
         </div>
      </>
   );
}

export default AppWrap(About, "about");
