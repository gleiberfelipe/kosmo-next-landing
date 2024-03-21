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
import { ButtonOne } from "../buttonone/buttonOne";

// Definindo a interface das props
interface CountdownProps {
    targetDate: Date;
}

// Definindo o componente Countdown
export function CarouselSize(){
  

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = e.target as HTMLButtonElement;
        target.style.opacity = "1";
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = e.target as HTMLButtonElement;
        target.style.opacity = "0";
    };

    return (
        <DivBox className="pl-12 w-full">
            <h2>Today s</h2>
            <div className="BoxMaster">
                <div>
                    <h1>Flash Sales</h1>
                </div>
                <div className="BoxChildren">
                    <div className="time">
                        <p>Days</p>
                        <h3>3</h3></div>
                    <div className="time">
                        <p>Hours</p>
                        <h3>23</h3>
                    </div>
                    <div className="time">
                        <p>Minutes</p>
                        <h3>19</h3>
                    </div>
                    <div className="time">
                        <p>Seconds</p>
                        <h3>56</h3>
                    </div>
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
                    <CarouselPrevious />
                    <CarouselItem className="basis-1/4">
                        <Card className="border-none" >
                            <CardContent>
                                <CardTitle className="flex flex-row justify-between bg-gray-300">
                                    <div>
                                        <Button className="bg-red-500 m-3"> -40% </Button>
                                    </div>
                                    <div className="flex flex-row">
                                        <CiHeart className="mr-8 mt-3 size-5" />
                                        <IoEyeOutline className="mr-8 mt-3 size-5" />
                                    </div>
                                </CardTitle>
                                <CardHeader className="bg-gray-300">
                                    <img src="/50752d55f8b60f2aa2923183dadbc135.png" alt="Slide 1" style={{ objectFit: "contain", width: "200px", height: "150px" }} />
                                    <Button className="bg-black" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}> Add To Cart</Button>
                                </CardHeader>

                                <CardDescription className="flex flex-col flex-nowrap w-full">
                                    <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> S-Series Confort Chair</h1>
                                    <p className="size-3 flex-nowrap whitespace-nowrap mt-2" style={{ color: "red" }}>$120 <span style={{ color: "grey", textDecoration: "line-through" }}>$150</span></p>
                                </CardDescription>
                                <CardFooter className="pl-0 mt-2">
                                    <FaStar style={{ color: "yellow" }} />
                                    <FaStar style={{ color: "yellow" }} />
                                    <FaStar style={{ color: "yellow" }} />
                                    <FaStar style={{ color: "yellow" }} />
                                    <FaStar style={{ color: "grey" }} />
                                    <p>(68)</p>
                                </CardFooter>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-1/4"><Card className="border-none" >
                        <CardContent>
                            <CardTitle className="flex flex-row justify-between bg-gray-300">
                                <div>
                                    <Button className="bg-red-500 m-3"> -35% </Button>
                                </div>
                                <div className="flex flex-row">
                                    <CiHeart className="mr-8 mt-3 size-5" />
                                    <IoEyeOutline className="mr-8 mt-3 size-5" />
                                </div>
                            </CardTitle>
                            <CardHeader className="bg-gray-300">
                                <img src="/8cc24eeff489863523b63971c3ff8e4a.png" style={{ objectFit: "contain", width: "200px", height: "150px" }} alt="Slide 1" />
                                <Button className="bg-black" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}> Add To Cart</Button>
                            </CardHeader>

                            <CardDescription className="flex flex-col flex-nowrap w-full">
                                <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> Ak-900 Wired Keyboard</h1>
                                <p className="size-3 flex-nowrap whitespace-nowrap mt-2" style={{ color: "red" }}>$960 <span style={{ color: "grey", textDecoration: "line-through" }}>$1160</span></p>
                            </CardDescription>
                            <CardFooter className="pl-0 mt-2">
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <p>(75)</p>
                            </CardFooter>
                        </CardContent>
                    </Card></CarouselItem>
                    <CarouselItem className="basis-1/4"><Card className="border-none" >
                        <CardContent>
                            <CardTitle className="flex flex-row justify-between bg-gray-300">
                                <div>
                                    <Button className="bg-red-500 m-3"> -30% </Button>
                                </div>
                                <div className="flex flex-row">
                                    <CiHeart className="mr-8 mt-3 size-5" />
                                    <IoEyeOutline className="mr-8 mt-3 size-5" />
                                </div>
                            </CardTitle>
                            <CardHeader className="bg-gray-300">
                                <img src="/db5174aff99bb9337d2dc9598a0b44e4.png" style={{ objectFit: "contain", width: "200px", height: "150px" }} alt="Slide 1" />
                                <Button className="bg-black" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}> Add To Cart</Button>
                            </CardHeader>

                            <CardDescription className="flex flex-col flex-nowrap w-full">
                                <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> IPS LCD Gaming Monitor</h1>
                                <p className="size-3 flex-nowrap whitespace-nowrap mt-2" style={{ color: "red" }}>$370 <span style={{ color: "grey", textDecoration: "line-through" }}>$400</span></p>
                            </CardDescription>
                            <CardFooter className="pl-0 mt-2">
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "grey" }} />
                                <FaStar style={{ color: "grey" }} />
                                <p>(99)</p>
                            </CardFooter>
                        </CardContent>
                    </Card></CarouselItem>
                    <CarouselItem className="basis-1/4"><Card className="border-none" >
                        <CardContent>
                            <CardTitle className="flex flex-row justify-between bg-gray-300">
                                <div>
                                    <Button className="bg-red-500 m-3"> -25% </Button>
                                </div>
                                <div className="flex flex-row">
                                    <CiHeart className="mr-8 mt-3 size-5" />
                                    <IoEyeOutline className="mr-8 mt-3 size-5" />
                                </div>
                            </CardTitle>
                            <CardHeader className="bg-gray-300">
                                <img src="/273c46e1c3dc0a8915c4b031d0345347.png" style={{ objectFit: "contain", width: "200px", height: "150px" }} alt="Slide 1" />
                                <Button className="bg-black" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}> Add To Cart</Button>
                            </CardHeader>

                            <CardDescription className="flex flex-col flex-nowrap w-full">
                                <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> S-Series Confort Chair</h1>
                                <p className="size-3 flex-nowrap whitespace-nowrap mt-2" style={{ color: "red" }}>$375 <span style={{ color: "grey", textDecoration: "line-through" }}>$400</span></p>
                            </CardDescription>
                            <CardFooter className="pl-0 mt-2">
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "grey" }} />
                                <p>(99)</p>
                            </CardFooter>
                        </CardContent>
                    </Card></CarouselItem>
                    <CarouselItem className="basis-1/4"><Card className="border-none" >
                        <CardContent>
                            <CardTitle className="flex flex-row justify-between bg-gray-300">
                                <div>
                                    <Button className="bg-red-500 m-3"> -25% </Button>
                                </div>
                                <div className="flex flex-row">
                                    <CiHeart className="mr-8 mt-3 size-5" />
                                    <IoEyeOutline className="mr-8 mt-3 size-5" />
                                </div>
                            </CardTitle>
                            <CardHeader className="bg-gray-300">
                                <img src="/273c46e1c3dc0a8915c4b031d0345347.png" style={{ objectFit: "contain", width: "200px", height: "150px" }} alt="Slide 1" />
                                <Button className="bg-black" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}> Add To Cart</Button>
                            </CardHeader>

                            <CardDescription className="flex flex-col flex-nowrap w-full">
                                <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> S-Series Confort Chair</h1>
                                <p className="size-3 flex-nowrap whitespace-nowrap mt-2" style={{ color: "red" }}>$375 <span style={{ color: "grey", textDecoration: "line-through" }}>$400</span></p>
                            </CardDescription>
                            <CardFooter className="pl-0 mt-2">
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "grey" }} />
                                <p>(99)</p>
                            </CardFooter>
                        </CardContent>
                    </Card></CarouselItem>
                </CarouselContent>

                <CarouselNext />
            </Carousel>
            <ButtonOne />
        </DivBox>
    )
}
