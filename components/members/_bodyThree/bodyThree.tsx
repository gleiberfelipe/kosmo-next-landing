
"use client"



import Image from "next/image";


import { BodyBox } from './style';
import { Balls } from "../_ball/ball";
import { MembersAnimation } from "@/components/_animations/membersAnimation/membersAnimation";
import { MembersAnimationReverse } from "@/components/_animations/membersAnimation/memberAnimationRev";
import { motion } from "framer-motion";

const BodyTree = () => {

    return (
        <BodyBox>
            <MembersAnimation>
                <motion.div
                    initial={{ scale: 0.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }} className="boxOne">

                    <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, porro nam
                        et ipsum ut assumenda, temporibus recusandae sunt laboriosam vel dicta
                        molestiae vitae quas ad odit adipisci, nostrum perferendis rerum ducimus
                        quibusdam.</h2>

                </motion.div>
            </MembersAnimation>
            <MembersAnimationReverse>
                <motion.div
                    initial={{ scale: 0.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="boxTwo">

                    <div className="img">


                    </div>

                </motion.div>
            </MembersAnimationReverse>


            <svg width="76" height="163" viewBox="0 0 76 163" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-outside-1_119_536" maskUnits="userSpaceOnUse" x="-0.615356" y="42" width="77" height="82" fill="black">
                    <rect fill="white" x="-0.615356" y="42" width="77" height="82" />
                    <path d="M71.6253 72.8109V92.4703H3.73584V72.8109H71.6253ZM48.4966 46.9612V119.068H27.0686V46.9612H48.4966Z" />
                </mask>
                <path d="M71.6253 72.8109H75.8048V68.6314H71.6253V72.8109ZM71.6253 92.4703V96.6498H75.8048V92.4703H71.6253ZM3.73584 92.4703H-0.443649V96.6498H3.73584V92.4703ZM3.73584 72.8109V68.6314H-0.443649V72.8109H3.73584ZM48.4966 46.9612H52.6761V42.7817H48.4966V46.9612ZM48.4966 119.068V123.248H52.6761V119.068H48.4966ZM27.0686 119.068H22.8891V123.248H27.0686V119.068ZM27.0686 46.9612V42.7817H22.8891V46.9612H27.0686ZM67.4458 72.8109V92.4703H75.8048V72.8109H67.4458ZM71.6253 88.2908H3.73584V96.6498H71.6253V88.2908ZM7.91533 92.4703V72.8109H-0.443649V92.4703H7.91533ZM3.73584 76.9904H71.6253V68.6314H3.73584V76.9904ZM44.3171 46.9612V119.068H52.6761V46.9612H44.3171ZM48.4966 114.889H27.0686V123.248H48.4966V114.889ZM31.2481 119.068V46.9612H22.8891V119.068H31.2481ZM27.0686 51.1407H48.4966V42.7817H27.0686V51.1407Z" fill="#656565" mask="url(#path-1-outside-1_119_536)" />
            </svg>

            <MembersAnimation>
                <motion.div
                    initial={{ scale: 0.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="boxThree">

                    <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, porro nam
                        et ipsum ut assumenda, temporibus recusandae sunt laboriosam vel dicta
                        molestiae vitae quas ad odit adipisci, nostrum perferendis rerum ducimus
                        quibusdam.</h2>

                </motion.div>
            </MembersAnimation>
            <MembersAnimationReverse>
                <motion.div
                    initial={{ scale: 0.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="boxFour">


                    <div className="imgTwo">


                    </div>

                </motion.div>


            </MembersAnimationReverse>
            <MembersAnimation>
                <motion.div
                    initial={{ scale: 0.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }} className="boxFive">

                    <h2> Comissão Kosmo</h2>
                    <h1>21%</h1>
                    <h2>Comisão Sobre Economia</h2>
                    <h1>45%~65%</h1>
                    <h2>Pagamento após Resultado</h2>

                </motion.div>
            </MembersAnimation>
           
        </BodyBox>
    );
};
export default BodyTree;