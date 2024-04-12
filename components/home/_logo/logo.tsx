"use client"

import { motion } from 'framer-motion';



import { LogoBox } from './style';

const Logo = () => {

    return (
        <LogoBox>
            <div
              
                className="logobox">
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    viewport={{ once: true }} 
                    className="children one">
                    <h1>KOSMO</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1, delay: 2.0 }}
                    viewport={{ once: true }}
                     className="children two">
                    <h1>KOSMO</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1, delay: 2.5 }}
                    viewport={{ once: true }}
                     className="children three">
                    <h1>KOSMO</h1>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 1, delay: 3.0 }}
                    viewport={{ once: true }}
                     className="children four">
                    <h1>KOSMO</h1>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 1, delay: 3.0 }}
                    viewport={{ once: true }}
                     className="children five">
                    <h1>KOSMO</h1>
                </motion.div>
            </div>

        </LogoBox>
    );
};

export default Logo;