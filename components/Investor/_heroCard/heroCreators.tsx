
"use client"



import Image from "next/image";


import { RevealReverse } from "@/components/_animations/revealReverse/revealReverse";
import { Reveal } from "@/components/_animations/reveal/reveal";
import { motion } from "framer-motion";


import { AboutBox } from './style';

const HeroInvestor= () => {

    return (
        <AboutBox>

            <div className="circlebox">
        
                <div className="newimg">
                    <Image src="/1b49bf38ca9cbb3d342abc2a3b7eed80.png" alt="" layout="fill"
                        objectFit="fill" />
                </div>

            </div>

            <hr />

            
                
           
        </AboutBox>
    );
};

export default HeroInvestor;
