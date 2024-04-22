"use client"

import {useEffect, useRef} from "react";
import { motion, useInView, useAnimation} from "framer-motion";


interface Props {
    children: JSX.Element;
}

export const RevealReverse = ({ children}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    return(
        <div>
        <div ref={ref} style={{position: "relative", overflow: "hidden"}}>
            <motion.div
            variants={{
                hidden: { opacity: 0, x: -75},
                visible: { opacity: 1, x: 0},
            }}
            initial="hidden"
            animate = {mainControls}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut"}}>
                {children}
            </motion.div>
           {/*  <motion.div
            variants={{
                hidden: { left: 0},
                visible: { left: "100%"},
            }}
            initial="hidden"
            animate = {slideControls}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut"}}>
                
            </motion.div> */}
        </div >
        </div>
    );
};