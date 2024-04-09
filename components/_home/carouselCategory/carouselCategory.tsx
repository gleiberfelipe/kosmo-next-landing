"use client"

import * as React from "react";
import { DivBox } from "./style";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { GiSmartphone } from "react-icons/gi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { GiWatch } from "react-icons/gi";
import { CiCamera } from "react-icons/ci";
import { IoMdHeadset } from "react-icons/io";
import { BiJoystick } from "react-icons/bi";
import { CgSmartHomeWashMachine } from "react-icons/cg";

export function CarouselCategory() {
    return (
        <DivBox className="pl-12 w-full">
          
            <Carousel className="w-full max-w-[410px] rounded-10">
                <CarouselPrevious id="bt1"/>
                <CarouselContent>
                    <CarouselItem>
                        <div className="Cardbox">
                        
                                <img src="/1b27e2ab63dc4c5a0abd514dd15a969c.png" alt="" />
                           
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="Cardbox">
                            <div>
                            <img src="/1b27e2ab63dc4c5a0abd514dd15a969c.png" alt="" />
                              {/*   <p>Computers</p> */}
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="Cardbox">
                            <div>
                            <img src="/1b27e2ab63dc4c5a0abd514dd15a969c.png" alt="" />
                                {/* <p>SmartWatch</p>      */}                   
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="Cardbox">
                            <div>
                            <img src="/1b27e2ab63dc4c5a0abd514dd15a969c.png" alt="" />
                            {/*     <p>Camera</p> */}
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="Cardbox">
                            <div>
                            <img src="/1b27e2ab63dc4c5a0abd514dd15a969c.png" alt="" />
                               {/*  <p>HeadPhones</p> */}
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="Cardbox">
                            <div>
                            <img src="/1b27e2ab63dc4c5a0abd514dd15a969c.png" alt="" />
                                {/* <p>Gaming</p> */}
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="Cardbox">
                            <div>
                            <img src="/1b27e2ab63dc4c5a0abd514dd15a969c.png" alt="" />
                                {/* <p>Gadgets</p> */}
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselNext id="bt2"/>
            </Carousel>
        </DivBox>
    )
}
