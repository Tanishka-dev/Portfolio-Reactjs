import { React, useState, useEffect } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

function Work() {
   const [activeFilter, setactiveFilter] = useState();
   const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });
   const handleWorkFilter = (item) => {};

   const works = [
      {
         title: " Tesla-Ecommerce Clone",
         description: "A fullstack webite with a modern UI",
         codeLink: "https://github.com/Tanishka-dev/Tesla-Ecommerce-Redux",
         projectLink: "https://tesla-ecommerce.netlify.app/",
         imageUrl: images.about01,
      },
   ];
   return (
      <>
         <h2 className="head-text">
            My Creative
            <span> Portfolio </span>
            <span> Section</span>
         </h2>
         <div className="app_work-filter">
            {["UI,UX", "Web App", "Reactjs App", "All"].map((item, index) => (
               <div
                  key={index}
                  onClick={() => handleWorkFilter(item)}
                  className={`app__work-filter-item app__flex p-text ${
                     activeFilter === item ? "item-active" : ""
                  }`}
               >
                  {item}
               </div>
            ))}
         </div>
         {works.map((work, index) => (
            <motion.div
               animate={animateCard}
               transition={{ duration: 0.5, delayChildren: 0.5 }}
               className="app__work-portfolio"
            >
               <div className="app__work-item app-flex">
                  <div className="app__work-img app-flex">
                     <img src={work.imageUrl} alt="work"></img>
                     <motion.div
                        className="app__work-hover app-flex"
                        whileHover={{ opacity: [0, 1] }}
                        transition={{
                           duration: 0.25,
                           ease: " easeInOut",
                           staggerChildren: 0.5,
                        }}
                     >
                        <a
                           href={work.projectLink}
                           target="blank"
                           rel="noreferrer"
                        >
                           <motion.div
                              whileHover={{ scale: [1, 0.9] }}
                              whileInView={{ scale: [0, 1] }}
                              transition={{ duration: 0.25 }}
                              className="app__flex"
                           >
                              <AiFillEye />
                           </motion.div>
                        </a>
                        <a
                           href={work.codeLink}
                           target="blank"
                           rel="norefferrer"
                        >
                           <motion.div
                              whileHover={{ scale: [1, 0.9] }}
                              whileInView={{ scale: [0, 1] }}
                              transition={{
                                 duration: 0.25,
                              }}
                              className="app__flex"
                           >
                              <AiFillGithub />
                           </motion.div>
                        </a>
                     </motion.div>
                  </div>
                  <div className="app__work-content app__flex">
                     <h4 className="bold-text">{work.title}</h4>
                     <p className="p-text" style={{ marginTop: 10 }}>
                        {work.description}
                     </p>
                     <div className="app__work-tag app__flex">
                        <p className="p-text"></p>
                     </div>
                  </div>
               </div>
            </motion.div>
         ))}
      </>
   );
}

export default AppWrap(Work, "work");
