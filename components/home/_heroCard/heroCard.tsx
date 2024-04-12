
"use client"



import Image from "next/image";


import { RevealReverse } from "@/components/_animations/revealReverse/revealReverse";
import { Reveal } from "@/components/_animations/reveal/reveal";
import { motion } from "framer-motion";


import { AboutBox } from './style';

const About = () => {

    return (
        <AboutBox>

            <div className="circlebox">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: .75 }}
                    viewport={{ once: true }}
                    className="circle"></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: .85 }}
                    viewport={{ once: true }}
                    className="circle"></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: .95 }}
                    viewport={{ once: true }} className="circle"></motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.05 }}
                    viewport={{ once: true }}
                    className="circle"></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.15 }}
                    viewport={{ once: true }} className="circle"></motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.25 }}
                    viewport={{ once: true }} className="circle"></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: .75 }}
                    viewport={{ once: true }}
                    className="circle"></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: .85 }}
                    viewport={{ once: true }}
                    className="circle"></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: .95 }}
                    viewport={{ once: true }} className="circle"></motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.05 }}
                    viewport={{ once: true }}
                    className="circle"></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.15 }}
                    viewport={{ once: true }} className="circle"></motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.25 }}
                    viewport={{ once: true }} className="circle"></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: .75 }}
                    viewport={{ once: true }}
                    className="circle"></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: .85 }}
                    viewport={{ once: true }}
                    className="circle"></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: .95 }}
                    viewport={{ once: true }} className="circle"></motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.05 }}
                    viewport={{ once: true }}
                    className="circle"></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.15 }}
                    viewport={{ once: true }} className="circle"></motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.25 }}
                    viewport={{ once: true }} className="circle"></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: .75 }}
                    viewport={{ once: true }}
                    className="circle"></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: .85 }}
                    viewport={{ once: true }}
                    className="circle"></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: .95 }}
                    viewport={{ once: true }} className="circle"></motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.05 }}
                    viewport={{ once: true }}
                    className="circle"></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.15 }}
                    viewport={{ once: true }} className="circle"></motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.25 }}
                    viewport={{ once: true }} className="circle"></motion.div>
                <div className="newimg">
                    <Image src="/fa93148c43452dca55ff4aa2aaa739ed.jpg" alt="" layout="fill"
                        objectFit="contain" />
                </div>

            </div>

            <hr />

            <Reveal>
                <h1>LOREM IPSUM</h1>
            </Reveal>
            <RevealReverse>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque molestiae fuga non tempore nostrum recusandae ratione,
                    est animi harum ducimus iure quas explicabo minus tempora quos
                    minima consequuntur sapiente libero!
                </p>
            </RevealReverse>
        </AboutBox>
    );
};

export default About;
