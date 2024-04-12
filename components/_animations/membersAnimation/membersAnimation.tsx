"use client"

import {useEffect, useRef} from "react";
import { motion, useInView, useAnimation} from "framer-motion";

interface Props {
    children: JSX.Element;
    
}

export const MembersAnimation = ({ children}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return(
        <div ref={ref} style={{position: "relative", overflow: "visible", width: "500px", left: "0px", alignItems: "center" }}>
            <motion.div
            variants={{
                hidden: {  x: "500%"},
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