"use client"
import * as React from "react";
import { useEffect, useState } from 'react';
import { DivBox } from "./style";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


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
export function CarouselExplore() {


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
            <h2>Today's</h2>
            <div className="BoxMaster">
                <div>
                    <h1>Flash Sales</h1>
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
                    <CarouselItem className="basis-1/4">
                        <Card className="border-none" >
                            <CardContent>
                                <CardTitle className="flex flex-row justify-between bg-gray-300">
                                    <div>
                                        <Button className="bg-green-600 m-3"> -40% </Button>
                                    </div>
                                    <div className="flex flex-row ">
                                        <CiHeart className="mr-8 mt-3 size-5" />
                                        <IoEyeOutline className="mr-8 mt-3 size-5" />
                                    </div>
                                </CardTitle>
                                <CardHeader className="bg-gray-300">
                                    <img src="/8c99fe72271cf43f5e3566b39ca7c8f4.jpg" alt="Slide 1" style={{ objectFit: "contain", width: "200px", height: "150px" }} />
                                    <Button className="bg-black" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}> Add To Cart</Button>
                                </CardHeader>

                                <CardDescription className="flex flex-col flex-nowrap w-full">
                                    <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> Breed Dry Dog Food</h1>

                                </CardDescription>
                                <CardFooter className="mt-3 flex flex-row flex-nowrap whitespace-nowrap align-middle">
                                    <p className=" size-3 mb-3 ml-0 mr-7" style={{ color: "red" }}>$100</p>
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

                                <div className="flex flex-row m-3 ">
                                    <CiHeart className="ml-28 mt-3 size-5 " />
                                    <IoEyeOutline className="ml-8 mt-3 size-5" />
                                </div>
                            </CardTitle>
                            <CardHeader className="bg-gray-300">
                                <img src="/f0a3d5d144dce622c7338ec5be12908f.png" style={{ objectFit: "contain", width: "200px", height: "150px" }} alt="Slide 1" />
                                <Button className="bg-black" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}> Add To Cart</Button>
                            </CardHeader>

                            <CardDescription className="flex flex-col flex-nowrap w-full">
                                <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> Ak-900 Wired Keyboard</h1>

                            </CardDescription>
                            <CardFooter className="mt-3 flex flex-row flex-nowrap whitespace-nowrap align-middle">
                                <p className=" size-3 mb-3 ml-0 mr-7" style={{ color: "red" }}>$100</p>
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

                                <div className="flex flex-row m-3 ">
                                    <CiHeart className="ml-28 mt-3 size-5 " />
                                    <IoEyeOutline className="ml-8 mt-3 size-5" />
                                </div>
                            </CardTitle>
                            <CardHeader className="bg-gray-300">
                                <img src="/b7b02d10672f6f6147762cf52bfcfc54.png" style={{ objectFit: "contain", width: "200px", height: "150px" }} alt="Slide 1" />
                                <Button className="bg-black" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}> Add To Cart</Button>
                            </CardHeader>

                            <CardDescription className="flex flex-col flex-nowrap w-full">
                                <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> IPS LCD Gaming Monitor</h1>

                            </CardDescription>
                            <CardFooter className="mt-3 flex flex-row flex-nowrap whitespace-nowrap align-middle">
                                <p className=" size-3 mb-3 ml-0 mr-7" style={{ color: "red" }}>$100</p>
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

                                <div className="flex flex-row m-3 ">
                                    <CiHeart className="ml-28 mt-3 size-5 " />
                                    <IoEyeOutline className="ml-8 mt-3 size-5" />
                                </div>
                            </CardTitle>
                            <CardHeader className="bg-gray-300">
                                <img src="/62ea1dfc2d615a5bb054e139a764f306.png" style={{ objectFit: "contain", width: "200px", height: "150px" }} alt="Slide 1" />
                                <Button className="bg-black" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}> Add To Cart</Button>
                            </CardHeader>

                            <CardDescription className="flex flex-col flex-nowrap w-full">
                                <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> S-Series Confort Chair</h1>

                            </CardDescription>
                            <CardFooter className="mt-3 flex flex-row flex-nowrap whitespace-nowrap align-middle">
                                <p className=" size-3 mb-3 ml-0 mr-7" style={{ color: "red" }}>$100</p>
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

                                <div className="flex flex-row m-3 ">
                                    <CiHeart className="ml-28 mt-3 size-5 " />
                                    <IoEyeOutline className="ml-8 mt-3 size-5" />
                                </div>
                            </CardTitle>
                            <CardHeader className="bg-gray-300">
                                <img src="/b7b02d10672f6f6147762cf52bfcfc54.png" style={{ objectFit: "contain", width: "200px", height: "150px" }} alt="Slide 1" />
                                <Button className="bg-black" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}> Add To Cart</Button>
                            </CardHeader>

                            <CardDescription className="flex flex-col flex-nowrap w-full">
                                <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> S-Series Confort Chair</h1>

                            </CardDescription>
                            <CardFooter className="mt-3 flex flex-row flex-nowrap whitespace-nowrap align-middle">
                                <p className=" size-3 mb-3 ml-0 mr-7" style={{ color: "red" }}>$100</p>
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

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-[90%]"
            >
                <CarouselPrevious />
                <CarouselContent>
                    <CarouselItem className="basis-1/4">
                        <Card className="border-none" >
                            <CardContent>
                                <CardTitle className="flex flex-row justify-between bg-gray-300">
                                    <div>
                                        <Button className="bg-green-600 m-3"> -40% </Button>
                                    </div>
                                    <div className="flex flex-row">
                                        <CiHeart className="mr-8 mt-3 size-5" />
                                        <IoEyeOutline className="mr-8 mt-3 size-5" />
                                    </div>
                                </CardTitle>
                                <CardHeader className="bg-gray-300">
                                    <img src="/f805319ddf3897fc9daaf58559542260.png" alt="Slide 1" style={{ objectFit: "contain", width: "200px", height: "150px" }} />
                                    <Button className="bg-black" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}> Add To Cart</Button>
                                </CardHeader>

                                <CardDescription className="flex flex-col flex-nowrap w-full">
                                    <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> S-Series Confort Chair</h1>

                                </CardDescription>
                                <CardFooter className="mt-3 flex flex-row flex-nowrap whitespace-nowrap align-middle">
                                <p className=" size-3 mb-3 ml-0 mr-7" style={{ color: "red" }}>$100</p>
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "grey" }} />
                                <p>(99)</p>
                            </CardFooter>
                                <RadioGroup className="flex flex-row" defaultValue="comfortable">
                                    <div className="flex flex-row items-center space-x-2 bg-red-700">
                                        <RadioGroupItem value="default" id="r1" className="bg-orange-400" />  
                                        {/* <Label htmlFor="r2">Color 1</Label>         */}                              
                                    </div>
                                    <div className="flex flex-row items-center space-x-2">
                                        <RadioGroupItem value="comfortable" id="r2" />
                                        {/* <Label htmlFor="r2"> Color 2</Label>                                         */}
                                    </div>
                                
                                </RadioGroup>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="basis-1/4"><Card className="border-none" >
                        <CardContent>
                            <CardTitle className="flex flex-row justify-between bg-gray-300">
                                <div className="flex flex-row m-3 ">
                                    <CiHeart className="ml-28 mt-3 size-5 " />
                                    <IoEyeOutline className="ml-8 mt-3 size-5" />
                                </div>
                            </CardTitle>
                            <CardHeader className="bg-gray-300">
                                <img src="/884f6fdfc1357634d7d7b09e05755c2f.png" style={{ objectFit: "contain", width: "200px", height: "150px" }} alt="Slide 1" />
                                <Button className="bg-black" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}> Add To Cart</Button>
                            </CardHeader>

                            <CardDescription className="flex flex-col flex-nowrap w-full">
                                <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> Ak-900 Wired Keyboard</h1>

                            </CardDescription>
                            <CardFooter className="mt-3 flex flex-row flex-nowrap whitespace-nowrap align-middle">
                                <p className=" size-3 mb-3 ml-0 mr-7" style={{ color: "red" }}>$100</p>
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <p>(75)</p>
                            </CardFooter>
                            <RadioGroup className="flex flex-row" defaultValue="comfortable">
                                    <div className="flex flex-row items-center space-x-2">
                                        <RadioGroupItem value="default" id="r1" />  
                                        {/* <Label htmlFor="r2">Color 1</Label>         */}                              
                                    </div>
                                    <div className="flex flex-row items-center space-x-2">
                                        <RadioGroupItem value="comfortable" id="r2" />
                                        {/* <Label htmlFor="r2"> Color 2</Label>                                         */}
                                    </div>
                                
                                </RadioGroup>
                        </CardContent>
                    </Card></CarouselItem>
                    <CarouselItem className="basis-1/4"><Card className="border-none" >
                        <CardContent>
                            <CardTitle className="flex flex-row justify-between bg-gray-300">
                                <div>
                                    <Button className="bg-green-600 m-3"> -30% </Button>
                                </div>
                                <div className="flex flex-row ">
                                    <CiHeart className="mr-8 mt-3 size-5" />
                                    <IoEyeOutline className="mr-8 mt-3 size-5" />
                                </div>
                            </CardTitle>
                            <CardHeader className="bg-gray-300">
                                <img src="/65fe639fccc1fe4168fca740ef1f85e7.png" style={{ objectFit: "contain", width: "200px", height: "150px" }} alt="Slide 1" />
                                <Button className="bg-black" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}> Add To Cart</Button>
                            </CardHeader>

                            <CardDescription className="flex flex-col flex-nowrap w-full">
                                <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> IPS LCD Gaming Monitor</h1>

                            </CardDescription>
                            <CardFooter className="mt-3 flex flex-row flex-nowrap whitespace-nowrap align-middle">
                                <p className=" size-3 mb-3 ml-0 mr-7" style={{ color: "red" }}>$100</p>
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "grey" }} />
                                <FaStar style={{ color: "grey" }} />
                                <p>(99)</p>
                            </CardFooter>
                            <RadioGroup className="flex flex-row" defaultValue="comfortable">
                                    <div className="flex flex-row items-center space-x-2">
                                        <RadioGroupItem value="default" id="r1" />  
                                        {/* <Label htmlFor="r2">Color 1</Label>         */}                              
                                    </div>
                                    <div className="flex flex-row items-center space-x-2">
                                        <RadioGroupItem value="comfortable" id="r2" />
                                        {/* <Label htmlFor="r2"> Color 2</Label>                                         */}
                                    </div>
                                
                                </RadioGroup>
                        </CardContent>
                    </Card></CarouselItem>
                    <CarouselItem className="basis-1/4"><Card className="border-none" >
                        <CardContent>
                            <CardTitle className="flex flex-row justify-between bg-gray-300">

                                <div className="flex flex-row m-3 ">
                                    <CiHeart className="ml-28 mt-3 size-5 " />
                                    <IoEyeOutline className="ml-8 mt-3 size-5" />
                                </div>
                            </CardTitle>
                            <CardHeader className="bg-gray-300">
                                <img src="/d6cedd7c8b1073685c5f1be1b50e1ac6.png" style={{ objectFit: "contain", width: "200px", height: "150px" }} alt="Slide 1" />
                                <Button className="bg-black" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}> Add To Cart</Button>
                            </CardHeader>

                            <CardDescription className="flex flex-col flex-nowrap w-full">
                                <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> S-Series Confort Chair</h1>

                            </CardDescription>
                            <CardFooter className="mt-3 flex flex-row flex-nowrap whitespace-nowrap align-middle">
                                <p className=" size-3 mb-3 ml-0 mr-7" style={{ color: "red" }}>$100</p>
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "grey" }} />
                                <p>(99)</p>
                            </CardFooter>
                            <RadioGroup className="flex flex-row" defaultValue="comfortable">
                                    <div className="flex flex-row items-center space-x-2">
                                        <RadioGroupItem value="default" id="r1" />  
                                        {/* <Label htmlFor="r2">Color 1</Label>         */}                              
                                    </div>
                                    <div className="flex flex-row items-center space-x-2">
                                        <RadioGroupItem value="comfortable" id="r2" />
                                        {/* <Label htmlFor="r2"> Color 2</Label>                                         */}
                                    </div>
                                
                                </RadioGroup>
                        </CardContent>
                    </Card></CarouselItem>
                    <CarouselItem className="basis-1/4"><Card className="border-none" >
                        <CardContent>
                            <CardTitle className="flex flex-row justify-between bg-gray-300">

                                <div className="flex flex-row m-3 ">
                                    <CiHeart className="ml-28 mt-3 size-5 " />
                                    <IoEyeOutline className="ml-8 mt-3 size-5" />
                                </div>
                            </CardTitle>
                            <CardHeader className="bg-gray-300">
                                <img src="/65fe639fccc1fe4168fca740ef1f85e7.png" style={{ objectFit: "contain", width: "200px", height: "150px" }} alt="Slide 1" />
                                <Button className="bg-black" style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}> Add To Cart</Button>
                            </CardHeader>

                            <CardDescription className="flex flex-col flex-nowrap w-full">
                                <h1 className="size-5 font-bold flex-nowrap whitespace-nowrap mt-2"> S-Series Confort Chair</h1>

                            </CardDescription>
                            <CardFooter className="mt-3 flex flex-row flex-nowrap whitespace-nowrap align-middle">
                                <p className=" size-3 mb-3 ml-0 mr-7" style={{ color: "red" }}>$100</p>
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "grey" }} />
                                <p>(99)</p>
                            </CardFooter>
                            <RadioGroup className="flex flex-row" defaultValue="comfortable">
                                    <div className="flex flex-row items-center space-x-2">
                                        <RadioGroupItem value="default" id="r1" />  
                                        {/* <Label htmlFor="r2">Color 1</Label>         */}                              
                                    </div>
                                    <div className="flex flex-row items-center space-x-2">
                                        <RadioGroupItem value="comfortable" id="r2" />
                                        {/* <Label htmlFor="r2"> Color 2</Label>                                         */}
                                    </div>
                                
                                </RadioGroup>
                        </CardContent>
                    </Card></CarouselItem>
                </CarouselContent>

                <CarouselNext />
            </Carousel>

            <ButtonOne />
        </DivBox>
    )
}
