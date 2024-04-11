import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { DivBox } from "./style";

export function CarouselMobile() {
  return (
    <DivBox className="pl-12 w-full">
    <Carousel className="w-[250px] bg-purple-500 relative left-12">
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
      <CarouselPrevious id="btone" />
      <CarouselNext id="bttwo"/>
    </Carousel>
    </DivBox>
  )
}
