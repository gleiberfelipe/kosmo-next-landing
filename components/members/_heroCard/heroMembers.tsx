
"use client"



import Image from "next/image";


import { RevealReverse } from "@/components/_animations/revealReverse/revealReverse";
import { Reveal } from "@/components/_animations/reveal/reveal";
import { motion } from "framer-motion";


import { AboutBox } from './style';

const HeroMembers = () => {

    return (
        <AboutBox>

            <div className="circlebox">
        
                <div className="newimg">
                    <Image src="/dd14c757189c16fd4b7170f899f05cd8.jpg" alt="" layout="fill"
                        objectFit="cover" />
                </div>

            </div>

            <hr />

            
                
           
        </AboutBox>
    );
};

export default HeroMembers;
