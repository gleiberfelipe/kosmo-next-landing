"use client"

import { ServiceBox } from './style';
import { BiWorld } from "react-icons/bi";
import { BsChatLeftDots } from "react-icons/bs";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { BsShieldShaded } from "react-icons/bs";
import { PiRocketLaunchLight } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { Emerging } from '../_animations/emerging/emerging';
import { EmergingReverse } from '../_animations/emergingReverse/emergingReverse';




const Service = () => {

    return (
        <ServiceBox>
            <Emerging>
            <div className="box">
                <div>
                    <h1>Lorem, ipsum dolor.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <p className="circleright"><BiWorld />
                    </p>
                    <div className="triangulo"></div>
                </div>
            </div>
            </Emerging>
            <EmergingReverse>
            <div className="box">
                <div>
                    <p className="circle"><BsChatLeftDots /></p>
                    <div className="trianguloTwo"></div>
                </div>
                <div>
                    <h1>Lorem, ipsum dolor.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            </EmergingReverse>
            <Emerging>
            <div className="box">
                <div>
                    <h1>Lorem, ipsum dolor.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <p className="circleright"><BsFillMenuButtonWideFill /></p>
                    <div className="triangulo"></div>
                </div>
            </div>
            </Emerging>
            <EmergingReverse>
            <div className="box">
                <div>
                    <p className="circle"><BsShieldShaded /></p>
                    <div className="trianguloTwo"></div>
                </div>
                <div>
                    <h1>Lorem, ipsum dolor.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            </EmergingReverse>
            <Emerging>
            <div className="box">
                <div>
                    <h1>Lorem, ipsum dolor.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <p className="circleright"><PiRocketLaunchLight /></p>
                    <div className="triangulo"></div>
                </div>
            </div>
            </Emerging>
            <EmergingReverse>
            <div className="box">
                <div>
                    <p className="circle"><MdGroups /></p>
                    <div className="trianguloTwo"></div>
                </div>
                <div>
                    <h1>Lorem, ipsum dolor.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </div>
            </div>
            </EmergingReverse>

        </ServiceBox>
    );
};

export default Service;