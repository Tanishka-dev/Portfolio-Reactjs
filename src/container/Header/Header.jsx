import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";
import { AppWrap } from "../../wrapper";
const scaleVariants = {
   whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transform: {
         duration: 1,
         ease: "easeInOut",
      },
   },
};
function Header() {
   return (
      <div className="app__header app__flex">
         <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="app__header-info"
         >
            <div className="app__header-badge">
               <div className="badge-cmp app-flex">
                  <span>👋</span>
                  <div style={{ marginLeft: 20 }}>
                     <p className="p-text">Hello, I am </p>
                     <h1 className="head-text">Tanishka</h1>
                  </div>
               </div>

               <div className="tag-cmp app-flex">
                  <p className="p-text ">Software Engineer Intern</p>
               </div>
               <div className="tag-cmp app-flex">
                  <p className="p-text ">Full-Stack Developer</p>
               </div>
               <div className="tag-cmp app-flex">
                  <p className="p-text ">Technical Writer</p>
               </div>
               <div className="tag-cmp app-flex">
                  <p className="p-text ">Technical Content Creator</p>
               </div>
               
            </div>
         </motion.div>

         <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, delayChildren: 0.5 }}
            className="app__header-img"
         >
            <img src={images.me}></img>
            <motion.img
               whileInView={{ scale: [0, 1] }}
               transition={{ duration: 1, ease: "easeInOut" }}
               src={images.circle}
               alt="profile circle"
               className="overlay_circle"
            />
         </motion.div>

         <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
         >
            {[images.react, images.redux, images.java].map((circle, index) => (
               <div className="circle-cmp app__flex" key={`circle-${index}`}>
                  <img src={circle} alt="circle"></img>
               </div>
            ))}
         </motion.div>
      </div>
   );
}

export default AppWrap(Header, "home");
