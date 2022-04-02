import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component, classNames) =>
   function HOC() {
      return (
         <motion.div
            className={`${classNames} app__flex`}
            transition={{ duration: 0.5 }}
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
         >
            <Component />
         </motion.div>
      );
   };
export default MotionWrap;
