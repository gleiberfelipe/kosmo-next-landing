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
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";


// Definindo a interface das props
interface CountdownProps {
    targetDate: Date;
}

// Definindo o componente Countdown
export function CarouselSelling() {


    return (
        <DivBox className="pl-12 w-full">
            <h2>This Month</h2>
            <div className="BoxMaster">
                <div>
                    <h1>Best Selling Products</h1>
                </div>
                <div>
                    <Button className="bg-red-500 m-3 pl-7 pr-7" >View All</Button>
                </div>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-[90%]"
            >
               
                <CarouselContent>
                   
                    <CarouselItem className="basis-1/4">
                        <Card className="border-none" >
                            <CardContent>
                                <CardTitle className="flex flex-row justify-between bg-gray-300">
                                    
                                    <div className="flex flex-row ">
                                        <CiHeart className="ml-28 mt-3 size-5 " />
                                        <IoEyeOutline className="ml-8 mt-3 size-5" />
                                    </div>
                                </CardTitle>
                                <CardHeader className="bg-gray-300">
                                    <img src="/1e9f94261b28e16ea21bacb4144473e8.png" alt="Slide 1" style={{ objectFit: "contain", width: "200px", height: "150px" }} />

                                </CardHeader>

                                <CardDescription className="flex flex-col flex-nowrap w-full">
                                    <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> The North Coat</h1>
                                    <p className="size-3 flex-nowrap whitespace-nowrap mt-2" style={{ color: "red" }}>$260 <span style={{ color: "grey", textDecoration: "line-through" }}>$360</span></p>
                                </CardDescription>
                                <CardFooter className="pl-0 mt-2">
                                    <FaStar style={{ color: "yellow" }} />
                                    <FaStar style={{ color: "yellow" }} />
                                    <FaStar style={{ color: "yellow" }} />
                                    <FaStar style={{ color: "yellow" }} />
                                    <FaStar style={{ color: "grey" }} />
                                    <p>(65)</p>
                                </CardFooter>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-1/4"><Card className="border-none" >
                        <CardContent>
                            <CardTitle className="flex flex-row justify-between bg-gray-300">
                                
                                <div className="flex flex-row">
                                    <CiHeart className="ml-28 mt-3 size-5 " />
                                    <IoEyeOutline className="ml-8 mt-3 size-5" />
                                </div>
                            </CardTitle>
                            <CardHeader className="bg-gray-300">
                                <img src="/2722dbdf98f25179d3c0b785988c513d.png" style={{ objectFit: "contain", width: "200px", height: "150px" }} alt="Slide 1" />

                            </CardHeader>

                            <CardDescription className="flex flex-col flex-nowrap w-full">
                                <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> Gucci Duffle Bag</h1>
                                <p className="size-3 flex-nowrap whitespace-nowrap mt-2" style={{ color: "red" }}>$960 <span style={{ color: "grey", textDecoration: "line-through" }}>$1160</span></p>
                            </CardDescription>
                            <CardFooter className="pl-0 mt-2">
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <p>(65)</p>
                            </CardFooter>
                        </CardContent>
                    </Card></CarouselItem>
                    <CarouselItem className="basis-1/4"><Card className="border-none" >
                        <CardContent>
                            <CardTitle className="flex flex-row justify-between bg-gray-300">
                                
                                <div className="flex flex-row">
                                    <CiHeart className="ml-28 mt-3 size-5 " />
                                    <IoEyeOutline className="ml-8 mt-3 size-5" />
                                </div>
                            </CardTitle>
                            <CardHeader className="bg-gray-300">
                                <img src="/c218c97b645d616c8188a4f2e6aaf84b.png" style={{ objectFit: "contain", width: "200px", height: "150px" }} alt="Slide 1" />

                            </CardHeader>

                            <CardDescription className="flex flex-col flex-nowrap w-full">
                                <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> RGB liquid CPU Coller</h1>
                                <p className="size-3 flex-nowrap whitespace-nowrap mt-2" style={{ color: "red" }}>$160 <span style={{ color: "grey", textDecoration: "line-through" }}>$170</span></p>
                            </CardDescription>
                            <CardFooter className="pl-0 mt-2">
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "grey" }} />
                                <FaStar style={{ color: "grey" }} />
                                <p>(65)</p>
                            </CardFooter>
                        </CardContent>
                    </Card></CarouselItem>
                    <CarouselItem className="basis-1/4"><Card className="border-none" >
                        <CardContent>
                            <CardTitle className="flex flex-row justify-between bg-gray-300">
                               
                                <div className="flex flex-row">
                                    <CiHeart className="ml-28 mt-3 size-5 " />
                                    <IoEyeOutline className="ml-8 mt-3 size-5" />
                                </div>
                            </CardTitle>
                            <CardHeader className="bg-gray-300">
                                <img src="/2757d20a14861e2e0ebd4e9889693f59.png" style={{ objectFit: "contain", width: "200px", height: "150px" }} alt="Slide 1" />

                            </CardHeader>

                            <CardDescription className="flex flex-col flex-nowrap w-full">
                                <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> Small BookSelf</h1>
                                <p className="size-3 flex-nowrap whitespace-nowrap mt-2" style={{ color: "red" }}>$360<span style={{ color: "grey", textDecoration: "line-through" }}></span></p>
                            </CardDescription>
                            <CardFooter className="pl-0 mt-2">
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "grey" }} />
                                <p>(65)</p>
                            </CardFooter>
                        </CardContent>
                    </Card></CarouselItem>                    
                </CarouselContent>

               
            </Carousel>
            
        </DivBox>
    )
};
