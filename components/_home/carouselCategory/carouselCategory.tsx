"use client"
import * as React from "react";
import { useEffect, useState } from 'react';
import { DivBox } from "./style";

// Importando componentes e ícones
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
            <h2>Categories</h2>
            <div className="BoxMaster">
                <div>
                    <h1>Browse By Category</h1>
                </div>

            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-[90%]"
            >
                <CarouselPrevious />
                <CarouselContent>

                    <CarouselItem className="basis-1/6">
                        <div className="Cardbox">
                            <div>
                            <GiSmartphone />
                            <p>Phones</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/6">
                        <div className="Cardbox">
                            <div>
                            <HiOutlineComputerDesktop />
                            <p>Computers</p>
                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-1/6">

                        <div className="Cardbox">
                        <div>
                            <GiWatch />
                            <p>SmartWatch</p>                        
                            </div>
                            </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/6">
                        <div className="Cardbox">
                        <div>
                            <CiCamera />
                            <p>Camera</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/6">
                        <div className="Cardbox">
                        <div>
                            <IoMdHeadset />
                            <p>HeadPhones</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/6">
                        <div className="Cardbox">
                        <div>
                            <BiJoystick />
                            <p>Gaming</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/6">
                        <div className="Cardbox">
                        <div>
                            <CgSmartHomeWashMachine />
                            <p>Gadgets</p>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>

                <CarouselNext />
            </Carousel>
         
        </DivBox>
    )
}
