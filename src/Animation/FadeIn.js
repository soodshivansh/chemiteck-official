import React, { useEffect, useRef } from 'react';
import {AnimatePresence, animate, motion, useAnimation, useInView} from "framer-motion";

function FadeIn({children, className}) {

const ref1 = useRef(null);
const isinview = useInView(ref1, {once : true})

const maincontrols = useAnimation();

useEffect(() => {
  if(isinview){
      maincontrols.start("visible");
  }
}, [isinview])

  return (
    <AnimatePresence>
    <motion.div
        variants={{
            hidden: {opacity: 0, y: 100},
            visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={maincontrols}
        transition={{duration: 0.5, delay: 0.6}}
        ref={ref1}
        className={className}
    >
        { children }
    </motion.div>
</AnimatePresence>
  );
}

export default FadeIn;