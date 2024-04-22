
"use client"



import Image from "next/image";


import { BodyBox } from './style';
import { motion } from "framer-motion";
import { Emerging } from "@/components/_animations/emerging/emerging";
import { MembersAnimation } from "@/components/_animations/membersAnimation/membersAnimation";
import { MembersAnimationReverse } from "@/components/_animations/membersAnimation/memberAnimationRev";

const BodyOneC = () => {

    return (
        <BodyBox>
            <MembersAnimation>
            <motion.div
              initial={{  scale: 0.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            className="boxOne">
                
                    <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, porro nam 
                        et ipsum ut assumenda, temporibus recusandae sunt laboriosam vel dicta
                         molestiae vitae quas ad odit adipisci, nostrum perferendis rerum ducimus
                          quibusdam.</h2>
                
            </motion.div>
            </MembersAnimation>
            <MembersAnimationReverse>
            <motion.div
             initial={{  scale: 0.2 }}
             whileInView={{ scale: 1 }}
             transition={{ duration: 0.7, delay: 0.4 }}
             viewport={{ once: true }}
             className="boxTwo">
                

                 <div className="img">
                    
                    
                        </div>
                
            </motion.div>


            </MembersAnimationReverse>


        </BodyBox>
    );
};
export default BodyOneC;