
"use client"



import Image from "next/image";


import { RevealReverse } from "@/components/_animations/revealReverse/revealReverse";
import { Reveal } from "@/components/_animations/reveal/reveal";
import { motion } from "framer-motion";


import { AboutBox } from './style';

const HeroCreators= () => {

    return (
        <AboutBox>

            <div className="circlebox">
        
                <div className="newimg">
                    <Image src="/1b27e2ab63dc4c5a0abd514dd15a969c (1).png" alt="" layout="fill"
                        objectFit="cover" />
                </div>

            </div>

            <hr />

            
                
           
        </AboutBox>
    );
};

export default HeroCreators;
