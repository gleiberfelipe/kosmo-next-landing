"use client"

import {useEffect, useRef} from "react";
import { motion, useInView, useAnimation} from "framer-motion";

interface Props {
    children: JSX.Element;
    
}

export const Emerging = ({ children}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return(
        <div ref={ref} style={{position: "relative", overflow: "hidden"}}>
            <motion.div
            variants={{
                hidden: {  x: "100%"},
                visible: { x: 0},
            }}
            initial="hidden"
            animate = {mainControls}
            transition={{ duration: 1.2, delay: 0.25, ease: "easeInOut"}}>
                {children}
            </motion.div>
        </div>
    );
};