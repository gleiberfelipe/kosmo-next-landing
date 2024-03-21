"use client"

import { DivBox } from "./style";

import { Button } from "@/components/ui/button";

import { FaTruckFast } from "react-icons/fa6";


import { PiHeadsetLight } from "react-icons/pi";
import { HiOutlineShieldCheck } from "react-icons/hi";



export function BannerGrid() {



    return (
        <DivBox className="pl-12 w-full">
            <h2>Featured</h2>
            <div className="BoxMaster">
                <div>
                    <h1>New Arrival</h1>
                </div>

            </div>
            <div className="grid-container">
                <div className="grid-item item-2x2">
                    <img src="/0c1817d3afa266b3c9f8c81ff0ed4428.png" alt="" />
                    <div className="textPlay">
                        <h1>PlayStation5</h1>
                        <p>Black and White version of the PS5</p>
                        <span>comming out on safe.</span>
                        <a href="#">Shop Now!</a>
                    </div>
                </div>
                <div className="grid-item item-2x1">
                    <img src="/08463f7e8f57dd3048a2444dbfa0cb90.jpg" alt="" />
                    <div className="textWomen">
                        <h1>Women s Collections</h1>
                        <p>Featured woman collectioner Vibe.</p>
                        <span>give you another vibe;</span>
                        <a href="#">Shop Now!</a>
                    </div>
                </div>
                <div className="grid-item-jbl">
                    <img src="/2977438364a41d7e8c9d1e9a794d43ed.png" alt="" />
                    <div className="textJbl">
                        <h1>Speakers</h1>
                        <p>Amazon wireless speakers</p>
                        <a href="#">Shop Now!</a>
                    </div>
                </div>
                <div className="grid-item">
                    <img src="5102562cf220504d288fa568eaa816dd.png" alt="" />
                    <div className="textPerfume">
                        <h1>Perfume</h1>
                        <p>Gucci Intense Oud EDP</p>
                        <a href="#">Shop Now!</a>
                    </div>
                </div>
            </div>

            <div className="badgesMaster">
                <div className="badgesChildren">
                    <div className="firstcircle">
                        <div className="secondcircle">
                            <p> <FaTruckFast />



                            </p>
                        </div>
                    </div>
                    <div className="textBox">
                        <h1>FREE AND FAST DELIVERY</h1>
                        <p>Free delivery for all orders over $140</p>
                    </div>
                </div>
                <div>
                <div className="badgesChildren">
                        <div className="firstcircle">
                            <div className="secondcircle">
                                <p>
                                    <PiHeadsetLight />



                                </p>
                            </div>
                        </div>
                        <div className="textBox">
                            <h1>24/7 CUSTOMER SERVICE</h1>
                            <p> Friendly 24/7 customer support</p>
                        </div>
                    </div>
                </div>
                <div>
                <div className="badgesChildren">
                        <div className="firstcircle">
                            <div className="secondcircle">
                                <p>
                                    <HiOutlineShieldCheck />


                                </p>
                            </div>
                        </div>
                        <div className="textBox">
                            <h1>MONEY BACK GUARANTEE</h1>
                            <p>We reurn money within 30 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </DivBox>
    )
}
