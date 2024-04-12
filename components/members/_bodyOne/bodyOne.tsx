
"use client"



import Image from "next/image";


import { BodyBox } from './style';
import { Balls } from "../_ball/ball";

const BodyOne = () => {

    return (
        <BodyBox>
            <div className="boxOne">
                <Balls maxwidth={500} minwidth={250}>
                    <h2> Hello World</h2>
                </Balls>
            </div>
            <div className="boxTwo">
                <Balls maxwidth={300} minwidth={150}>
                    <div className="img">
                    <Image src="/a107e2259b9d44201af90ae0156617fb.jpg" alt="" layout="fill"
                        objectFit="cover" />
                        </div>
                </Balls>
            </div>





        </BodyBox>
    );
};
export default BodyOne;